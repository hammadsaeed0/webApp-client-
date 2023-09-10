import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ThreeDots } from 'react-loader-spinner';

import removeMarkdown from 'markdown-to-text';

import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import BuilderSubHeader from '../../Components/BuilderWrapper/BuilderSubHeader/BuilderSubHeader';
import LinkedInHeadlineDocumentViewOnly from '../../Components/LinkedInViewOnly/LinkedInHeadlineDocumentViewOnly/LinkedInHeadlineDocument';

import Accordion from 'react-bootstrap/Accordion';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  get_linkedIn_headings,
  get_linkedIn_heading_by_id,
  get_linkedIn_categories,
  get_user_linkedIn_Headline_by_id,
} from '../../API/index';

export default function LinkedIn({ setUserLoggedIn, userData, userLoggedIn }) {
  const history = useHistory();
  const { headingId, headlineId, share } = useParams();
  // console.log({ headingId, headlineId });
  const pageData = JSON.parse(localStorage.getItem('pageData'));

  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [userLinkedInData, setUserLinkedIn] = useState(null);
  const [document_name, setDocument_name] = useState('');

  const [linkedInHeadings, setLinkedInHeadings] = useState('');
  const [linkedInHeadingData, setLinkedInHeadingData] = useState('');

  // console.log(linkedInHeadingData);
  // console.log({
  //   ...userLinkedInData?.documentData,
  //   heading_data: userLinkedInData?.documentData.pageEditorData,
  // });

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getLinkedInHeadlineData = async () => {
    await get_user_linkedIn_Headline_by_id(headlineId, config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setUserLinkedIn({
          ...res?.data,
          documentData: JSON.parse(res?.data.documentData),
        });

        setDocument_name(res?.data.documentName);
      }
    });
  };
  useEffect(() => {
    headlineId && getLinkedInHeadlineData();
  }, []);
  useEffect(() => {
    userLinkedInData &&
      setLinkedInHeadingData({
        ...userLinkedInData?.documentData,
        heading_data: userLinkedInData?.documentData.pageEditorData,
      });
  }, [userLinkedInData]);

  // const [updatableId, setUpdatableId] = useState(id && id);
  const [updatableHeadingId, setUpdatableHeadingId] = useState(
    headingId !== 'edit' ? headingId : undefined
  );

  const [forceUpdate] = useForceUpdate();

  const [linkedIn, setLinkedIn] = useState('');
  const [linkedInData, setLinkedInData] = useState('');

  const [categories, setCategories] = useState('');

  const [msg, setMsg] = useState();

  // function getLinkedInById(linkedIns, updatableId) {
  //   for (var i = 0; i < linkedIns.length; i++) {
  //     if (linkedIns[i].id === updatableId) {
  //       return linkedIns[i];
  //     }
  //   }
  // }

  useEffect(() => {
    get_linkedIn_categories().then((res) => {
      //   // console.log(res);
      if (res?.status === 200 || res?.status === 304) {
        setCategories(res?.data);
      } else {
        setMsg(res);
      }
    });

    // get_linkedIn().then((res) => {
    //   if (res?.status === 200 || res?.status === 304) {
    //     setLinkedIn(res?.data);
    //   } else {
    //     setMsg(res);
    //   }
    // });

    // get_linkedIn_by_id(updatableId).then((res) => {
    //   if (res?.status === 200 || res?.status === 304) {
    //     setLinkedInData(res?.data);
    //   } else {
    //     setMsg({ msg: res, status: 400 });
    //   }
    // });

    get_linkedIn_headings().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setLinkedInHeadings(res?.data);
      } else {
        setMsg(res);
      }
    });

    get_linkedIn_heading_by_id(updatableHeadingId).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        // console.log(res?.data);
        pageData && pageData.templateName === res?.data.id
          ? setLinkedInHeadingData({
              ...pageData.pageEditorData,
              heading_data: pageData.pageEditorData,
            })
          : setLinkedInHeadingData(res?.data);
      } else {
        setMsg({ msg: res, status: 400 });
      }
    });
  }, [updatableHeadingId]);

  const [chosenCategory, setChosenCategory] = useState('category_1');
  const [chosenDesign, setChosenDesign] = useState('design_1');

  const [showChangeTemplateSidebar, setShowChangeTemplateSidebar] =
    useState(false);
  const [showChangeCategorySidebar, setShowChangeCategorySidebar] =
    useState(false);

  const addSectionModal = useRef('');
  const addSectionModalBG = useRef('');
  const loginPopup = useRef('');
  const loginPopupBG = useRef('');

  // SubHeader Style Variables

  // const [document_name, setDocument_name] = useState('Document');
  const [pageLayout, setPageLayout] = useState('A4');
  const [lineHeight, setLineHeight] = useState(1);
  const [docummentMargin, setDocummentMargin] = useState('Compact');
  const [docummentDateFormat, setDocummentDateFormat] = useState('1 / 22');
  const [documentHeadingTextStyle, setDocumentHeadingTextStyle] =
    useState('Poppins');
  const [documentBodyTextStyle, setDocumentBodyTextStyle] = useState('Poppins');
  const [documentBodyTextSize, setDocumentBodyTextSize] = useState('Medium');
  const [borderedPage, setBorderedPage] = useState(false);
  const [pageBorderWidth, setPageBorderWidth] = useState(1);
  const [pageBorderStyle, setPageBorderStyle] = useState('solid');
  const [pageBorderColor, setPageBorderColor] = useState('black');
  // Template Colors

  const [sidePanelBgColor, setSidePanelBgColor] = useState( ); // prettier-ignore
  const [sidePanelTextColor, setSidePanelTextColor] = useState( ); // prettier-ignore
  const [mainPanelBgColor, setMainPanelBgColor] = useState(); // prettier-ignore

  const [headingText, setHeadingText] = useState('');

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

  const pageDocumentData = JSON.stringify({
    type: 'linkedin_headline',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    templateName: updatableHeadingId,
    pageEditorData: headingText,
  });
  const saveLinkedInData = {
    userId: userId,
    documentName: document_name,
    documentData: pageDocumentData,
  };
  // console.log(saveLinkedInData);

  const rightMainRef = useRef();
  const wholePageMainRef = useRef();

  const [key, setKey] = useState(10);

  const [pageNo, setPageNo] = useState(1);

  const TemplatesPagesData = [
    {
      key: 1,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      page: pageNo,
    },
  ];
  const [pageUpdatableData, setPageUpdatableData] =
    useState(TemplatesPagesData);

  function updateCoverLetterDocument() {
    return headlineId && !linkedInHeadingData ? (
      <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
      <LinkedInHeadlineDocumentViewOnly
        share={share}
        readOnly={true}
        headlineId={headlineId}
        saveLinkedInData={saveLinkedInData}
        pageDocumentData={pageDocumentData}
        headingText={headingText}
        setHeadingText={setHeadingText}
        document_name={document_name}
        setDocument_name={setDocument_name}
        setShowChangeCategorySidebar={setShowChangeCategorySidebar}
        showChangeCategorySidebar={showChangeCategorySidebar}
        linkedInHeadingData={linkedInHeadingData && linkedInHeadingData}
        linkedInData={linkedInData && linkedInData}
        chosenCategory={chosenCategory}
        setChosenCategory={setChosenCategory}
        chosenDesign={chosenDesign}
        setDesign={setChosenDesign}
        addSectionModal={addSectionModal}
        addSectionModalBG={addSectionModalBG}
        pageBorderColor={pageBorderColor}
        pageBorderWidth={pageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        borderedPage={borderedPage}
        // headingTextStyleConditions={headingTextStyleConditions}
        // bodyTextStyleConditions={bodyTextStyleConditions}
        // headingTextSizeConditions={headingTextSizeConditions}
        // bodyTextSizeConditions={bodyTextSizeConditions}
        mainPanelBgColor={mainPanelBgColor}
        sidePanelTextColor={sidePanelTextColor}
        sidePanelBgColor={sidePanelBgColor}
        pageUpdatableData={pageUpdatableData}
        pageLayout={pageLayout}
        lineHeight={lineHeight}
        docummentMargin={docummentMargin}
        docummentDateFormat={docummentDateFormat}
        documentHeadingTextStyle={documentHeadingTextStyle}
        documentBodyTextStyle={documentBodyTextStyle}
        documentBodyTextSize={documentBodyTextSize}
      />
    );
  }

  const go_to_another_page_Modal = (linkedIns, id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal'>
            <div>
              {/* <h1></h1> */}
              <p>By clicking it, You can loose all your data</p>
              <p>Do you want to Continue?</p>
              <div>
                <a href='#'>
                  <button onClick={() => onClose()}>No</button>
                </a>
                <a href='#'>
                  <button
                    onClick={() => (
                      setLinkedInData(''),
                      updatableHeadingId
                        ? history.push(`/linkedIn/${id}/${updatableHeadingId}`)
                        : history.push(`/linkedIn/${id}`),
                      // setUpdatableId(id),
                      forceUpdate(),
                      onClose()
                    )}
                    className='login_modal_secondary_btn'
                  >
                    Yes
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const change_heading_Modal = (headingId) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal'>
            <div>
              {/* <h1></h1> */}
              <p>By clicking it, You can loose all your data</p>
              <p>Do you want to Continue?</p>
              <div>
                <a href='#'>
                  <button onClick={() => onClose()}>No</button>
                </a>
                <a href='#'>
                  <button
                    onClick={() => (
                      setLinkedInHeadingData(''),
                      // updatableId
                      //   ? history.push(`/linkedIn/${updatableId}/${headingId}`)
                      //   : history.push(`/linkedIn/${headingId}`),
                      history.push(`/linkedIn_headline/${headingId}`),
                      setUpdatableHeadingId(headingId),
                      forceUpdate(),
                      onClose()
                    )}
                    className='login_modal_secondary_btn'
                  >
                    Yes
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  useEffect(() => {
    setKey(key + 1);
    setPageNo(pageNo + 1);
    updateCoverLetterDocument();
  }, [linkedInData, linkedInHeadingData]);

  const [chosenSidebarCategory, setChosenSidebarCategory] = useState('All');
  const dropdownOptions = [
    'All',
    ...(categories && categories.map((e) => e.category)),
  ];
  const defaultDropdownOption = dropdownOptions[0];

  useEffect(() => {
    // // console.log(userLoggedIn);
    setTimeout(() => {
      if (!userLoggedIn) {
        localStorage.setItem('pageData', pageDocumentData);
        loginPopup.current.style.display = 'flex'; // modal visible
        loginPopupBG.current.style.display = 'flex'; // modal bg visible
      }
    }, 20000);
  }, []);

  return (
    <div className='builder'>
      <BuilderHeader
        builderData={{ length: 0 }}
        userLoggedIn={userLoggedIn}
        userData={userData}
        linkedIn={true}
        share={share}
      />

      {updateCoverLetterDocument()}
      <div ref={loginPopupBG} className='addSectionModal_bg loginModalBG'></div>
      <div ref={loginPopup} className='addSectionModal loginModal'>
        <div className='addPage_Modal login_modal'>
          <div>
            <h1>Loving it?</h1>
            <p>Let's create your CVJury account.</p>
            <div>
              <a href='/login'>
                <button>Login</button>
              </a>
              <a href='/signup'>
                <button className='login_modal_secondary_btn'>SignUp</button>
              </a>
            </div>
            {/* <button onClick={onClose}>No</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const useForceUpdate = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  return [increment, count];
};
