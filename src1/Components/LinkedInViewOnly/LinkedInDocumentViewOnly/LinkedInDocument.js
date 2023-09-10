import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {
  create_user_linkedIn_Summary,
  update_user_linkedIn_Summary,
} from '../../../API/index';

import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

// prettier-ignore
import LinkedInEditor from '../../LinkedIn/LinkedInEditor';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import moment from 'moment';

// prettier-ignore
export default function CoverLetterDocument({ share, summaryId, saveLinkedInData, pageDocumentData, profileText, setProfileText, document_name, setDocument_name, setShowChangeTemplateSidebar,  showChangeTemplateSidebar, linkedInHeadingData, linkedInData, pageBorderColor, pageBorderWidth, pageBorderStyle, borderedPage, pageUpdatableData, pageLayout, lineHeight, docummentMargin, docummentDateFormat, documentHeadingTextStyle, documentBodyTextStyle, documentBodyTextSize, }) {

  const { id } = useParams()
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');
  const pdfExportComponent = useRef(null);
// // console.log(id ? id : 'No ID')
  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  
  // const [profileText, setProfileText] = useState('');
  // const [headingText, setHeadingText] = useState('');

  // console.log(linkedInData && linkedInData.template_profile_data )

  
  useEffect(() => {
    localStorage.removeItem('downloadData')
  }, [])

  useEffect(() => {

    setPdfPageSize(
      pageLayout === 'A4'
        ? ['21cm', '28cm']
        : pageLayout === 'Letter'
        ? ['22cm', '28cm']
        : pageLayout === 'Legal'
        ? ['22cm', '36cm']
        : 'A4'
    );
  }, [pageUpdatableData, pageLayout ]);

  const handleDownload = (e) => {
    pdfExportComponent.current && pdfExportComponent.current.save();
    setDownloadDropdown(!downloadDropdown);
    // // console.log('clicked')
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const UpdateDocument = () => {
    setLoading(true);
    update_user_linkedIn_Summary(summaryId, saveLinkedInData, config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setShowToastText('Saved Successfully!');
        setLoading(false);
        setShowSaveToast(true);
      } else {
        console.log(res);
        // if (
        //   res === 'Resume validation failed: documentName: must be unique'
        // ) {
        // setShowToastText(`This will overwrite the existing Resume ${saveBuilderData.documentName}`);
        setShowToastText(`Something went wrong. Try Again`);
        setLoading(false);
        setShowSaveToast(true);
        // }
      }
    });
  };
  
  const updateData_Modal = (documentName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                This will overwrite the existing LinkedIn Summary {' '}
                <span style={{ fontWeight: 'bold' }}>{documentName}</span> Do
                you want to continue?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  UpdateDocument();
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  

  const [updatedTextData, setUpdatedTextData] = useState('');
 
  const savePageData = () => {
    !summaryId && setLoading(true);
    localStorage.setItem('pageData', pageDocumentData);
    // console.log(pageDocumentData);
    console.log(summaryId ? 'Updating it ' : 'Creating New');
    // const saveData = {
    //   userId: userId,
    //   documentName: document_name,
    //   documentData: pageDocumentData,
    // };

    summaryId
      ? updateData_Modal(saveLinkedInData.documentName)
      : 
      create_user_linkedIn_Summary(saveLinkedInData, config).then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
          } else {
            // console.log(res);
            if (res?.includes(saveLinkedInData.documentName)) {
              setShowToastText(
                `Resume "${saveLinkedInData.documentName}" already exists`
              );
              setLoading(false);
              // updateData_Modal(saveBuilderData.documentName);
              setShowSaveToast(true);
            }
          }
        });
  };
  const downloadContent = (name) => {
    // setUpdatedTextData('');

    // console.log(updatedTextData);

    var atag = document.createElement('a');
    var file = new Blob([updatedTextData], { type: 'text/plain' });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
    setDownloadDropdown(!downloadDropdown);
  };

  const HandlePageUpdatableData = () => {
    return (
      <div style={{ position: 'relative' }}>
        <div>
          <PDFExport
            ref={pdfExportComponent}
            fileName={document_name}
            forcePageBreak={pageUpdatableData.length > 1 ? '#break_page' : ''}
          >
            {pageUpdatableData.map((pageData, index) => (
              <document ref={pageData.wholePageMainRef} key={'document'+index}>
                {/* <div className={`builder_main_resume linkedInProfileData 
                                ${pageLayout === 'A4' ? 'a4' : 
                                  pageLayout === 'Letter' ? 'letter' : 
                                  pageLayout === 'Legal' ? 'legal' : null }`} style={{ marginBottom: '1rem', padding: '1rem 1rem', lineHeight: '1', height: 'auto' }}>
                  <div className='headlineLabel'><span>Headline</span></div>
                {linkedInHeadingData ? (
                      <LinkedInEditor 
                      wrapperClassName='wrapper'
                      editorClassName='editor'
                      toolbarClassName='toolbar '
                      markdownData={linkedInHeadingData && linkedInHeadingData.heading_data }
                      setProfileText={setHeadingText} />
                    ) : null}
                </div> */}
                <div
                  id='main_resume'
                  className={`builder_main_resume linkedInProfileData ${pageLayout === 'A4' ? 'a4' : pageLayout === 'Letter' ? 'letter'
                                : pageLayout === 'Legal' ? 'legal' : null }`} // prettier-ignore
                  style={{
                    lineHeight: lineHeight,
                    height: 'auto',
                    minHeight: '400px',
                    padding: '1rem',
                    // minHeight: '29.7cm',
                    paddingBottom: '0rem',
                    border: borderedPage ? '1px solid' : null,
                    borderWidth: borderedPage ? pageBorderWidth + 'px' : null,
                    borderStyle: borderedPage ? pageBorderStyle : null,
                    borderColor: borderedPage ? pageBorderColor : null,
                  }}
                >
                  <div className='profileDataLabel'><span>LinkedIn Summary</span></div>
                  <div className='builderEditorWrapper'>
                    {linkedInData ? (
                      <LinkedInEditor readOnly={true}
                      wrapperClassName='wrapper'
                      editorClassName='editor'
                      toolbarClassName='toolbar '
                      markdownData={linkedInData && linkedInData.template_profile_data }
                      setProfileText={setProfileText} />
                    ) : id ? (<Skeleton />) : (
                      <div
                          onClick={() => setShowChangeTemplateSidebar(!showChangeTemplateSidebar)}
                          style={{ cursor: 'pointer' }}
                          className='add_section'
                        >
                          <div className='add_icon'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
                        </div>
                    )}
                  </div>
                </div>
                {index < pageUpdatableData.length - 1 ? (
                  <p id='break_page'></p>
                ) : null}
              </document>
            ))}
          </PDFExport>
        </div>
      </div>
    );
  };

  useEffect(() => {
    HandlePageUpdatableData()
  }, [linkedInData])
  return (
    <form onSubmit={(e) => {e.preventDefault();savePageData();}} style={{ minHeight: '100vh' }} className='builder_main'>
    {loading && (
      <div className='builder_loaderWrapper'>
        <ThreeDots wrapperClass='builder_loader' />
      </div>
    )}
      <ToastContainer className='p-3 save_toast' position={'top-center'}>
        <Toast
          onClose={() => setShowSaveToast(false)}
          show={showSaveToast}
          delay={3000}
          autohide
        >
          <Toast.Body>{showToastText}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div
        style={{ display: downloadDropdown ? null : 'none' }}
        onClick={() => setDownloadDropdown(!downloadDropdown)}
        className='downloadDropdownBG'
      ></div>
      <div className={`document_name_section `}> 
      {share !== 'share' && (
      <div className='document_save_viewOnly document_save'>
          <div
            className='document_save_div'
            onClick={() => setDownloadDropdown(!downloadDropdown)}
          >
            <svg
              className='download'
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <g>
                <rect fill='none' height='24' width='24' />
              </g>
              <g>
                <path d='M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z' />
              </g>
            </svg>
          </div>
          Download LinkedIn Summary
          <div
            style={{ display: downloadDropdown ? null : 'none' }}
            className='downloadDropdown'
          >
            <span onClick={handleDownload}>PDF</span>
            <span
              onClick={() => downloadContent(document_name)} //downloadTextData
            >
              Text
            </span>
          </div>
        </div>
 )}
 
      </div>
<div className='builderViewWrapper'>
        <div className='builderViewBlocker'></div>
        
      <div className='builderViewWrapper'>
        <div className='builderViewBlocker'></div>
        {HandlePageUpdatableData()}
      </div>
      </div>
    </form>
  );
}
