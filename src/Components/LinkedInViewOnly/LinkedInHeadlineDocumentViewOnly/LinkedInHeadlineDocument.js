import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {
  create_user_linkedIn_Headline,
  update_user_linkedIn_Headline,
} from '../../../API/index';

import { PDFExport } from '@progress/kendo-react-pdf';

// prettier-ignore
import LinkedInEditor from '../../LinkedIn/LinkedInEditor';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import moment from 'moment';

// prettier-ignore
export default function CoverLetterHeadlineDocument({ share, headlineId, saveLinkedInData, pageDocumentData, headingText, setHeadingText, document_name, setDocument_name, setShowChangeCategorySidebar, showChangeCategorySidebar, linkedInHeadingData, linkedInData, pageBorderColor, pageBorderWidth, pageBorderStyle, borderedPage, pageUpdatableData, pageLayout, lineHeight, docummentMargin, docummentDateFormat, documentHeadingTextStyle, documentBodyTextStyle, documentBodyTextSize, }) {

  const {headingId} = useParams() 
  const jwtToken = localStorage.getItem('jwtToken');
  // console.log(headingText)
  const pdfExportComponent = useRef(null);

  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  
  // const [profileText, setProfileText] = useState('');
  // const [headingText, setHeadingText] = useState('');
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
   
  

  const [updatedTextData, setUpdatedTextData] = useState('');

 
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
                <div className={`builder_main_resume linkedInProfileData 
                                ${pageLayout === 'A4' ? 'a4' : 
                                  pageLayout === 'Letter' ? 'letter' : 
                                  pageLayout === 'Legal' ? 'legal' : null }`} style={{ minHeight: '300px',marginBottom: '1rem', padding: '1rem 1rem', lineHeight: '1', height: 'auto' }}>
                  <div className='headlineLabel'><span>LinkedIn Headline</span></div>
                {linkedInHeadingData ? (
                      // headlineId ? (<BuilderEditor readOnly={readOnly} 
                      // wrapperClassName='wrapper'
                      // editorClassName='editor'
                      // toolbarClassName='toolbar '
                      // content={linkedInHeadingData && linkedInHeadingData.heading_data }
                      // setEditorData={setHeadingText} />) : (
                      <LinkedInEditor readOnly={true}
                      wrapperClassName='wrapper'
                      editorClassName='editor'
                      toolbarClassName='toolbar '
                      markdownData={linkedInHeadingData && linkedInHeadingData.heading_data }
                      setProfileText={setHeadingText} />
                      // )
                    ) : headingId && headingId!=='edit' ? (<Skeleton />) : (
                      <div
                          onClick={() => setShowChangeCategorySidebar(!showChangeCategorySidebar)}
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
                    {/* ) : (<Skeleton />)} */}
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
    <form style={{ minHeight: '100vh' }} className='builder_main'>
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
          Download LinkedIn Headline
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
        {HandlePageUpdatableData()}
      </div>
    </form>
  );
}
