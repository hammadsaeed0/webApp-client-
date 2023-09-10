/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import moment from 'moment';

import { ThreeDots } from 'react-loader-spinner';
import 'react-loading-skeleton/dist/skeleton.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import BuilderHeader from '../../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import BuilderSubHeader from '../../../Components/BuilderWrapper/BuilderSubHeader/BuilderSubHeader';
import CoverLetterDocumentViewOnly from '../../../Components/CoverLetterDocumentViewOnly/CoverLetterDocument';

import StandardCategory from '../../../Components/CoverLetterCategoryData/standerd';
import Currenty_employed_1Category from '../../../Components/CoverLetterCategoryData/currently_employed_1';
import Currenty_employed_2Category from '../../../Components/CoverLetterCategoryData/currently_employed_2';
import Currenty_employed_3Category from '../../../Components/CoverLetterCategoryData/currently_employed_3';
import Not_currenty_employedCategory from '../../../Components/CoverLetterCategoryData/not_currently_employed';
import Recent_graduate_with_internshipCategory from '../../../Components/CoverLetterCategoryData/recent_graduate_with_internship';
import Recent_graduate_no_internshipCategory from '../../../Components/CoverLetterCategoryData/recent_graduate_no_internship';
import Career_change_1Category from '../../../Components/CoverLetterCategoryData/career_change_1';
import Career_change_2Category from '../../../Components/CoverLetterCategoryData/career_change_2';
import Career_change_3Category from '../../../Components/CoverLetterCategoryData/career_change_3';
import Triple_part_strategyCategory from '../../../Components/CoverLetterCategoryData/triple_part_strategy';
import Purpose_changesCategory from '../../../Components/CoverLetterCategoryData/propose_changes';
import What_you_can_studyCategory from '../../../Components/CoverLetterCategoryData/what_you_can_offer';
import Harp_on_previous_resultsCategory from '../../../Components/CoverLetterCategoryData/harp_on_previous_results';
import Weave_in_a_storyCategory from '../../../Components/CoverLetterCategoryData/weave_in_a_story';
import Bring_relevant_case_studyCategory from '../../../Components/CoverLetterCategoryData/bring_relevant_case_study';

import COVERLETTER1DATA from '../../../Components/CoverLetters/CoverLetter1/CoverLetter1Data';
import COVERLETTER2DATA from '../../../Components/CoverLetters/CoverLetter2/CoverLetter2Data';
import COVERLETTER3DATA from '../../../Components/CoverLetters/CoverLetter3/CoverLetter3Data';
import COVERLETTER4DATA from '../../../Components/CoverLetters/CoverLetter4/CoverLetter4Data';
import COVERLETTER5DATA from '../../../Components/CoverLetters/CoverLetter5/CoverLetter5Data';
import COVERLETTER6DATA from '../../../Components/CoverLetters/CoverLetter6/CoverLetter6Data';
import COVERLETTER7DATA from '../../../Components/CoverLetters/CoverLetter7/CoverLetter7Data';
import COVERLETTER8DATA from '../../../Components/CoverLetters/CoverLetter8/CoverLetter8Data';
import COVERLETTER9DATA from '../../../Components/CoverLetters/CoverLetter9/CoverLetter9Data';
import COVERLETTER10DATA from '../../../Components/CoverLetters/CoverLetter10/CoverLetter10Data';
import COVERLETTER11DATA from '../../../Components/CoverLetters/CoverLetter11/CoverLetter11Data';
import COVERLETTER12DATA from '../../../Components/CoverLetters/CoverLetter12/CoverLetter12Data';
import COVERLETTER13DATA from '../../../Components/CoverLetters/CoverLetter13/CoverLetter13Data';
import COVERLETTER14DATA from '../../../Components/CoverLetters/CoverLetter14/CoverLetter14Data';
import COVERLETTER15DATA from '../../../Components/CoverLetters/CoverLetter15/CoverLetter15Data';
import COVERLETTER16DATA from '../../../Components/CoverLetters/CoverLetter16/CoverLetter16Data';
import COVERLETTER17DATA from '../../../Components/CoverLetters/CoverLetter17/CoverLetter17Data';
import COVERLETTER18DATA from '../../../Components/CoverLetters/CoverLetter18/CoverLetter18Data';
import COVERLETTER19DATA from '../../../Components/CoverLetters/CoverLetter19/CoverLetter19Data';
import COVERLETTER20DATA from '../../../Components/CoverLetters/CoverLetter20/CoverLetter20Data';
import COVERLETTER21DATA from '../../../Components/CoverLetters/CoverLetter21/CoverLetter21Data';
import COVERLETTER22DATA from '../../../Components/CoverLetters/CoverLetter22/CoverLetter22Data';
import COVERLETTER23DATA from '../../../Components/CoverLetters/CoverLetter23/CoverLetter23Data';
import COVERLETTER24DATA from '../../../Components/CoverLetters/CoverLetter24/CoverLetter24Data';
import COVERLETTER25DATA from '../../../Components/CoverLetters/CoverLetter25/CoverLetter25Data';
import COVERLETTER26DATA from '../../../Components/CoverLetters/CoverLetter26/CoverLetter26Data';
import COVERLETTER27DATA from '../../../Components/CoverLetters/CoverLetter27/CoverLetter27Data';
import COVERLETTER28DATA from '../../../Components/CoverLetters/CoverLetter28/CoverLetter28Data';
import COVERLETTER29DATA from '../../../Components/CoverLetters/CoverLetter29/CoverLetter29Data';
import COVERLETTER30DATA from '../../../Components/CoverLetters/CoverLetter30/CoverLetter30Data';
import COVERLETTER31DATA from '../../../Components/CoverLetters/CoverLetter31/CoverLetter31Data';
import COVERLETTER32DATA from '../../../Components/CoverLetters/CoverLetter32/CoverLetter32Data';
import COVERLETTER33DATA from '../../../Components/CoverLetters/CoverLetter33/CoverLetter33Data';
import COVERLETTER34DATA from '../../../Components/CoverLetters/CoverLetter34/CoverLetter34Data';
import COVERLETTER35DATA from '../../../Components/CoverLetters/CoverLetter35/CoverLetter35Data';
import COVERLETTER36DATA from '../../../Components/CoverLetters/CoverLetter36/CoverLetter36Data';
import COVERLETTER37DATA from '../../../Components/CoverLetters/CoverLetter37/CoverLetter37Data';
import COVERLETTER38DATA from '../../../Components/CoverLetters/CoverLetter38/CoverLetter38Data';
import COVERLETTER39DATA from '../../../Components/CoverLetters/CoverLetter39/CoverLetter39Data';
import COVERLETTER40DATA from '../../../Components/CoverLetters/CoverLetter40/CoverLetter40Data';

