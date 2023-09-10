import React, { useState, useEffect, useRef } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { create_resume, update_resume } from '../../../API/index';

import { save } from 'save-file';

// import fs from 'fs';
import { PDFExport } from '@progress/kendo-react-pdf';

import HTMLtoDOCX from 'html-to-docx';

import BlankTemplate from '../../BlankTemplate/BlankTemplate';
import {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
  Template9,
  Template10,
  Template11,
  Template12,
  Template13,
  Template14,
  Template15,
  Template16,
  Template17,
  Template18,
  Template19,
  Template20,
  Template21,
  Template22,
  Template23,
  Template24,
  Template25,
  Template26,
  Template27,
  Template28,
  Template29,
  Template30,
} from '../../Templates';

import {
  ExecutiveTemplate1,
  ExecutiveTemplate2,
  ExecutiveTemplate3,
  ExecutiveTemplate4,
  ExecutiveTemplate5,
  ExecutiveTemplate6,
  ExecutiveTemplate7,
  ExecutiveTemplate8,
  ExecutiveTemplate9,
  ExecutiveTemplate10,
} from '../../ExecutiveTemplates';

import moment from 'moment';

export default function BuilderDocument({
  isSubscriptionExpired,
  share,
  showBuilderButton,
  readOnly,
  resumeId,
  saveBuilderData,
  pageDocumentData,
  document_name,
  setDocument_name,
  templateName,
  templateDataSelector,
  addSectionModal,
  addSectionModalBG,
  pageBorderColor,
  pageBorderWidth,
  pageBorderStyle,
  borderedPage,
  headingTextStyleConditions,
  bodyTextStyleConditions,
  headingTextSizeConditions,
  bodyTextSizeConditions,
  mainPanelBgColor,
  sidePanelTextColor,
  sidePanelBgColor,
  pageUpdatableData,
  pageLayout,
  lineHeight,
  docummentMargin,
  docummentDateFormat,
  documentHeadingTextStyle,
  documentBodyTextStyle,
  documentBodyTextSize,
}) {
  const pdfExportComponent = useRef(null);
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');

  // // console.log(JSON.stringify(templateDataSelector));

  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const documentData =
    docummentDateFormat === '1 / 22'
      ? moment().format('M / YY')
      : docummentDateFormat === '01 / 22'
      ? moment().format('MM / YY')
      : docummentDateFormat === '01 / 2022'
      ? moment().format('MM / YYYY')
      : docummentDateFormat === 'Jan 2022'
      ? moment().format('MMM YYYY')
      : docummentDateFormat === 'January 2022'
      ? moment().format('MMMM YYYY')
      : null;

  useEffect(() => {
    localStorage.removeItem('downloadData');
  }, []);
  // // console.log( document_name)
  useEffect(() => {
    HandlePageUpdatableData();

    setPdfPageSize(
      pageLayout === 'A4'
        ? ['21cm', '28cm']
        : pageLayout === 'Letter'
        ? ['22cm', '28cm']
        : pageLayout === 'Legal'
        ? ['22cm', '36cm']
        : 'A4'
    );
  }, [pageUpdatableData, pageLayout]);

  const handleDownload = (e) => {
    // pdfExportComponent.current && pdfExportComponent.current.save();
    setDownloadDropdown(!downloadDropdown);
    const savePdf = pdfExportComponent?.current.save();
    console.log(savePdf);
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const UpdateResume = () => {
    setLoading(true);
    update_resume(resumeId, saveBuilderData, config).then((res) => {
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
                This will overwrite the existing Resume{' '}
                <span style={{ fontWeight: 'bold' }}>{documentName}</span> Do
                you want to continue?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  UpdateResume();
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
    !resumeId && setLoading(true);
    localStorage.setItem('pageData', pageDocumentData);
    // console.log(pageDocumentData);
    console.log(resumeId ? 'Updating it ' : 'Creating New');
    // const saveData = {
    //   userId: userId,
    //   documentName: document_name,
    //   documentData: pageDocumentData,
    // };

    resumeId
      ? updateData_Modal(saveBuilderData.documentName)
      : // update_resume(resumeId, saveBuilderData, config).then((res) => {
        //     if (res?.status === 200 || res?.status === 304) {
        //       setShowToastText('Saved Successfully!');
        //       setLoading(false);
        //       setShowSaveToast(true);
        //     } else {
        //       console.log(res);
        //       // if (
        //       //   res === 'Resume validation failed: documentName: must be unique'
        //       // ) {
        //       // setShowToastText(`This will overwrite the existing Resume ${saveBuilderData.documentName}`);
        //       setShowToastText(`Something went wrong. Try Again`);
        //       setLoading(false);
        //       setShowSaveToast(true);
        //       // }
        //     }
        //   })
        create_resume(saveBuilderData, config).then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
          } else {
            // console.log(res);
            if (res?.includes(saveBuilderData.documentName)) {
              setShowToastText(
                `Resume "${saveBuilderData.documentName}" already exists`
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

  // // console.log(pageUpdatableData);

  const HandlePageUpdatableData = () => {
    return (
      <div>
        <PDFExport
          ref={pdfExportComponent}
          fileName={document_name}
          forcePageBreak={pageUpdatableData?.length > 1 ? '#break_page' : ''}
        >
          {pageUpdatableData?.map((pageData, index) => (
            <document>
              <div
                id='main_resume'
                className={`builder_main_resume 
                          ${
                            pageLayout === 'A4'
                              ? 'a4'
                              : pageLayout === 'Letter'
                              ? 'letter'
                              : pageLayout === 'Legal'
                              ? 'legal'
                              : null
                          }
                        `}
                style={{
                  lineHeight: lineHeight,
                  border: borderedPage ? '1px solid' : null,
                  borderWidth: borderedPage ? pageBorderWidth + 'px' : null,
                  borderStyle: borderedPage ? pageBorderStyle : null,
                  borderColor: borderedPage ? pageBorderColor : null,
                }}
              >
                <div
                  className={`${
                    documentHeadingTextStyle === 'Open Sans'
                      ? 'open_Sans-h '
                      : documentHeadingTextStyle === 'Ubuntu'
                      ? 'ubuntu-h '
                      : documentHeadingTextStyle === 'Georama'
                      ? 'georama-h '
                      : documentHeadingTextStyle === 'Karla'
                      ? 'karla-h '
                      : documentHeadingTextStyle === 'Raleway'
                      ? 'raleway-h '
                      : documentHeadingTextStyle === 'Oswald'
                      ? 'oswald-h'
                      : documentHeadingTextStyle === 'Montserrat'
                      ? 'montserrat-h '
                      : documentHeadingTextStyle === 'Lato'
                      ? 'lato-h '
                      : documentHeadingTextStyle === 'Poppins'
                      ? 'poppins-h '
                      : documentHeadingTextStyle === 'Roboto'
                      ? 'roboto-h '
                      : null
                  } ${
                    documentBodyTextStyle === 'Open Sans'
                      ? 'open_Sans-p '
                      : documentBodyTextStyle === 'Ubuntu'
                      ? 'ubuntu-p '
                      : documentBodyTextStyle === 'Georama'
                      ? 'georama-p '
                      : documentBodyTextStyle === 'Karla'
                      ? 'karla-p '
                      : documentBodyTextStyle === 'Raleway'
                      ? 'raleway-p '
                      : documentBodyTextStyle === 'Oswald'
                      ? 'oswald-p '
                      : documentBodyTextStyle === 'Montserrat'
                      ? 'montserrat-p '
                      : documentBodyTextStyle === 'Lato'
                      ? 'lato-p '
                      : documentBodyTextStyle === 'Poppins'
                      ? 'poppins-p '
                      : documentBodyTextStyle === 'Roboto'
                      ? 'roboto-p '
                      : null
                  } ${
                    documentBodyTextSize === 'Very Small'
                      ? 'verySmall'
                      : documentBodyTextSize === 'Small'
                      ? 'small'
                      : documentBodyTextSize === 'Medium'
                      ? 'medium'
                      : documentBodyTextSize === 'Large'
                      ? 'large'
                      : null
                  }`}
                  id='addElement'
                ></div>

                <div
                  ref={pageData?.wholePageMainRef}
                  className='builderEditorWrapper'
                >
                  {pageData?.template === 'blankTemplate' ? (
                    <div ref={pageData?.rightMainRef}>
                      {pageData?.dataUpdatableRight.length === 0 ? (
                        <div
                          onClick={() => {
                            addSectionModal.current.style.display = 'flex'; // modal visible
                            addSectionModalBG.current.style.display = 'flex'; // modal bg visible
                            // body[0].style.overflow = 'hidden'
                          }}
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
                          <div>Add Section Here</div>
                        </div>
                      ) : (
                        <BlankTemplate
                          readOnly={readOnly}
                          headingTextStyleConditions={
                            headingTextStyleConditions
                          }
                          bodyTextStyleConditions={bodyTextStyleConditions}
                          headingTextSizeConditions={headingTextSizeConditions}
                          bodyTextSizeConditions={bodyTextSizeConditions}
                          sidePanelTextColor={sidePanelTextColor}
                          sidePanelBgColor={sidePanelBgColor}
                          page={pageUpdatableData[index]?.page}
                          rightMainRef={pageData?.rightMainRef}
                          setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                          dataUpdatableLeft={pageData?.dataUpdatableLeft}
                          dataUpdatableRight={pageData?.dataUpdatableRight}
                          setDataUpdatableRight={
                            pageData?.setDataUpdatableRight
                          }
                          docummentMargin={docummentMargin}
                          documentHeadingTextStyle={documentHeadingTextStyle}
                          documentBodyTextStyle={documentBodyTextStyle}
                          documentBodyTextSize={documentBodyTextSize}
                        />
                      )}
                    </div>
                  ) : pageData?.template === 'template_1' ? (
                    <Template1
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_2' ? (
                    <Template2
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_3' ? (
                    <Template3
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_4' ? (
                    <Template4
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_5' ? (
                    <Template5
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_6' ? (
                    <Template6
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_7' ? (
                    <Template7
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_8' ? (
                    <Template8
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_9' ? (
                    <Template9
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_10' ? (
                    <Template10
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_11' ? (
                    <Template11
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_12' ? (
                    <Template12
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_13' ? (
                    <Template13
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_14' ? (
                    <Template14
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_15' ? (
                    <Template15
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_16' ? (
                    <Template16
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_17' ? (
                    <Template17
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_18' ? (
                    <Template18
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_19' ? (
                    <Template19
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_20' ? (
                    <Template20
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_21' ? (
                    <Template21
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_22' ? (
                    <Template22
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_23' ? (
                    <Template23
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_24' ? (
                    <Template24
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_25' ? (
                    <Template25
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_26' ? (
                    <Template26
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_27' ? (
                    <Template27
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_28' ? (
                    <Template28
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_29' ? (
                    <Template29
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_30' ? (
                    <Template30
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_1' ? (
                    <ExecutiveTemplate1
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_2' ? (
                    <ExecutiveTemplate2
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_3' ? (
                    <ExecutiveTemplate3
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_4' ? (
                    <ExecutiveTemplate4
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_5' ? (
                    <ExecutiveTemplate5
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_6' ? (
                    <ExecutiveTemplate6
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_7' ? (
                    <ExecutiveTemplate7
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_8' ? (
                    <ExecutiveTemplate8
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_9' ? (
                    <ExecutiveTemplate9
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'executiveTemplate_10' ? (
                    <ExecutiveTemplate10
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : null}
                  {/* <BlankTemplate sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index]?.page} rightMainRef={pageData?.rightMainRef} setDataUpdatableLeft={pageData?.setDataUpdatableLeft} dataUpdatableLeft={pageData?.dataUpdatableLeft} dataUpdatableRight={pageData?.dataUpdatableRight} setDataUpdatableRight={pageData?.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
                  {/* <Template2 mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index]?.page} rightMainRef={pageData?.rightMainRef} setDataUpdatableLeft={pageData?.setDataUpdatableLeft} dataUpdatableLeft={pageData?.dataUpdatableLeft} dataUpdatableRight={pageData?.dataUpdatableRight} setDataUpdatableRight={pageData?.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
                </div>
              </div>
              {/* <p id='break_page'></p> */}
              {index < pageUpdatableData?.length - 1 ? (
                <p id='break_page'></p>
              ) : null}
            </document>
          ))}
        </PDFExport>
      </div>
    );
  };

  const htmlString = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <div>
            <p>Taken from wikipedia</p>
            <img
                src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                alt="Red dot"
            />
        </div>
        <div>
            <h1>This is heading 1</h1>
            <p>Content</p>
            <h2>This is heading 2</h2>
            <p>Content</p>
            <h3>This is heading 3</h3>
            <p>Content</p>
            <h4>This is heading 4</h4>
            <p>Content</p>
            <h5>This is heading 5</h5>
            <p>Content</p>
            <h6>This is heading 6</h6>
            <p>Content</p>
        </div>
        <p>
            <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </strong>
            <i>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</i>
            <u>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</u>and more recently with desktop publishing software
            <span style="color: hsl(0, 75%, 60%);"> like Aldus PageMaker </span>including versions of Lorem Ipsum.
            <span style="background-color: hsl(0, 75%, 60%);">Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <blockquote>
            For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
        </blockquote>
        <p>
            <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
            </strong>
        </p>
        <ul style="list-style-type: circle;">
            <li>Unordered list element</li>
        </ul>
        <br>
        <ol style="list-style-type: decimal;">
            <li>Ordered list element</li>
        </ol>
        <div class="page-break" style="page-break-after: always"></div>
        <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/Coffee">
                    <strong>
                        <u>Coffee</u>
                    </strong>
                </a>
            </li>
            <li>Tea
                <ol>
                    <li>Black tea
                        <ol>
                            <li>Srilankan <strong>Tea</strong>
                                <ul>
                                    <li>Uva <b>Tea</b></li>
                                </ul>
                            </li>
                            <li>Assam Tea</li>
                        </ol>
                    </li>
                    <li>Green tea</li>
                </ol>
            </li>
            <li>Milk
                <ol>
                    <li>Cow Milk</li>
                    <li>Soy Milk</li>
                </ol>
            </li>
        </ul>
        <br>
        <table>
            <tr>
                <th>Country</th>
                <th>Capital</th>
            </tr>
            <tr>
                <td>India</td>
                <td>New Delhi</td>
            </tr>
            <tr>
                <td>United States of America</td>
                <td>Washington DC</td>
            </tr>
        </table>
    </body>
</html>`;

  const handleWordDownload = async () => {
    // render(<TestRedocx />, `${__dirname}/example.docx`)

    // // console.log(reactToString)

    const fileBuffer = await HTMLtoDOCX(htmlString, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });

    // console.log(fileBuffer);

    await save(fileBuffer, 'test.docx');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        savePageData();
      }}
      className='builder_main'
    >
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
          <Toast.Body>
            {showToastText}
            {/* Saved Successfully! */}
          </Toast.Body>
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
            Download Resume
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
