import React, { useState, useEffect, useRef } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { create_cover_letter, update_cover_letter } from '../../API/index';

import { PDFExport } from '@progress/kendo-react-pdf';

// prettier-ignore
import { CoverLetter1, CoverLetter2, CoverLetter3, CoverLetter4, CoverLetter5, 
          CoverLetter6,CoverLetter7, CoverLetter8, CoverLetter9, CoverLetter10, 
          CoverLetter11, CoverLetter12, CoverLetter13, CoverLetter14, CoverLetter15, 
          CoverLetter16, CoverLetter17, CoverLetter18, CoverLetter19, CoverLetter20, 
          CoverLetter21, CoverLetter22, CoverLetter23, CoverLetter24, CoverLetter25, 
          CoverLetter26, CoverLetter27, CoverLetter28, CoverLetter29, CoverLetter30, 
          CoverLetter31, CoverLetter32, CoverLetter33, CoverLetter34, CoverLetter35,
          CoverLetter36, CoverLetter37, CoverLetter38, CoverLetter39, CoverLetter40 } from '../CoverLetters';

import ProTip from '../ProTip/ProTip';
// import { protipData } from '../../helpers/protipsData';

import ProTipData from '../../helpers/protipDataForDesign';

import moment from 'moment';

// prettier-ignore
export default function CoverLetterDocument({ share, readOnly, coverLetterId, saveCoverLetterData, pageDocumentData, document_name, setDocument_name, chosenCategory, setChosenCategory, chosenDesign, setChosenDesign, addSectionModal, addSectionModalBG, pageBorderColor, pageBorderWidth, pageBorderStyle, borderedPage, headingTextStyleConditions, bodyTextStyleConditions, headingTextSizeConditions, bodyTextSizeConditions, mainPanelBgColor, sidePanelTextColor, sidePanelBgColor, pageUpdatableData, pageLayout, lineHeight, docummentMargin, docummentDateFormat, documentHeadingTextStyle, documentBodyTextStyle, documentBodyTextSize, }) {
  const { returnCategory } = ProTipData(chosenCategory, chosenDesign);
  const pdfExportComponent = useRef(null);
  const jwtToken = localStorage.getItem('jwtToken');

  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
console.log(share)
  
  useEffect(() => {
    localStorage.removeItem('downloadData')
  }, [])
  
  
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
    pdfExportComponent.current && pdfExportComponent.current.save();
    setDownloadDropdown(!downloadDropdown);
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const UpdateCoverLetter = () => {
    setLoading(true);
    update_cover_letter(coverLetterId, saveCoverLetterData, config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setShowToastText('Saved Successfully!');
        setLoading(false);
        setShowSaveToast(true);
      } else {
        console.log(res);
        // if (
        //   res === 'Resume validation failed: documentName: must be unique'
        // ) {
          // setShowToastText(`This will overwrite the existing Cover Letter ${saveCoverLetterData.documentName}`);
        setShowToastText(`Something went wrong. Try Again`);
        setLoading(false);
          setShowSaveToast(true);
        // }
      }
    })
  }

  const updateData_Modal = (documentName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                This will overwrite the existing Cover Letter{' '}
                <span style={{ fontWeight: 'bold' }}>{documentName}</span> Do
                you want to continue?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  UpdateCoverLetter();
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
    !coverLetterId && setLoading(true);
    // const pageData = JSON.stringify({
    //   document_name,
    //   date: documentData,
    //   templateName,
    //   pageEditorData: templateDataSelector,
    // });
    localStorage.setItem('pageData', pageDocumentData);
    
    console.log(coverLetterId ? 'Updating it ' : 'Creating New');
    coverLetterId
      ? updateData_Modal(saveCoverLetterData.documentName)
      // update_cover_letter(coverLetterId, saveCoverLetterData, config).then((res) => {
      //     if (res?.status === 200 || res?.status === 304) {
      //       setShowToastText('Saved Successfully!');
      //       setLoading(false);
      //       setShowSaveToast(true);
      //     } else {
      //       console.log(res);
      //       // if (
      //       //   res === 'Resume validation failed: documentName: must be unique'
      //       // ) {
      //         // setShowToastText(`This will overwrite the existing Cover Letter ${saveCoverLetterData.documentName}`);
      //       setShowToastText(`Something went wrong. Try Again`);
      //       setLoading(false);
      //         setShowSaveToast(true);
      //       // }
      //     }
      //   })
      : create_cover_letter(saveCoverLetterData, config).then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            setLoading(false);
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
          } else {
            console.log(res?.includes(saveCoverLetterData.documentName));
            if (res?.includes(saveCoverLetterData.documentName)) {
              setShowToastText(
                `Cover Letter "${saveCoverLetterData.documentName}" already exists`
              );
              setLoading(false);
              // updateData_Modal(saveCoverLetterData.documentName);
              setShowSaveToast(true);
            }
          }
        });
  };
  const downloadContent = (name) => {
    // setUpdatedTextData('');
    var atag = document.createElement('a');
    var file = new Blob([updatedTextData], { type: 'text/plain' });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
    setDownloadDropdown(!downloadDropdown);
  };

  // // // console.log(downloadTextData);
  // pageUpdatableData.map((pageData, index) =>
  //   // console.log(JSON.stringify(pageData.rightMainRef.current.innerHTML))
  // );

  const HandlePageUpdatableData = () => {
    return (
      <div style={{ position: 'relative' }}>
        {returnCategory.map((pro_tip) => (
          <ProTip
            className={pro_tip.class}
            heading={pro_tip.heading}
            headingColor={pro_tip.headingColor}
            description={pro_tip.description}
            descriptionColor={pro_tip.descriptionColor}
            top={pro_tip.top}
            baseHeadingValue={pro_tip.baseHeadingValue}
            height={pro_tip.height}
            proTipOnLeft={pro_tip.left}
          />
        ))}
        <div>
          <PDFExport
            ref={pdfExportComponent}
            fileName={document_name}
            forcePageBreak={pageUpdatableData.length > 1 ? '#break_page' : ''}
          >
            {pageUpdatableData.map((pageData, index) => (
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
                    height: 'auto',
                    minHeight: '29.7cm',
                    paddingBottom: '0rem',
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
                    ref={pageData.wholePageMainRef}
                    className='builderEditorWrapper'
                  >
                    {pageData.design === 'blankTemplate' ? (
                      <div ref={pageData.rightMainRef}>
                        {pageData.dataUpdatableRight.length === 0 ? (
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
                          <div>Hello balnk Template</div>
                        )}
                      </div>
                    ) : pageData.design === 'design_1' ? (
                      <CoverLetter1 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_2' ? (
                      <CoverLetter2 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_3' ? (
                      <CoverLetter3 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_4' ? (
                      <CoverLetter4 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_5' ? (
                      <CoverLetter5 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_6' ? (
                      <CoverLetter6 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_7' ? (
                      <CoverLetter7 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_8' ? (
                      <CoverLetter8 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_9' ? (
                      <CoverLetter9 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_10' ? (
                      <CoverLetter10 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_11' ? (
                      <CoverLetter11 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_12' ? (
                      <CoverLetter12 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_13' ? (
                      <CoverLetter13 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_14' ? (
                      <CoverLetter14 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_15' ? (
                      <CoverLetter15 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_16' ? (
                      <CoverLetter16 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_17' ? (
                      <CoverLetter17 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_18' ? (
                      <CoverLetter18 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_19' ? (
                      <CoverLetter19 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_20' ? (
                      <CoverLetter20 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_21' ? (
                      <CoverLetter21 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_22' ? (
                      <CoverLetter22 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_23' ? (
                      <CoverLetter23 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_24' ? (
                      <CoverLetter24 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_25' ? (
                      <CoverLetter25 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_26' ? (
                      <CoverLetter26 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_27' ? (
                      <CoverLetter27 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_28' ? (
                      <CoverLetter28 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_29' ? (
                      <CoverLetter29 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_30' ? (
                      <CoverLetter30 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_31' ? (
                      <CoverLetter31 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_32' ? (
                      <CoverLetter32 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_33' ? (
                      <CoverLetter33 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_34' ? (
                      <CoverLetter34 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_35' ? (
                      <CoverLetter35 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_36' ? (
                      <CoverLetter36 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_37' ? (
                      <CoverLetter37 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_38' ? (
                      <CoverLetter38 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_39' ? (
                      <CoverLetter39 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : pageData.design === 'design_40' ? (
                      <CoverLetter40 readOnly={readOnly} chosenCategory={chosenCategory} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={1} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
                    ) : null}
                    {/* <BlankTemplate sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index].page} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
                    {/* <Template2 mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index].page} rightMainRef={pageData.rightMainRef} setDataUpdatableLeft={pageData.setDataUpdatableLeft} dataUpdatableLeft={pageData.dataUpdatableLeft} dataUpdatableRight={pageData.dataUpdatableRight} setDataUpdatableRight={pageData.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
                  </div>
                </div>
                {/* <p id='break_page'></p> */}
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

  return (
    <form onSubmit={(e) => {e.preventDefault();savePageData();}} className='builder_main'>
      {loading && (
        <div className='builder_loaderWrapper'>
          <ThreeDots wrapperClass='builder_loader' />
        </div>)}
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
        {/* <p className='document_name'>Document Name</p> */} 

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
          Download Cover Letter
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