import { get_cover_letter_by_id } from '../../../API';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function CoverLetter({
  setUserLoggedIn,
  userData,
  userLoggedIn,
}) {
  const history = useHistory();
  const { category, design, coverLetterId, share } = useParams();
  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [coverLetterData, setCoverLetterData] = useState(null);
  const [document_name, setDocument_name] = useState('');
  console.log(share);

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getCoverLetterData = async () => {
    await get_cover_letter_by_id(coverLetterId, config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setCoverLetterData({
          ...res?.data,
          documentData: JSON.parse(res?.data.documentData),
        });
        setDocument_name(res?.data.documentName);
      }
    });
  };
  useEffect(() => {
    coverLetterId && getCoverLetterData();
  }, []);

  const [chosenCategory, setChosenCategory] = useState(
    category || 'category_1'
  );
  const [chosenDesign, setChosenDesign] = useState(design || 'design_1');
  // const { chosenTemplate } = useParams();
  // console.log(coverLetterData);
  const { STANDARD } = StandardCategory();
  const { CURRENTY_EMPLOYED_1 } = Currenty_employed_1Category();
  const { CURRENTY_EMPLOYED_2 } = Currenty_employed_2Category();
  const { CURRENTY_EMPLOYED_3 } = Currenty_employed_3Category();
  const { NOT_CURRENTY_EMPLOYED } = Not_currenty_employedCategory();
  const { RECENT_GRADUATE_WITH_INTERNSHIP } =
    Recent_graduate_with_internshipCategory();
  const { RECENT_GRADUATE_NO_INTERNSHIP } =
    Recent_graduate_no_internshipCategory();
  const { CAREER_CHANGE_1 } = Career_change_1Category();
  const { CAREER_CHANGE_2 } = Career_change_2Category();
  const { CAREER_CHANGE_3 } = Career_change_3Category();
  const { TRIPLE_PART_STRATEGY } = Triple_part_strategyCategory();
  const { PURPOSE_CHANGES } = Purpose_changesCategory();
  const { WHAT_YOU_CAN_STUDY } = What_you_can_studyCategory();
  const { HARP_ON_PREVIOUS_RESULTS } = Harp_on_previous_resultsCategory();
  const { WEAVE_IN_A_STORY } = Weave_in_a_storyCategory();
  const { BRING_RELEVANT_CASE_STUDY } = Bring_relevant_case_studyCategory();

  // */*****************************************************************************************************************\*

  const categorySelector = chosenCategory === 'standard' ? STANDARD : chosenCategory === 'currently_employed_1' ? CURRENTY_EMPLOYED_1 : chosenCategory === 'currently_employed_2' ? CURRENTY_EMPLOYED_2 : chosenCategory === 'currently_employed_3' ? CURRENTY_EMPLOYED_3 : chosenCategory === 'not_currently_employed_but_experienced' ? NOT_CURRENTY_EMPLOYED : chosenCategory === 'recent_graduate_with_internship_experience' ? RECENT_GRADUATE_WITH_INTERNSHIP : chosenCategory === 'recent_graduate_no_internship_experience' ? RECENT_GRADUATE_NO_INTERNSHIP : chosenCategory === 'career_change_1' ? CAREER_CHANGE_1 : chosenCategory === 'career_change_2' ? CAREER_CHANGE_2 : chosenCategory === 'career_change_3' ? CAREER_CHANGE_3 : chosenCategory === 'triple_part_strategy' ? TRIPLE_PART_STRATEGY : chosenCategory === 'purpose_changes' ? PURPOSE_CHANGES : chosenCategory === 'what_you_can_offer' ? WHAT_YOU_CAN_STUDY : chosenCategory === 'harp_on_previous_results' ? HARP_ON_PREVIOUS_RESULTS : chosenCategory === 'weave_in_a_story' ? WEAVE_IN_A_STORY : chosenCategory === 'bring_relevant_case_study' ? BRING_RELEVANT_CASE_STUDY : STANDARD; // prettier-ignore

  const { CoverLetter1Data } = COVERLETTER1DATA();
  const { CoverLetter2Data } = COVERLETTER2DATA();
  const { CoverLetter3Data } = COVERLETTER3DATA();
  const { CoverLetter4Data } = COVERLETTER4DATA();
  const { CoverLetter5Data } = COVERLETTER5DATA();
  const { CoverLetter6Data } = COVERLETTER6DATA();
  const { CoverLetter7Data } = COVERLETTER7DATA();
  const { CoverLetter8Data } = COVERLETTER8DATA();
  const { CoverLetter9Data } = COVERLETTER9DATA();
  const { CoverLetter10Data } = COVERLETTER10DATA();
  const { CoverLetter11Data } = COVERLETTER11DATA();
  const { CoverLetter12Data } = COVERLETTER12DATA();
  const { CoverLetter13Data } = COVERLETTER13DATA();
  const { CoverLetter14Data } = COVERLETTER14DATA();
  const { CoverLetter15Data } = COVERLETTER15DATA();
  const { CoverLetter16Data } = COVERLETTER16DATA();
  const { CoverLetter17Data } = COVERLETTER17DATA();
  const { CoverLetter18Data } = COVERLETTER18DATA();
  const { CoverLetter19Data } = COVERLETTER19DATA();
  const { CoverLetter20Data } = COVERLETTER20DATA();
  const { CoverLetter21Data } = COVERLETTER21DATA();
  const { CoverLetter22Data } = COVERLETTER22DATA();
  const { CoverLetter23Data } = COVERLETTER23DATA();
  const { CoverLetter24Data } = COVERLETTER24DATA();
  const { CoverLetter25Data } = COVERLETTER25DATA();
  const { CoverLetter26Data } = COVERLETTER26DATA();
  const { CoverLetter27Data } = COVERLETTER27DATA();
  const { CoverLetter28Data } = COVERLETTER28DATA();
  const { CoverLetter29Data } = COVERLETTER29DATA();
  const { CoverLetter30Data } = COVERLETTER30DATA();
  const { CoverLetter31Data } = COVERLETTER31DATA();
  const { CoverLetter32Data } = COVERLETTER32DATA();
  const { CoverLetter33Data } = COVERLETTER33DATA();
  const { CoverLetter34Data } = COVERLETTER34DATA();
  const { CoverLetter35Data } = COVERLETTER35DATA();
  const { CoverLetter36Data } = COVERLETTER36DATA();
  const { CoverLetter37Data } = COVERLETTER37DATA();
  const { CoverLetter38Data } = COVERLETTER38DATA();
  const { CoverLetter39Data } = COVERLETTER39DATA();
  const { CoverLetter40Data } = COVERLETTER40DATA();

  const designDataSelector = chosenDesign === 'design_1' ? CoverLetter1Data : chosenDesign === 'design_2' ? CoverLetter2Data : chosenDesign === 'design_3' ? CoverLetter3Data : chosenDesign === 'design_4' ? CoverLetter4Data : chosenDesign === 'design_5' ? CoverLetter5Data : chosenDesign === 'design_6' ? CoverLetter6Data : chosenDesign === 'design_7' ? CoverLetter7Data : chosenDesign === 'design_8' ? CoverLetter8Data : chosenDesign === 'design_9' ? CoverLetter9Data : chosenDesign === 'design_10' ? CoverLetter10Data : chosenDesign === 'design_11' ? CoverLetter11Data : chosenDesign === 'design_12' ? CoverLetter12Data : chosenDesign === 'design_13' ? CoverLetter13Data : chosenDesign === 'design_14' ? CoverLetter14Data : chosenDesign === 'design_15' ? CoverLetter15Data : chosenDesign === 'design_16' ? CoverLetter16Data : chosenDesign === 'design_17' ? CoverLetter17Data : chosenDesign === 'design_18' ? CoverLetter18Data : chosenDesign === 'design_19' ? CoverLetter19Data : chosenDesign === 'design_20' ? CoverLetter20Data : chosenDesign === 'design_21' ? CoverLetter21Data : chosenDesign === 'design_22' ? CoverLetter22Data : chosenDesign === 'design_23' ? CoverLetter23Data : chosenDesign === 'design_24' ? CoverLetter24Data : chosenDesign === 'design_25' ? CoverLetter25Data : chosenDesign === 'design_26' ? CoverLetter26Data : chosenDesign === 'design_27' ? CoverLetter27Data : chosenDesign === 'design_28' ? CoverLetter28Data : chosenDesign === 'design_29' ? CoverLetter29Data : chosenDesign === 'design_30' ? CoverLetter30Data : chosenDesign === 'design_31' ? CoverLetter31Data : chosenDesign === 'design_32' ? CoverLetter32Data : chosenDesign === 'design_33' ? CoverLetter33Data : chosenDesign === 'design_34' ? CoverLetter34Data : chosenDesign === 'design_35' ? CoverLetter35Data : chosenDesign === 'design_36' ? CoverLetter36Data : chosenDesign === 'design_37' ? CoverLetter37Data : chosenDesign === 'design_38' ? CoverLetter38Data : chosenDesign === 'design_39' ? CoverLetter39Data : chosenDesign === 'design_40' ? CoverLetter40Data : null // prettier-ignore

  const pageData = JSON.parse(localStorage.getItem('pageData'));

  const [key, setKey] = useState(10);

  const pageDataSelector =
    coverLetterData?.documentData.design === chosenDesign &&
    coverLetterData?.documentData.category === chosenCategory
      ? coverLetterData.documentData.pageEditorData.designDataSelector
      : coverLetterId
      ? null
      : designDataSelector;

  const pageCategoryDataSelector =
    coverLetterData?.documentData.category === chosenCategory &&
    coverLetterData?.documentData.design === chosenDesign
      ? coverLetterData.documentData.pageEditorData.categoryData
      : coverLetterId
      ? null
      : categorySelector;
  // const pageDataSelector = pageData?.templateName === chosenTemplate ? pageData.pageEditorData : templateDataSelector;
  const pageEditorData = coverLetterData?.documentData.pageEditorData;
  //
  // const pageDataSelector = pageData
  //   ? pageData.design === chosenDesign && pageData.category === chosenCategory
  //     ? pageData.pageEditorData.designDataSelector
  //     : designDataSelector
  //   : designDataSelector;
  // const pageCategoryDataSelector = pageData
  //   ? pageData.category === chosenCategory && pageData.design === chosenDesign
  //     ? pageData.pageEditorData.categoryData
  //     : categorySelector
  //   : categorySelector;

  const [CoverLetterUpdatableData, setCoverLetterUpdatableData] = useState(pageDataSelector && { ...designDataSelector, ...pageDataSelector }); // prettier-ignore

  const [CategoryUpdatableData, setCategoryUpdatableData] = useState(pageCategoryDataSelector && { ...categorySelector, ...pageCategoryDataSelector}); // prettier-ignore

  // console.log(CoverLetterUpdatableData);
  useEffect(() => {
    coverLetterId &&
      setCoverLetterUpdatableData(
        pageDataSelector && { ...designDataSelector, ...pageDataSelector }
      );
    coverLetterId &&
      setCategoryUpdatableData(
        pageCategoryDataSelector && {
          ...categorySelector,
          ...pageCategoryDataSelector,
        }
      );
  }, [pageDataSelector, pageCategoryDataSelector]);
  // useEffect(() => {
  //   setCoverLetterUpdatableData(designDataSelector);
  //   setCategoryUpdatableData(categorySelector);
  // }, [designDataSelector, categorySelector]);

  const [showChangeTemplateSidebar, setShowChangeTemplateSidebar] =
    useState(false);
  const [showChangeCategorySidebar, setShowChangeCategorySidebar] =
    useState(false);

  const addSectionModal = useRef('');
  const addSectionModalBG = useRef('');
  const loginPopup = useRef('');
  const loginPopupBG = useRef('');

  // // console.log({ CoverLetterUpdatableData, CategoryUpdatableData });

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

  const rightMainRef = useRef();
  const wholePageMainRef = useRef();

  const mainSection1 = useRef(null);
  const mainSection2 = useRef(null);
  const mainSection3 = useRef(null);
  const mainSection4 = useRef(null);
  const mainSection5 = useRef(null);
  const mainSection6 = useRef(null);

  const subSection1 = useRef(null);
  const subSection2 = useRef(null);
  const subSection3 = useRef(null);
  const subSection4 = useRef(null);
  const subSection5 = useRef(null);

  const [showOnFirstPage, setShowOnFirstPage] = useState(true);
  const [showOnSecondPage, setShowOnSecondPage] = useState(true);
  const [showOnThirdPage, setShowOnThirdPage] = useState(true);

  // */*********************************************************************\*

  // // console.log({ CoverLetter1Data, categoryData: categorySelector });
  // Template 1 Data

  const template1Color = {
    sidePanelBgColor: '#1D4394',
    sidePanelTextColor: '#000',
  };

  const template1DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter1Data?.setName,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      heading: CoverLetterUpdatableData?.personal_info,
      setHeading: CoverLetter1Data?.setPersonal_info,
      subSection: false,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter1Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter1Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter1Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];
  const template1DataRightSection = [
    {
      key: 6,
      class: 'block',
      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 2 Data

  const template2Color = {
    sidePanelBgColor: '#E1D4EA',
    sidePanelTextColor: '#000',
  };

  const template2DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter2Data?.setName,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      // header: true,
      type: '',
      heading: CoverLetter1Data.personal_info,
      subSection: false,
      description: CoverLetterUpdatableData?.personal_info_descp,
      setDescription: CoverLetter2Data?.setPersonal_info_descp,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template2DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];
  // console.log(CategoryUpdatableData && template2DataRightSection);
  // Template 3 Data

  const template3Color = {
    sidePanelBgColor: '#D0E7DC',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '#F6F6F6',
  };

  const template3DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter3Data?.setName,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      heading: CoverLetter1Data.personal_info,
      subSection: false,
      description: [
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter3Data?.setAddress,
          type: 'address',
        },
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter3Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter3Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.website,
          setDescription: CoverLetter3Data?.setWebsite,
          type: 'website',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template3DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 4 Data

  const template4Color = {
    sidePanelBgColor: '#FDDE64',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template4DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter4Data?.setName,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      // header: true,
      type: '',
      heading: 'none',
      subSection: false,
      description: CoverLetterUpdatableData?.personal_info_descp,
      setDescription: CoverLetter4Data?.setPersonal_info_descp,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template4DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 5 Data

  const template5Color = {
    sidePanelBgColor: '#FAD6E3',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template5DataLeftSection = [
    {
      key: 1,
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter5Data?.setName,
      description: CoverLetterUpdatableData?.position,
      setDescription: CoverLetter5Data?.setPosition,
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      subHeader: true,
      heading: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter5Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter5Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.website,
          setData: CoverLetter5Data?.setWebsite,
          type: 'website',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter5Data?.setAddress,
          type: 'address',
        },
      ],
      description: 'none',
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
  ];

  const template5DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 6 Data

  const template6Color = {
    sidePanelBgColor: '#EDEDED',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template6DataLeftSection = [
    {
      key: 5,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter6Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter6Data?.setPosition,
      subSection: false,
      description: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter6Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter6Data?.setAddress,
          type: 'address',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter6Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.linkedIn,
          setData: CoverLetter6Data?.setLinkedIn,
          type: 'linkedIn',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 2,
      subHeader: true,
      heading: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter6Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter6Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.website,
          setData: CoverLetter6Data?.setWebsite,
          type: 'website',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter6Data?.setAddress,
          type: 'address',
        },
      ],
      description: 'none',
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
  ];

  const template6DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 7 Data

  const template7Color = {
    sidePanelBgColor: '#3B3735',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '#F5F5F6',
  };

  const template7DataLeftSection = [
    {
      key: 1,
      header: true,
      heading: [
        {
          phone: CoverLetterUpdatableData?.phone,
          setPhone: CoverLetter7Data?.setPhone,
        },
        {
          email: CoverLetterUpdatableData?.email,
          setEmail: CoverLetter7Data?.setEmail,
        },
        {
          address: CoverLetterUpdatableData?.address,
          setAddress: CoverLetter7Data?.setAddress,
        },
      ],
      description: [
        {
          phoneDescp: CoverLetterUpdatableData?.phoneDescp,
          setPhoneDescp: CoverLetter7Data?.setPhoneDescp,
        },
        {
          emailDescp: CoverLetterUpdatableData?.emailDescp,
          setEmailDescp: CoverLetter7Data?.setEmailDescp,
        },
        {
          addressDescp: CoverLetterUpdatableData?.addressDescp,
          setAddressDescp: CoverLetter7Data?.setAddressDescp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter7Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter7Data?.setPosition,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template7DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 8 Data

  const template8Color = {
    sidePanelBgColor: '#E62947',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template8DataLeftSection = [
    {
      key: 1,
      header: true,
      name: CoverLetterUpdatableData?.name,
      setName: CoverLetter8Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter8Data?.setPosition,
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'contact',
      heading: CoverLetterUpdatableData?.contact,
      setHeading: CoverLetter8Data?.setContact,
      contactType: [
        {
          key: 2453,
          type: 'phone',
          name: CoverLetterUpdatableData?.phone,
          setName: CoverLetter8Data?.setPhone,
        },
        {
          key: 2453,
          type: 'email',
          name: CoverLetterUpdatableData?.email,
          setName: CoverLetter8Data?.setEmail,
        },
        {
          key: 2453,
          type: 'address',
          name: CoverLetterUpdatableData?.address,
          setName: CoverLetter8Data?.setAddress,
        },
        {
          key: 2453,
          type: 'website',
          name: CoverLetterUpdatableData?.website,
          setName: CoverLetter8Data?.setWebsite,
        },
      ],
      subSection: false,
      // description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template8DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 9 Data

  const template9Color = {
    sidePanelBgColor: '',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template9DataLeftSection = [
    {
      key: 1,
      header: true,
      name: CoverLetterUpdatableData?.name,
      setName: CoverLetter9Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter9Data?.setPosition,
      description: CoverLetterUpdatableData?.main_descp,
      setDescription: CoverLetter9Data?.setMain_descp,
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'personal',
      heading: CoverLetterUpdatableData?.personal_info,
      setHeading: CoverLetter9Data?.setPersonal_info,
      subSection: false,
      description: CoverLetterUpdatableData?.personal_info_descp,
      setDescription: CoverLetter9Data?.setPersonal_info_descp,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template9DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 10 Data

  const template10Color = {
    sidePanelBgColor: '#0D4594',
    sidePanelTextColor: '#000',
    mainPanelBgColor: '',
  };

  const template10DataLeftSection = [
    {
      key: 5,
      class: 'block',
      header: true,
      heading: [
        {
          name: CoverLetterUpdatableData?.name,
          setName: CoverLetter10Data?.setName,
          position: CoverLetterUpdatableData?.position,
          setPosition: CoverLetter10Data?.setPosition,
        },
      ],
      subSection: false,
      contacts: [
        {
          key: 1463,
          type: 'phone',
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter10Data?.setPhone,
        },
        {
          key: 1464,
          type: 'address',
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter10Data?.setAddress,
        },
        {
          key: 1465,
          type: 'email',
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter10Data?.setEmail,
        },
        {
          key: 1466,
          type: 'linkedIn',
          description: CoverLetterUpdatableData?.linkedIn,
          setDescription: CoverLetter10Data?.setLinkedIn,
        },
      ],
      description: CoverLetterUpdatableData?.main_descp,
      setDescription: CoverLetter10Data?.setMain_descp,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template10DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 11 Data

  const template11Color = {
    sidePanelBgColor: '#E9E9EA',
    sidePanelTextColor: '#565251',
  };

  const template11DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter11Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter11Data?.setPosition,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 1,
      // header: true,
      heading: 'none',
      subSection: true,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter11Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter11Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter11Data?.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template11DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 12 Data

  const template12Color = {
    sidePanelBgColor: '#F7F8F9',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#B2B2B2',
  };

  const template12DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      type: '',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter12Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter12Data?.setPosition,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 1,
      // header: true,
      heading: 'none',
      subSection: true,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter12Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter12Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter12Data?.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template12DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 13 Data

  const template13Color = {
    sidePanelBgColor: '#01A0C6',
    sidePanelTextColor: '#30292A',
  };

  const template13DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter13Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter13Data?.setPosition,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter13Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter13Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.linkedIn,
          setDescription: CoverLetter13Data?.setLinkedIn,
          type: 'linkedIn',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter13Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      // header: true,
      heading: 'none',
      subSection: true,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter13Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter13Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter13Data?.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template13DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 14 Data

  const template14Color = {
    sidePanelBgColor: '#F2F2F2',
    sidePanelTextColor: '#4D1F03',
  };

  const template14DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter14Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter14Data?.setPosition,
      contacts: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter14Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter14Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.website,
          setData: CoverLetter14Data?.setWebsite,
          type: 'website',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter14Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      // header: true,
      heading: 'none',
      subSection: true,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter14Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter14Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter14Data?.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template14DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 15 Data

  const template15Color = {
    sidePanelBgColor: '#333333',
    sidePanelTextColor: '#655C5A',
  };

  const template15DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter15Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter15Data?.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'contact',
      heading: CoverLetterUpdatableData?.contact,
      setHeading: CoverLetter15Data?.setContact,
      description: [
        {
          key: 5753,
          description: CoverLetterUpdatableData?.contact_descp,
          setDescription: CoverLetter15Data?.setContact_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template15DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 16 Data

  const template16Color = {
    sidePanelBgColor: '#FA1533',
    sidePanelTextColor: '#1A1A1A',
  };

  const template16DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter16Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter16Data?.setPosition,
      contacts: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter16Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter16Data?.setEmail,
          type: 'email',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template16DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 17 Data

  const template17Color = {
    sidePanelBgColor: '#F20E27',
    sidePanelTextColor: '#1A1A1A',
  };

  const template17DataLeftSection = [
    {
      key: 1,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter17Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter17Data?.setPosition,
      contacts: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter17Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter17Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter17Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template17DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 18 Data

  const template18Color = {
    sidePanelBgColor: '#5B6C77',
    sidePanelTextColor: '#403738',
  };

  const template18DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      type: 'header',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter18Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter18Data?.setPosition,
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      heading: CoverLetterUpdatableData?.personalInfo,
      setHeading: CoverLetter18Data?.setPersonalInfo,
      subSection: false,
      description: [
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter18Data?.setAddress,
          type: 'address',
        },
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter18Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.web,
          setDescription: CoverLetter18Data?.setWeb,
          type: 'web',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template18DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 19 Data

  const template19Color = {
    sidePanelBgColor: '#FF5900',
    sidePanelTextColor: '#403738',
  };

  const template19DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      type: 'header',
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter19Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter19Data?.setPosition,
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      heading: CoverLetterUpdatableData?.personal_info,
      setHeading: CoverLetter19Data?.setPersonal_info,
      subSection: false,
      description: [
        {
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter19Data?.setPhone,
          type: 'phone',
        },
        {
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter19Data?.setEmail,
          type: 'email',
        },
        {
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter19Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template19DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 20 Data

  const template20Color = {
    sidePanelBgColor: '#0A0230',
    sidePanelTextColor: '#464241',
  };

  const template20DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter20Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter20Data?.setPosition,
      contact: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter20Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter20Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.address,
          setData: CoverLetter20Data?.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template20DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 21 Data

  const template21Color = {
    sidePanelBgColor: '#2E58A6',
    sidePanelTextColor: '#000000',
  };

  const template21DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter21Data?.setName,
      subSection: false,
      contact: [
        {
          data: CoverLetterUpdatableData?.phone,
          setData: CoverLetter21Data?.setPhone,
          type: 'phone',
        },
        {
          data: CoverLetterUpdatableData?.email,
          setData: CoverLetter21Data?.setEmail,
          type: 'email',
        },
        {
          data: CoverLetterUpdatableData?.linkedIn,
          setData: CoverLetter21Data?.setLinkedIn,
          type: 'linkedIn',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template21DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 222Data

  const template22Color = {
    sidePanelBgColor: '#2E58A6',
    sidePanelTextColor: '#000000',
  };

  const template22DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter22Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter22Data?.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.profileDescp,
          setDescription: CoverLetter22Data?.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template22DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 23Data

  const template23Color = {
    sidePanelBgColor: '#1A1A1A',
    sidePanelTextColor: '#000000',
  };

  const template23DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter23Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter23Data?.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.profileDescp,
          setDescription: CoverLetter23Data?.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template23DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 24Data

  const template24Color = {
    sidePanelBgColor: '#FF5900',
    sidePanelTextColor: '#000000',
  };

  const template24DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter24Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter24Data?.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      // header: true,
      type: 'personalInfo',
      heading: CoverLetterUpdatableData?.personalInfo,
      setHeading: CoverLetter24Data?.setPersonalInfo,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.phone,
          setDescription: CoverLetter24Data?.setPhone,
          type: 'phone',
        },
        {
          key: 8855,
          description: CoverLetterUpdatableData?.email,
          setDescription: CoverLetter24Data?.setEmail,
          type: 'email',
        },
        {
          key: 8856,
          description: CoverLetterUpdatableData?.address,
          setDescription: CoverLetter24Data?.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'subSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template24DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 25Data

  const template25Color = {
    sidePanelBgColor: '#565251',
    sidePanelTextColor: '#575756',
  };

  const template25DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter24Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter24Data?.setPosition,
      tagLine: CoverLetterUpdatableData?.tagLine,
      setTagLine: CoverLetter24Data?.setTagLine,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      // header: true,
      type: 'personalInfo',
      heading: CoverLetterUpdatableData?.personalInfo,
      setHeading: CoverLetter24Data?.setPersonalInfo,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.contact,
          setDescription: CoverLetter24Data?.setContact,
        },
      ],
      ref: subSection1,
      id: 'subSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template25DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 26Data

  const template26Color = {
    sidePanelBgColor: '#565251',
    sidePanelTextColor: '#575756',
  };

  const template26DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter26Data?.setName,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter26Data?.setPosition,
        },
      ],
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template26DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 27 Data

  const template27Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template27DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter27Data?.setName,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter27Data?.setPosition,
        },
      ],
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template27DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 28 Data

  const template28Color = {
    sidePanelBgColor: '#F8496C',
    sidePanelTextColor: '#000000',
  };

  const template28DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter28Data?.setName,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter28Data?.setPosition,
        },
      ],
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template28DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 29 Data

  const template29Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template29DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter29Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter29Data?.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'contact',
      heading: CoverLetterUpdatableData?.contact,
      setHeading: CoverLetter29Data?.setContact,
      description: [
        {
          key: 5753,
          description: CoverLetterUpdatableData?.conatct_descp,
          setDescription: CoverLetter29Data?.setConatct_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template29DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 30 Data

  const template30Color = {
    sidePanelBgColor: '#4D4D4D',
    sidePanelTextColor: '#333333',
  };

  const template30DataLeftSection = [
    {
      key: 6,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter30Data?.setName,
      subSection: false,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter30Data?.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 1,
      type: 'contact',
      heading: CoverLetterUpdatableData?.contact,
      setHeading: CoverLetter30Data?.setContact,
      description: [
        {
          key: 5753,
          description: CoverLetterUpdatableData?.conatct_descp,
          setDescription: CoverLetter30Data?.setConatct_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
  ];

  const template30DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 31 Data

  const template31Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template31DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter31Data?.setName,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter31Data?.setPosition,
        },
      ],
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template31DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 32 Data

  const template32Color = {
    sidePanelBgColor: '#F39200',
    sidePanelTextColor: '#000000',
  };

  const template32DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter32Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter32Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template32DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 33 Data

  const template33Color = {
    sidePanelBgColor: '#446432',
    sidePanelTextColor: '#000000',
  };

  const template33DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter33Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter33Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template33DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 34 Data

  const template34Color = {
    sidePanelBgColor: '#F9B233',
    sidePanelTextColor: '#000000',
  };

  const template34DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter34Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter34Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template34DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 35 Data

  const template35Color = {
    sidePanelBgColor: '#49919E',
    sidePanelTextColor: '#000000',
  };

  const template35DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter35Data?.setName,
      nameChar: CoverLetterUpdatableData?.nameChar,
      setNameChar: CoverLetter35Data?.setNameChar,
      headLine: CoverLetterUpdatableData?.headLine,
      setHeadLine: CoverLetter35Data?.setHeadLine,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter35Data?.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template35DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 36 Data

  const template36Color = {
    sidePanelBgColor: '#F39200',
    sidePanelTextColor: '#000000',
  };

  const template36DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter36Data?.setName,
      position: CoverLetterUpdatableData?.position,
      setPosition: CoverLetter36Data?.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.profile_description,
          setDescription: CoverLetter36Data?.setProfile_description,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template36DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 37 Data

  const template37Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template37DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter37Data?.setName,
      description: [
        {
          key: 8854,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter37Data?.setPosition,
        },
      ],
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template37DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 38 Data

  const template38Color = {
    sidePanelBgColor: '#E94E1B',
    sidePanelTextColor: '#000000',
  };

  const template38DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter38Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter38Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template38DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 39 Data

  const template39Color = {
    sidePanelBgColor: '#F9B233',
    sidePanelTextColor: '#000000',
  };

  const template39DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter39Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter39Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template39DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Template 40 Data

  const template40Color = {
    sidePanelBgColor: '#EDEDED',
    sidePanelTextColor: '#000000',
  };

  const template40DataLeftSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      tagLine: CoverLetterUpdatableData?.tagLine,
      setTagLine: CoverLetter40Data?.setTagLine,
      heading: CoverLetterUpdatableData?.name,
      setHeading: CoverLetter40Data?.setName,
      subSection: false,
      description: [
        {
          key: 9031,
          description: CoverLetterUpdatableData?.position,
          setDescription: CoverLetter40Data?.setPosition,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template40DataRightSection = [
    {
      key: 6,
      class: 'block',

      subSection: true,
      description: CategoryUpdatableData && CategoryUpdatableData,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // // console.log(dataUpdatableRight)
  // // console.log(dataUpdatableLeft)

  // */*****************************************************************************************************************\*

  // Condition to select data for different Templates
  // prettier-ignore
  const setDataUpdatableRightConditions = CategoryUpdatableData && (
    chosenDesign === 'design_1' ? template1DataRightSection
      : chosenDesign === 'design_2' ? template2DataRightSection
      : chosenDesign === 'design_3' ? template3DataRightSection
      : chosenDesign === 'design_4' ? template4DataRightSection
      : chosenDesign === 'design_5' ? template5DataRightSection
      : chosenDesign === 'design_6' ? template6DataRightSection
      : chosenDesign === 'design_7' ? template7DataRightSection
      : chosenDesign === 'design_8' ? template8DataRightSection
      : chosenDesign === 'design_9' ? template9DataRightSection
      : chosenDesign === 'design_10' ? template10DataRightSection
      : chosenDesign === 'design_11' ? template11DataRightSection
      : chosenDesign === 'design_12' ? template12DataRightSection
      : chosenDesign === 'design_13' ? template13DataRightSection
      : chosenDesign === 'design_14' ? template14DataRightSection
      : chosenDesign === 'design_15' ? template15DataRightSection
      : chosenDesign === 'design_16' ? template16DataRightSection
      : chosenDesign === 'design_17' ? template17DataRightSection
      : chosenDesign === 'design_18' ? template18DataRightSection
      : chosenDesign === 'design_19' ? template19DataRightSection
      : chosenDesign === 'design_20' ? template20DataRightSection
      : chosenDesign === 'design_21' ? template21DataRightSection
      : chosenDesign === 'design_22' ? template22DataRightSection
      : chosenDesign === 'design_23' ? template23DataRightSection
      : chosenDesign === 'design_24' ? template24DataRightSection
      : chosenDesign === 'design_25' ? template25DataRightSection
      : chosenDesign === 'design_26' ? template26DataRightSection
      : chosenDesign === 'design_27' ? template27DataRightSection
      : chosenDesign === 'design_28' ? template28DataRightSection
      : chosenDesign === 'design_29' ? template29DataRightSection
      : chosenDesign === 'design_30' ? template30DataRightSection
      : chosenDesign === 'design_31' ? template31DataRightSection
      : chosenDesign === 'design_32' ? template32DataRightSection
      : chosenDesign === 'design_33' ? template33DataRightSection
      : chosenDesign === 'design_34' ? template34DataRightSection
      : chosenDesign === 'design_35' ? template35DataRightSection
      : chosenDesign === 'design_36' ? template36DataRightSection
      : chosenDesign === 'design_37' ? template37DataRightSection
      : chosenDesign === 'design_38' ? template38DataRightSection
      : chosenDesign === 'design_39' ? template39DataRightSection
      : chosenDesign === 'design_40' ? template40DataRightSection
      : null);
  // prettier-ignore
  const setDataUpdatableLeftConditions = CoverLetterUpdatableData &&(
    chosenDesign === 'design_1' ? template1DataLeftSection
      : chosenDesign === 'design_2' ? template2DataLeftSection
      : chosenDesign === 'design_3' ? template3DataLeftSection
      : chosenDesign === 'design_4' ? template4DataLeftSection
      : chosenDesign === 'design_5' ? template5DataLeftSection
      : chosenDesign === 'design_6' ? template6DataLeftSection
      : chosenDesign === 'design_7' ? template7DataLeftSection
      : chosenDesign === 'design_8' ? template8DataLeftSection
      : chosenDesign === 'design_9' ? template9DataLeftSection
      : chosenDesign === 'design_10' ? template10DataLeftSection
      : chosenDesign === 'design_11' ? template11DataLeftSection
      : chosenDesign === 'design_12' ? template12DataLeftSection
      : chosenDesign === 'design_13' ? template13DataLeftSection
      : chosenDesign === 'design_14' ? template14DataLeftSection
      : chosenDesign === 'design_15' ? template15DataLeftSection
      : chosenDesign === 'design_16' ? template16DataLeftSection
      : chosenDesign === 'design_17' ? template17DataLeftSection
      : chosenDesign === 'design_18' ? template18DataLeftSection
      : chosenDesign === 'design_19' ? template19DataLeftSection
      : chosenDesign === 'design_20' ? template20DataLeftSection
      : chosenDesign === 'design_21' ? template21DataLeftSection
      : chosenDesign === 'design_22' ? template22DataLeftSection
      : chosenDesign === 'design_23' ? template23DataLeftSection
      : chosenDesign === 'design_24' ? template24DataLeftSection
      : chosenDesign === 'design_25' ? template25DataLeftSection
      : chosenDesign === 'design_26' ? template26DataLeftSection
      : chosenDesign === 'design_27' ? template27DataLeftSection
      : chosenDesign === 'design_28' ? template28DataLeftSection
      : chosenDesign === 'design_29' ? template29DataLeftSection
      : chosenDesign === 'design_30' ? template30DataLeftSection
      : chosenDesign === 'design_31' ? template31DataLeftSection
      : chosenDesign === 'design_32' ? template32DataLeftSection
      : chosenDesign === 'design_33' ? template33DataLeftSection
      : chosenDesign === 'design_34' ? template34DataLeftSection
      : chosenDesign === 'design_35' ? template35DataLeftSection
      : chosenDesign === 'design_36' ? template36DataLeftSection
      : chosenDesign === 'design_37' ? template37DataLeftSection
      : chosenDesign === 'design_38' ? template38DataLeftSection
      : chosenDesign === 'design_39' ? template39DataLeftSection
      : chosenDesign === 'design_40' ? template40DataLeftSection
      : null);

  // Design Selector

  // console.log(setDataUpdatableRightConditions);

  // prettier-ignore
  const DesignSelector = chosenDesign === 'design_1' ? 'design_1' : chosenDesign === 'design_2' ? 'design_2' : chosenDesign === 'design_3' ? 'design_3' : chosenDesign === 'design_4' ? 'design_4' : chosenDesign === 'design_5' ? 'design_5' : chosenDesign === 'design_6' ? 'design_6' : chosenDesign === 'design_7' ? 'design_7' : chosenDesign === 'design_8' ? 'design_8' : chosenDesign === 'design_9' ? 'design_9' : chosenDesign === 'design_10' ? 'design_10' : chosenDesign === 'design_11' ? 'design_11' : chosenDesign === 'design_12' ? 'design_12' : chosenDesign === 'design_13' ? 'design_13' : chosenDesign === 'design_14' ? 'design_14' : chosenDesign === 'design_15' ? 'design_15' : chosenDesign === 'design_16' ? 'design_16' : chosenDesign === 'design_17' ? 'design_17' : chosenDesign === 'design_18' ? 'design_18' : chosenDesign === 'design_19' ? 'design_19' : chosenDesign === 'design_20' ? 'design_20' : chosenDesign === 'design_21' ? 'design_21' : chosenDesign === 'design_22' ? 'design_22' : chosenDesign === 'design_23' ? 'design_23' : chosenDesign === 'design_24' ? 'design_24' : chosenDesign === 'design_25' ? 'design_25' : chosenDesign === 'design_26' ? 'design_26' : chosenDesign === 'design_27' ? 'design_27' : chosenDesign === 'design_28' ? 'design_28' : chosenDesign === 'design_29' ? 'design_29' : chosenDesign === 'design_30' ? 'design_30' : chosenDesign === 'design_31' ? 'design_31' : chosenDesign === 'design_32' ? 'design_32' : chosenDesign === 'design_33' ? 'design_33' : chosenDesign === 'design_34' ? 'design_34' : chosenDesign === 'design_35' ? 'design_35' : chosenDesign === 'design_36' ? 'design_36' : chosenDesign === 'design_37' ? 'design_37' : chosenDesign === 'design_38' ? 'design_38' : chosenDesign === 'design_39' ? 'design_39' : chosenDesign === 'design_40' ? 'design_40' : null;

  // Templates Color Selector
  // prettier-ignore
  const setSidePanelBgColorSelector =
    chosenDesign === 'design_1' ? template1Color.sidePanelBgColor
      : chosenDesign === 'design_2' ? template2Color.sidePanelBgColor
      : chosenDesign === 'design_3' ? template3Color.sidePanelBgColor
      : chosenDesign === 'design_4' ? template4Color.sidePanelBgColor
      : chosenDesign === 'design_5' ? template5Color.sidePanelBgColor
      : chosenDesign === 'design_6' ? template6Color.sidePanelBgColor
      : chosenDesign === 'design_7' ? template7Color.sidePanelBgColor
      : chosenDesign === 'design_8' ? template8Color.sidePanelBgColor
      : chosenDesign === 'design_9' ? template9Color.sidePanelBgColor
      : chosenDesign === 'design_10' ? template10Color.sidePanelBgColor
      : chosenDesign === 'design_11' ? template11Color.sidePanelBgColor
      : chosenDesign === 'design_12' ? template12Color.sidePanelBgColor
      : chosenDesign === 'design_13' ? template13Color.sidePanelBgColor
      : chosenDesign === 'design_14' ? template14Color.sidePanelBgColor
      : chosenDesign === 'design_15' ? template15Color.sidePanelBgColor
      : chosenDesign === 'design_16' ? template16Color.sidePanelBgColor
      : chosenDesign === 'design_17' ? template17Color.sidePanelBgColor
      : chosenDesign === 'design_18' ? template18Color.sidePanelBgColor
      : chosenDesign === 'design_19' ? template19Color.sidePanelBgColor
      : chosenDesign === 'design_20' ? template20Color.sidePanelBgColor
      : chosenDesign === 'design_21' ? template21Color.sidePanelBgColor
      : chosenDesign === 'design_22' ? template22Color.sidePanelBgColor
      : chosenDesign === 'design_23' ? template23Color.sidePanelBgColor
      : chosenDesign === 'design_24' ? template24Color.sidePanelBgColor
      : chosenDesign === 'design_25' ? template25Color.sidePanelBgColor
      : chosenDesign === 'design_26' ? template26Color.sidePanelBgColor
      : chosenDesign === 'design_27' ? template27Color.sidePanelBgColor
      : chosenDesign === 'design_28' ? template28Color.sidePanelBgColor
      : chosenDesign === 'design_29' ? template29Color.sidePanelBgColor
      : chosenDesign === 'design_30' ? template30Color.sidePanelBgColor
      : chosenDesign === 'design_31' ? template31Color.sidePanelBgColor
      : chosenDesign === 'design_32' ? template32Color.sidePanelBgColor
      : chosenDesign === 'design_33' ? template33Color.sidePanelBgColor
      : chosenDesign === 'design_34' ? template34Color.sidePanelBgColor
      : chosenDesign === 'design_35' ? template35Color.sidePanelBgColor
      : chosenDesign === 'design_36' ? template36Color.sidePanelBgColor
      : chosenDesign === 'design_37' ? template37Color.sidePanelBgColor
      : chosenDesign === 'design_38' ? template38Color.sidePanelBgColor
      : chosenDesign === 'design_39' ? template39Color.sidePanelBgColor
      : chosenDesign === 'design_40' ? template40Color.sidePanelBgColor
      : null;
  // prettier-ignore
  const setSidePanelTextColorSelector =
    chosenDesign === 'design_1' ? template1Color.sidePanelTextColor
      : chosenDesign === 'design_2' ? template2Color.sidePanelTextColor
      : chosenDesign === 'design_3' ? template3Color.sidePanelTextColor
      : chosenDesign === 'design_4' ? template4Color.sidePanelTextColor
      : chosenDesign === 'design_5' ? template5Color.sidePanelTextColor
      : chosenDesign === 'design_6' ? template6Color.sidePanelTextColor
      : chosenDesign === 'design_7' ? template7Color.sidePanelTextColor
      : chosenDesign === 'design_8' ? template8Color.sidePanelTextColor
      : chosenDesign === 'design_9' ? template9Color.sidePanelTextColor
      : chosenDesign === 'design_10' ? template10Color.sidePanelTextColor
      : chosenDesign === 'design_11' ? template11Color.sidePanelTextColor
      : chosenDesign === 'design_12' ? template12Color.sidePanelTextColor
      : chosenDesign === 'design_13' ? template13Color.sidePanelTextColor
      : chosenDesign === 'design_14' ? template14Color.sidePanelTextColor
      : chosenDesign === 'design_15' ? template15Color.sidePanelTextColor
      : chosenDesign === 'design_16' ? template16Color.sidePanelTextColor
      : chosenDesign === 'design_17' ? template17Color.sidePanelTextColor
      : chosenDesign === 'design_18' ? template18Color.sidePanelTextColor
      : chosenDesign === 'design_19' ? template19Color.sidePanelTextColor
      : chosenDesign === 'design_20' ? template20Color.sidePanelTextColor
      : chosenDesign === 'design_21' ? template21Color.sidePanelTextColor
      : chosenDesign === 'design_22' ? template22Color.sidePanelTextColor
      : chosenDesign === 'design_23' ? template23Color.sidePanelTextColor
      : chosenDesign === 'design_24' ? template24Color.sidePanelTextColor
      : chosenDesign === 'design_25' ? template25Color.sidePanelTextColor
      : chosenDesign === 'design_26' ? template26Color.sidePanelTextColor
      : chosenDesign === 'design_27' ? template27Color.sidePanelTextColor
      : chosenDesign === 'design_28' ? template28Color.sidePanelTextColor
      : chosenDesign === 'design_29' ? template29Color.sidePanelTextColor
      : chosenDesign === 'design_30' ? template30Color.sidePanelTextColor
      : chosenDesign === 'design_31' ? template31Color.sidePanelTextColor
      : chosenDesign === 'design_32' ? template32Color.sidePanelTextColor
      : chosenDesign === 'design_33' ? template33Color.sidePanelTextColor
      : chosenDesign === 'design_34' ? template34Color.sidePanelTextColor
      : chosenDesign === 'design_35' ? template35Color.sidePanelTextColor
      : chosenDesign === 'design_36' ? template36Color.sidePanelTextColor
      : chosenDesign === 'design_37' ? template37Color.sidePanelTextColor
      : chosenDesign === 'design_38' ? template38Color.sidePanelTextColor
      : chosenDesign === 'design_39' ? template39Color.sidePanelTextColor
      : chosenDesign === 'design_40' ? template40Color.sidePanelTextColor
      : null;
  // prettier-ignore
  const setMainPanelBgColorSelector =
        chosenDesign === 'design_1' ? null
      : chosenDesign === 'design_3' ? template3Color.mainPanelBgColor
      : chosenDesign === 'design_7' ? template7Color.mainPanelBgColor
      : chosenDesign === 'design_12' ? template12Color.mainPanelBgColor
      : null;

  const headingTextStyleConditions = documentHeadingTextStyle === 'Arial' ? 'arial-h ' : documentHeadingTextStyle === 'Arial Narrow' ? 'arial_Narrow-h ' : documentHeadingTextStyle === 'Avenir' ? 'avenir-h ' : documentHeadingTextStyle === 'Book Antiqua' ? 'book_Antiqua-h ' : documentHeadingTextStyle === 'Calibri' ? 'calibri-h ' : documentHeadingTextStyle === 'Cambria' ? 'cambria-h' : documentHeadingTextStyle === 'Century Sans' ? 'century_Sans-h ' : documentHeadingTextStyle === 'Constantia' ? 'constantia-h ' : documentHeadingTextStyle === 'Garamond' ? 'garamond-h ' : documentHeadingTextStyle === 'Geneva' ? 'geneva-h ' : documentHeadingTextStyle === 'Georama' ? 'georama-h ' : documentHeadingTextStyle === 'Georgia' ? 'georgia-h ' : documentHeadingTextStyle === 'Gill Sans' ? 'gill_Sans-h ' : documentHeadingTextStyle === 'Helvetica' ? 'helvetica-h ' : documentHeadingTextStyle === 'Karla' ? 'karla-h ' : documentHeadingTextStyle === 'Lato' ? 'lato-h ' : documentHeadingTextStyle === 'Merriweather' ? 'merriweather-h ' : documentHeadingTextStyle === 'Montserrat' ? 'montserrat-h ' : documentHeadingTextStyle === 'Open Sans' ? 'open_Sans-h ' : documentHeadingTextStyle === 'Oswald' ? 'oswald-h ' : documentHeadingTextStyle === 'Poppins' ? 'poppins-h ' : documentHeadingTextStyle === 'Raleway' ? 'raleway-h ' : documentHeadingTextStyle === 'Roboto' ? 'roboto-h ' : documentHeadingTextStyle === 'Tahoma' ? 'tahoma-h ' : documentHeadingTextStyle === 'Trebuche t MS' ? 'trebuchet_MS-h ' : documentHeadingTextStyle === 'Ubuntu' ? 'ubuntu-h ' : documentHeadingTextStyle === 'Veranda' ? 'veranda-h ' : null; // prettier-ignore

  const bodyTextStyleConditions = documentBodyTextStyle === 'Arial' ? 'arial-p ' : documentBodyTextStyle === 'Arial Narrow' ? 'arial_Narrow-p ' : documentBodyTextStyle === 'Avenir' ? 'avenir-p ' : documentBodyTextStyle === 'Book Antiqua' ? 'book_Antiqua-p ' : documentBodyTextStyle === 'Calibri' ? 'calibri-p ' : documentBodyTextStyle === 'Cambria' ? 'cambria-p' : documentBodyTextStyle === 'Century Sans' ? 'century_Sans-p ' : documentBodyTextStyle === 'Constantia' ? 'constantia-p ' : documentBodyTextStyle === 'Garamond' ? 'garamond-p ' : documentBodyTextStyle === 'Geneva' ? 'geneva-p ' : documentBodyTextStyle === 'Georama' ? 'georama-p ' : documentBodyTextStyle === 'Georgia' ? 'georgia-p ' : documentBodyTextStyle === 'Gill Sans' ? 'gill_Sans-p ' : documentBodyTextStyle === 'Helvetica' ? 'helvetica-p ' : documentBodyTextStyle === 'Karla' ? 'karla-p ' : documentBodyTextStyle === 'Lato' ? 'lato-p ' : documentBodyTextStyle === 'Merriweather' ? 'merriweather-p ' : documentBodyTextStyle === 'Montserrat' ? 'montserrat-p ' : documentBodyTextStyle === 'Open Sans' ? 'open_Sans-p ' : documentBodyTextStyle === 'Oswald' ? 'oswald-p ' : documentBodyTextStyle === 'Poppins' ? 'poppins-p ' : documentBodyTextStyle === 'Raleway' ? 'raleway-p ' : documentBodyTextStyle === 'Roboto' ? 'roboto-p ' : documentBodyTextStyle === 'Tahoma' ? 'tahoma-p ' : documentBodyTextStyle === 'Trebuchet MS' ? 'trebuchet_MS-p ' : documentBodyTextStyle === 'Ubuntu' ? 'ubuntu-p ' : documentBodyTextStyle === 'Veranda' ? 'veranda-p ' : null; // prettier-ignore

  const headingTextSizeConditions = documentBodyTextSize === 'Very Small' ? 'heading_verySmall' : documentBodyTextSize === 'Small' ? 'heading_small' : documentBodyTextSize === 'Medium' ? 'heading_medium' : documentBodyTextSize === 'Large' ? 'heading_large' : null; // prettier-ignore

  const bodyTextSizeConditions = documentBodyTextSize === 'Very Small' ? 'body_verySmall' : documentBodyTextSize === 'Small' ? 'body_small' : documentBodyTextSize === 'Medium' ? 'body_medium' : documentBodyTextSize === 'Large' ? 'body_large' : null; // prettier-ignore

  const [dataUpdatableRight, setDataUpdatableRight] = useState(setDataUpdatableRightConditions); // prettier-ignore
  const [dataUpdatableLeft, setDataUpdatableLeft] = useState(setDataUpdatableLeftConditions); // prettier-ignore
  // console.log(dataUpdatableLeft);
  useEffect(() => {
    setDataUpdatableRight(setDataUpdatableRightConditions);
    setDataUpdatableLeft(setDataUpdatableLeftConditions);
  }, [CategoryUpdatableData, CoverLetterUpdatableData]);
  // Template Colors

  const [sidePanelBgColor, setSidePanelBgColor] = useState( setSidePanelBgColorSelector ); // prettier-ignore
  const [sidePanelTextColor, setSidePanelTextColor] = useState( setSidePanelTextColorSelector ); // prettier-ignore
  const [mainPanelBgColor, setMainPanelBgColor] = useState(setMainPanelBgColorSelector); // prettier-ignore

  const pageDocumentData = JSON.stringify({
    type: 'cover_letter',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    design: DesignSelector,
    category: chosenCategory,
    pageEditorData: { designDataSelector, categoryData: categorySelector },
  });
  const saveCoverLetterData = {
    userId: userId,
    documentName: document_name,
    documentData: pageDocumentData,
  };
  // console.log(categorySelector);
  // console.log({ ...categorySelector, ...CategoryUpdatableData });
  // console.log({ designDataSelector, categoryData: categorySelector });

  const [pageNo, setPageNo] = useState(1);

  const TemplatesPagesData = [
    {
      key: 1,
      design: DesignSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
  ];
  const [pageUpdatableData, setPageUpdatableData] = useState(
    CoverLetterUpdatableData && CategoryUpdatableData
      ? TemplatesPagesData
      : coverLetterId
      ? null
      : TemplatesPagesData
  );
  // console.log(pageUpdatableData);
  useEffect(() => {
    setPageUpdatableData(TemplatesPagesData);
  }, [dataUpdatableRight, dataUpdatableLeft]);
  useEffect(() => {
    setPageUpdatableData(
      CoverLetterUpdatableData && CategoryUpdatableData
        ? TemplatesPagesData
        : coverLetterId
        ? null
        : TemplatesPagesData
    );
  }, []);

  // useEffect(() => {

  // }, [])

  const login_Modal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
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
        );
      },
    });
  };

  // const go_to_another_page_Modal_old = (template, type) => {
  const go_to_another_page_Modal_old = (name, designPage) => {
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
                      history.push(`/CoverLetter/${name}/${designPage}`),
                      window.location.reload()
                    )}
                    className='login_modal_secondary_btn'
                  >
                    Yes
                  </button>
                </a>
              </div>
              {/* <button onClick={onClose}>No</button> */}
            </div>
          </div>
        );
      },
    });
  };
  const go_to_another_page_Modal = (template, type, chosenCategory) => {
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
                      // history.push(`/CoverLetter/${name}/${designPage}`),
                      // window.location.reload()
                      type === 'category'
                        ? setChosenCategory(template)
                        : type === 'design'
                        ? (setChosenDesign(template),
                          history.push(
                            `/CoverLetter/${chosenCategory}/${template}`
                          ))
                        : null,
                      onClose()
                    )}
                    className='login_modal_secondary_btn'
                  >
                    Yes
                  </button>
                </a>
              </div>
              {/* <button onClick={onClose}>No</button> */}
            </div>
          </div>
        );
      },
    });
  };
  useEffect(() => {
    CategoryUpdatableData &&
      setDataUpdatableRight(setDataUpdatableRightConditions);
    CoverLetterUpdatableData &&
      setDataUpdatableLeft(setDataUpdatableLeftConditions);
    setSidePanelBgColor(setSidePanelBgColorSelector);
    setSidePanelTextColor(setSidePanelTextColorSelector);
    CoverLetterUpdatableData &&
      setMainPanelBgColor(setMainPanelBgColorSelector);
  }, []);

  function updateCoverLetterDocument() {
    return coverLetterId && pageUpdatableData === null ? (
      <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
      // <div className='builder_loader_wrapper'>Here</div>
      <CoverLetterDocumentViewOnly share={share} readOnly={true} coverLetterId={coverLetterId} saveCoverLetterData={saveCoverLetterData} pageDocumentData={pageDocumentData}  document_name={coverLetterId ? coverLetterData?.documentName : document_name}  setDocument_name={setDocument_name} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} chosenDesign={chosenDesign} setDesign={setChosenDesign} addSectionModal={addSectionModal} addSectionModalBG={addSectionModalBG} pageBorderColor={pageBorderColor} pageBorderWidth={pageBorderWidth} pageBorderStyle={pageBorderStyle} borderedPage={borderedPage} headingTextStyleConditions={headingTextStyleConditions} bodyTextStyleConditions={bodyTextStyleConditions} headingTextSizeConditions={headingTextSizeConditions} bodyTextSizeConditions={bodyTextSizeConditions} mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} pageUpdatableData={pageUpdatableData} pageLayout={pageLayout} lineHeight={lineHeight} docummentMargin={docummentMargin} docummentDateFormat={docummentDateFormat} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> // prettier-ignore
    );
  }

  useEffect(() => {
    setKey(key + 1);
    setPageNo(pageNo + 1);
    CoverLetterUpdatableData &&
      CategoryUpdatableData &&
      dataUpdatableRight &&
      setPageUpdatableData([
        {
          key: 1,
          design: DesignSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo,
        },
      ]);
    updateCoverLetterDocument();
  }, [
    chosenDesign,
    chosenCategory,
    CoverLetterUpdatableData,
    CategoryUpdatableData,
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (!userLoggedIn) {
        localStorage.setItem('pageData', pageDocumentData);
        loginPopup.current.style.display = 'flex'; // modal visible
        loginPopupBG.current.style.display = 'flex'; // modal bg visible
      }
    }, 20000);
  }, []);

  // // console.log(chosenCategory);

  return (
    <div className='builder'>
      <BuilderHeader
        builderData={{ length: 0 }}
        userLoggedIn={userLoggedIn}
        userData={userData}
        coverLetter={true}
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
