import React, { useState, useEffect, useRef } from 'react';
// import {Link} from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ThreeDots } from 'react-loader-spinner';
import moment from 'moment';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import BuilderSubHeader from '../../Components/BuilderWrapper/BuilderSubHeader/BuilderSubHeader';
import BuilderDocument from '../../Components/BuilderWrapper/BuilderDocument/BuilderDocument';

import BLANKTEMPLATEDATA from '../../Components/BlankTemplate/blankTemplateData';

import Template1Data from '../../Components/Templates/Template1/Template1Data';

import Template2Data from '../../Components/Templates/Template2/Template2Data';

import Template3Data from '../../Components/Templates/Template3/Template3Data';

import Template4Data from '../../Components/Templates/Template4/Template4Data';

import Template5Data from '../../Components/Templates/Template5/Template5Data';

import Template6Data from '../../Components/Templates/Template6/Template6Data';

import Template7Data from '../../Components/Templates/Template7/Template7Data';

import Template8Data from '../../Components/Templates/Template8/Template8Data';

import Template9Data from '../../Components/Templates/Template9/Template9Data';

import Template10Data from '../../Components/Templates/Template10/Template10Data';

import Template11Data from '../../Components/Templates/Template11/Template11Data';

import Template12Data from '../../Components/Templates/Template12/Template12Data';

import Template13Data from '../../Components/Templates/Template13/Template13Data';

import Template14Data from '../../Components/Templates/Template14/Template14Data';

import Template15Data from '../../Components/Templates/Template15/Template15Data';

import Template16Data from '../../Components/Templates/Template16/Template16Data';

import Template17Data from '../../Components/Templates/Template17/Template17Data';

import Template18Data from '../../Components/Templates/Template18/Template18Data';

import Template19Data from '../../Components/Templates/Template19/Template19Data';

import Template20Data from '../../Components/Templates/Template20/Template20Data';

import Template21Data from '../../Components/Templates/Template21/Template21Data';

import Template22Data from '../../Components/Templates/Template22/Template22Data';

import Template23Data from '../../Components/Templates/Template23/Template23Data';

import Template24Data from '../../Components/Templates/Template24/Template24Data';

import Template25Data from '../../Components/Templates/Template25/Template25Data';

import Template26Data from '../../Components/Templates/Template26/Template26Data';

import Template27Data from '../../Components/Templates/Template27/Template27Data';

import Template28Data from '../../Components/Templates/Template28/Template28Data';

import Template29Data from '../../Components/Templates/Template29/Template29Data';

import Template30Data from '../../Components/Templates/Template30/Template30Data';

import ExecutiveTemplate1Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate1/ExecutiveTemplate1Data';

import ExecutiveTemplate2Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate2/ExecutiveTemplate2Data';

import ExecutiveTemplate3Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate3/ExecutiveTemplate3Data';

import ExecutiveTemplate4Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate4/ExecutiveTemplate4Data';

import ExecutiveTemplate5Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate5/ExecutiveTemplate5Data';

import ExecutiveTemplate6Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate6/ExecutiveTemplate6Data';

import ExecutiveTemplate7Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate7/ExecutiveTemplate7Data';

import ExecutiveTemplate8Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate8/ExecutiveTemplate8Data';

import ExecutiveTemplate9Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate9/ExecutiveTemplate9Data';

import ExecutiveTemplate10Data from '../../Components/ExecutiveTemplates/ExecutiveTemplate10/ExecutiveTemplate10Data';

import Accordion from 'react-bootstrap/Accordion';

import { get_resume_by_id } from '../../API';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Builder({
  setUserLoggedIn,
  userData,
  userLoggedIn,
  isSubscriptionExpired,
}) {
  const { chosenTemplate, resumeId } = useParams();
  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [resumeData, setResumeData] = useState(null);
  const [document_name, setDocument_name] = useState('');

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getResumeData = async () => {
    await get_resume_by_id(resumeId, config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setResumeData({
          ...res?.data,
          documentData: JSON.parse(res?.data.documentData),
        });
        setDocument_name(res?.data.documentName);
      }
    });
  };
  useEffect(() => {
    resumeId && getResumeData();
  }, []);

  const [template, setTemplate] = useState(chosenTemplate || 'blankTemplate');
  const history = useHistory();

  const { BlankTemplateData } = BLANKTEMPLATEDATA();
  const { template1Data } = Template1Data();
  const { template2Data } = Template2Data();
  const { template3Data } = Template3Data();
  const { template4Data } = Template4Data();
  const { template5Data } = Template5Data();
  const { template6Data } = Template6Data();
  const { template7Data } = Template7Data();
  const { template8Data } = Template8Data();
  const { template9Data } = Template9Data();
  const { template10Data } = Template10Data();
  const { template11Data } = Template11Data();
  const { template12Data } = Template12Data();
  const { template13Data } = Template13Data();
  const { template14Data } = Template14Data();
  const { template15Data } = Template15Data();
  const { template16Data } = Template16Data();
  const { template17Data } = Template17Data();
  const { template18Data } = Template18Data();
  const { template19Data } = Template19Data();
  const { template20Data } = Template20Data();
  const { template21Data } = Template21Data();
  const { template22Data } = Template22Data();
  const { template23Data } = Template23Data();
  const { template24Data } = Template24Data();
  const { template25Data } = Template25Data();
  const { template26Data } = Template26Data();
  const { template27Data } = Template27Data();
  const { template28Data } = Template28Data();
  const { template29Data } = Template29Data();
  const { template30Data } = Template30Data();
  const { executiveTemplate1Data } = ExecutiveTemplate1Data();
  const { executiveTemplate2Data } = ExecutiveTemplate2Data();
  const { executiveTemplate3Data } = ExecutiveTemplate3Data();
  const { executiveTemplate4Data } = ExecutiveTemplate4Data();
  const { executiveTemplate5Data } = ExecutiveTemplate5Data();
  const { executiveTemplate6Data } = ExecutiveTemplate6Data();
  const { executiveTemplate7Data } = ExecutiveTemplate7Data();
  const { executiveTemplate8Data } = ExecutiveTemplate8Data();
  const { executiveTemplate9Data } = ExecutiveTemplate9Data();
  const { executiveTemplate10Data } = ExecutiveTemplate10Data();

  const templateDataSelector = template === 'blankTemplate' ? BlankTemplateData : template === 'template_1' ? template1Data : template === 'template_2' ? template2Data : template === 'template_3' ? template3Data : template === 'template_4' ? template4Data : template === 'template_5' ? template5Data : template === 'template_6' ? template6Data : template === 'template_7' ? template7Data : template === 'template_8' ? template8Data : template === 'template_9' ? template9Data : template === 'template_10' ? template10Data : template === 'template_11' ? template11Data : template === 'template_12' ? template12Data : template === 'template_13' ? template13Data : template === 'template_14' ? template14Data : template === 'template_15' ? template15Data : template === 'template_16' ? template16Data : template === 'template_17' ? template17Data : template === 'template_18' ? template18Data : template === 'template_19' ? template19Data : template === 'template_20' ? template20Data : template === 'template_21' ? template21Data : template === 'template_22' ? template22Data : template === 'template_23' ? template23Data : template === 'template_24' ? template24Data : template === 'template_25' ? template25Data : template === 'template_26' ? template26Data : template === 'template_27' ? template27Data : template === 'template_28' ? template28Data : template === 'template_29' ? template29Data : template === 'template_30' ? template30Data : template === 'executiveTemplate_1' ? executiveTemplate1Data : template === 'executiveTemplate_2' ? executiveTemplate2Data : template === 'executiveTemplate_3' ? executiveTemplate3Data : template === 'executiveTemplate_4' ? executiveTemplate4Data : template === 'executiveTemplate_5' ? executiveTemplate5Data : template === 'executiveTemplate_6' ? executiveTemplate6Data : template === 'executiveTemplate_7' ? executiveTemplate7Data : template === 'executiveTemplate_8' ? executiveTemplate8Data : template === 'executiveTemplate_9' ? executiveTemplate9Data : template === 'executiveTemplate_10' ? executiveTemplate10Data : null; // prettier-ignore

  const pageData = JSON.parse(localStorage.getItem('pageData'));
  const pageDataSelector =
    template === 'blankTemplate'
      ? (resumeData?.documentData.templateName === chosenTemplate
          ? resumeData?.documentData.pageEditorData
          : resumeId
          ? null
          : templateDataSelector) ?? templateDataSelector
      : resumeData?.documentData.templateName === chosenTemplate
      ? resumeData?.documentData.pageEditorData
      : resumeId
      ? null
      : templateDataSelector;
  //  ?? templateDataSelector;
  // const pageDataSelector = pageData?.templateName === chosenTemplate ? pageData.pageEditorData : templateDataSelector;
  const pageEditorData = resumeData?.documentData.pageEditorData;
  // console.log({ ...pageEditorData, ...templateDataSelector }); //,  resumeData?.documentData.pageEditorData
  const [templateUpdatableData, setTemplateUpdatableData] = useState(pageDataSelector); // prettier-ignore
  // console.log(
  //   (resumeData?.documentData.templateName === chosenTemplate
  //     ? resumeData?.documentData.pageEditorData
  //     : resumeId
  //     ? null
  //     : templateDataSelector) ?? templateDataSelector
  // );

  useEffect(() => {
    resumeId && setTemplateUpdatableData(pageDataSelector);
  }, [pageDataSelector]);
  useEffect(() => {
    !resumeId && setTemplateUpdatableData(templateDataSelector)
  }, [template]);
  // console.log(executiveTemplate10Data);
  const [active, setActive] = useState('resume');

  const [showChangeTemplateSidebar, setShowChangeTemplateSidebar] =
    useState(false);

  const addSectionModal = useRef('');
  const addSectionModalBG = useRef('');
  const loginPopup = useRef('');
  const loginPopupBG = useRef('');

  // SubHeader Style Variables
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

  const [key, setKey] = useState(10);

  const [showOnFirstPage, setShowOnFirstPage] = useState(true);
  const [showOnSecondPage, setShowOnSecondPage] = useState(true);
  const [showOnThirdPage, setShowOnThirdPage] = useState(true);

  // */*****************************************************************************************************************\*

  // Templates Data

  // */*********************************************************************\*

  // Blank Template Data

  const blankTemplateColor = {
    sidePanelBgColor: '#fff',
    sidePanelTextColor: '#000',
  };

  const blankTemplateDataLeftSection = [];

  const blankTemplateDataRightSection = [];

  // */*********************************************************************\*

  // Template 1 Data

  const template1Color = {
    sidePanelBgColor: '#ffe4c4',
    sidePanelTextColor: '#000',
  };

  const template1DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_1_heading,
      setHeading: template1Data.setExp_1_heading,
      subSection: true,
      description: [
        {
          key: 1440,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template1Data.setExp_1_description,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_2_heading,
      setHeading: template1Data.setExp_2_heading,
      subSection: true,
      description: [
        {
          key: 1430,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template1Data.setExp_2_description,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      heading: templateUpdatableData?.edu_heading,
      setHeading: template1Data.setEdu_heading,
      subSection: true,
      description: [
        {
          key: 1450,
          description: templateUpdatableData?.edu_description,
          setDescription: template1Data.setEdu_description,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      name: 'personal',
      heading: templateUpdatableData?.contact_heading,
      setHeading: template1Data.setContact_heading,
      subSection: true,
      description: [
        {
          key: 1476,
          description: templateUpdatableData?.contact_description,
          setDescription: template1Data.setContact_description,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template1DataRightSection = [
    {
      key: 5,
      class: 'blankTemplate_header section',
      heading: templateUpdatableData?.main_header,
      setHeading: template1Data.setMain_header,
      // heading: 'none',
      name: 'personal',
      subSection: false,
      // description: template1Data.main_header,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile_heading,
      setHeading: template1Data.setProfile_heading,
      subSection: true,
      description: [
        {
          key: 1260,
          description: templateUpdatableData?.profile_description,
          setDescription: template1Data.setProfile_description,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_1_heading,
      setHeading: template1Data.setMain_section_1_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_section_1_description,
          setDescription: template1Data.setMain_section_1_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_2_heading,
      setHeading: template1Data.setMain_section_2_heading,
      subSection: true,
      description: [
        {
          key: 1400,
          description: templateUpdatableData?.main_section_2_description,
          setDescription: template1Data.setMain_section_2_description,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      name: 'experience',
      class: 'block',
      heading: templateUpdatableData?.main_exp_heading,
      setHeading: template1Data.setMain_exp_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_exp_1_description,
          setDescription: template1Data.setMain_exp_1_description,
        },
        {
          key: 1101,
          description: templateUpdatableData?.main_exp_2_description,
          setDescription: template1Data.setMain_exp_2_description,
        },
        {
          key: 1102,
          description: templateUpdatableData?.main_exp_3_description,
          setDescription: template1Data.setMain_exp_3_description,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 2 Data

  const [skill_1_expertice, setSkill_1_expertice] = useState(80);
  const [skill_2_expertice, setSkill_2_expertice] = useState(50);
  const [skill_3_expertice, setSkill_3_expertice] = useState(30);
  const [skill_4_expertice, setSkill_4_expertice] = useState(90);
  const [skill_5_expertice, setSkill_5_expertice] = useState(70);
  const [skill_6_expertice, setSkill_6_expertice] = useState(40);
  const [skill_7_expertice, setSkill_7_expertice] = useState(80);
  const [skill_8_expertice, setSkill_8_expertice] = useState(30);
  const [skill_9_expertice, setSkill_9_expertice] = useState(60);

  const [language_1_expertice, setLanguage_1_expertice] = useState(80);
  const [language_2_expertice, setLanguage_2_expertice] = useState(60);
  const [language_3_expertice, setLanguage_3_expertice] = useState(20);
  const [language_4_expertice, setLanguage_4_expertice] = useState(70);

  const [software_1_expertice, setSoftware_1_expertice] = useState(100);
  const [software_2_expertice, setSoftware_2_expertice] = useState(80);
  const [software_3_expertice, setSoftware_3_expertice] = useState(60);

  const template2Color = {
    sidePanelBgColor: '#ccd8c5',
    mainPanelBgColor: '#f2f2f2',
    sidePanelTextColor: '#000',
  };

  const template2DataLeftSection = [
    {
      key: 1,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template2Data.setName,
      description: templateUpdatableData?.position,
      setDescription: template2Data.setPosition,
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      heading: templateUpdatableData?.profile,
      setHeading: template2Data.setProfile,
      subSection: true,
      name: 'professional',
      description: [
        {
          key: 1440,
          description: templateUpdatableData?.profile_description,
          setDescription: template2Data.setProfile_description,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      heading: templateUpdatableData?.contact,
      setHeading: template2Data.setContact,
      subSection: true,
      name: 'personal',
      description: [
        {
          key: 1440,
          description: templateUpdatableData?.contact_description,
          setDescription: template2Data.setContact_description,
        },
      ],
      ref: subSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
  ];

  const template2DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template2Data.setExperience,
      subSection: true,
      description: [
        {
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template2Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template2Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template2Data.setExp_1_description,
        },
        {
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template2Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template2Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template2Data.setExp_2_description,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      heading: templateUpdatableData?.education,
      setHeading: template2Data.setEducation,
      name: 'education',
      subSection: true,
      description: [
        {
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template2Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template2Data.setEdu_2_heading,
          description: templateUpdatableData?.edu_1_description,
          setDescription: template2Data.setEdu_2_description,
        },
        {
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template2Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template2Data.setEdu_2_heading,
          description: templateUpdatableData?.edu_2_description,
          setDescription: template2Data.setEdu_2_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      heading: templateUpdatableData?.skills,
      setHeading: template2Data.setSkills,
      subSection: false,
      name: 'skills',
      type: 'skills',
      description: [
        {
          key: 1101,
          name: templateUpdatableData?.skill_1,
          setSkill: template2Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 1102,
          name: templateUpdatableData?.skill_2,
          setSkill: template2Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 1103,
          name: templateUpdatableData?.skill_3,
          setSkill: template2Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 1104,
          name: templateUpdatableData?.skill_4,
          setSkill: template2Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 1105,
          name: templateUpdatableData?.skill_5,
          setSkill: template2Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 1106,
          name: templateUpdatableData?.skill_6,
          setSkill: template2Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 3 Data

  const template3Color = {
    sidePanelBgColor: '#333333',
    // mainPanelBgColor: '#f2f2f2',
    sidePanelTextColor: '#000',
  };

  const template3DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'personal',
      header: true,
      heading: [
        {
          name: templateUpdatableData?.name,
          setName: template3Data.setName,
          position: templateUpdatableData?.position,
          setPosition: template2Data.setPosition,
        },
      ],
      subSection: false,
      description: templateUpdatableData?.header_description,
      setDescription: template3Data.setHeader_description,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'achievement',
      heading: templateUpdatableData?.accomplishment,
      setHeading: template3Data.setAccomplishment,
      subSection: false,
      type: 'sections',
      description: [
        {
          key: 9762,
          description: templateUpdatableData?.accomplishment_description,
          setDescription: template3Data.setAccomplishment_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template3Data.setExperience,
      subSection: true,
      description: [
        {
          key: 1654,
          heading: templateUpdatableData?.exp_1_name,
          setHeading: template3Data.setExp_1_name,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template3Data.setExp_1_position,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template3Data.setExp_1_tenure,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template3Data.setExp_1_description,
        },
        {
          key: 1655,
          heading: templateUpdatableData?.exp_2_name,
          setHeading: template3Data.setExp_2_name,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template3Data.setExp_2_position,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template3Data.setExp_2_tenure,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template3Data.setExp_2_description,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template3Data.setEducation,
      subSection: 'education',
      description: [
        {
          key: 1234,
          heading: templateUpdatableData?.edu_1_name,
          setHeading: template3Data.setEdu_1_name,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template3Data.setEdu_1_tenure,
          description: templateUpdatableData?.edu_1_description,
          setDescription: template3Data.setEdu_1_description,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: ['skills', 'interests', 'languages'],
      footer: true,
      heading: [
        templateUpdatableData?.skills,
        templateUpdatableData?.interest,
        templateUpdatableData?.language,
      ],
      setHeading: [
        template3Data.setSkills,
        template3Data.setInterest,
        template3Data.setLanguage,
      ],
      subSection: false,
      type: 'skills',
      description: [
        [
          {
            key: 6751,
            title: 'skill_1',
            name: templateUpdatableData?.skill_1,
            setName: template3Data.setSkill_1,
            expertice: skill_1_expertice,
            setExpertice: setSkill_1_expertice,
          },
          {
            key: 6752,
            title: 'skill_2',
            name: templateUpdatableData?.skill_2,
            setName: template3Data.setSkill_2,
            expertice: skill_2_expertice,
            setExpertice: setSkill_2_expertice,
          },
          {
            key: 6753,
            title: 'skill_3',
            name: templateUpdatableData?.skill_3,
            setName: template3Data.setSkill_3,
            expertice: skill_3_expertice,
            setExpertice: setSkill_3_expertice,
          },
          {
            key: 6754,
            title: 'skill_4',
            name: templateUpdatableData?.skill_4,
            setName: template3Data.setSkill_4,
            expertice: skill_4_expertice,
            setExpertice: setSkill_4_expertice,
          },
          {
            key: 6755,
            title: 'skill_5',
            name: templateUpdatableData?.skill_5,
            setName: template3Data.setSkill_5,
            expertice: skill_5_expertice,
            setExpertice: setSkill_5_expertice,
          },
          {
            key: 6756,
            title: 'skill_6',
            name: templateUpdatableData?.skill_6,
            setName: template3Data.setSkill_6,
            expertice: skill_6_expertice,
            setExpertice: setSkill_6_expertice,
          },
          {
            key: 6757,
            title: 'skill_7',
            name: templateUpdatableData?.skill_7,
            setName: template3Data.setSkill_7,
            expertice: skill_7_expertice,
            setExpertice: setSkill_7_expertice,
          },
        ],
        templateUpdatableData?.interest_description,
        templateUpdatableData?.language_description,
      ],
      setDescription: [
        ,
        template3Data.setInterest_description,
        template3Data.setLanguage_description,
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];
  const template3DataLeftSection = [
    {
      data: null,
    },
  ];

  // */*********************************************************************\*

  // Template 4 Data

  const template4Color = {
    sidePanelBgColor: '#F5E9DA',
    sidePanelTextColor: '#453B3D',
  };

  const template4DataLeftSection = [
    {
      key: 1,
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template4Data.setName,
      description: templateUpdatableData?.position,
      setDescription: template4Data.setPosition,
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      subHeader: true,
      heading: [
        {
          data: templateUpdatableData?.phone,
          setData: template4Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template4Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.website,
          setData: template4Data.setWebsite,
          type: 'website',
        },
        {
          data: templateUpdatableData?.address,
          setData: template4Data.setAddress,
          type: 'address',
        },
      ],
      description: 'none',
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template4Data.setEducation,
      description: [
        {
          key: 1753,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template4Data.setEdu_1_descp,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      type: 'skills',
      name: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template4Data.setSkills,
      description: [
        {
          key: 5753,
          name: templateUpdatableData?.skill_1,
          setName: template4Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_2,
          setName: template4Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_3,
          setName: template4Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_4,
          setName: template4Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_5,
          setName: template4Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_6,
          setName: template4Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      name: 'languages',
      type: 'language_skills',
      heading: templateUpdatableData?.language,
      setHeading: template4Data.setLanguage,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.language_1,
          setName: template4Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 4656,
          name: templateUpdatableData?.language_2,
          setName: template4Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
      ],
      ref: subSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
    },
  ];

  const template4DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'professional',
      heading: templateUpdatableData?.profile,
      setHeading: template4Data.setProfile,
      subSection: false,
      description: [
        {
          key: 1945,
          description: templateUpdatableData?.profie_descp,
          setDescription: template4Data.setProfie_descp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template4Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template4Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_name,
          setHeading: template4Data.setExp_1_name,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template4Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template4Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_name,
          setHeading: template4Data.setExp_2_name,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template4Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'certification',
      heading: templateUpdatableData?.certificate,
      setHeading: template4Data.setCertificate,
      subSection: false,
      type: 'certificate',
      description: [
        {
          key: 1345,
          description: templateUpdatableData?.certificate_1,
          setDescription: template4Data.setCertificate_1,
        },
        {
          key: 1345,
          description: templateUpdatableData?.certificate_2,
          setDescription: template4Data.setCertificate_2,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 5 Data

  const template5Color = {
    sidePanelBgColor: '#E5E5E5',
    sidePanelTextColor: '#6C6360',
  };

  const template5DataLeftSection = [
    {
      data: null,
    },
  ];

  const template5DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template5Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template5Data.setPosition,
      subSection: false,
      description: [
        {
          data: templateUpdatableData?.phone,
          setData: template5Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.address,
          setData: template5Data.setAddress,
          type: 'address',
        },
        {
          data: templateUpdatableData?.email,
          setData: template5Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.linkedIn,
          setData: template5Data.setLinkedIn,
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
      key: 6,
      class: 'block',
      heading: 'none',
      subSection: false,
      description: [
        {
          key: 8567,
          description: templateUpdatableData?.main_descp,
          setDescription: template5Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template5Data.setExperience,
      subSection: true,
      description: [
        {
          key: 1763,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template5Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_name,
          setHeading: template5Data.setExp_1_name,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template5Data.setExp_1_description,
        },
        {
          key: 1764,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template5Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_name,
          setHeading: template5Data.setExp_2_name,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template5Data.setExp_2_description,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template5Data.setEducation,
      subSection: true,
      description: [
        {
          key: 1363,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template5Data.setEdu_1_tenure,
          heading: templateUpdatableData?.edu_1_name,
          setHeading: template5Data.setEdu_1_name,
          description: templateUpdatableData?.edu_1_description,
          setDescription: template5Data.setEdu_1_description,
        },
        {
          key: 1364,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template5Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_2_name,
          setHeading: template5Data.setEdu_2_name,
          description: templateUpdatableData?.edu_2_description,
          setDescription: template5Data.setEdu_2_description,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template5Data.setSkills,
      subSection: false,
      type: 'skills',
      description: [
        {
          key: 1785,
          description: templateUpdatableData?.skill_description,
          setDescription: template5Data.setSkill_description,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 10,
      class: 'block',
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template5Data.setSoftware,
      subSection: false,
      type: 'software',
      description: [
        {
          key: 8374,
          name: templateUpdatableData?.software_1,
          setName: template5Data.setSoftware_1,
          expertice: software_1_expertice,
          setExpertice: setSoftware_1_expertice,
        },
        {
          key: 8375,
          name: templateUpdatableData?.software_2,
          setName: template5Data.setSoftware_2,
          expertice: software_2_expertice,
          setExpertice: setSoftware_2_expertice,
        },
        {
          key: 8376,
          name: templateUpdatableData?.software_3,
          setName: template5Data.setSoftware_3,
          expertice: software_3_expertice,
          setExpertice: setSoftware_3_expertice,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 6 Data

  const template6Color = {
    sidePanelBgColor: '#2A2425',
    sidePanelTextColor: '#685F5D',
    templateHeadingTextColor: '#9B7645',
  };

  const template6DataLeftSection = [
    {
      key: 1,
      header: true,
      name: 'personal',
      heading: [
        {
          phone: templateUpdatableData?.phone,
          setPhone: template6Data.setPhone,
        },
        {
          email: templateUpdatableData?.email,
          setEmail: template6Data.setEmail,
        },
        {
          address: templateUpdatableData?.address,
          setAddress: template6Data.setAddress,
        },
      ],
      description: [
        {
          phoneDescp: templateUpdatableData?.phoneDescp,
          setPhoneDescp: template6Data.setPhoneDescp,
        },
        {
          emailDescp: templateUpdatableData?.emailDescp,
          setEmailDescp: template6Data.setEmailDescp,
        },
        {
          addressDescp: templateUpdatableData?.addressDescp,
          setAddressDescp: template6Data.setAddressDescp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      heading: templateUpdatableData?.skills,
      setHeading: template6Data.setSkills,
      name: 'skills',
      type: 'skills',
      description: [
        {
          key: 9851,
          name: templateUpdatableData?.skill_1,
          setName: template6Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 9852,
          name: templateUpdatableData?.skill_2,
          setName: template6Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 9853,
          name: templateUpdatableData?.skill_3,
          setName: template6Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 9854,
          name: templateUpdatableData?.skill_4,
          setName: template6Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 9855,
          name: templateUpdatableData?.skill_5,
          setName: template6Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 9856,
          name: templateUpdatableData?.skill_6,
          setName: template6Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 9857,
          name: templateUpdatableData?.skill_7,
          setName: template6Data.setSkill_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
        {
          key: 9858,
          name: templateUpdatableData?.skill_8,
          setName: template6Data.setSkill_8,
          expertice: skill_8_expertice,
          setExpertice: setSkill_8_expertice,
        },
        {
          key: 9859,
          name: templateUpdatableData?.skill_9,
          setName: template6Data.setSkill_9,
          expertice: skill_9_expertice,
          setExpertice: setSkill_9_expertice,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: true,
    },
    {
      key: 3,
      name: 'certification',
      heading: templateUpdatableData?.certificate,
      setHeading: template6Data.setCertificate,
      description: [
        {
          key: 2553,
          description: templateUpdatableData?.certificate_1,
          setDescription: template6Data.setCertificate_1,
        },
        {
          key: 2554,
          description: templateUpdatableData?.certificate_2,
          setDescription: template6Data.setCertificate_2,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
  ];

  const template6DataRightSection = [
    {
      key: 5,
      name: 'personal',
      class: 'block',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template6Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template6Data.setPosition,
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      header: true,
      heading: templateUpdatableData?.personalInfo,
      setHeading: template6Data.setPersonalInfo,
      subSection: false,
      description: [
        {
          key: 8567,
          description: templateUpdatableData?.personalDescp,
          setDescription: template6Data.setPersonalDescp,
        },
      ],
      languageSkill: [
        {
          key: 9851,
          name: templateUpdatableData?.language_1,
          setName: template6Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 9852,
          name: templateUpdatableData?.language_2,
          setName: template6Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
        {
          key: 9853,
          name: templateUpdatableData?.language_3,
          setName: template6Data.setLanguage_3,
          expertice: language_3_expertice,
          setExpertice: setLanguage_3_expertice,
        },
        {
          key: 9854,
          name: templateUpdatableData?.language_4,
          setName: template6Data.setLanguage_4,
          expertice: language_4_expertice,
          setExpertice: setLanguage_4_expertice,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template6Data.setExperience,
      subSection: true,
      description: [
        {
          key: 1763,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template6Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template6Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template6Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template6Data.setExp_1_descp,
        },
        {
          key: 1764,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template6Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template6Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template6Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template6Data.setExp_2_descp,
        },
        {
          key: 1765,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template6Data.setExp_3_tenure,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template6Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template6Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template6Data.setExp_3_descp,
        },
        {
          key: 1766,
          tenure: templateUpdatableData?.exp_4_tenure,
          setTenure: template6Data.setExp_4_tenure,
          heading: templateUpdatableData?.exp_4_heading,
          setHeading: template6Data.setExp_4_heading,
          position: templateUpdatableData?.exp_4_position,
          setPosition: template6Data.setExp_4_position,
          description: templateUpdatableData?.exp_4_descp,
          setDescription: template6Data.setExp_4_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template6Data.setEducation,
      subSection: true,
      type: 'education',
      description: [
        {
          key: 1363,
          name: templateUpdatableData?.edu_1_name,
          setName: template6Data.setEdu_1_name,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template6Data.setEdu_1_heading,
          term: templateUpdatableData?.edu_1_term,
          setTerm: template6Data.setEdu_1_term,
        },
      ],
      honor: [
        {
          key: 1785,
          honor: templateUpdatableData?.honor_1,
          setHonor: template6Data.setHonor_1,
        },
        {
          key: 1786,
          honor: templateUpdatableData?.honor_2,
          setHonor: template6Data.setHonor_2,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 7 Data

  const template7Color = {
    sidePanelBgColor: '#FA1533',
    // mainPanelBgColor: '#f2f2f2',
    sidePanelTextColor: '#090808',
  };

  const template7DataRightSection = [
    {
      key: 5,
      class: 'block',
      left: [
        {
          header: true,
          protip: 'personal',
          name: templateUpdatableData?.name,
          setName: template7Data.setName,
          position: templateUpdatableData?.position,
          setPosition: template7Data.setPosition,
        },
      ],
      right: [
        {
          header: true,
          name: 'personal',
          protip: 'professional',
          heading: templateUpdatableData?.profileInfo,
          setHeading: template7Data.setProfileInfo,
          description: [
            {
              key: 5632,
              description: templateUpdatableData?.profile_descp,
              setDescription: template7Data.setProfile_descp,
            },
          ],
        },
      ],
      heading: 'none',
      subSection: false,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      subSection: false,
      type: 'section',
      left: [
        {
          type: 'contact',
          name: 'personal',
          heading: templateUpdatableData?.contact,
          setHeading: template7Data.setContact,
          contactType: [
            {
              key: 2453,
              type: 'phone',
              name: templateUpdatableData?.phone,
              setName: template7Data.setPhone,
            },
            {
              key: 2453,
              type: 'email',
              name: templateUpdatableData?.email,
              setName: template7Data.setEmail,
            },
            {
              key: 2453,
              type: 'address',
              name: templateUpdatableData?.address,
              setName: template7Data.setAddress,
            },
            {
              key: 2453,
              type: 'website',
              name: templateUpdatableData?.website,
              setName: template7Data.setWebsite,
            },
          ],
        },
      ],
      right: [
        {
          type: 'education',
          name: 'education',
          heading: templateUpdatableData?.education,
          setHeading: template7Data.setEducation,
          description: [
            {
              key: 1654,
              heading: templateUpdatableData?.edu_1_heading,
              setHeading: template7Data.setEdu_1_heading,
              tenure: templateUpdatableData?.edu_1_tenure,
              setTenure: template7Data.setEdu_1_tenure,
              name: templateUpdatableData?.edu_2_name,
              setName: template7Data.setEdu_2_name,
            },
            {
              key: 1655,
              heading: templateUpdatableData?.edu_2_heading,
              setHeading: template7Data.setEdu_2_heading,
              tenure: templateUpdatableData?.edu_2_tenure,
              setTenure: template7Data.setEdu_2_tenure,
              name: templateUpdatableData?.edu_2_name,
              setName: template7Data.setEdu_2_name,
            },
          ],
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      subSection: false,
      type: 'section',
      left: [
        {
          type: 'skills',
          name: 'skills',
          heading: templateUpdatableData?.skills,
          setHeading: template7Data.setSkills,
          description: [
            {
              key: 5432,
              type: templateUpdatableData?.prof_skills,
              setType: template7Data.setProf_skills,
              description: [
                {
                  key: 9851,
                  name: templateUpdatableData?.prof_skills_1,
                  setName: template7Data.setProf_skills_1,
                  expertice: skill_1_expertice,
                  setExpertice: setSkill_1_expertice,
                },
                {
                  key: 9852,
                  name: templateUpdatableData?.prof_skills_2,
                  setName: template7Data.setProf_skills_2,
                  expertice: skill_2_expertice,
                  setExpertice: setSkill_2_expertice,
                },
                {
                  key: 9853,
                  name: templateUpdatableData?.prof_skills_3,
                  setName: template7Data.setProf_skills_3,
                  expertice: skill_3_expertice,
                  setExpertice: setSkill_3_expertice,
                },
                {
                  key: 9854,
                  name: templateUpdatableData?.prof_skills_4,
                  setName: template7Data.setProf_skills_4,
                  expertice: skill_4_expertice,
                  setExpertice: setSkill_4_expertice,
                },
                {
                  key: 9855,
                  name: templateUpdatableData?.prof_skills_5,
                  setName: template7Data.setProf_skills_5,
                  expertice: skill_5_expertice,
                  setExpertice: setSkill_5_expertice,
                },
              ],
            },
            {
              key: 5433,
              type: templateUpdatableData?.language_skills,
              setType: template7Data.setLanguage_skills,
              description: [
                {
                  key: 9851,
                  name: templateUpdatableData?.language_skills_1,
                  setName: template7Data.setLanguage_skills_1,
                  expertice: language_1_expertice,
                  setExpertice: setLanguage_1_expertice,
                },
                {
                  key: 9852,
                  name: templateUpdatableData?.language_skills_2,
                  setName: template7Data.setLanguage_skills_2,
                  expertice: language_2_expertice,
                  setExpertice: setLanguage_2_expertice,
                },
              ],
            },
          ],
        },
      ],
      right: [
        {
          type: 'experience',
          name: 'experience',
          heading: templateUpdatableData?.experience,
          setHeading: template7Data.setExperience,
          description: [
            {
              key: 1654,
              heading: templateUpdatableData?.exp_1_heading,
              setHeading: template7Data.setExp_1_heading,
              tenure: templateUpdatableData?.exp_1_tenure,
              setTenure: template7Data.setExp_1_tenure,
              description: templateUpdatableData?.exp_1_descp,
              setDescription: template7Data.setExp_1_descp,
            },
            {
              key: 1655,
              heading: templateUpdatableData?.exp_2_heading,
              setHeading: template7Data.setExp_2_heading,
              tenure: templateUpdatableData?.exp_2_tenure,
              setTenure: template7Data.setExp_2_tenure,
              description: templateUpdatableData?.exp_2_descp,
              setDescription: template7Data.setExp_2_descp,
            },
          ],
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      subSection: false,
      type: 'section',
      left: [
        {
          type: 'interests',
          name: 'interests',
          heading: templateUpdatableData?.interests,
          setHeading: template7Data.setInterests,
          description: [
            {
              key: 6542,
              name: 'football',
              icon: templateUpdatableData?.interest_1,
              setIcon: template7Data.setInterest_1,
            },
            {
              key: 6543,
              name: 'game',
              icon: templateUpdatableData?.interest_2,
              setIcon: template7Data.setInterest_2,
            },
            {
              key: 6544,
              name: 'mic',
              icon: templateUpdatableData?.interest_3,
              setIcon: template7Data.setInterest_3,
            },
          ],
        },
      ],
      right: [
        {
          type: 'certifications',
          name: 'certification',
          heading: templateUpdatableData?.certifications,
          setHeading: template7Data.setCertifications,
          description: [
            {
              key: 1654,
              description: templateUpdatableData?.certficate_descp_1,
              setDescription: template7Data.setCertficate_descp_1,
            },
            {
              key: 1655,
              description: templateUpdatableData?.certficate_descp_2,
              setDescription: template7Data.setCertficate_descp_2,
            },
          ],
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];
  const template7DataLeftSection = [
    {
      data: null,
    },
  ];

  // */*********************************************************************\*

  // Template 8 Data

  const template8Color = {
    sidePanelBgColor: '#ffffff',
    sidePanelTextColor: '#000000',
  };

  const template8DataLeftSection = [
    {
      key: 1,
      // header: true,
      name: 'personal',
      heading: templateUpdatableData?.personal_info,
      setHeading: template8Data.setPersonal_info,
      type: 'personal',
      description: [
        {
          key: 1453,
          description: templateUpdatableData?.personal_info_descp,
          setDescription: template8Data.setPersonal_info_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template8Data.setSkills,
      type: 'skills',
      description: [
        {
          key: 1753,
          description: templateUpdatableData?.skill_descp,
          setDescription: template8Data.setSkill_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template8Data.setSoftware,
      type: 'software',
      description: [
        {
          key: 1153,
          description: templateUpdatableData?.software_descp,
          setDescription: template8Data.setSoftware_descp,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      name: 'languages',
      type: 'language_skills',
      heading: templateUpdatableData?.languages,
      setHeading: template8Data.setLanguages,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.language_1,
          setName: template8Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 4655,
          name: templateUpdatableData?.language_2,
          setName: template8Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
        {
          key: 4656,
          name: templateUpdatableData?.language_3,
          setName: template8Data.setLanguage_3,
          expertice: language_3_expertice,
          setExpertice: setLanguage_3_expertice,
        },
      ],
      ref: subSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
    },
  ];

  const template8DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template8Data.setName,
      subSection: false,
      description: templateUpdatableData?.position,
      setDescription: template8Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      heading: 'none',
      subSection: false,
      description: [
        {
          key: 5664,
          description: templateUpdatableData?.main_descp,
          setDescription: template8Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template8Data.setExperience,
      type: 'experience',
      // subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template8Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template8Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template8Data.setExp_1_description,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template8Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template8Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template8Data.setExp_2_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template8Data.setEducation,
      description: [
        {
          key: 9731,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template8Data.setEdu_1_tenure,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template8Data.setEdu_1_heading,
        },
        {
          key: 9732,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template8Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template8Data.setEdu_2_heading,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      type: 'certifications',
      name: 'certification',
      heading: templateUpdatableData?.certifications,
      setHeading: template8Data.setCertifications,
      subSection: 'false',
      description: [
        {
          key: 1345,
          year: templateUpdatableData?.cert_1_year,
          setYear: template8Data.setCert_1_year,
          description: templateUpdatableData?.cert_1_heading,
          setDescription: template8Data.setCert_1_heading,
        },
        {
          key: 1345,
          year: templateUpdatableData?.cert_2_year,
          setYear: template8Data.setCert_2_year,
          description: templateUpdatableData?.cert_2_heading,
          setDescription: template8Data.setCert_2_heading,
        },
        {
          key: 1345,
          year: templateUpdatableData?.cert_3_year,
          setYear: template8Data.setCert_3_year,
          description: templateUpdatableData?.cert_3_heading,
          setDescription: template8Data.setCert_3_heading,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 9 Data

  const template9Color = {
    sidePanelBgColor: '#0F2588',
    sidePanelTextColor: '#000000',
  };

  const template9DataLeftSection = [{ data: null }];

  const template9DataRightSection = [
    {
      key: 5,
      class: 'block',
      header: true,
      name: 'personal',
      heading: [
        {
          name: templateUpdatableData?.name,
          setName: template9Data.setName,
          position: templateUpdatableData?.position,
          setPosition: template9Data.setPosition,
        },
      ],
      subSection: false,
      contacts: [
        {
          key: 1463,
          type: 'phone',
          description: templateUpdatableData?.phone,
          setDescription: template9Data.setPhone,
        },
        {
          key: 1464,
          type: 'address',
          description: templateUpdatableData?.address,
          setDescription: template9Data.setAddress,
        },
        {
          key: 1465,
          type: 'email',
          description: templateUpdatableData?.email,
          setDescription: template9Data.setEmail,
        },
        {
          key: 1466,
          type: 'linkedIn',
          description: templateUpdatableData?.linkedIn,
          setDescription: template9Data.setLinkedIn,
        },
      ],
      description: templateUpdatableData?.main_descp,
      setDescription: template9Data.setMain_descp,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template9Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template9Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template9Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template9Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template9Data.setExp_1_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template9Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template9Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template9Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template9Data.setEdu_1_positon,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template9Data.setEdu_1_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template9Data.setSkills,
      subSection: true,
      description: [
        {
          key: 9731,
          description: templateUpdatableData?.skills_descp_1,
          setDescription: template9Data.setSkills_descp_1,
        },
        {
          key: 9732,
          description: templateUpdatableData?.skills_descp_2,
          setDescription: template9Data.setSkills_descp_2,
        },
        {
          key: 9733,
          description: templateUpdatableData?.skills_descp_3,
          setDescription: template9Data.setSkills_descp_3,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'software',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template9Data.setSoftware,
      subSection: true,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.software_1,
          setName: template9Data.setSoftware_1,
          expertice: software_1_expertice,
          setExpertice: setSoftware_1_expertice,
        },
        {
          key: 4655,
          name: templateUpdatableData?.software_2,
          setName: template9Data.setSoftware_2,
          expertice: software_2_expertice,
          setExpertice: setSoftware_2_expertice,
        },
        {
          key: 4656,
          name: templateUpdatableData?.software_3,
          setName: template9Data.setSoftware_3,
          expertice: software_3_expertice,
          setExpertice: setSoftware_3_expertice,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'certification',
      type: 'certifications',
      heading: templateUpdatableData?.certifications,
      setHeading: template9Data.setCertifications,
      subSection: false,
      description: [
        {
          key: 1345,
          name: templateUpdatableData?.cert_1_name,
          setName: template9Data.setCert_1_name,
          year: templateUpdatableData?.cert_1_year,
          setYear: template9Data.setCert_1_year,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 10 Data

  const template10Color = {
    sidePanelBgColor: '#E5E3DE',
    sidePanelTextColor: '#6C6360',
  };

  const template10DataLeftSection = [
    {
      key: 1,
      // header: true,
      heading: 'none',
      name: 'personal',
      description: [
        {
          description: templateUpdatableData?.phone,
          setDescription: template10Data.setPhone,
          type: 'phone',
        },
        {
          description: templateUpdatableData?.email,
          setDescription: template10Data.setEmail,
          type: 'email',
        },
        {
          description: templateUpdatableData?.address,
          setDescription: template10Data.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template10Data.setEducation,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template10Data.setEdu_1_tenure,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template10Data.setEdu_1_heading,
          name: templateUpdatableData?.edu_1_name,
          setName: template10Data.setEdu_1_name,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template10Data.setEdu_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template10Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template10Data.setEdu_2_heading,
          name: templateUpdatableData?.edu_2_name,
          setName: template10Data.setEdu_2_name,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template10Data.setEdu_2_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template10Data.setSkills,
      description: [
        {
          key: 5753,
          name: templateUpdatableData?.skill_1,
          setName: template10Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_2,
          setName: template10Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_3,
          setName: template10Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_4,
          setName: template10Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_5,
          setName: template10Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_6,
          setName: template10Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_7,
          setName: template10Data.setSkill_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      name: 'certification',
      type: 'certificate',
      heading: templateUpdatableData?.certificates,
      setHeading: template10Data.setCertificates,
      description: [
        {
          key: 4654,
          description: templateUpdatableData?.certificate_descp,
          setDescription: template10Data.setCertificate_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template10DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      type: 'section',
      heading: templateUpdatableData?.name,
      setHeading: template10Data.setName,
      subSection: false,
      description: templateUpdatableData?.position,
      setDescription: template10Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      heading: 'none',
      subSection: false,
      description: [
        {
          key: 1945,
          description: templateUpdatableData?.main_descp,
          setDescription: template10Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template10Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template10Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template10Data.setExp_1_heading,
          name: templateUpdatableData?.exp_1_name,
          setName: template10Data.setExp_1_name,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template10Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template10Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template10Data.setExp_2_heading,
          name: templateUpdatableData?.exp_2_name,
          setName: template10Data.setExp_2_name,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template10Data.setExp_2_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template10Data.setExp_3_tenure,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template10Data.setExp_3_heading,
          name: templateUpdatableData?.exp_3_name,
          setName: template10Data.setExp_3_name,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template10Data.setExp_3_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'languages',
      heading: templateUpdatableData?.language,
      setHeading: template10Data.setLanguage,
      subSection: false,
      type: 'language',
      description: [
        {
          key: 5753,
          name: templateUpdatableData?.language_1,
          setName: template10Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.language_2,
          setName: template10Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.language_3,
          setName: template10Data.setLanguage_3,
          expertice: language_3_expertice,
          setExpertice: setLanguage_3_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.language_4,
          setName: template10Data.setLanguage_4,
          expertice: language_4_expertice,
          setExpertice: setLanguage_4_expertice,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 11 Data

  const template11Color = {
    sidePanelBgColor: '#F5F5F4',
    sidePanelTextColor: '#6C6360',
  };

  const template11DataLeftSection = [
    {
      key: 1,
      // header: true,
      name: 'personal',
      heading: 'none',
      description: [
        {
          description: templateUpdatableData?.phone,
          setDescription: template11Data.setPhone,
          type: 'phone',
        },
        {
          description: templateUpdatableData?.email,
          setDescription: template11Data.setEmail,
          type: 'email',
        },
        {
          description: templateUpdatableData?.address,
          setDescription: template11Data.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'software',
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template11Data.setSoftware,
      description: [
        {
          key: 5753,
          name: templateUpdatableData?.software_1,
          setName: template11Data.setSoftware_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.software_2,
          setName: template11Data.setSoftware_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.software_3,
          setName: template11Data.setSoftware_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.software_4,
          setName: template11Data.setSoftware_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.software_5,
          setName: template11Data.setSoftware_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.software_6,
          setName: template11Data.setSoftware_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5759,
          name: templateUpdatableData?.software_7,
          setName: template11Data.setSoftware_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
        {
          key: 5760,
          name: templateUpdatableData?.software_8,
          setName: template11Data.setSoftware_8,
          expertice: skill_8_expertice,
          setExpertice: setSkill_8_expertice,
        },
        {
          key: 5761,
          name: templateUpdatableData?.software_9,
          setName: template11Data.setSoftware_9,
          expertice: skill_9_expertice,
          setExpertice: setSkill_9_expertice,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'languages',
      type: 'language',
      heading: templateUpdatableData?.language,
      setHeading: template11Data.setLanguage,
      subSection: false,
      description: [
        {
          key: 6753,
          name: templateUpdatableData?.language_1,
          setName: template11Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 6754,
          name: templateUpdatableData?.language_2,
          setName: template11Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'certificate',
      name: 'certification',
      heading: templateUpdatableData?.certificates,
      setHeading: template11Data.setCertificates,
      description: [
        {
          key: 4654,
          description: templateUpdatableData?.certificate_descp,
          setDescription: template11Data.setCertificate_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template11DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template11Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template11Data.setPosition,
      detail: templateUpdatableData?.main_descp,
      setDetail: template11Data.setMain_descp,
      description: [
        {
          description: templateUpdatableData?.main_descp_1,
          setDescription: template11Data.setMain_descp_1,
        },
        {
          description: templateUpdatableData?.main_descp_2,
          setDescription: template11Data.setMain_descp_2,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template11Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template11Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template11Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template11Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template11Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template11Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template11Data.setExp_2_descp,
        },
        {
          key: 9833,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template11Data.setExp_3_tenure,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template11Data.setExp_3_heading,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template11Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template11Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9834,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template11Data.setEdu_1_tenure,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template11Data.setEdu_1_heading,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template11Data.setEdu_1_descp,
        },
        {
          key: 9835,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template11Data.setEdu_2_tenure,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template11Data.setEdu_2_heading,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template11Data.setEdu_2_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 12 Data

  const template12Color = {
    sidePanelBgColor: '#01A0C6',
    sidePanelTextColor: '#30292A',
  };

  const template12DataLeftSection = [
    {
      key: 2,
      name: 'education',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template12Data.setSkills,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.skills_descp,
          setDescription: template12Data.setSkills_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'software',
      class: 'block',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template12Data.setSoftware,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.software_descp,
          setDescription: template12Data.setSoftware_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'interests',
      type: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: template12Data.setInterests,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.interests_descp,
          setDescription: template12Data.setInterests_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template12DataRightSection = [
    {
      key: 4,
      name: 'personal',
      class: 'block',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template12Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template12Data.setPosition,
      description: [
        {
          description: templateUpdatableData?.phone,
          setDescription: template12Data.setPhone,
          type: 'phone',
        },
        {
          description: templateUpdatableData?.email,
          setDescription: template12Data.setEmail,
          type: 'email',
        },
        {
          description: templateUpdatableData?.linkedIn,
          setDescription: template12Data.setLinkedIn,
          type: 'linkedIn',
        },
        {
          description: templateUpdatableData?.address,
          setDescription: template12Data.setAddress,
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
      key: 5,
      class: 'block',
      heading: 'none',
      subSection: false,
      type: 'description',
      description: [
        {
          key: 3323,
          description: templateUpdatableData?.main_descp,
          setDescription: template12Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template12Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          name: templateUpdatableData?.exp_1_name,
          setName: template12Data.setExp_1_name,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template12Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template12Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template12Data.setExp_1_descp,
        },
        {
          key: 9832,
          name: templateUpdatableData?.exp_2_name,
          setName: template12Data.setExp_2_name,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template12Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template12Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template12Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      name: 'education',
      type: 'education',
      class: 'block',
      heading: templateUpdatableData?.education,
      setHeading: template12Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9631,
          name: templateUpdatableData?.edu_1_name,
          setName: template12Data.setEdu_1_name,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template12Data.setEdu_1_tenure,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template12Data.setEdu_1_heading,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 13 Data

  const template13Color = {
    sidePanelBgColor: '#F2F2F2',
    sidePanelTextColor: '#4D1F03',
  };

  const template13DataLeftSection = [{ data: null }];

  const template13DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template13Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template13Data.setPosition,
      description: templateUpdatableData?.main_descp,
      setDescription: template13Data.setMain_descp,
      contacts: [
        {
          data: templateUpdatableData?.phone,
          setData: template13Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template13Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.website,
          setData: template13Data.setWebsite,
          type: 'website',
        },
        {
          data: templateUpdatableData?.address,
          setData: template13Data.setAddress,
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
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template13Data.setEducation,
      subSection: false,
      description: [
        {
          key: 3323,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template13Data.setEdu_1_heading,
          name: templateUpdatableData?.edu_1_name,
          setName: template13Data.setEdu_1_name,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
        },
        {
          key: 3324,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template13Data.setEdu_2_heading,
          name: templateUpdatableData?.edu_2_name,
          setName: template13Data.setEdu_2_name,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
        },
        {
          key: 3325,
          heading: templateUpdatableData?.edu_3_heading,
          setHeading: template13Data.setEdu_3_heading,
          name: templateUpdatableData?.edu_3_name,
          setName: template13Data.setEdu_3_name,
          location: templateUpdatableData?.edu_3_location,
          setLocation: template13Data.setEdu_3_location,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template13Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template13Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template13Data.setExp_1_heading,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template13Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template13Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template13Data.setExp_2_heading,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template13Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_certificate',
      skills: [
        {
          key: 4534,
          name: 'skills',
          heading: templateUpdatableData?.skills,
          setHeading: template13Data.setSkills,
          description: [
            {
              key: 5641,
              description: templateUpdatableData?.skills_descp,
              setDescription: template13Data.setSkills_descp,
            },
          ],
        },
      ],
      certificate: [
        {
          key: 4534,
          name: 'certification',
          heading: templateUpdatableData?.certificate,
          setHeading: template13Data.setCertificate,
          description: [
            {
              key: 5431,
              description: templateUpdatableData?.certificate_descp_1,
              setDescription: template13Data.setCertificate_descp_1,
            },
            {
              key: 54342,
              description: templateUpdatableData?.certificate_descp_2,
              setDescription: template13Data.setCertificate_descp_2,
            },
          ],
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 14 Data

  const template14Color = {
    sidePanelBgColor: '#333333',
    sidePanelTextColor: '#655C5A',
  };

  const template14DataLeftSection = [
    {
      key: 2,
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template14Data.setSkills,
      description: [
        {
          key: 5432,
          type: templateUpdatableData?.skill_type_1,
          setType: template14Data.setSkill_type_1,
          description: [
            {
              key: 9851,
              name: templateUpdatableData?.skill_1,
              setName: template14Data.setSkill_1,
              expertice: skill_1_expertice,
              setExpertice: setSkill_1_expertice,
            },
            {
              key: 9852,
              name: templateUpdatableData?.skill_2,
              setName: template14Data.setSkill_2,
              expertice: skill_2_expertice,
              setExpertice: setSkill_2_expertice,
            },
            {
              key: 9853,
              name: templateUpdatableData?.skill_3,
              setName: template14Data.setSkill_3,
              expertice: skill_3_expertice,
              setExpertice: setSkill_3_expertice,
            },
          ],
        },
        {
          key: 5433,
          type: templateUpdatableData?.skill_type_2,
          setType: template14Data.setSkill_type_2,
          description: [
            {
              key: 9851,
              name: templateUpdatableData?.skill_4,
              setName: template14Data.setSkill_4,
              expertice: language_1_expertice,
              setExpertice: setLanguage_1_expertice,
            },
            {
              key: 9852,
              name: templateUpdatableData?.skill_5,
              setName: template14Data.setSkill_5,
              expertice: language_2_expertice,
              setExpertice: setLanguage_2_expertice,
            },
            {
              key: 9853,
              name: templateUpdatableData?.skill_6,
              setName: template14Data.setSkill_6,
              expertice: language_3_expertice,
              setExpertice: setLanguage_3_expertice,
            },
          ],
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'experience_highlight',
      class: 'block',
      type: 'competencies',
      heading: templateUpdatableData?.competencies,
      setHeading: template14Data.setCompetencies,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.competencies_descp_1,
          setDescription: template14Data.setCompetencies_descp_1,
        },
        {
          key: 4754,
          description: templateUpdatableData?.competencies_descp_2,
          setDescription: template14Data.setCompetencies_descp_2,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'personal',
      type: 'contact',
      heading: templateUpdatableData?.contact,
      setHeading: template14Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.contact_descp,
          setDescription: template14Data.setContact_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template14DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template14Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template14Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      type: 'main_heading',
      class: 'block',
      name: 'professional',
      heading: templateUpdatableData?.main_heading,
      setHeading: template14Data.setMain_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.main_descp,
          setDescription: template14Data.setMain_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template14Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template14Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template14Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template14Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template14Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template14Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template14Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template14Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template14Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template14Data.setExp_3_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template14Data.setEducation,
      subSection: false,
      description: [
        {
          key: 9931,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template14Data.setEdu_1_heading,
          position: templateUpdatableData?.edu_1_position,
          setPosition: template14Data.setEdu_1_position,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template14Data.setEdu_1_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 15 Data

  const template15Color = {
    sidePanelBgColor: '#FA1533',
    sidePanelTextColor: '#1A1A1A',
  };

  const template15DataLeftSection = [
    {
      key: 1,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template15Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template15Data.setPosition,
      contacts: [
        {
          data: templateUpdatableData?.phone,
          setData: template15Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template15Data.setEmail,
          type: 'email',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'personal_info',
      name: 'personal',
      heading: templateUpdatableData?.personal_info,
      setHeading: template15Data.setPersonal_info,
      address: templateUpdatableData?.address,
      setAddress: template15Data.setAddress,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.personal_info_descp,
          setDescription: template15Data.setPersonal_info_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'software',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template15Data.setSoftware,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.software_descp,
          setDescription: template15Data.setSoftware_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template15Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skill_1,
          setName: template15Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skill_2,
          setName: template15Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skill_3,
          setName: template15Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_4,
          setName: template15Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_5,
          setName: template15Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_6,
          setName: template15Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_7,
          setName: template15Data.setSkill_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_8,
          setName: template15Data.setSkill_8,
          expertice: skill_8_expertice,
          setExpertice: setSkill_8_expertice,
        },
        {
          key: 5759,
          name: templateUpdatableData?.skill_9,
          setName: template15Data.setSkill_9,
          expertice: skill_9_expertice,
          setExpertice: setSkill_9_expertice,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      name: 'languages',
      type: 'language_skills',
      heading: templateUpdatableData?.languages,
      setHeading: template15Data.setLanguages,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.languages_1,
          setName: template15Data.setLanguages_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 4655,
          name: templateUpdatableData?.languages_2,
          setName: template15Data.setLanguages_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
        {
          key: 4656,
          name: templateUpdatableData?.languages_3,
          setName: template15Data.setLanguages_3,
          expertice: language_3_expertice,
          setExpertice: setLanguage_3_expertice,
        },
      ],
      ref: subSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
    },
  ];

  const template15DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template15Data.setEducation,
      subSection: false,
      description: [
        {
          key: 3323,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template15Data.setEdu_1_heading,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template15Data.setEdu_1_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template15Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template15Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template15Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template15Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template15Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template15Data.setExp_3_heading,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template15Data.setExp_3_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 16 Data

  const template16Color = {
    sidePanelBgColor: '#F20E27',
    sidePanelTextColor: '#1A1A1A',
  };

  const template16DataLeftSection = [
    {
      key: 1,
      class: 'block',
      name: 'experience',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template16Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template16Data.setPosition,
      description: templateUpdatableData?.main_descp,
      setDescription: template16Data.setMain_descp,
      contacts: [
        {
          data: templateUpdatableData?.phone,
          setData: template16Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template16Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.address,
          setData: template16Data.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template16Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skill_1,
          setName: template16Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skill_2,
          setName: template16Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skill_3,
          setName: template16Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_4,
          setName: template16Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_5,
          setName: template16Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_6,
          setName: template16Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_7,
          setName: template16Data.setSkill_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_8,
          setName: template16Data.setSkill_8,
          expertice: skill_8_expertice,
          setExpertice: setSkill_8_expertice,
        },
        {
          key: 5759,
          name: templateUpdatableData?.skill_9,
          setName: template16Data.setSkill_9,
          expertice: skill_9_expertice,
          setExpertice: setSkill_9_expertice,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'languages',
      type: 'language_skills',
      heading: templateUpdatableData?.languages,
      setHeading: template16Data.setLanguages,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.languages_1,
          setName: template16Data.setLanguages_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 4655,
          name: templateUpdatableData?.languages_2,
          setName: template16Data.setLanguages_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
        {
          key: 4656,
          name: templateUpdatableData?.languages_3,
          setName: template16Data.setLanguages_3,
          expertice: language_3_expertice,
          setExpertice: setLanguage_3_expertice,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      class: 'block',
      name: 'interests',
      type: 'hobbies',
      heading: templateUpdatableData?.hobbies,
      setHeading: template16Data.setHobbies,
      description: [
        {
          description: templateUpdatableData?.hobbies_writing,
          setDescription: template16Data.setHobbies_writing,
          type: 'writing',
        },
        {
          description: templateUpdatableData?.hobbies_cooking,
          setDescription: template16Data.setHobbies_cooking,
          type: 'cooking',
        },
        {
          description: templateUpdatableData?.hobbies_music,
          setDescription: template16Data.setHobbies_music,
          type: 'music',
        },
        {
          description: templateUpdatableData?.hobbies_reading,
          setDescription: template16Data.setHobbies_reading,
          type: 'reading',
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'interests',
      type: 'socialNetwork',
      heading: templateUpdatableData?.socialNetwork,
      setHeading: template16Data.setSocialNetwork,
      subSection: false,
      description: [
        {
          description: templateUpdatableData?.socialNetwork_facebook,
          setDescription: template16Data.setSocialNetwork_facebook,
          type: 'facebook',
        },
        {
          description: templateUpdatableData?.socialNetwork_insta,
          setDescription: template16Data.setSocialNetwork_insta,
          type: 'insta',
        },
        {
          description: templateUpdatableData?.socialNetwork_twitter,
          setDescription: template16Data.setSocialNetwork_twitter,
          type: 'twitter',
        },
        {
          description: templateUpdatableData?.socialNetwork_youtube,
          setDescription: template16Data.setSocialNetwork_youtube,
          type: 'youtube',
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template16DataRightSection = [
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template16Data.setEducation,
      subSection: false,
      description: [
        {
          key: 3323,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template16Data.setEdu_1_descp,
        },
        {
          key: 3324,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template16Data.setEdu_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template16Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template16Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template16Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template16Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template16Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 17 Data

  const template17Color = {
    sidePanelBgColor: '#5B6C77',
    sidePanelTextColor: '#403738',
  };

  const template17DataLeftSection = [
    {
      key: 1,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      name: 'personal',
      heading: templateUpdatableData?.personalInfo,
      setHeading: template17Data.setPersonalInfo,
      subSection: false,
      description: [
        {
          description: templateUpdatableData?.address,
          setDescription: template17Data.setAddress,
          type: 'address',
        },
        {
          description: templateUpdatableData?.phone,
          setDescription: template17Data.setPhone,
          type: 'phone',
        },
        {
          description: templateUpdatableData?.web,
          setDescription: template17Data.setWeb,
          type: 'web',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      type: 'skills',
      name: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template17Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skill_1,
          setName: template17Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skill_2,
          setName: template17Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skill_3,
          setName: template17Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_4,
          setName: template17Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_5,
          setName: template17Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_6,
          setName: template17Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_7,
          setName: template17Data.setSkill_7,
          expertice: skill_7_expertice,
          setExpertice: setSkill_7_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_8,
          setName: template17Data.setSkill_8,
          expertice: skill_8_expertice,
          setExpertice: setSkill_8_expertice,
        },
        {
          key: 5759,
          name: templateUpdatableData?.skill_9,
          setName: template17Data.setSkill_9,
          expertice: skill_9_expertice,
          setExpertice: setSkill_9_expertice,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'software',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template17Data.setSoftware,
      subSection: false,
      description: [
        {
          key: 3323,
          description: templateUpdatableData?.software_descp,
          setDescription: template17Data.setSoftware_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template17DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      type: 'header',
      heading: templateUpdatableData?.name,
      setHeading: template17Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template17Data.setPosition,
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template17Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template17Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template17Data.setExp_1_tenure,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template17Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template17Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template17Data.setExp_2_tenure,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template17Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template17Data.setExp_3_heading,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template17Data.setExp_3_tenure,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template17Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template17Data.setEducation,
      subSection: false,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template17Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template17Data.setEdu_1_tenure,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template17Data.setEdu_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template17Data.setEdu_2_heading,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template17Data.setEdu_2_tenure,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template17Data.setEdu_2_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 18 Data

  const template18Color = {
    sidePanelBgColor: '#FF5900',
    sidePanelTextColor: '#403738',
  };

  const template18DataLeftSection = [
    {
      key: 1,
      class: 'block',
      // header: true,
      type: 'personalInfo',
      name: 'personal',
      heading: templateUpdatableData?.personal_info,
      setHeading: template18Data.setPersonal_info,
      subSection: false,
      description: [
        {
          description: templateUpdatableData?.phone,
          setDescription: template18Data.setPhone,
          type: 'phone',
        },
        {
          description: templateUpdatableData?.email,
          setDescription: template18Data.setEmail,
          type: 'email',
        },
        {
          description: templateUpdatableData?.address,
          setDescription: template18Data.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      class: 'block',
      name: 'software',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template18Data.setSoftware,
      description: [
        {
          key: 3323,
          description: templateUpdatableData?.software_descp,
          setDescription: template18Data.setSoftware_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'certification',
      type: 'certificate',
      heading: templateUpdatableData?.certificate,
      setHeading: template18Data.setCertificate,
      subSection: false,
      description: [
        {
          key: 3323,
          description: templateUpdatableData?.certificate_descp,
          setDescription: template18Data.setCertificate_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template18DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      type: 'header',
      heading: templateUpdatableData?.name,
      setHeading: template18Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template18Data.setPosition,
      description: templateUpdatableData?.main_descp,
      setDescription: template18Data.setMain_descp,
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template18Data.setEducation,
      subSection: false,
      description: [
        {
          key: 9831,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template18Data.setEdu_1_descp,
        },
        {
          key: 9832,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template18Data.setEdu_2_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template18Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template18Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template18Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template18Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template18Data.setExp_2_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 19 Data

  const template19Color = {
    sidePanelBgColor: '#0A0230',
    sidePanelTextColor: '#464241',
  };

  const template19DataLeftSection = [
    {
      key: 1,
      // header: true,
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template19Data.setSkills,
      description: [
        {
          key: 8854,
          description: templateUpdatableData?.skills_descp,
          setDescription: template19Data.setSkills_descp,
        },
      ],
      ref: subSection1,
      id: 'subSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'software',
      type: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template19Data.setSoftware,
      description: [
        {
          key: 4435,
          description: templateUpdatableData?.software_descp,
          setDescription: template19Data.setSoftware_descp,
        },
      ],
      ref: subSection2,
      id: 'subSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'personal',
      class: 'block',
      type: 'certification',
      // subSection: false,
      heading: templateUpdatableData?.certificates,
      setHeading: template19Data.setCertificates,
      description: [
        {
          key: 4542,
          description: templateUpdatableData?.certificate_descp,
          setDescription: template19Data.setCertificate_descp,
        },
      ],
      ref: subSection3,
      id: 'subSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template19DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      professional_protip: 'professional',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template19Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template19Data.setPosition,
      personalinfo: templateUpdatableData?.personalInfo,
      setPersonalinfo: template19Data.setPersonalInfo,
      description: [
        {
          description: templateUpdatableData?.personalInfo_descp,
          setDescription: template19Data.setPersonalInfo_descp,
        },
      ],
      contact: [
        {
          data: templateUpdatableData?.phone,
          setData: template19Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template19Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.address,
          setData: template19Data.setAddress,
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
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template19Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template19Data.setEdu_1_tenure,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template19Data.setEdu_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template19Data.setEdu_2_tenure,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template19Data.setEdu_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template19Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template19Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template19Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template19Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template19Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'languages',
      type: 'language_skills',
      heading: templateUpdatableData?.language,
      setHeading: template19Data.setLanguage,
      description: [
        {
          key: 4654,
          name: templateUpdatableData?.language_1,
          setName: template19Data.setLanguage_1,
          expertice: language_1_expertice,
          setExpertice: setLanguage_1_expertice,
        },
        {
          key: 4655,
          name: templateUpdatableData?.language_2,
          setName: template19Data.setLanguage_2,
          expertice: language_2_expertice,
          setExpertice: setLanguage_2_expertice,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 20 Data

  const template20Color = {
    sidePanelBgColor: '#2E58A6',
    sidePanelTextColor: '#000000',
  };

  const template20DataLeftSection = [{ data: null }];

  const template20DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template20Data.setName,
      subSection: false,
      contact: [
        {
          data: templateUpdatableData?.phone,
          setData: template20Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template20Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.linkedIn,
          setData: template20Data.setLinkedIn,
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
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: templateUpdatableData?.main_heading,
      setHeading: template20Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template20Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template20Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template20Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template20Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template20Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template20Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template20Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template20Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template20Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template20Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template20Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template20Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template20Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template20Data.setEdu_1_positon,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template20Data.setEdu_2_heading,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template20Data.setEdu_2_tenure,
          position: templateUpdatableData?.edu_2_positon,
          setPosition: template20Data.setEdu_2_positon,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template20Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skills_1,
          setName: template20Data.setSkills_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skills_2,
          setName: template20Data.setSkills_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skills_3,
          setName: template20Data.setSkills_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skills_4,
          setName: template20Data.setSkills_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skills_5,
          setName: template20Data.setSkills_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skills_6,
          setName: template20Data.setSkills_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 21 Data

  const template21Color = {
    sidePanelBgColor: '#2E58A6',
    sidePanelTextColor: '#000000',
  };

  const template21DataLeftSection = [{ data: null }];

  const template21DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template21Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template21Data.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: templateUpdatableData?.profileDescp,
          setDescription: template21Data.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: templateUpdatableData?.main_heading,
      setHeading: template21Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template21Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template21Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template21Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template21Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template21Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template21Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template21Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template21Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template21Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template21Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template21Data.setExp_3_heading,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template21Data.setExp_3_tenure,
          position: templateUpdatableData?.exp_3_positon,
          setPosition: template21Data.setExp_3_positon,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template21Data.setExp_3_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template21Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template21Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template21Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template21Data.setEdu_1_positon,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template21Data.setEdu_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_interest',
      skill_name: 'skills',
      skill_heading: templateUpdatableData?.skills,
      setSkill_heading: template21Data.setSkills,
      skill_description: [
        {
          key: 5751,
          name: templateUpdatableData?.skills_1,
          setName: template21Data.setSkills_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skills_2,
          setName: template21Data.setSkills_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skills_3,
          setName: template21Data.setSkills_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skills_4,
          setName: template21Data.setSkills_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skills_5,
          setName: template21Data.setSkills_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skills_6,
          setName: template21Data.setSkills_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      interest_name: 'interests',
      interest_heading: templateUpdatableData?.interest,
      setInterest_heading: template21Data.setInterest,
      interest_description: [
        {
          key: 9871,
          description: templateUpdatableData?.interest_descp,
          setDescription: template21Data.setInterest_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 22 Data

  const template22Color = {
    sidePanelBgColor: '#1A1A1A',
    sidePanelTextColor: '#000000',
  };

  const template22DataLeftSection = [{ data: null }];

  const template22DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template22Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template22Data.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: templateUpdatableData?.profileDescp,
          setDescription: template22Data.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: templateUpdatableData?.main_heading,
      setHeading: template22Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template22Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template22Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template22Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template22Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template22Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template22Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template22Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template22Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template22Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template22Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template22Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template22Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template22Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template22Data.setEdu_1_positon,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_interest',
      skill_name: 'skills',
      skill_heading: templateUpdatableData?.skills,
      setSkill_heading: template22Data.setSkills,
      skill_description: [
        {
          key: 5751,
          description: templateUpdatableData?.skills_descp,
          setDescription: template22Data.setSkills_descp,
        },
      ],
      interest_name: 'interests',
      interest_heading: templateUpdatableData?.interest,
      setInterest_heading: template22Data.setInterest,
      interest_description: [
        {
          key: 9871,
          description: templateUpdatableData?.interest_descp,
          setDescription: template22Data.setInterest_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 23 Data

  const template23Color = {
    sidePanelBgColor: '#FF5900',
    sidePanelTextColor: '#000000',
  };

  const template23DataLeftSection = [
    {
      key: 1,
      // header: true,
      name: 'personal',
      type: 'personalInfo',
      heading: templateUpdatableData?.personalInfo,
      setHeading: template23Data.setPersonalInfo,
      description: [
        {
          key: 8854,
          description: templateUpdatableData?.phone,
          setDescription: template23Data.setPhone,
          type: 'phone',
        },
        {
          key: 8855,
          description: templateUpdatableData?.email,
          setDescription: template23Data.setEmail,
          type: 'email',
        },
        {
          key: 8856,
          description: templateUpdatableData?.address,
          setDescription: template23Data.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'subSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      // header: true,
      type: 'personalSkill',
      name: 'skills',
      heading: templateUpdatableData?.personalSkill,
      setHeading: template23Data.setPersonalSkill,
      description: [
        {
          key: 8854,
          description: templateUpdatableData?.personalSkill_descp,
          setDescription: template23Data.setPersonalSkill_descp,
        },
      ],
      ref: subSection2,
      id: 'subSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      type: 'software',
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template23Data.setSoftware,
      description: [
        {
          key: 4435,
          description: templateUpdatableData?.software_descp,
          setDescription: template23Data.setSoftware_descp,
        },
      ],
      ref: subSection3,
      id: 'subSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      class: 'block',
      name: 'skills',
      type: 'skills',
      // subSection: false,
      heading: templateUpdatableData?.skills,
      setHeading: template23Data.setSkills,
      description: [
        {
          key: 4542,
          description: templateUpdatableData?.skill_descp,
          setDescription: template23Data.setSkill_descp,
        },
      ],
      ref: subSection4,
      id: 'subSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'achievement',
      type: 'achievements',
      // subSection: false,
      heading: templateUpdatableData?.achievements,
      setHeading: template23Data.setAchievements,
      description: [
        {
          key: 4542,
          description: templateUpdatableData?.achievements_descp,
          setDescription: template23Data.setAchievements_descp,
        },
      ],
      ref: subSection5,
      id: 'subSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template23DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template23Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template23Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template23Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template23Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9941,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template23Data.setEdu_1_heading,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template23Data.setEdu_1_descp,
        },
        {
          key: 9942,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template23Data.setEdu_2_heading,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template23Data.setEdu_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template23Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template23Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template23Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template23Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template23Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'certificates',
      name: 'certification',
      heading: templateUpdatableData?.certificates,
      setHeading: template23Data.setCertificates,
      description: [
        {
          key: 5751,
          width: 30,
          description: templateUpdatableData?.certificates_descp_1,
          setDescription: template23Data.setCertificates_descp_1,
        },
        {
          key: 5752,
          width: 65,
          description: templateUpdatableData?.certificates_descp_2,
          setDescription: template23Data.setCertificates_descp_2,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 24 Data

  const template24Color = {
    sidePanelBgColor: '#3B3334',
    sidePanelTextColor: '#6C6360',
  };

  const template24DataLeftSection = [
    {
      key: 1,
      // header: true,
      type: 'personalInfo',
      name: 'personal',
      heading: templateUpdatableData?.personalInfo,
      setHeading: template24Data.setPersonalInfo,
      description: [
        {
          key: 8854,
          description: templateUpdatableData?.personalInfo_descp,
          setDescription: template24Data.setPersonalInfo_descp,
        },
      ],
      ref: subSection1,
      id: 'subSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 1,
      // header: true,
      type: 'skills',
      name: 'skills',
      heading: templateUpdatableData?.skills,
      setHeading: template24Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skill_1,
          setName: template24Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skill_2,
          setName: template24Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skill_3,
          setName: template24Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_4,
          setName: template24Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_5,
          setName: template24Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_6,
          setName: template24Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5757,
          name: templateUpdatableData?.skill_7,
          setName: template24Data.setSkill_7,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5758,
          name: templateUpdatableData?.skill_8,
          setName: template24Data.setSkill_8,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5759,
          name: templateUpdatableData?.skill_9,
          setName: template24Data.setSkill_9,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
        {
          key: 5760,
          name: templateUpdatableData?.skill_10,
          setName: template24Data.setSkill_10,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: subSection2,
      id: 'subSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'software',
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template24Data.setSoftware,
      description: [
        {
          key: 4435,
          description: templateUpdatableData?.software_descp,
          setDescription: template24Data.setSoftware_descp,
        },
      ],
      ref: subSection3,
      id: 'subSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      type: 'interests',
      name: 'interests',
      // subSection: false,
      heading: templateUpdatableData?.interests,
      setHeading: template24Data.setInterests,
      description: [
        {
          key: 4542,
          description: templateUpdatableData?.interests_descp,
          setDescription: template24Data.setInterests_descp,
        },
      ],
      ref: subSection3,
      id: 'subSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  const template24DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template24Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template24Data.setPosition,
      subSection: false,
      contact: [
        {
          key: 8854,
          data: templateUpdatableData?.contact_1,
          setData: template24Data.setContact_1,
        },
        {
          key: 8855,
          data: templateUpdatableData?.contact_2,
          setData: template24Data.setContact_2,
        },
        {
          key: 8856,
          data: templateUpdatableData?.contact_3,
          setData: template24Data.setContact_3,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main_descp',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.main_descp,
          setDescription: template24Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template24Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9941,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template24Data.setEdu_1_heading,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template24Data.setEdu_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template24Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template24Data.setExp_1_heading,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template24Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template24Data.setExp_2_heading,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template24Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template24Data.setExp_3_heading,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template24Data.setExp_3_descp,
        },
        {
          key: 9834,
          heading: templateUpdatableData?.exp_4_heading,
          setHeading: template24Data.setExp_4_heading,
          description: templateUpdatableData?.exp_4_descp,
          setDescription: template24Data.setExp_4_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 25 Data

  const template25Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template25DataLeftSection = [{ data: null }];

  const template25DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template25Data.setName,
      description: [
        {
          key: 8854,
          description: templateUpdatableData?.profile_descp,
          setDescription: template25Data.setProfile_descp,
        },
      ],
      position: templateUpdatableData?.position,
      setPosition: template25Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'main_heading',
      name: 'professional',
      heading: templateUpdatableData?.main_heading,
      setHeading: template25Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.main_descp,
          setDescription: template25Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'achievements',
      name: 'achievement',
      heading: templateUpdatableData?.achievements_heading,
      setHeading: template25Data.setAchievements_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.achievements_descp,
          setDescription: template25Data.setAchievements_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template25Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template25Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template25Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template25Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template25Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template25Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template25Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template25Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template25Data.setExp_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template25Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9941,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template25Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template25Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template25Data.setEdu_1_positon,
        },
        {
          key: 9942,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template25Data.setEdu_2_heading,
          tenure: templateUpdatableData?.edu_2_tenure,
          setTenure: template25Data.setEdu_2_tenure,
          position: templateUpdatableData?.edu_2_positon,
          setPosition: template25Data.setEdu_2_positon,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'annexure',
      // name: 'annexure',
      heading: templateUpdatableData?.annexure,
      setHeading: template25Data.setAnnexure,
      subSection: true,
      description: [
        {
          key: 9941,
          tenure: templateUpdatableData?.annexure_1_tenure,
          setTenure: template25Data.setAnnexure_1_tenure,
          description: templateUpdatableData?.annexure_1_descp,
          setDescription: template25Data.setAnnexure_1_descp,
        },
        {
          key: 9942,
          tenure: templateUpdatableData?.annexure_2_tenure,
          setTenure: template25Data.setAnnexure_2_tenure,
          description: templateUpdatableData?.annexure_2_descp,
          setDescription: template25Data.setAnnexure_2_descp,
        },
        {
          key: 9942,
          tenure: templateUpdatableData?.annexure_3_tenure,
          setTenure: template25Data.setAnnexure_3_tenure,
          description: templateUpdatableData?.annexure_3_descp,
          setDescription: template25Data.setAnnexure_3_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 26 Data

  const template26Color = {
    sidePanelBgColor: '#FE611A',
    sidePanelTextColor: '#000000',
  };

  const template26DataLeftSection = [{ data: null }];

  const template26DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template26Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template26Data.setPosition,
      bottomName: templateUpdatableData?.bottom_name,
      setBottomName: template26Data.setBottom_name,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main_heading',
      heading: templateUpdatableData?.main_heading,
      setHeading: template26Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.main_descp,
          setDescription: template26Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'achievement',
      type: 'achievements',
      heading: templateUpdatableData?.achievements_heading,
      setHeading: template26Data.setAchievements_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.achievements_descp,
          setDescription: template26Data.setAchievements_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template26Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template26Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template26Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template26Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template26Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template26Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template26Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template26Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template26Data.setExp_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template26Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9941,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template26Data.setEdu_1_heading,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template26Data.setEdu_1_descp,
        },
        {
          key: 9942,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template26Data.setEdu_2_heading,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template26Data.setEdu_2_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'certification',
      type: 'certifications',
      heading: templateUpdatableData?.certifications,
      setHeading: template26Data.setCertifications,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.certifications_1,
          setDescription: template26Data.setCertifications_1,
        },
        {
          key: 9942,
          description: templateUpdatableData?.certifications_2,
          setDescription: template26Data.setCertifications_2,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'professional_association',
      type: 'professional',
      heading: templateUpdatableData?.professional_heading,
      setHeading: template26Data.setProfessional_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.professional_descp,
          setDescription: template26Data.setProfessional_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 27 Data

  const template27Color = {
    sidePanelBgColor: '#F8496C',
    sidePanelTextColor: '#000000',
  };

  const template27DataLeftSection = [{ data: null }];

  const template27DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template27Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template27Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'primary',
      name: 'professional',
      heading: templateUpdatableData?.main_heading,
      setHeading: template27Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template27Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template27Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template27Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template27Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template27Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template27Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template27Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template27Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template27Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template27Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template27Data.setExp_3_heading,
          tenure: templateUpdatableData?.exp_3_tenure,
          setTenure: template27Data.setExp_3_tenure,
          position: templateUpdatableData?.exp_3_positon,
          setPosition: template27Data.setExp_3_positon,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template27Data.setExp_3_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template27Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template27Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template27Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template27Data.setEdu_1_positon,
        },
      ],
      // {key: 9832, heading: template27Data.edu_2_heading, tenure: template27Data.edu_2_tenure, position: template27Data.edu_2_positon, },],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_interest',
      skill_name: 'skills',
      skill_heading: templateUpdatableData?.skills,
      setSkill_heading: template27Data.setSkills,
      skill_description: [
        {
          key: 5751,
          name: templateUpdatableData?.skills_1,
          setName: template27Data.setSkills_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skills_2,
          setName: template27Data.setSkills_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skills_3,
          setName: template27Data.setSkills_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skills_4,
          setName: template27Data.setSkills_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skills_5,
          setName: template27Data.setSkills_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
      ],
      interest_name: 'interests',
      interest_heading: templateUpdatableData?.interest,
      setInterest_heading: template27Data.setInterest,
      interest_description: [
        {
          key: 9871,
          description: templateUpdatableData?.interest_descp,
          setDescription: template27Data.setInterest_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 28 Data

  const template28Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template28DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      type: 'management',
      heading: templateUpdatableData?.management_heading,
      setHeading: template28Data.setManagement_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.management_descp,
          setDescription: template28Data.setManagement_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      type: 'scientific',
      heading: templateUpdatableData?.scientific_heading,
      setHeading: template28Data.setScientific_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.scientific_descp,
          setDescription: template28Data.setScientific_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      class: 'block',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template28Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template28Data.setEdu_1_descp,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template28Data.setEdu_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'personal',
      type: 'contact',
      heading: templateUpdatableData?.contact,
      setHeading: template28Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.conatct_descp,
          setDescription: template28Data.setConatct_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template28DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template28Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template28Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      type: 'profile',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile,
      setHeading: template28Data.setProfile,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.profile_descp,
          setDescription: template28Data.setProfile_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      type: 'section_1',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_1_heading,
      setHeading: template28Data.setSection_1_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_1_descp,
          setDescription: template28Data.setSection_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'section_2',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_2_heading,
      setHeading: template28Data.setSection_2_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_2_descp,
          setDescription: template28Data.setSection_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template28Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template28Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template28Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template28Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template28Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template28Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template28Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template28Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template28Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template28Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 29 Data

  const template29Color = {
    sidePanelBgColor: '#4D4D4D',
    sidePanelTextColor: '#333333',
  };

  const template29DataLeftSection = [
    {
      key: 1,
      type: 'contact',
      name: 'personal',
      heading: templateUpdatableData?.contact,
      setHeading: template29Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.contact_descp,
          setDescription: template29Data.setContact_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template29Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1,
          setDescription: template29Data.setEdu_1,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2,
          setDescription: template29Data.setEdu_2,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'skills',
      type: 'skill',
      heading: templateUpdatableData?.skills,
      setHeading: template29Data.setSkills,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.skill_descp,
          setDescription: template29Data.setSkill_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'certifications',
      name: 'certification',
      heading: templateUpdatableData?.certifications,
      setHeading: template29Data.setCertifications,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.certifications_descp,
          setDescription: template29Data.setCertifications_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      type: 'interests',
      name: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: template29Data.setInterests,
      description: [
        {
          key: 9551,
          description: templateUpdatableData?.interest_descp,
          setDescription: template29Data.setInterest_descp,
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
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template29Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template29Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'main',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.main_heading,
      setHeading: template29Data.setMain_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.main_descp,
          setDescription: template29Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template29Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template29Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template29Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template29Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template29Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template29Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template29Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template29Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template29Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template29Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 30 Data

  const template30Color = {
    sidePanelBgColor: '#242F92',
    sidePanelTextColor: '#655C5A',
  };

  const template30DataLeftSection = [
    {
      key: 1,
      type: 'contact',
      name: 'personal',
      heading: templateUpdatableData?.contact,
      setHeading: template30Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.phone,
          setDescription: template30Data.setPhone,
          type: 'phone',
        },
        {
          key: 5754,
          description: templateUpdatableData?.email,
          setDescription: template30Data.setEmail,
          type: 'email',
        },
        {
          key: 5755,
          description: templateUpdatableData?.address,
          setDescription: template30Data.setAddress,
          type: 'address',
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template30Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.education_descp_1,
          setDescription: template30Data.setEducation_descp_1,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      type: 'achievements',
      name: 'achievement',
      heading: templateUpdatableData?.achievement,
      setHeading: template30Data.setAchievement,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.achievement_descp,
          setDescription: template30Data.setAchievement_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'software',
      name: 'software',
      heading: templateUpdatableData?.software,
      setHeading: template30Data.setSoftware,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.software_descp,
          setDescription: template30Data.setSoftware_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      type: 'language',
      name: 'languages',
      heading: templateUpdatableData?.language,
      setHeading: template30Data.setLanguage,
      description: [
        {
          key: 9551,
          description: templateUpdatableData?.language_descp,
          setDescription: template30Data.setLanguage_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template30DataRightSection = [
    {
      key: 6,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template30Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template30Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'main',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.main_heading,
      setHeading: template30Data.setMain_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.main_descp,
          setDescription: template30Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      type: 'skills',
      name: 'skills',
      class: 'block',
      heading: templateUpdatableData?.skills,
      setHeading: template30Data.setSkills,
      description: [
        {
          key: 5751,
          name: templateUpdatableData?.skill_1,
          setName: template30Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 5752,
          name: templateUpdatableData?.skill_2,
          setName: template30Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 5753,
          name: templateUpdatableData?.skill_3,
          setName: template30Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 5754,
          name: templateUpdatableData?.skill_4,
          setName: template30Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 5755,
          name: templateUpdatableData?.skill_5,
          setName: template30Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 5756,
          name: templateUpdatableData?.skill_6,
          setName: template30Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template30Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template30Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template30Data.setExp_1_tenure,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template30Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template30Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template30Data.setExp_2_tenure,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template30Data.setExp_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 10,
      type: 'interest',
      name: 'interests',
      class: 'interest',
      heading: templateUpdatableData?.interest,
      setHeading: template30Data.setInterest,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.interest_1,
          setDescription: template30Data.setInterest_1,
        },
        {
          key: 9631,
          description: templateUpdatableData?.interest_2,
          setDescription: template30Data.setInterest_2,
        },
        {
          key: 9631,
          description: templateUpdatableData?.interest_3,
          setDescription: template30Data.setInterest_3,
        },
        {
          key: 9631,
          description: templateUpdatableData?.interest_4,
          setDescription: template30Data.setInterest_4,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */******************************************************************************************************************************************\*
  //  EXECUTIVE RESUMES
  // */******************************************************************************************************************************************\*

  // */*********************************************************************\*

  // ExecutiveTemplate 1 Data

  const executiveTemplate1Color = {
    sidePanelBgColor: '#808080',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#E5E5E5',
  };

  const executiveTemplate_1_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate1Data.setName,
      subPosition: templateUpdatableData?.subPosition,
      setSubPosition: executiveTemplate1Data.setSubPosition,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate1Data.setPosition,
      contact: templateUpdatableData?.contact_descp,
      setContact: executiveTemplate1Data.setContact_descp,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'summary',
      heading: templateUpdatableData?.summary_heading,
      setHeading: executiveTemplate1Data.setSummary_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.summary_descp,
          setDescription: executiveTemplate1Data.setSummary_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.exp_1_heading,
      setHeading: executiveTemplate1Data.setExp_1_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: executiveTemplate1Data.setExp_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.exp_2_heading,
      setHeading: executiveTemplate1Data.setExp_2_heading,
      subSection: true,
      description: [
        {
          key: 9011,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: executiveTemplate1Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      name: 'education',
      type: 'experience',
      heading: templateUpdatableData?.edu_1_heading,
      setHeading: executiveTemplate1Data.setEdu_1_heading,
      subSection: true,
      description: [
        {
          key: 9921,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: executiveTemplate1Data.setEdu_1_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'interests',
      type: 'experience',
      heading: templateUpdatableData?.hobbies_heading,
      setHeading: executiveTemplate1Data.setHobbies_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.hobbies_descp,
          setDescription: executiveTemplate1Data.setHobbies_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'skills',
      type: 'skills',
      heading: templateUpdatableData?.skills_heading,
      setHeading: executiveTemplate1Data.setSkills_heading,
      subSection: true,
      description: [
        {
          key: 1101,
          name: templateUpdatableData?.skill_1,
          setName: executiveTemplate1Data.setSkill_1,
          expertice: skill_1_expertice,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 1102,
          name: templateUpdatableData?.skill_2,
          setName: executiveTemplate1Data.setSkill_2,
          expertice: skill_2_expertice,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 1103,
          name: templateUpdatableData?.skill_3,
          setName: executiveTemplate1Data.setSkill_3,
          expertice: skill_3_expertice,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 1104,
          name: templateUpdatableData?.skill_4,
          setName: executiveTemplate1Data.setSkill_4,
          expertice: skill_4_expertice,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 1105,
          name: templateUpdatableData?.skill_5,
          setName: executiveTemplate1Data.setSkill_5,
          expertice: skill_5_expertice,
          setExpertice: setSkill_5_expertice,
        },
        {
          key: 1106,
          name: templateUpdatableData?.skill_6,
          setName: executiveTemplate1Data.setSkill_6,
          expertice: skill_6_expertice,
          setExpertice: setSkill_6_expertice,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 2 Data

  const executiveTemplate2Color = {
    sidePanelBgColor: '#9A1F22',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#C02625',
  };

  const executiveTemplate_2_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate2Data.setName,
      contact: templateUpdatableData?.contact_descp,
      setContact: executiveTemplate2Data.setContact_descp,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate2Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.main_descp,
          setDescription: executiveTemplate2Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'sections',
      // name: 'skills',
      heading: 'none',
      subSection: true,
      description_1: [
        {
          key: 9041,
          description: templateUpdatableData?.section_1_descp,
          setDescription: executiveTemplate2Data.setSection_1_descp,
        },
      ],
      description_2: [
        {
          key: 9042,
          description: templateUpdatableData?.section_2_descp,
          setDescription: executiveTemplate2Data.setSection_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'expertise',
      name: 'skills',
      heading: templateUpdatableData?.expertise_heading,
      setHeading: executiveTemplate2Data.setExpertise_heading,
      subSection: true,
      description: [
        {
          key: 9011,
          description: templateUpdatableData?.expertise_descp,
          setDescription: executiveTemplate2Data.setExpertise_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'evolution',
      name: 'experience',
      heading: templateUpdatableData?.evolution_heading,
      setHeading: executiveTemplate2Data.setEvolution_heading,
      subSection: true,
      description: [
        {
          key: 9921,
          description: templateUpdatableData?.evolution_descp,
          setDescription: executiveTemplate2Data.setEvolution_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'keyImpact',
      // name: 'personal',
      heading: 'none',
      subSection: true,
      keyImpact: [
        {
          key: 9921,
          description: templateUpdatableData?.keyImpact_1,
          setDescription: executiveTemplate2Data.setKeyImpact_1,
        },
        {
          key: 9922,
          description: templateUpdatableData?.keyImpact_2,
          setDescription: executiveTemplate2Data.setKeyImpact_2,
        },
        {
          key: 9923,
          description: templateUpdatableData?.keyImpact_3,
          setDescription: executiveTemplate2Data.setKeyImpact_3,
        },
      ],
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.keyImpact_descp,
          setDescription: executiveTemplate2Data.setKeyImpact_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 3 Data

  const executiveTemplate3Color = {
    sidePanelBgColor: '#FF8001',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#E5E5E5',
  };

  const executiveTemplate_3_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate3Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate3Data.setPosition,
      contact: templateUpdatableData?.contact_descp,
      setContact: executiveTemplate3Data.setContact_descp,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate3Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.positionType_1,
          setDescription: executiveTemplate3Data.setPositionType_1,
        },
        {
          key: 9942,
          description: templateUpdatableData?.positionType_2,
          setDescription: executiveTemplate3Data.setPositionType_2,
        },
        {
          key: 9943,
          description: templateUpdatableData?.positionType_3,
          setDescription: executiveTemplate3Data.setPositionType_3,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'sections',
      heading: 'none',
      subSection: true,
      description_1: [
        {
          key: 9041,
          description: templateUpdatableData?.main_descp_1,
          setDescription: executiveTemplate3Data.setMain_descp_1,
        },
      ],
      description_2: [
        {
          key: 9042,
          description: templateUpdatableData?.main_descp_2,
          setDescription: executiveTemplate3Data.setMain_descp_2,
        },
      ],
      description_3_heading: templateUpdatableData?.main_descp_3_heading,
      setDescription_3_heading: executiveTemplate3Data.setMain_descp_3_heading,
      description_3: [
        {
          key: 9043,
          description: templateUpdatableData?.main_descp_3,
          setDescription: executiveTemplate3Data.setMain_descp_3,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'evolution',
      name: 'experience',
      heading: templateUpdatableData?.evolution_heading,
      setHeading: executiveTemplate3Data.setEvolution_heading,
      subSection: true,
      description: [
        {
          key: 9011,
          description: templateUpdatableData?.evolution_descp,
          setDescription: executiveTemplate3Data.setEvolution_descp,
        },
      ],
      section_description: [
        {
          key: 9012,
          description: templateUpdatableData?.evolution_section_descp,
          setDescription: executiveTemplate3Data.setEvolution_section_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'revenue',
      heading: templateUpdatableData?.revenue_heading,
      setHeading: executiveTemplate3Data.setRevenue_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.revenue_descp,
          setDescription: executiveTemplate3Data.setRevenue_descp,
        },
      ],
      revenue: [
        {
          key: 1101,
          name: templateUpdatableData?.chart_bar_1,
          setName: executiveTemplate3Data.setChart_bar_1,
          expertice: 20,
          setExpertice: setSkill_1_expertice,
        },
        {
          key: 1102,
          name: templateUpdatableData?.chart_bar_2,
          setName: executiveTemplate3Data.setChart_bar_2,
          expertice: 40,
          setExpertice: setSkill_2_expertice,
        },
        {
          key: 1103,
          name: templateUpdatableData?.chart_bar_3,
          setName: executiveTemplate3Data.setChart_bar_3,
          expertice: 60,
          setExpertice: setSkill_3_expertice,
        },
        {
          key: 1104,
          name: templateUpdatableData?.chart_bar_4,
          setName: executiveTemplate3Data.setChart_bar_4,
          expertice: 80,
          setExpertice: setSkill_4_expertice,
        },
        {
          key: 1105,
          name: templateUpdatableData?.chart_bar_5,
          setName: executiveTemplate3Data.setChart_bar_5,
          expertice: 100,
          setExpertice: setSkill_5_expertice,
        },
      ],
      chart_heading: templateUpdatableData?.revenue_chart_heading,
      setChart_heading: executiveTemplate3Data.setRevenue_chart_heading,
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 4 Data

  const executiveTemplate4Color = {
    sidePanelBgColor: '#49919E',
    sidePanelTextColor: '#000000',
  };

  const executiveTemplate_4_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate4Data.setName,
      nameChar: templateUpdatableData?.nameChar,
      setNameChar: executiveTemplate4Data.setNameChar,
      headLine: templateUpdatableData?.headLine,
      setHeadLine: executiveTemplate4Data.setHeadLine,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate4Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'main',
      name: 'skills',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate4Data.setMain_heading,
      subSection: true,
      main_description: templateUpdatableData?.main_descp,
      setMain_description: executiveTemplate4Data.setMain_descp,
      // main_description: [{key: 9941, description: executiveTemplate4Data.main_descp },],
      description: [
        {
          key: 9941,
          description: templateUpdatableData?.main_descp_1,
          setDescription: executiveTemplate4Data.setMain_descp_1,
        },
        {
          key: 9942,
          description: templateUpdatableData?.main_descp_2,
          setDescription: executiveTemplate4Data.setMain_descp_2,
        },
        {
          key: 9943,
          description: templateUpdatableData?.main_descp_3,
          setDescription: executiveTemplate4Data.setMain_descp_3,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'achievement',
      name: 'professional',
      heading: templateUpdatableData?.achievements_heading,
      setHeading: executiveTemplate4Data.setAchievements_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.achievements_descp,
          setDescription: executiveTemplate4Data.setAchievements_descp,
        },
      ],
      recognitions: templateUpdatableData?.recognitions_heading,
      setRecognitions: executiveTemplate4Data.setRecognitions_heading,
      recognitions_descp: [
        {
          key: 9042,
          description: templateUpdatableData?.recognitions_descp,
          setDescription: executiveTemplate4Data.setRecognitions_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.exp_heading,
      setHeading: executiveTemplate4Data.setExp_heading,
      subSection: true,
      description: [
        {
          key: 9011,
          position: templateUpdatableData?.exp_1_position,
          setPosition: executiveTemplate4Data.setExp_1_position,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: executiveTemplate4Data.setExp_1_tenure,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: executiveTemplate4Data.setExp_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'section_only',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.section_normal,
          setDescription: executiveTemplate4Data.setSection_normal,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'growth',
      heading: 'none',
      subSection: true,
      growthCircle: templateUpdatableData?.growth,
      setGrowthCircle: executiveTemplate4Data.setGrowth,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.growth_descp,
          setDescription: executiveTemplate4Data.setGrowth_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 5 Data

  const executiveTemplate5Color = {
    sidePanelBgColor: '#FE330A',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#ffad9d',
  };

  const executiveTemplate_5_DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate5Data.setName,
      contact: templateUpdatableData?.contact,
      setContact: executiveTemplate5Data.setContact,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate5Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate5Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: executiveTemplate5Data.setMain_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'sections',
      heading: 'none',
      subSection: true,
      description_1: [
        {
          key: 9041,
          description: templateUpdatableData?.section1_descp,
          setDescription: executiveTemplate5Data.setSection1_descp,
        },
      ],
      description_2: [
        {
          key: 9042,
          description: templateUpdatableData?.section2_descp,
          setDescription: executiveTemplate5Data.setSection2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'skills',
      type: 'core',
      heading: templateUpdatableData?.core_heading,
      setHeading: executiveTemplate5Data.setCore_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.core_descp,
          setDescription: executiveTemplate5Data.setCore_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'actions',
      name: 'experience',
      heading: templateUpdatableData?.leadership_heading,
      setHeading: executiveTemplate5Data.setLeadership_heading,
      subSection: true,
      description: templateUpdatableData?.leadership_descp,
      setDescription: executiveTemplate5Data.setLeadership_descp,
      main_description: [
        {
          key: 9042,
          description: templateUpdatableData?.leadership_main_descp,
          setDescription: executiveTemplate5Data.setLeadership_main_descp,
        },
      ],
      actions: [
        {
          key: 9941,
          description: templateUpdatableData?.leadership_1,
          setDescription: executiveTemplate5Data.setLeadership_1,
        },
        {
          key: 9942,
          description: templateUpdatableData?.leadership_2,
          setDescription: executiveTemplate5Data.setLeadership_2,
        },
        {
          key: 9943,
          description: templateUpdatableData?.leadership_3,
          setDescription: executiveTemplate5Data.setLeadership_3,
        },
        {
          key: 9944,
          description: templateUpdatableData?.leadership_4,
          setDescription: executiveTemplate5Data.setLeadership_4,
        },
        {
          key: 9945,
          description: templateUpdatableData?.leadership_5,
          setDescription: executiveTemplate5Data.setLeadership_5,
        },
        {
          key: 9946,
          description: templateUpdatableData?.leadership_6,
          setDescription: executiveTemplate5Data.setLeadership_6,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'value',
      heading: templateUpdatableData?.value_heading,
      setHeading: executiveTemplate5Data.setValue_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.value_descp,
          setDescription: executiveTemplate5Data.setValue_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 6 Data

  const executiveTemplate6Color = {
    sidePanelBgColor: '#e3d400',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#f1e97f',
  };

  const executiveTemplate_6_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate6Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate6Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'main',
      name: 'professional',
      no_heading_background: true,
      heading: templateUpdatableData?.main_descp_1,
      setHeading: executiveTemplate6Data.setMain_descp_1,
      // heading: 'none',
      subSection: true,
      background: true,
      description: 'none',
      // description: [
      //   { key: 9931, description: executiveTemplate6Data.main_descp_1 },
      // ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'main_descp',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.main_descp_2,
          setDescription: executiveTemplate6Data.setMain_descp_2,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'growth',
      name: 'experience',
      heading: templateUpdatableData?.growth,
      setHeading: executiveTemplate6Data.setGrowth,
      growth_graph: [
        {
          chartValue_1: templateUpdatableData?.growth_chartValue_1,
          setChartValue_1: executiveTemplate6Data.setGrowth_chartValue_1,
          chartValue_2: templateUpdatableData?.growth_chartValue_2,
          setChartValue_2: executiveTemplate6Data.setGrowth_chartValue_2,
          chartValue_3: templateUpdatableData?.growth_chartValue_3,
          setChartValue_3: executiveTemplate6Data.setGrowth_chartValue_3,
          chartValue_4: templateUpdatableData?.growth_chartValue_4,
          setChartValue_4: executiveTemplate6Data.setGrowth_chartValue_4,
          chartValue_descp: templateUpdatableData?.growth_chartValue_descp,
          setChartValue_descp:
            executiveTemplate6Data.setGrowth_chartValue_descp,
        },
      ],
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.growth_descp,
          setDescription: executiveTemplate6Data.setGrowth_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'leadership',
      heading: templateUpdatableData?.leadership_heading,
      setHeading: executiveTemplate6Data.setLeadership_heading,
      subSection: true,
      description: [
        {
          key: 9042,
          description: templateUpdatableData?.leadership_descp_1,
          setDescription: executiveTemplate6Data.setLeadership_descp_1,
        },
        {
          key: 9043,
          background: true,
          description: templateUpdatableData?.leadership_descp_2,
          setDescription: executiveTemplate6Data.setLeadership_descp_2,
        },
        {
          key: 9044,
          description: templateUpdatableData?.leadership_descp_3,
          setDescription: executiveTemplate6Data.setLeadership_descp_3,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'sections',
      heading: 'none',
      subSection: true,
      chart: templateUpdatableData?.projected_chart,
      setChart: executiveTemplate6Data.setProjected_chart,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.section_descp,
          setDescription: executiveTemplate6Data.setSection_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 7 Data

  const executiveTemplate7Color = {
    sidePanelBgColor: '#FF8001',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#ffde86',
  };

  const executiveTemplate_7_DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate7Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate7Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'main',
      heading: 'none',
      name: 'professional',
      subSection: true,
      background: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp_1,
          setDescription: executiveTemplate7Data.setMain_descp_1,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'main_descp',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9041,
          description: templateUpdatableData?.main_descp_2,
          setDescription: executiveTemplate7Data.setMain_descp_2,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'leadership',
      heading: templateUpdatableData?.leadership,
      setHeading: executiveTemplate7Data.setLeadership,
      leadership_graph: [
        {
          proTip_name: 'skills',
          chartValue_1: templateUpdatableData?.leadership_chartText_1,
          setChartValue_1: executiveTemplate7Data.setLeadership_chartText_1,
          chartValue_2: templateUpdatableData?.leadership_chartText_2,
          setChartValue_2: executiveTemplate7Data.setLeadership_chartText_2,
          chartValue_3: templateUpdatableData?.leadership_chartText_3,
          setChartValue_3: executiveTemplate7Data.setLeadership_chartText_3,
          chartValue_4: templateUpdatableData?.leadership_chartText_4,
          setChartValue_4: executiveTemplate7Data.setLeadership_chartText_4,
          chartValue_descp: templateUpdatableData?.leadership_chart_descp,
          setChartValue_descp: executiveTemplate7Data.setLeadership_chart_descp,
        },
      ],
      subSection: true,
      description: [
        {
          key: 9931,
          border: true,
          description: templateUpdatableData?.leadership_descp_1,
          setDescription: executiveTemplate7Data.setLeadership_descp_1,
        },
        {
          key: 9932,
          background: true,
          description: templateUpdatableData?.leadership_descp_2,
          setDescription: executiveTemplate7Data.setLeadership_descp_2,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      type: 'personal',
      name: 'experience',
      heading: templateUpdatableData?.personal_heading,
      setHeading: executiveTemplate7Data.setPersonal_heading,
      subSection: true,
      description: [
        {
          key: 9044,
          description: templateUpdatableData?.personal_descp,
          setDescription: executiveTemplate7Data.setPersonal_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'section_last',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.section_descp,
          setDescription: executiveTemplate7Data.setSection_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 8 Data

  const executiveTemplate8Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#000000',
  };

  const executiveTemplate_8_DataRightSection = [
    {
      key: 4,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate8Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate8Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main_last',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate8Data.setMain_heading,
      subSection: true,
      background: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp_1,
          setDescription: executiveTemplate8Data.setMain_descp_1,
        },
        {
          key: 9932,
          description: templateUpdatableData?.main_descp_2,
          setDescription: executiveTemplate8Data.setMain_descp_2,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: executiveTemplate8Data.setExperience,
      variable: {
        exp_challenge: templateUpdatableData?.exp_challenge,
        setExp_challenge: executiveTemplate8Data.setExp_challenge,
        exp_action: templateUpdatableData?.exp_action,
        setExp_action: executiveTemplate8Data.setExp_action,
        exp_results: templateUpdatableData?.exp_results,
        setExp_results: executiveTemplate8Data.setExp_results,
      },
      subSection: true,
      description: [
        {
          key: 9041,
          exp_heading: templateUpdatableData?.exp_1_heading,
          setExp_heading: executiveTemplate8Data.setExp_1_heading,
          exp_challenge_descp: templateUpdatableData?.exp_1_challenge_descp,
          setExp_challenge_descp:
            executiveTemplate8Data.setExp_1_challenge_descp,
          exp_action_descp: templateUpdatableData?.exp_1_action_descp,
          setExp_action_descp: executiveTemplate8Data.setExp_1_action_descp,
          exp_results_descp: templateUpdatableData?.exp_1_results_descp,
          setExp_results_descp: executiveTemplate8Data.setExp_1_results_descp,
        },
        {
          key: 9042,
          exp_heading: templateUpdatableData?.exp_2_heading,
          setExp_heading: executiveTemplate8Data.setExp_2_heading,
          exp_challenge_descp: templateUpdatableData?.exp_2_challenge_descp,
          setExp_challenge_descp:
            executiveTemplate8Data.setExp_2_challenge_descp,
          exp_action_descp: templateUpdatableData?.exp_2_action_descp,
          setExp_action_descp: executiveTemplate8Data.setExp_2_action_descp,
          exp_results_descp: templateUpdatableData?.exp_2_results_descp,
          setExp_results_descp: executiveTemplate8Data.setExp_2_results_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'experience',
      heading: 'none',
      variable: {
        exp_challenge: templateUpdatableData?.exp_challenge,
        setExp_challenge: executiveTemplate8Data.setExp_challenge,
        exp_action: templateUpdatableData?.exp_action,
        setExp_action: executiveTemplate8Data.setExp_action,
        exp_results: templateUpdatableData?.exp_results,
        setExp_results: executiveTemplate8Data.setExp_results,
      },
      subSection: true,
      description: [
        {
          key: 9043,
          exp_heading: templateUpdatableData?.exp_3_heading,
          setExp_heading: executiveTemplate8Data.setExp_3_heading,
          exp_challenge_descp: templateUpdatableData?.exp_3_challenge_descp,
          setExp_challenge_descp:
            executiveTemplate8Data.setExp_3_challenge_descp,
          exp_action_descp: templateUpdatableData?.exp_3_action_descp,
          setExp_action_descp: executiveTemplate8Data.setExp_3_action_descp,
          exp_results_descp: templateUpdatableData?.exp_3_results_descp,
          setExp_results_descp: executiveTemplate8Data.setExp_3_results_descp,
        },
        {
          key: 9041,
          exp_heading: templateUpdatableData?.exp_1_heading,
          setExp_heading: executiveTemplate8Data.setExp_1_heading,
          exp_challenge_descp: templateUpdatableData?.exp_1_challenge_descp,
          setExp_challenge_descp:
            executiveTemplate8Data.setExp_1_challenge_descp,
          exp_action_descp: templateUpdatableData?.exp_1_action_descp,
          setExp_action_descp: executiveTemplate8Data.setExp_1_action_descp,
          exp_results_descp: templateUpdatableData?.exp_1_results_descp,
          setExp_results_descp: executiveTemplate8Data.setExp_1_results_descp,
        },
      ],
      ref: mainSection3,
      id: `mainSection${key + 1}`,
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: executiveTemplate8Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.education_descp,
          setDescription: executiveTemplate8Data.setEducation_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      type: 'affiliations',
      name: 'professional_association',
      heading: templateUpdatableData?.affiliations,
      setHeading: executiveTemplate8Data.setAffiliations,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.affiliations_descp,
          setDescription: executiveTemplate8Data.setAffiliations_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 9 Data

  const executiveTemplate9Color = {
    sidePanelBgColor: '#FF8001',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#FCEFA8',
  };

  const executiveTemplate_9_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate9Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate9Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate9Data.setMain_heading,
      subSection: true,
      background: false,
      subHeading: [
        {
          key: 9931,
          description: templateUpdatableData?.main_heading_1,
          setDescription: executiveTemplate9Data.setMain_heading_1,
        },
        {
          key: 9932,
          description: templateUpdatableData?.main_heading_2,
          setDescription: executiveTemplate9Data.setMain_heading_2,
        },
        {
          key: 9933,
          description: templateUpdatableData?.main_heading_3,
          setDescription: executiveTemplate9Data.setMain_heading_3,
        },
      ],
      description: [
        {
          key: 9934,
          description: templateUpdatableData?.main_descp,
          setDescription: executiveTemplate9Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'core',
      heading: templateUpdatableData?.core_heading,
      setHeading: executiveTemplate9Data.setCore_heading,
      subSection: true,
      background: false,
      chart: [
        {
          key: 9031,
          description: templateUpdatableData?.core_chart_1,
          setDescription: executiveTemplate9Data.setCore_chart_1,
        },
        {
          key: 9032,
          description: templateUpdatableData?.core_chart_2,
          setDescription: executiveTemplate9Data.setCore_chart_2,
        },
        {
          key: 9033,
          description: templateUpdatableData?.core_chart_3,
          setDescription: executiveTemplate9Data.setCore_chart_3,
        },
      ],
      description: [
        {
          key: 9034,
          description: templateUpdatableData?.core_descp,
          setDescription: executiveTemplate9Data.setCore_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience_heading,
      setHeading: executiveTemplate9Data.setExperience_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          exp_heading: templateUpdatableData?.exp_1_heading,
          setExp_heading: executiveTemplate9Data.setExp_1_heading,
          exp_tenure: templateUpdatableData?.exp_1_tenure,
          setExp_tenure: executiveTemplate9Data.setExp_1_tenure,
          exp_subHeading: templateUpdatableData?.exp_1_subHeading,
          setExp_subHeading: executiveTemplate9Data.setExp_1_subHeading,
          exp_subHeadings: {
            subHeading_1: templateUpdatableData?.exp_1_subHeading_1,
            setSubHeading_1: executiveTemplate9Data.setExp_1_subHeading_1,
            subHeading_2: templateUpdatableData?.exp_1_subHeading_2,
            setSubHeading_2: executiveTemplate9Data.setExp_1_subHeading_2,
            subHeading_3: templateUpdatableData?.exp_1_subHeading_3,
            setSubHeading_3: executiveTemplate9Data.setExp_1_subHeading_3,
          },
          exp_descp: templateUpdatableData?.exp_1_descp,
          setExp_descp: executiveTemplate9Data.setExp_1_descp,
        },
        {
          key: 9042,
          exp_heading: templateUpdatableData?.exp_2_heading,
          setExp_heading: executiveTemplate9Data.setExp_2_heading,
          exp_tenure: templateUpdatableData?.exp_2_tenure,
          setExp_tenure: executiveTemplate9Data.setExp_2_tenure,
          exp_subHeading: templateUpdatableData?.exp_2_subHeading,
          setExp_subHeading: executiveTemplate9Data.setExp_2_subHeading,
          exp_subHeadings: {
            subHeading_1: templateUpdatableData?.exp_2_subHeading_1,
            setSubHeading_1: executiveTemplate9Data.setExp_2_subHeading_1,
            subHeading_2: templateUpdatableData?.exp_2_subHeading_2,
            setSubHeading_2: executiveTemplate9Data.setExp_2_subHeading_2,
            subHeading_3: templateUpdatableData?.exp_2_subHeading_3,
            setSubHeading_3: executiveTemplate9Data.setExp_2_subHeading_3,
          },
          exp_descp: templateUpdatableData?.exp_2_descp,
          setExp_descp: executiveTemplate9Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: executiveTemplate9Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9641,
          exp_heading: templateUpdatableData?.edu_1_heading,
          setExp_heading: executiveTemplate9Data.setEdu_1_heading,
          exp_tenure: templateUpdatableData?.edu_1_tenure,
          setExp_tenure: executiveTemplate9Data.setEdu_1_tenure,
        },
        {
          key: 9642,
          exp_heading: templateUpdatableData?.edu_2_heading,
          setExp_heading: executiveTemplate9Data.setEdu_2_heading,
          exp_tenure: templateUpdatableData?.edu_2_tenure,
          setExp_tenure: executiveTemplate9Data.setEdu_2_tenure,
        },
        {
          key: 9643,
          exp_heading: templateUpdatableData?.edu_3_heading,
          setExp_heading: executiveTemplate9Data.setEdu_3_heading,
          exp_tenure: templateUpdatableData?.edu_3_tenure,
          setExp_tenure: executiveTemplate9Data.setEdu_3_tenure,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      type: 'professional',
      name: 'professional_association',
      heading: templateUpdatableData?.professional_heading,
      setHeading: executiveTemplate9Data.setProfessional_heading,
      subSection: true,
      description: [
        {
          key: 9071,
          exp_heading: templateUpdatableData?.professional_1_heading,
          setExp_heading: executiveTemplate9Data.setProfessional_1_heading,
          exp_tenure: templateUpdatableData?.professional_1_tenure,
          setExp_tenure: executiveTemplate9Data.setProfessional_1_tenure,
        },
        {
          key: 9072,
          exp_heading: templateUpdatableData?.professional_2_heading,
          setExp_heading: executiveTemplate9Data.setProfessional_2_heading,
          exp_tenure: templateUpdatableData?.professional_2_tenure,
          setExp_tenure: executiveTemplate9Data.setProfessional_2_tenure,
        },
        {
          key: 9073,
          exp_heading: templateUpdatableData?.professional_3_heading,
          setExp_heading: executiveTemplate9Data.setProfessional_3_heading,
          exp_tenure: templateUpdatableData?.professional_3_tenure,
          setExp_tenure: executiveTemplate9Data.setProfessional_3_tenure,
        },
        {
          key: 9074,
          exp_heading: templateUpdatableData?.professional_4_heading,
          setExp_heading: executiveTemplate9Data.setProfessional_4_heading,
          exp_tenure: templateUpdatableData?.professional_4_tenure,
          setExp_tenure: executiveTemplate9Data.setProfessional_4_tenure,
        },
        {
          key: 9075,
          exp_heading: templateUpdatableData?.professional_5_heading,
          setExp_heading: executiveTemplate9Data.setProfessional_5_heading,
          exp_tenure: templateUpdatableData?.professional_5_tenure,
          setExp_tenure: executiveTemplate9Data.setProfessional_5_tenure,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 10,
      class: 'block',
      type: 'interests',
      name: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: executiveTemplate9Data.setInterests,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.interests_descp,
          setDescription: executiveTemplate9Data.setInterests_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // ExecutiveTemplate 10 Data

  const executiveTemplate10Color = {
    sidePanelBgColor: '#2D471B',
    sidePanelTextColor: '#000000',
    mainPanelBgColor: '#D1E8BB',
  };

  const executiveTemplate_10_DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: executiveTemplate10Data.setName,
      position: templateUpdatableData?.position,
      setPosition: executiveTemplate10Data.setPosition,
      subSection: false,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'main',
      heading: templateUpdatableData?.main_heading,
      setHeading: executiveTemplate10Data.setMain_heading,
      subSection: true,
      background: false,
      subHeading: [
        {
          key: 9931,
          description: templateUpdatableData?.main_heading_1,
          setDescription: executiveTemplate10Data.setMain_heading_1,
        },
        {
          key: 9932,
          description: templateUpdatableData?.main_heading_2,
          setDescription: executiveTemplate10Data.setMain_heading_2,
        },
        {
          key: 9933,
          description: templateUpdatableData?.main_heading_3,
          setDescription: executiveTemplate10Data.setMain_heading_3,
        },
      ],
      description: [
        {
          key: 9934,
          description: templateUpdatableData?.main_descp,
          setDescription: executiveTemplate10Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      type: 'core',
      heading: templateUpdatableData?.core_heading,
      setHeading: executiveTemplate10Data.setCore_heading,
      subSection: true,
      background: false,
      chart: [
        {
          key: 9031,
          description: templateUpdatableData?.core_chart_1,
          setDescription: executiveTemplate10Data.setCore_chart_1,
        },
        {
          key: 9032,
          description: templateUpdatableData?.core_chart_2,
          setDescription: executiveTemplate10Data.setCore_chart_2,
        },
        {
          key: 9033,
          description: templateUpdatableData?.core_chart_3,
          setDescription: executiveTemplate10Data.setCore_chart_3,
        },
      ],
      description: [
        {
          key: 9034,
          description: templateUpdatableData?.core_descp,
          setDescription: executiveTemplate10Data.setCore_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'interests',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9034,
          description: templateUpdatableData?.section_descp,
          setDescription: executiveTemplate10Data.setSection_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience_heading,
      setHeading: executiveTemplate10Data.setExperience_heading,
      subSection: true,
      description: [
        {
          key: 9041,
          exp_heading: templateUpdatableData?.exp_1_heading,
          setExp_heading: executiveTemplate10Data.setExp_1_heading,
          exp_tenure: templateUpdatableData?.exp_1_tenure,
          setExp_tenure: executiveTemplate10Data.setExp_1_tenure,
          exp_subHeading: templateUpdatableData?.exp_1_subHeading,
          setExp_subHeading: executiveTemplate10Data.setExp_1_subHeading,
          exp_subHeadings: {
            subHeading_1: templateUpdatableData?.exp_1_subHeading_1,
            setSubHeading_1: executiveTemplate10Data.setExp_1_subHeading_1,
            subHeading_2: templateUpdatableData?.exp_1_subHeading_2,
            setSubHeading_2: executiveTemplate10Data.setExp_1_subHeading_2,
            subHeading_3: templateUpdatableData?.exp_1_subHeading_3,
            setSubHeading_3: executiveTemplate10Data.setExp_1_subHeading_3,
          },
          exp_descp: templateUpdatableData?.exp_1_descp,
          setExp_descp: executiveTemplate10Data.setExp_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: 'none',
      subSection: true,
      description: [
        {
          key: 9042,
          exp_heading: templateUpdatableData?.exp_2_heading,
          setExp_heading: executiveTemplate10Data.setExp_2_heading,
          exp_tenure: templateUpdatableData?.exp_2_tenure,
          setExp_tenure: executiveTemplate10Data.setExp_2_tenure,
          exp_subHeading: templateUpdatableData?.exp_2_subHeading,
          setExp_subHeading: executiveTemplate10Data.setExp_2_subHeading,
          exp_subHeadings: {
            subHeading_1: templateUpdatableData?.exp_2_subHeading_1,
            setSubHeading_1: executiveTemplate10Data.setExp_2_subHeading_1,
            subHeading_2: templateUpdatableData?.exp_2_subHeading_2,
            setSubHeading_2: executiveTemplate10Data.setExp_2_subHeading_2,
            subHeading_3: templateUpdatableData?.exp_2_subHeading_3,
            setSubHeading_3: executiveTemplate10Data.setExp_2_subHeading_3,
          },
          exp_descp: templateUpdatableData?.exp_2_descp,
          setExp_descp: executiveTemplate10Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 10,
      class: 'block',
      type: 'education',
      name: 'experience',
      heading: templateUpdatableData?.education,
      setHeading: executiveTemplate10Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9641,
          exp_heading: templateUpdatableData?.edu_1_heading,
          setExp_heading: executiveTemplate10Data.setEdu_1_heading,
          exp_tenure: templateUpdatableData?.edu_1_tenure,
          setExp_tenure: executiveTemplate10Data.setEdu_1_tenure,
        },
        {
          key: 9642,
          exp_heading: templateUpdatableData?.edu_2_heading,
          setExp_heading: executiveTemplate10Data.setEdu_2_heading,
          exp_tenure: templateUpdatableData?.edu_2_tenure,
          setExp_tenure: executiveTemplate10Data.setEdu_2_tenure,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 11,
      class: 'block',
      name: 'education',
      type: 'professional',
      heading: templateUpdatableData?.professional_heading,
      setHeading: executiveTemplate10Data.setProfessional_heading,
      subSection: true,
      description: [
        {
          key: 9071,
          exp_heading: templateUpdatableData?.professional_1_heading,
          setExp_heading: executiveTemplate10Data.setProfessional_1_heading,
          exp_tenure: templateUpdatableData?.professional_1_tenure,
          setExp_tenure: executiveTemplate10Data.setProfessional_1_tenure,
        },
        {
          key: 9072,
          exp_heading: templateUpdatableData?.professional_2_heading,
          setExp_heading: executiveTemplate10Data.setProfessional_2_heading,
          exp_tenure: templateUpdatableData?.professional_2_tenure,
          setExp_tenure: executiveTemplate10Data.setProfessional_2_tenure,
        },
        {
          key: 9073,
          exp_heading: templateUpdatableData?.professional_3_heading,
          setExp_heading: executiveTemplate10Data.setProfessional_3_heading,
          exp_tenure: templateUpdatableData?.professional_3_tenure,
          setExp_tenure: executiveTemplate10Data.setProfessional_3_tenure,
        },
        {
          key: 9074,
          exp_heading: templateUpdatableData?.professional_4_heading,
          setExp_heading: executiveTemplate10Data.setProfessional_4_heading,
          exp_tenure: templateUpdatableData?.professional_4_tenure,
          setExp_tenure: executiveTemplate10Data.setProfessional_4_tenure,
        },
        {
          key: 9075,
          exp_heading: templateUpdatableData?.professional_5_heading,
          setExp_heading: executiveTemplate10Data.setProfessional_5_heading,
          exp_tenure: templateUpdatableData?.professional_5_tenure,
          setExp_tenure: executiveTemplate10Data.setProfessional_5_tenure,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 10,
      class: 'block',
      name: 'interests',
      type: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: executiveTemplate10Data.setInterests,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.interests_descp,
          setDescription: executiveTemplate10Data.setInterests_descp,
        },
      ],
      ref: mainSection6,
      id: 'mainSection6',
      firstPage: !showOnFirstPage,
      secondPage: showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*****************************************************************************************************************\*

  // Condition to select data for different Templates

  const setDataUpdatableRightConditions =
    template === 'blankTemplate'
      ? blankTemplateDataRightSection
      : template === 'template_1'
      ? template1DataRightSection
      : template === 'template_2'
      ? template2DataRightSection
      : template === 'template_3'
      ? template3DataRightSection
      : template === 'template_4'
      ? template4DataRightSection
      : template === 'template_5'
      ? template5DataRightSection
      : template === 'template_6'
      ? template6DataRightSection
      : template === 'template_7'
      ? template7DataRightSection
      : template === 'template_8'
      ? template8DataRightSection
      : template === 'template_9'
      ? template9DataRightSection
      : template === 'template_10'
      ? template10DataRightSection
      : template === 'template_11'
      ? template11DataRightSection
      : template === 'template_12'
      ? template12DataRightSection
      : template === 'template_13'
      ? template13DataRightSection
      : template === 'template_14'
      ? template14DataRightSection
      : template === 'template_15'
      ? template15DataRightSection
      : template === 'template_16'
      ? template16DataRightSection
      : template === 'template_17'
      ? template17DataRightSection
      : template === 'template_18'
      ? template18DataRightSection
      : template === 'template_19'
      ? template19DataRightSection
      : template === 'template_20'
      ? template20DataRightSection
      : template === 'template_21'
      ? template21DataRightSection
      : template === 'template_22'
      ? template22DataRightSection
      : template === 'template_23'
      ? template23DataRightSection
      : template === 'template_24'
      ? template24DataRightSection
      : template === 'template_25'
      ? template25DataRightSection
      : template === 'template_26'
      ? template26DataRightSection
      : template === 'template_27'
      ? template27DataRightSection
      : template === 'template_28'
      ? template28DataRightSection
      : template === 'template_29'
      ? template29DataRightSection
      : template === 'template_30'
      ? template30DataRightSection
      : template === 'executiveTemplate_1'
      ? executiveTemplate_1_DataRightSection
      : template === 'executiveTemplate_2'
      ? executiveTemplate_2_DataRightSection
      : template === 'executiveTemplate_3'
      ? executiveTemplate_3_DataRightSection
      : template === 'executiveTemplate_4'
      ? executiveTemplate_4_DataRightSection
      : template === 'executiveTemplate_5'
      ? executiveTemplate_5_DataRightSection
      : template === 'executiveTemplate_6'
      ? executiveTemplate_6_DataRightSection
      : template === 'executiveTemplate_7'
      ? executiveTemplate_7_DataRightSection
      : template === 'executiveTemplate_8'
      ? executiveTemplate_8_DataRightSection
      : template === 'executiveTemplate_9'
      ? executiveTemplate_9_DataRightSection
      : template === 'executiveTemplate_10'
      ? executiveTemplate_10_DataRightSection
      : null;

  const setDataUpdatableLeftConditions =
    template === 'blankTemplate'
      ? blankTemplateDataLeftSection
      : template === 'template_1'
      ? template1DataLeftSection
      : template === 'template_2'
      ? template2DataLeftSection
      : template === 'template_3'
      ? template3DataLeftSection
      : template === 'template_4'
      ? template4DataLeftSection
      : template === 'template_5'
      ? template5DataLeftSection
      : template === 'template_6'
      ? template6DataLeftSection
      : template === 'template_7'
      ? template7DataLeftSection
      : template === 'template_8'
      ? template8DataLeftSection
      : template === 'template_9'
      ? template9DataLeftSection
      : template === 'template_10'
      ? template10DataLeftSection
      : template === 'template_11'
      ? template11DataLeftSection
      : template === 'template_12'
      ? template12DataLeftSection
      : template === 'template_13'
      ? template13DataLeftSection
      : template === 'template_14'
      ? template14DataLeftSection
      : template === 'template_15'
      ? template15DataLeftSection
      : template === 'template_16'
      ? template16DataLeftSection
      : template === 'template_17'
      ? template17DataLeftSection
      : template === 'template_18'
      ? template18DataLeftSection
      : template === 'template_19'
      ? template19DataLeftSection
      : template === 'template_20'
      ? template20DataLeftSection
      : template === 'template_21'
      ? template21DataLeftSection
      : template === 'template_22'
      ? template22DataLeftSection
      : template === 'template_23'
      ? template23DataLeftSection
      : template === 'template_24'
      ? template24DataLeftSection
      : template === 'template_25'
      ? template25DataLeftSection
      : template === 'template_26'
      ? template26DataLeftSection
      : template === 'template_27'
      ? template27DataLeftSection
      : template === 'template_28'
      ? template28DataLeftSection
      : template === 'template_29'
      ? template29DataLeftSection
      : template === 'template_30'
      ? template30DataLeftSection
      : template === 'executiveTemplate_1'
      ? template30DataLeftSection
      : template === 'executiveTemplate_2'
      ? template30DataLeftSection
      : template === 'executiveTemplate_3'
      ? template30DataLeftSection
      : template === 'executiveTemplate_4'
      ? template30DataLeftSection
      : template === 'executiveTemplate_5'
      ? template30DataLeftSection
      : template === 'executiveTemplate_6'
      ? template30DataLeftSection
      : template === 'executiveTemplate_7'
      ? template30DataLeftSection
      : template === 'executiveTemplate_8'
      ? template30DataLeftSection
      : template === 'executiveTemplate_9'
      ? template30DataLeftSection
      : template === 'executiveTemplate_10'
      ? template30DataLeftSection
      : null;

  // Template Selector

  const TemplateSelector =
    template === 'blankTemplate'
      ? 'blankTemplate'
      : template === 'template_1'
      ? 'template_1'
      : template === 'template_2'
      ? 'template_2'
      : template === 'template_3'
      ? 'template_3'
      : template === 'template_4'
      ? 'template_4'
      : template === 'template_5'
      ? 'template_5'
      : template === 'template_6'
      ? 'template_6'
      : template === 'template_7'
      ? 'template_7'
      : template === 'template_8'
      ? 'template_8'
      : template === 'template_9'
      ? 'template_9'
      : template === 'template_10'
      ? 'template_10'
      : template === 'template_11'
      ? 'template_11'
      : template === 'template_12'
      ? 'template_12'
      : template === 'template_13'
      ? 'template_13'
      : template === 'template_14'
      ? 'template_14'
      : template === 'template_15'
      ? 'template_15'
      : template === 'template_16'
      ? 'template_16'
      : template === 'template_17'
      ? 'template_17'
      : template === 'template_18'
      ? 'template_18'
      : template === 'template_19'
      ? 'template_19'
      : template === 'template_20'
      ? 'template_20'
      : template === 'template_21'
      ? 'template_21'
      : template === 'template_22'
      ? 'template_22'
      : template === 'template_23'
      ? 'template_23'
      : template === 'template_24'
      ? 'template_24'
      : template === 'template_25'
      ? 'template_25'
      : template === 'template_26'
      ? 'template_26'
      : template === 'template_27'
      ? 'template_27'
      : template === 'template_28'
      ? 'template_28'
      : template === 'template_29'
      ? 'template_29'
      : template === 'template_30'
      ? 'template_30'
      : template === 'executiveTemplate_1'
      ? 'executiveTemplate_1'
      : template === 'executiveTemplate_2'
      ? 'executiveTemplate_2'
      : template === 'executiveTemplate_3'
      ? 'executiveTemplate_3'
      : template === 'executiveTemplate_4'
      ? 'executiveTemplate_4'
      : template === 'executiveTemplate_5'
      ? 'executiveTemplate_5'
      : template === 'executiveTemplate_6'
      ? 'executiveTemplate_6'
      : template === 'executiveTemplate_7'
      ? 'executiveTemplate_7'
      : template === 'executiveTemplate_8'
      ? 'executiveTemplate_8'
      : template === 'executiveTemplate_9'
      ? 'executiveTemplate_9'
      : template === 'executiveTemplate_10'
      ? 'executiveTemplate_10'
      : null;

  // Templates Color Selector

  const setSidePanelBgColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelBgColor
      : template === 'template_1'
      ? template1Color.sidePanelBgColor
      : template === 'template_2'
      ? template2Color.sidePanelBgColor
      : template === 'template_3'
      ? template3Color.sidePanelBgColor
      : template === 'template_4'
      ? template4Color.sidePanelBgColor
      : template === 'template_5'
      ? template5Color.sidePanelBgColor
      : template === 'template_6'
      ? template6Color.sidePanelBgColor
      : template === 'template_7'
      ? template7Color.sidePanelBgColor
      : template === 'template_8'
      ? template8Color.sidePanelBgColor
      : template === 'template_9'
      ? template9Color.sidePanelBgColor
      : template === 'template_10'
      ? template10Color.sidePanelBgColor
      : template === 'template_11'
      ? template11Color.sidePanelBgColor
      : template === 'template_12'
      ? template12Color.sidePanelBgColor
      : template === 'template_13'
      ? template13Color.sidePanelBgColor
      : template === 'template_14'
      ? template14Color.sidePanelBgColor
      : template === 'template_15'
      ? template15Color.sidePanelBgColor
      : template === 'template_16'
      ? template16Color.sidePanelBgColor
      : template === 'template_17'
      ? template17Color.sidePanelBgColor
      : template === 'template_18'
      ? template18Color.sidePanelBgColor
      : template === 'template_19'
      ? template19Color.sidePanelBgColor
      : template === 'template_20'
      ? template20Color.sidePanelBgColor
      : template === 'template_21'
      ? template21Color.sidePanelBgColor
      : template === 'template_22'
      ? template22Color.sidePanelBgColor
      : template === 'template_23'
      ? template23Color.sidePanelBgColor
      : template === 'template_24'
      ? template24Color.sidePanelBgColor
      : template === 'template_25'
      ? template25Color.sidePanelBgColor
      : template === 'template_26'
      ? template26Color.sidePanelBgColor
      : template === 'template_27'
      ? template27Color.sidePanelBgColor
      : template === 'template_28'
      ? template28Color.sidePanelBgColor
      : template === 'template_29'
      ? template29Color.sidePanelBgColor
      : template === 'template_30'
      ? template30Color.sidePanelBgColor
      : template === 'executiveTemplate_1'
      ? executiveTemplate1Color.sidePanelBgColor
      : template === 'executiveTemplate_2'
      ? executiveTemplate2Color.sidePanelBgColor
      : template === 'executiveTemplate_3'
      ? executiveTemplate3Color.sidePanelBgColor
      : template === 'executiveTemplate_4'
      ? executiveTemplate4Color.sidePanelBgColor
      : template === 'executiveTemplate_5'
      ? executiveTemplate5Color.sidePanelBgColor
      : template === 'executiveTemplate_6'
      ? executiveTemplate6Color.sidePanelBgColor
      : template === 'executiveTemplate_7'
      ? executiveTemplate7Color.sidePanelBgColor
      : template === 'executiveTemplate_8'
      ? executiveTemplate8Color.sidePanelBgColor
      : template === 'executiveTemplate_9'
      ? executiveTemplate9Color.sidePanelBgColor
      : template === 'executiveTemplate_10'
      ? executiveTemplate10Color.sidePanelBgColor
      : null;

  const setSidePanelTextColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelTextColor
      : template === 'template_1'
      ? template1Color.sidePanelTextColor
      : template === 'template_2'
      ? template2Color.sidePanelTextColor
      : template === 'template_3'
      ? template3Color.sidePanelTextColor
      : template === 'template_4'
      ? template4Color.sidePanelTextColor
      : template === 'template_5'
      ? template5Color.sidePanelTextColor
      : template === 'template_6'
      ? template6Color.sidePanelTextColor
      : template === 'template_7'
      ? template7Color.sidePanelTextColor
      : template === 'template_8'
      ? template8Color.sidePanelTextColor
      : template === 'template_9'
      ? template9Color.sidePanelTextColor
      : template === 'template_10'
      ? template10Color.sidePanelTextColor
      : template === 'template_11'
      ? template11Color.sidePanelTextColor
      : template === 'template_12'
      ? template12Color.sidePanelTextColor
      : template === 'template_13'
      ? template13Color.sidePanelTextColor
      : template === 'template_14'
      ? template14Color.sidePanelTextColor
      : template === 'template_15'
      ? template15Color.sidePanelTextColor
      : template === 'template_16'
      ? template16Color.sidePanelTextColor
      : template === 'template_17'
      ? template17Color.sidePanelTextColor
      : template === 'template_18'
      ? template18Color.sidePanelTextColor
      : template === 'template_19'
      ? template19Color.sidePanelTextColor
      : template === 'template_20'
      ? template20Color.sidePanelTextColor
      : template === 'template_21'
      ? template21Color.sidePanelTextColor
      : template === 'template_22'
      ? template22Color.sidePanelTextColor
      : template === 'template_23'
      ? template23Color.sidePanelTextColor
      : template === 'template_24'
      ? template24Color.sidePanelTextColor
      : template === 'template_25'
      ? template25Color.sidePanelTextColor
      : template === 'template_26'
      ? template26Color.sidePanelTextColor
      : template === 'template_27'
      ? template27Color.sidePanelTextColor
      : template === 'template_28'
      ? template28Color.sidePanelTextColor
      : template === 'template_29'
      ? template29Color.sidePanelTextColor
      : template === 'template_30'
      ? template30Color.sidePanelTextColor
      : template === 'executiveTemplate_1'
      ? executiveTemplate1Color.sidePanelTextColor
      : template === 'executiveTemplate_2'
      ? executiveTemplate2Color.sidePanelTextColor
      : template === 'executiveTemplate_3'
      ? executiveTemplate3Color.sidePanelTextColor
      : template === 'executiveTemplate_4'
      ? executiveTemplate4Color.sidePanelTextColor
      : template === 'executiveTemplate_5'
      ? executiveTemplate5Color.sidePanelTextColor
      : template === 'executiveTemplate_6'
      ? executiveTemplate6Color.sidePanelTextColor
      : template === 'executiveTemplate_7'
      ? executiveTemplate7Color.sidePanelTextColor
      : template === 'executiveTemplate_8'
      ? executiveTemplate8Color.sidePanelTextColor
      : template === 'executiveTemplate_9'
      ? executiveTemplate9Color.sidePanelTextColor
      : template === 'executiveTemplate_10'
      ? executiveTemplate10Color.sidePanelTextColor
      : null;

  const setMainPanelBgColorSelector =
    template === 'blankTemplate'
      ? null
      : template === 'template_1'
      ? null
      : template === 'template_2'
      ? template2Color.mainPanelBgColor
      : template === 'template_3'
      ? null
      : template === 'template_4'
      ? null
      : template === 'template_5'
      ? null
      : template === 'template_6'
      ? template6Color.templateHeadingTextColor
      : template === 'template_7'
      ? null
      : template === 'template_8'
      ? null
      : template === 'template_9'
      ? null
      : template === 'template_10'
      ? null
      : template === 'template_11'
      ? null
      : template === 'template_12'
      ? null
      : template === 'template_13'
      ? null
      : template === 'template_14'
      ? null
      : template === 'template_15'
      ? null
      : template === 'template_16'
      ? null
      : template === 'template_17'
      ? null
      : template === 'template_18'
      ? null
      : template === 'template_19'
      ? null
      : template === 'template_20'
      ? null
      : template === 'template_21'
      ? null
      : template === 'executiveTemplate_1'
      ? executiveTemplate1Color.mainPanelBgColor
      : template === 'executiveTemplate_2'
      ? executiveTemplate2Color.mainPanelBgColor
      : template === 'executiveTemplate_3'
      ? executiveTemplate3Color.mainPanelBgColor
      : template === 'executiveTemplate_5'
      ? executiveTemplate5Color.mainPanelBgColor
      : template === 'executiveTemplate_6'
      ? executiveTemplate6Color.mainPanelBgColor
      : template === 'executiveTemplate_7'
      ? executiveTemplate7Color.mainPanelBgColor
      : template === 'executiveTemplate_9'
      ? executiveTemplate9Color.mainPanelBgColor
      : template === 'executiveTemplate_10'
      ? executiveTemplate10Color.mainPanelBgColor
      : null;

  // Templates Add Sections Selector for disserent Templates

  const AddParagraphSelector =
    template === 'blankTemplate'
      ? handleAddParagraph_BlankTemplate
      : template === 'template_1'
      ? handleAddParagraphTemplate_1
      : template === 'template_2'
      ? handleAddParagraphTemplate_2
      : template === 'template_7'
      ? handleAddParagraphTemplate_7
      : handleAddParagraphTemplate_2;
  // template === 'template_3' ? handleAddParagraphTemplate_2 : null;

  const AddHeadingSelector =
    template === 'blankTemplate'
      ? handleAddHeading_BlankTemplate
      : template === 'template_1'
      ? handleAddHeadingTemplate_1
      : template === 'template_2'
      ? handleAddHeadingTemplate_2
      : template === 'template_7'
      ? handleAddHeadingTemplate_7
      : handleAddHeadingTemplate_2;
  // template === 'template_3' ? handleAddHeadingTemplate_2 : null;

  const AddSectionSelector =
    template === 'blankTemplate'
      ? handleAddSection_BlankTemplate
      : template === 'template_1'
      ? handleAddSectionTemplate_1
      : template === 'template_2'
      ? handleAddSectionTemplate_2
      : template === 'template_7'
      ? handleAddSectionTemplate_7
      : handleAddSectionTemplate_2;
  // template === 'template_3' ? handleAddSectionTemplate_2 : null;

  const headingTextStyleConditions =
    documentHeadingTextStyle === 'Arial'
      ? 'arial-h '
      : documentHeadingTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-h '
      : documentHeadingTextStyle === 'Avenir'
      ? 'avenir-h '
      : documentHeadingTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-h '
      : documentHeadingTextStyle === 'Calibri'
      ? 'calibri-h '
      : documentHeadingTextStyle === 'Cambria'
      ? 'cambria-h'
      : documentHeadingTextStyle === 'Century Sans'
      ? 'century_Sans-h '
      : documentHeadingTextStyle === 'Constantia'
      ? 'constantia-h '
      : documentHeadingTextStyle === 'Garamond'
      ? 'garamond-h '
      : documentHeadingTextStyle === 'Geneva'
      ? 'geneva-h '
      : documentHeadingTextStyle === 'Georama'
      ? 'georama-h '
      : documentHeadingTextStyle === 'Georgia'
      ? 'georgia-h '
      : documentHeadingTextStyle === 'Gill Sans'
      ? 'gill_Sans-h '
      : documentHeadingTextStyle === 'Helvetica'
      ? 'helvetica-h '
      : documentHeadingTextStyle === 'Karla'
      ? 'karla-h '
      : documentHeadingTextStyle === 'Lato'
      ? 'lato-h '
      : documentHeadingTextStyle === 'Merriweather'
      ? 'merriweather-h '
      : documentHeadingTextStyle === 'Montserrat'
      ? 'montserrat-h '
      : documentHeadingTextStyle === 'Open Sans'
      ? 'open_Sans-h '
      : documentHeadingTextStyle === 'Oswald'
      ? 'oswald-h '
      : documentHeadingTextStyle === 'Poppins'
      ? 'poppins-h '
      : documentHeadingTextStyle === 'Raleway'
      ? 'raleway-h '
      : documentHeadingTextStyle === 'Roboto'
      ? 'roboto-h '
      : documentHeadingTextStyle === 'Tahoma'
      ? 'tahoma-h '
      : documentHeadingTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-h '
      : documentHeadingTextStyle === 'Ubuntu'
      ? 'ubuntu-h '
      : documentHeadingTextStyle === 'Veranda'
      ? 'veranda-h '
      : null;

  const bodyTextStyleConditions =
    documentBodyTextStyle === 'Arial'
      ? 'arial-p '
      : documentBodyTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-p '
      : documentBodyTextStyle === 'Avenir'
      ? 'avenir-p '
      : documentBodyTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-p '
      : documentBodyTextStyle === 'Calibri'
      ? 'calibri-p '
      : documentBodyTextStyle === 'Cambria'
      ? 'cambria-p'
      : documentBodyTextStyle === 'Century Sans'
      ? 'century_Sans-p '
      : documentBodyTextStyle === 'Constantia'
      ? 'constantia-p '
      : documentBodyTextStyle === 'Garamond'
      ? 'garamond-p '
      : documentBodyTextStyle === 'Geneva'
      ? 'geneva-p '
      : documentBodyTextStyle === 'Georama'
      ? 'georama-p '
      : documentBodyTextStyle === 'Georgia'
      ? 'georgia-p '
      : documentBodyTextStyle === 'Gill Sans'
      ? 'gill_Sans-p '
      : documentBodyTextStyle === 'Helvetica'
      ? 'helvetica-p '
      : documentBodyTextStyle === 'Karla'
      ? 'karla-p '
      : documentBodyTextStyle === 'Lato'
      ? 'lato-p '
      : documentBodyTextStyle === 'Merriweather'
      ? 'merriweather-p '
      : documentBodyTextStyle === 'Montserrat'
      ? 'montserrat-p '
      : documentBodyTextStyle === 'Open Sans'
      ? 'open_Sans-p '
      : documentBodyTextStyle === 'Oswald'
      ? 'oswald-p '
      : documentBodyTextStyle === 'Poppins'
      ? 'poppins-p '
      : documentBodyTextStyle === 'Raleway'
      ? 'raleway-p '
      : documentBodyTextStyle === 'Roboto'
      ? 'roboto-p '
      : documentBodyTextStyle === 'Tahoma'
      ? 'tahoma-p '
      : documentBodyTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-p '
      : documentBodyTextStyle === 'Ubuntu'
      ? 'ubuntu-p '
      : documentBodyTextStyle === 'Veranda'
      ? 'veranda-p '
      : null;

  const headingTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'heading_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'heading_small'
      : documentBodyTextSize === 'Medium'
      ? 'heading_medium'
      : documentBodyTextSize === 'Large'
      ? 'heading_large'
      : null;

  const bodyTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'body_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'body_small'
      : documentBodyTextSize === 'Medium'
      ? 'body_medium'
      : documentBodyTextSize === 'Large'
      ? 'body_large'
      : null;

  const pageDocumentData = JSON.stringify({
    type: 'resume',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    templateName: TemplateSelector,
    pageEditorData: templateDataSelector,
  });
  const saveBuilderData = {
    userId: userId,
    documentName: document_name,
    documentData: pageDocumentData,
  };

  // Setting BlankTempplate Data

  const [dataUpdatableRight, setDataUpdatableRight] = useState(
    templateUpdatableData && setDataUpdatableRightConditions
  );
  const [dataUpdatableLeft, setDataUpdatableLeft] = useState(
    templateUpdatableData && setDataUpdatableLeftConditions
  );
  useEffect(() => {
    setDataUpdatableRight(setDataUpdatableRightConditions);
    setDataUpdatableLeft(setDataUpdatableLeftConditions);
  }, []);
  // Setting Template 2 Data
  // const [dataUpdatableRight, setDataUpdatableRight] = useState(template2DataRightSection)
  // const [dataUpdatableLeft, setDataUpdatableLeft] = useState(template2DataLeftSection)

  const [pageNo, setPageNo] = useState(1);

  const TemplatesPagesData = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
  ];

  const TemplatesPagesData_with_2_pages = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
    {
      key: 2,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo + 1,
    },
  ];

  const [pageUpdatableData, setPageUpdatableData] = useState(
    templateUpdatableData
      ? template === 'executiveTemplate_8' ||
        template === 'executiveTemplate_9' ||
        template === 'executiveTemplate_10'
        ? TemplatesPagesData_with_2_pages
        : TemplatesPagesData
      : resumeId
      ? null
      : TemplatesPagesData
  );

  console.log(pageUpdatableData);

  const addPage_Modal = (addPage, addPara) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                CVJury best practice principles suggest that an ideal resume
                must be of one page only. Do you still want to add more text?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  setPageNo(pageNo + 1);
                  setKey(key + 1);
                  // data.ref.current.style.display = 'none'
                  pageUpdatableData.push(addPage[0]);
                  dataUpdatableRight.push(addPara[0]);
                  // setPageUpdatableData(pageUpdatableData.push(addPage[0]))
                  onClose();
                }}
              >
                Yes, Add!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const maxHeight = 800;

  // Adding sections on click

  // Blank Template

  function handleAddParagraph_BlankTemplate() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection1,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection1,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeading_BlankTemplate() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template2Data.new_page_enterName,
          ref: mainSection2,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template2Data.new_page_enterName,
          ref: mainSection2,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  // function handleAddHeading_BlankTemplate () {
  //   // if (rightMainRef.current.clientHeight < maxHeight) {
  //     const addPara = [{
  //       key: key,
  //       class: 'block',
  //       type: 'section',
  //       heading : template2Data.enterName,
  //       subSection: false,
  //       description: 'none',
  //       ref: mainSection2,
  //       id: `mainSection${key+1}`,
  //       firstPage: false,
  //       secondPage: pageNo === 2 ? true : false,
  //       thirdPage: pageNo === 3 ? true : false,
  //     }]
  //     dataUpdatableRight.push(addPara[0]);
  //     setKey(key+1)
  //   // }
  //   addSectionModal.current.style.display = 'none' // modal hidden
  //   addSectionModalBG.current.style.display = 'none' // modal bg hidden
  // }
  function handleAddSection_BlankTemplate() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection3,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection3,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 1

  function handleAddParagraphTemplate_1() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: [
            { key: key + 34, description: template2Data.new_page_lorealIpsum },
          ],
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_1() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_1() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template2Data.new_page_enterName,
          subSection: false,
          // description: [
          //   { key: key + 34, description: BlankTemplateData.lorealIpsum },
          // ],
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 2
  function handleAddParagraphTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template2Data.new_page_enterName,
          subSection: false,
          description: template2Data.new_page_lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 7
  function handleAddParagraphTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: 'none',
              description: template2Data.new_page_lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: 'none',
              description: template2Data.new_page_lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template2Data.new_page_enterName,
              description: 'none',
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template2Data.new_page_enterName,
              description: 'none',
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template2Data.new_page_enterName,
              description: template2Data.new_page_lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template2Data.new_page_enterName,
              description: template2Data.new_page_lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template Colors
  const [sidePanelBgColor, setSidePanelBgColor] = useState(
    setSidePanelBgColorSelector
  );
  const [sidePanelTextColor, setSidePanelTextColor] = useState(
    setSidePanelTextColorSelector
  );
  const [mainPanelBgColor, setMainPanelBgColor] = useState(
    setMainPanelBgColorSelector
  );

  const proTips_Modal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='proTips_Modal_Container'>
            <div className='proTips_Modal'>
              <div className='proTips_ModalHeader'>
                <img src='/assets/images/logo.png' alt='logo' />
                <div>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <rect fill='none' height='24' width='24' y='0' />
                    <path d='M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,19h8v-2H5V19z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27 C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5 c0,2.47,1.49,3.89,2.35,4.5h6.3C13.01,13.39,14.5,11.97,14.5,9.5z M21.37,7.37L20,8l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6 L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6z' />
                  </svg>
                  <span>Pro Tips</span>
                </div>
                <div className='proTips_Modal_close' onClick={onClose}>
                  x
                </div>
              </div>
              <div className='proTips_ModalWrapper'>
                <Accordion className='proTips_Accordian' flush>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='0'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      YOUR PERSONAL INFORMATION
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Provide up-to-date information that will allow
                        recruiters to reach you easily. Tips:
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Phone Number:{' '}
                        </span>{' '}
                        Use a cell phone or landline you can readily answer.{' '}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Home Address:{' '}
                        </span>{' '}
                        A full, detailed address is acceptable, but not
                        required. Your city and state of residence are usually
                        enough. Just be sure to add “Willing to relocate” or
                        “Open to relocation” if that’s an option for you!
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Email Address:{' '}
                        </span>
                        Keep it professional. Johnsmith@gmail.com looks much
                        better to a recruiter than pizzalover88@gmail.com. If
                        you don’t have a professional address, create a free
                        one.
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          LinkedIn Profile:{' '}
                        </span>{' '}
                        When pasting your LinkedIn profile URL, create a
                        customised link.
                      </p>
                      <p>Check out these examples:</p>
                      <div
                        style={{
                          padding: '1rem',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          width: '40%',
                          marginBottom: '1rem',
                        }}
                      >
                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>{' '}
                          https://www.linkedin.com/in/smithjohn-c++-programmer/
                        </p>
                        <p style={{ marginBottom: '0' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>{' '}
                          https://www.linkedin.com/in/smithjohn-37847479309/
                        </p>
                      </div>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Any Other Relevant Links:{' '}
                        </span>{' '}
                        If you are proud of previous projects related to your
                        new job, feel free to add them here. This includes links
                        to GitHub, Google Drive, or wherever you store your work
                        portfolio.{' '}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='1'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      PROFESSIONAL SUMMARY
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>Create an overview of your career experience here.</p>
                      <ul>
                        <li>
                          Show potential employers the value you can bring to
                          their company.
                        </li>
                        <li>
                          Highlight professional qualifications relevant to your
                          new job.
                        </li>
                        <li>
                          Make use of bullet points for an easy-to-skim career
                          summary.
                        </li>
                      </ul>
                      <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                        CREATE POWERFUL CV BULLET POINTS NO RECRUITER WILL
                        FORGET
                      </p>
                      <p>
                        Our bullet point building and analysis tips make it easy
                        for you to create unique, powerful bullet points for any
                        situation.
                      </p>
                      <p>Check it out below.</p>
                      <p>
                        Don’t want to create your own? Use our bullet point
                        templates. *
                      </p>

                      <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                        Tips for Generating Bullet Points and Examples
                      </p>
                      <p>
                        Each bullet point should show transferable skills and
                        accomplishments, not mere duties.
                      </p>
                      <p>
                        Here’s a good example of a bullet point using
                        specificity to demonstrate
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                          borderRadius: '15px',
                        }}
                        src='/assets/images/accordian/proffesional/bulletPoint.png'
                        alt='bulletPoint'
                      />
                      <p>
                        Research* suggests that your CV bullet points should be
                        balanced by these four categories:
                      </p>

                      <ol>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Power Words or Action Verbs: 20%
                          </p>
                          <p>
                            Use action verbs to describe what you did.
                            Cultivated Culture suggests these words should be
                            35% of your bullets. We’ve found success using
                            fewer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Technical and Soft Skills or Terms: 15%
                          </p>
                          <p>
                            These are words you have gained from training,
                            education, or professional certifications. This
                            includes soft skills that will help you perform
                            effectively at your job.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Supporting Common Words: 50%
                          </p>
                          <p>
                            Common words include conjunctions, prepositions, and
                            adverbs. Use them to describe or add weight to your
                            bullets. Cultivated Culture suggests these words
                            should only take up 35%, but we’ve found higher
                            success rates using 15% more.
                          </p>
                        </li>
                      </ol>

                      <p style={{ fontWeight: 'bold' }}>
                        Our Suggested CV Bullet Point Word Distribution:
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                        }}
                        src='/assets/images/accordian/proffesional/bulletPointWordDescp.jpeg'
                        alt='bulletPoint'
                      />

                      <p style={{ fontWeight: 'bold' }}>
                        A Powerful Example of an Effective CV Summary:
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                        }}
                        src='/assets/images/accordian/proffesional/CvSummary.png'
                        alt='bulletPoint'
                      />
                      <p>
                        Use bullet points to showcase three to four of your
                        outstanding accomplishments.
                      </p>
                      <p>
                        And be specific! When employers read them, they’ll see
                        that you are highly qualified for the available
                        position.
                      </p>
                      <p>Here are some examples:</p>
                      <div
                        style={{
                          padding: '1rem',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          width: '60%',
                          marginBottom: '1rem',
                        }}
                      >
                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>
                          ’Expanded operations to global markets’
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>
                          ‘Expanded operations to 12 new countries in Europe’
                        </p>

                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>
                          ’Expanded operations to global markets’
                        </p>
                        <p style={{ marginBottom: '0' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>
                          ‘Expanded operations to 12 new countries in Europe’
                        </p>
                      </div>
                      <p style={{ fontWeight: 'bold' }}>
                        <span style={{ color: 'red' }}>*Caveat:</span> When
                        using pre-written, automated sentences, remember: your
                        goal is to be unique and stand out from the crowd, not
                        blend in. In this case, it’s better to use pre-written
                        bullet points only as guides. Add you own punchy to
                        them!
                      </p>
                      <p></p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='3'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      YOUR WORK EXPERIENCE
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Make no mistakes. The weight of your CV or resume work
                        history section cannot be overemphasised.
                      </p>
                      <p>
                        Top secret: That section is your most valuable real
                        estate. It is not just a conventional segment of your
                        CV. It is where the real gold mine lies if you situate
                        it effectively.
                      </p>
                      <p>
                        Some report confirms that 91% of hiring recruiters
                        require applicants to have relatable work experience.
                      </p>
                      <p>
                        Another study equally proves that over two-third of
                        hiring managers find the professional history section
                        the most crucial aspect of a candidate’s CV.
                      </p>

                      <p>Therefore—</p>
                      <p>
                        One smart move you can make in your favour is by
                        ensuring that this section is compelling enough not to
                        miss the recruiter’s notice in split seconds! Spotting
                        this section at first glance is the easiest way for them
                        to grasp what value you are bringing to the table
                        immediately.
                      </p>

                      <p>
                        Below is a step-by-step approach on how to list work
                        experience on your CV:
                      </p>
                      <ol>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Have an Outstanding Section Heading
                          </p>
                          <p>
                            Label your professional experience section with one
                            of the headings below:
                          </p>
                          <ul>
                            <li>Employment History</li>
                            <li>Experience</li>
                            <li>Work Experience</li>
                            <li>Work History</li>
                          </ul>
                          <p>
                            Ensure that the section title stands out from the
                            job descriptions by writing it in CAPS or bold
                            fonts.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Place your professional experience section in a
                            strategic spot
                          </p>
                          <ul>
                            <li>
                              If you a fresh graduate with little notable work
                              experience, put it below your education section
                            </li>
                            <li>
                              If you have got an extensive work history, put it
                              just below your CV summary
                            </li>
                          </ul>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            A Reverse-chronological Sequence is the Right Order
                            of Listing Job
                          </p>
                          <p>Descriptions on your CV</p>
                          <ul>
                            <li>
                              Begin with your present or last official position
                            </li>
                            <li>
                              Followed by the previous one, then the one before
                              it (in that order).
                            </li>
                          </ul>
                          <p>
                            It is only natural that the apex of your career will
                            get the most attention. Hence, the smart thing to do
                            is put your best foot forward by placing your recent
                            job at the forefront.
                          </p>
                          <p>
                            This chronologically descending order of listing job
                            roles has proven to almost always work in favour of
                            most job seekers.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Ensure that Each Entry is Legible and Explicit
                          </p>
                          <p>Above each job description, place:</p>
                          <ul>
                            <li>Your job title</li>
                            <li>Company name and location</li>
                            <li>Dates worked</li>
                          </ul>

                          <p style={{ marginTop: '1rem' }}>For instance:</p>
                          <p
                            style={{ fontWeight: 'bold', marginBottom: '2rem' }}
                          >
                            CV Professional Experience Example—Heading
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Bank Teller</p>
                          <p>The Bank of Scotland Plc, Edinburgh, Scotland</p>
                          <p style={{ marginBottom: '2rem' }}>2014–2020</p>

                          <p>
                            <span
                              style={{
                                fontWeight: 'bold',
                                color: 'red',
                                marginBottom: '2rem',
                              }}
                            >
                              Note:
                            </span>
                            It is okay to begin each entry with either the
                            company name or your position. What matters is the
                            consistency of your layout. Ensure to maintain the
                            same pattern for all entries. This also includes the
                            dates and duration of each job. If the dates are
                            aligned to the left, make sure all of them are
                            aligned to the left. The last thing you would want
                            to do is to make recruiters search for these
                            details. As you already know, they do not have that
                            luxury of time. Maximise every second spent on your
                            CV.
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            In a situation where you transitioned to different
                            job roles and positions in the same organisation,
                            creating separate entries for each position will be
                            unnecessary.
                          </p>

                          <p>Do this instead:</p>
                          <p style={{ marginBottom: '2rem' }}>
                            For similar positions, assemble your job titles,
                            include one set of bullet points.
                          </p>

                          <p>For instance:</p>
                          <p
                            style={{ fontWeight: 'bold', marginBottom: '2rem' }}
                          >
                            Sample CV Job Description with Hospitality Sector
                          </p>

                          <p style={{ fontWeight: 'bold' }}>
                            The Palms Restaurant Inc., London
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            March 2014 - Present
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Barista</p>
                          <p style={{ marginBottom: '2rem' }}>
                            July 2016 - Present
                          </p>

                          <p style={{ fontWeight: 'bold' }}>
                            Assistant Manager
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            March 2014 – July 2016
                          </p>

                          <ul>
                            <li>Mention Promotion</li>
                            <li>Duties</li>
                            <li>Accomplishments.</li>
                          </ul>
                          <p style={{ marginTop: '2rem' }}>
                            But in cases where your responsibilities are very
                            different, enter each title as a separate subheading
                            followed by a list of bullet points.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Description for each job should be between 3-5
                            bullet points
                          </p>
                          <ul>
                            <li>
                              Endeavour to spell out your tangible achievements,
                              and not only your responsibilities and duties.
                            </li>
                            <li>
                              Ensure that your most recent job has more role
                              descriptions and bullets points than the others.
                              As you descend, minimise the number of bullet
                              points and include only significant achievements.
                            </li>
                            <li>
                              Never add unnecessary details to your CV. Ensure
                              that every bullet point adds to your suitability
                              for the specified role. Remember that the goal is
                              to tailor or modify each job description to the
                              competencies listed in the job advert.
                            </li>
                          </ul>

                          <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>
                            By tailoring or modifying each job description, I
                            mean:
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            When you go through the job requirement included in
                            an advert, focus on keywords that apply to the need
                            roles.
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            If you come across responsibilities that you may
                            have handled in the past, clearly add them in the
                            bullet points of your CV job description.
                          </p>

                          <p>Here’s an illustration:</p>
                          <p>
                            If there’s a job advert for a Barista role that
                            requires candidates to:
                          </p>
                          <ul>
                            <li>
                              Provide{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                in-depth information to customers
                              </span>{' '}
                              on beverage preparation (1)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                {' '}
                                Offer samples of latest brews
                              </span>
                              (2)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                {' '}
                                Memorise recipes for speciality coffee beverages
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                seasonal offerings
                              </span>{' '}
                              (3)
                            </li>
                            <li>
                              Complete successful{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                cash audits to correctly balance drawers
                              </span>{' '}
                              at the end of each shift (4)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                Operate espresso machines, blenders
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                commercial coffee brewers
                              </span>{' '}
                              (5)
                            </li>
                          </ul>

                          <p
                            style={{
                              fontWeight: 'bold',
                              marginBottom: '2rem',
                              marginTop: '2rem',
                            }}
                          >
                            A well-tailored example of a job description for a
                            CV:
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Barista</p>
                          <p>The Palms Restaurant Inc, London, UK</p>
                          <p>2012–2020</p>

                          <ul>
                            <li>
                              <span style={{ color: 'green' }}>
                                Provided in-depth information to over 200
                                customers on beverage preparation
                              </span>
                              (1)
                            </li>
                            <li>
                              Offered{' '}
                              <span style={{ color: 'green' }}>
                                150 samples of latest brews{' '}
                              </span>{' '}
                              regularly (2)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                Memorised recipes for 70+ speciality coffee
                                beverages{' '}
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>seasonal </span>{' '}
                              (3)
                            </li>
                          </ul>

                          <p
                            style={{ marginBottom: '2rem', marginTop: '2rem' }}
                          >
                            Key achievement: Improved{' '}
                            <span style={{ color: 'green' }}>deals</span> of{' '}
                            <span style={{ color: 'green' }}>
                              cocktail drinks by 52%{' '}
                            </span>
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            There you go! Have you seen that?
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            This applicant didn’t necessarily have to stuff her
                            work history section with all her previous
                            responsibilities. Instead, she just spelt out the
                            ones that showcased her abilities to handle her
                            prospective duties competently and effectively.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            {' '}
                            <span style={{ color: 'red' }}> Note: </span> When
                            it comes to CV: bullet points are more effective
                            than paragraphs! This is because bullet points make
                            for a concise presentation as it saves space.
                            Paragraphs are only preferable when you are writing
                            an academic CV.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            In each of your CV bullet points, necessity is
                            vital. Some study shows that over 40% of recruiters
                            impulsively trash CVs that are generic and not
                            tailored to the specific position.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            It doesn’t end there though—
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            Did you notice something unique about the example
                            above? There’s a specific section that stands out
                            like Wonder Woman in a neon A-Line skirt. For the
                            finishing touch on your CV job description...
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Always Include a “Key Achievement” Section
                          </p>
                          <ul>
                            <li>
                              It immediately grabs the attention of the
                              recruiters.
                            </li>
                            <li>
                              It should contain a value that the prospective
                              employers will not afford to miss.
                            </li>
                            <li>
                              Always adopt the Challenge-Action-Result (CAR)
                              style to define your achievement.
                            </li>
                          </ul>

                          <p style={{ marginTop: '2rem' }}>
                            Below is an example of how the CAR formula works.
                            Remember the sample job description above?
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            Key achievement: Improved deals of Cocktail drinks
                            by 52%
                          </p>

                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              Challenge, what is the problem?{' '}
                            </span>
                            Lesser customer satisfaction.
                          </p>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>Action? </span>
                            Provided exceptional customer service.
                          </p>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>Result? </span>
                            Improving customer retention and increasing sales
                            margin.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Use ‘Earlier Work Experience’
                          </p>

                          <p>
                            If you have other relevant work experience earlier
                            than 2008, you may list them after your last ‘Work
                            Experience’, but without dates; to avoid ageism
                            bias.
                          </p>
                        </li>
                      </ol>
                      <p></p>
                      <p></p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='4'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      EDUCATION
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        For experienced applicants, move your education section
                        farther down. For fresh graduates or young
                        professionals, place your education section near the top
                        (after the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Profile’ </span>{' '}
                        segment).
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>
                            You should include:
                          </span>{' '}
                          Qualification name <br /> Example: Bachelor of Science
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Your{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            field of study
                          </span>{' '}
                          and the{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            name of the university or college
                          </span>{' '}
                          you attended and{' '}
                          <span style={{ fontWeight: 'bold' }}>location</span>.
                          Starting and ending dates are optional.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          For new graduates and young professionals, add{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            academic honours, leadership, activities, sports,{' '}
                          </span>
                          and other distinguishing information. Employers love
                          to know about your accomplishments both inside and
                          outside the classroom.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Add the grade if you graduated with a first or
                          high-upper (magna cum laude)
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          A{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            ‘Project Highlights’
                          </span>{' '}
                          section can be added to showcase classwork and
                          assignments that are most relevant to your career
                          goals. <br />
                          If you have{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            internship
                          </span>{' '}
                          experience — especially if it relates to and supports
                          your
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          career goals — add a section here. This is
                          particularly useful if you interned with a well-known
                          organisation or held essential responsibilities.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='5'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      SKILLS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>Showcase both your hard and soft skills here.</p>
                      <p style={{ marginBottom: '2rem' }}>Tips:</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Hard skill examples include{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            professional expertise, qualifications,{' '}
                          </span>
                          and{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            project highlights
                          </span>
                          .
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Soft skills include things like{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            effective communication, organisation, personal
                            traits,
                          </span>{' '}
                          and{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            attributes
                          </span>
                          .
                        </div>
                      </p>

                      <p style={{ margin: '2rem 0' }}>
                        Listing specific examples of these will help increase
                        your chances of beating CV ATS.
                      </p>

                      <p style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                        256 SOFT SKILLS YOU CAN SHOUT ABOUT ON CV
                      </p>

                      <div>
                        <p style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                          Classifications of Soft Skills
                        </p>
                        Communication Skills <br />
                        Creativity Skills <br />
                        Critical Thinking Skills <br />
                        Influencing Skills <br />
                        Leadership Skills <br />
                        Negotiation Skills <br />
                        Networking Skills <br />
                        Organization and Management Skills <br />
                        Problem Solving Skills <br />
                        Research & Planning Skills <br />
                        Teamwork Skills <br />
                        Time Management Skills <br />
                        Work Ethic Skills <br />
                        Attention to Detail Skills <br />
                        Diversity Skills <br />
                        Courtesy Skills <br />
                        Flexibility Skills <br />
                        Integrity Skills <br />
                        Professionalism Skills <br />
                        Resilience Skills <br />
                        Responsibility Skills <br />
                        Social Skills <br />
                        Work Survival Skills <br />
                        Work-Life Balance Skills <br />
                      </div>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Communication Skills:{' '}
                          </p>
                          Choosing a Communication Medium <br />
                          Clarity of Speech and Writing <br />
                          Describing feelings <br />
                          Editing <br />
                          Empathy Expressing Ideas <br />
                          Facilitating Group Discussion <br />
                          Giving and Receiving Feedback <br />
                          Interviewing <br />
                          Knowing When to Communicate <br />
                          Listening Attentively <br />
                          Negotiating <br />
                          Non-Verbal Communication <br />
                          Open-Mindedness <br />
                          Perceiving Nonverbal Messages <br />
                          Persuading Others <br />
                          Persuasion <br />
                          Presentation Skills <br />
                          Providing Appropriate Feedback, Either <br />
                          Independently or When Asked <br />
                          Public Speaking <br />
                          Reporting Information <br />
                          Speaking Effectively <br />
                          Writing Concisely <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Creativity Skills:{' '}
                          </p>
                          Entrepreneurial Spirit <br />
                          Imagining Alternatives <br />
                          Innovation <br />
                          Perseverance <br />
                          Product and Market Knowledge <br />
                          Teamwork <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Critical Thinking Skills:{' '}
                          </p>
                          Asking Thought-provoking Questions
                          <br />
                          Being Imaginative <br />
                          Conceptualizing Situations
                          <br />
                          Confidence <br />
                          Creativity
                          <br />
                          Curiosity
                          <br />
                          Demonstrating Cognitive Flexibility
                          <br />
                          Making Abstract Connections
                          <br />
                          Making Inferences
                          <br />
                          Open-mindedness
                          <br />
                          Predicting and Anticipating Shortfalls
                          <br />
                          Self-reflection <br />
                          Showing Curiosity <br />
                          Showing Foresight <br />
                          Synthesizing Ideas <br />
                          Thinking Outside the Box <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Influencing Skills:{' '}
                          </p>
                          Assertiveness <br />
                          Emotional intelligence <br />
                          Excellent communication <br />
                          Negotiation skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Leadership Skills:{' '}
                          </p>
                          Ability to Mentor <br />
                          Active Listening <br />
                          Conflict Resolution <br />
                          Empathy <br />
                          Positive Attitude <br />
                          Risk-taking <br />
                          Valuing Feedback <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Negotiation Skills:{' '}
                          </p>
                          Ability to Convince, Argue and Negotiate <br />
                          Active Listening <br />
                          Communication Skills <br />
                          Cooperation <br />
                          Open-mindedness <br />
                          Questioning <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Networking Skills:{' '}
                          </p>
                          Active Listening <br />
                          Confidence <br />
                          Cross-cultural Working Habits <br />
                          Cross-functional, Interdisciplinary Habits <br />
                          Empathy <br />
                          Interpersonal Skills <br />
                          Public Speaking <br />
                          Relational Ability <br />
                          Relationship Building <br />
                          Resilience <br />
                          Social Skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Organization and Management Skills:{' '}
                          </p>
                          Change Management <br />
                          Coaching <br />
                          Coordinating and Planning Tasks <br />
                          Counselling <br />
                          Decision Making with Others <br />
                          Delegating Responsibility to Others <br />
                          Demonstrating Effective Time Management <br />
                          External Awareness <br />
                          Following Through on Tasks <br />
                          Handling Details <br />
                          Initiating New Ideas <br />
                          Legal and Regulatory Awareness <br />
                          Management of Complex Issues <br />
                          Managing Conflict <br />
                          Managing Groups <br />
                          Multitasking <br />
                          Organizational Awareness <br />
                          Project Management Mastery <br />
                          Promoting Change <br />
                          Selling Ideas or Products <br />
                          Teaching <br />
                          Technologic Monitoring <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Problem-Solving Skills:{' '}
                          </p>
                          Ability to Conduct Information Search <br />
                          Analytical Thinking Skills <br />
                          Creativity <br />
                          Innovative Approach <br />
                          Listening Skills <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Research & Planning Skills:{' '}
                          </p>
                          Identifying Appropriate Resources <br />
                          Identifying Problems <br />
                          Imagining Alternatives <br />
                          Independence <br />
                          Internationally Recognized Profiles <br />
                          Knowledge and Practice of Digital Tools <br />
                          Setting Goals <br />
                          Solving Problems <br />
                          Strong Capacity for Analysis and Synthesis <br />
                          Time Management <br />
                          Ability to Communicate Results <br />
                          Analyzing Information <br />
                          Attention to Detail <br />
                          Capacity for Concentration <br />
                          Capacity for Self-assessment and Questioning <br />
                          Creating Ideas <br />
                          Defining Needs and Requirements <br />
                          Developing Evaluation Strategies <br />
                          Extracting Important Information <br />
                          Forecasting and Predicting <br />
                          Gathering Information <br />
                          High-level Scientific Expertise <br />
                          High-level Technical Expertise <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Teamwork Skills:{' '}
                          </p>
                          Agreeability <br />
                          Collaboration <br />
                          Conflict Resolution <br />
                          Cooperation <br />
                          Facilitation <br />
                          Helpfulness <br />
                          Influence <br />
                          Likeability <br />
                          Persuasiveness <br />
                          Supportiveness <br />
                        </div>
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work Ethic Skills:{' '}
                          </p>
                          Passion <br />
                          Professionalism <br />
                          Teamwork <br />
                          Time Management <br />
                          Value for Feedback <br />
                          Decisiveness <br />
                          Delegation <br />
                          Dependability <br />
                          Determination <br />
                          Discipline <br />
                          Emotional Intelligence <br />
                          Entrepreneurial Mindset <br />
                          Forward-looking Work Approach <br />
                          Great Capacity for Work <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Attention to Detail skills:{' '}
                          </p>
                          Active Listening Skills <br />
                          Analytical Skills <br />
                          Observational Skills <br />
                          Organizational Skills <br />
                          Time Management Skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Diversity Skills:{' '}
                          </p>
                          Accurately Perceiving Feelings or Situations
                          Collaboration Skills Communication Skills Empathy
                          Leveraging Diversity Proficiency in Foreign Languages
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Flexibility Skills:{' '}
                          </p>
                          Acceptance <br />
                          Adaptability <br />
                          Adjustability <br />
                          Calmness <br />
                          Focusing on Solutions <br />
                          Improvisation <br />
                          Lifelong Learning <br />
                          Teachability <br />
                          Versatility <br />
                          Willingness to Change <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Courtesy Skills:{' '}
                          </p>
                          Apologizing <br />
                          Being Polite <br />
                          Business Etiquette <br />
                          Decency <br />
                          Good Manners <br />
                          Graciousness <br />
                          Gratefulness <br />
                          Patience <br />
                          Phone Etiquette <br />
                          Respectfulness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Integrity Skills:{' '}
                          </p>
                          Attentiveness <br />
                          Being Ethical <br />
                          Displaying Personal Values <br />
                          Doing What's Right <br />
                          Focusing <br />
                          Having High Moral Standards <br />
                          Having Principles <br />
                          Honesty <br />
                          Kindness <br />
                          Trustworthiness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Professionalism Skills:{' '}
                          </p>
                          Client-facing Skills <br />
                          Commercial Acumen <br />
                          Compliance <br />
                          Friendliness <br />
                          Phone Etiquette <br />
                          Professional Awareness <br />
                          Self-control <br />
                          Sharing Credit with Colleagues <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Resilience Skills:{' '}
                          </p>
                          Calmness <br />
                          Enthusiasm <br />
                          Growth Mindset <br />
                          Optimism <br />
                          Perseverance <br />
                          Tenacity <br />
                          Willingness to Change <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Responsibility Skills:{' '}
                          </p>
                          Accountability <br />
                          Aspiration <br />
                          Common Sense <br />
                          Conscientiousness <br />
                          Dependability <br />
                          Follow-Through <br />
                          Maturity <br />
                          Resourcefulness <br />
                          Self-Discipline <br />
                          Virtuousness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Social Skills:{' '}
                          </p>
                          Consideration <br />
                          Empathy <br />
                          Friendliness <br />
                          Self-Control <br />
                          Showing Warmth <br />
                          Sociability <br />
                          Humor <br />
                          Nurturing <br />
                          Open Body Language <br />
                          Personability <br />
                          Persuasion. <br />
                          Relational Ability <br />
                          Relationship Building <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work Survival Skills:{' '}
                          </p>
                          Accepting Responsibility <br />
                          Adaptability <br />
                          Attending to Detail <br />
                          Being Punctual <br />
                          Cooperating <br />
                          Cross-cultural Working Habits <br />
                          Cross-functional, Interdisciplinary Habits <br />
                          Current Industry Trends <br />
                          Editing Skills <br />
                          Enforcing Policies or Established Rules <br />
                          Enlisting the Help of Others When You Need It <br />
                          Making and Implementing Decisions <br />
                          Managing Time Wisely <br />
                          Meeting Goals, Both Short-term and Long-term <br />
                          Motivation <br />
                          Multiple and Important Responsibilities <br />
                          Networking <br />
                          Open-mindedness <br />
                          Organizing <br />
                          Research Skills <br />
                          Risk-taking <br />
                          Setting Deadlines and Meeting Them <br />
                          Speed <br />
                          Strategic Thinking <br />
                          Writing Concisely <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work-Life Balance Skills:{' '}
                          </p>
                          Courage <br />
                          Creativity <br />
                          Delegation <br />
                          Excellent Communication <br />
                          Information Management <br />
                          People Management <br />
                          Planning <br />
                          Professional Awarenessment <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Time Management Skills:{' '}
                          </p>
                          Delegation <br />
                          Effective Stress Management <br />
                          Focus <br />
                          Organization <br />
                          Planning <br />
                          Speed <br />
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='6'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      INTERESTS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        These include topics you feel will lead to creating
                        avenues for a conversation with interviewers.
                      </p>
                      <p>Tips:</p>
                      <p>
                        Only use topics that aren’t contentious. Some examples:
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Artistic Activities</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>House Hobbies</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Leisure & Entertainment</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Music</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Online Activities</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Outdoor Pastimes</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Sports</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Technology</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Tourism and Travel</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Volunteering </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div> Writing </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Artistic Activities :
                          </p>
                          Connect the dots <br />
                          Create a natural collage <br />
                          Create Pan art <br />
                          Design <br />
                          Make tracks <br />
                          Painting / drawing <br />
                          Photography / video production <br />
                          Sculpture <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            House Hobbies :
                          </p>
                          Board games
                          <br />
                          DIY
                          <br />
                          Learn an instrument
                          <br />
                          Learn how to cook
                          <br />
                          Mindfulness
                          <br />
                          Paint
                          <br />
                          Pick up needlework
                          <br />
                          Practice meditation
                          <br />
                          Work out online
                          <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Leisure & Entertainment :
                          </p>
                          Acting <br />
                          Circus <br />
                          Comedy clubs <br />
                          Open Mic Nights <br />
                          Stand-up comedy <br />
                          Theatre <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Music :
                          </p>
                          Band or orchestra <br />
                          Choir Conducting <br />
                          Singing / gigging <br />
                          Song writing <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Online Activities :
                          </p>
                          Case Studies <br />
                          E-sports <br />
                          Group Projects. <br />
                          Guest Lectures. <br />
                          Peer-Editing/Review <br />
                          Presentations <br />
                          Social media <br />
                          Vlogging <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Outdoor Pastimes :
                          </p>
                          Birding <br />
                          Camping <br />
                          Fishing <br />
                          Gardening <br />
                          Hunting <br />
                          Mountain climbing <br />
                          Orienteering <br />
                          Photography <br />
                        </div>
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Sports :
                          </p>
                          Baseball <br />
                          Dance <br />
                          Gym <br />
                          Skiing <br />
                          Swimming <br />
                          Tennis <br />
                          Yoga <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Technology :
                          </p>
                          Artificial intelligence <br></br>
                          Blockchain <br></br>
                          Coding <br></br>
                          Cryptocurrencies <br></br>
                          Stock trading <br></br>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Tourism & Travel :
                          </p>
                          Canoeing and water sports <br />
                          Cycling and mountain biking <br />
                          Fishing <br />
                          Garden and forests <br />
                          International experience <br />
                          Language learning <br />
                          Walking and hiking <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Volunteering :
                          </p>
                          Charity / fundraising <br />
                          Coaching / mentoring <br />
                          Community events <br />
                          Environmental & Political Organisations <br />
                          Environmental work <br />
                          Homeless Shelters & Food Banks <br />
                          Hospitals & Blood Banks. <br />
                          Libraries & Museums. <br />
                          Tutoring & Mentoring <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Writing :
                          </p>
                          Blogging <br />
                          Journaling <br />
                          Journalism <br />
                          Poetry <br />
                          Short stories <br />
                        </div>
                      </p>

                      <p>
                        Be specific. Instead of saying ‘sports’, talk about
                        which sport you love in particular. Rather than saying
                        ‘food’, let them know your favourite dish and why you
                        enjoy it so much. Here are a few more examples:
                      </p>

                      <p style={{ fontWeight: 'bold' }}>INTERESTS</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Volunteering (Parish treasurer, Fullness of Joy
                          Parish, Redeemed Christian Church of God, PH).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Visiting Tourism Sites (Elegushi Beach and Burj
                          Khalifa).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Listening to Music (Falz, Olamide, Jon Bellion, J
                          Cole, Kenya West).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Sports (Liverpool FC, Enyimba International FC, Kano
                          Pillars FC).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Delicacies (hot-sauced food, pounded yam/white soup,
                          unripe plantain porridge, beans & plantain).
                        </div>
                      </p>

                      <p style={{ fontWeight: 'bold' }}>INTERESTS</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Travelling: Enjoy travelling, especially road trips by
                          car and bike.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Spending Quality Time with Family and Friends</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Listening to Music: Indian contemporary, rock and pop,
                          special interest in retro pop, disco and rock bands.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Reading: New concepts and knowledge excite me. I am
                          into all forms of reading: print, ebooks and
                          audiobooks.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='7'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘EXPERIENCE HIGHLIGHTS’ OR ‘CAREER HIGHLIGHTS’, OR ‘CAREER
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Any of these captions will help create a functional CV.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        A functional CV pulls all your relevant skills,
                        knowledge, experiences, and qualifications into this
                        section.
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        Don’t worry about when and where the events happened.
                        Focus on the best aspects of the experience.
                      </p>

                      <p>Here is an example:</p>
                      <p style={{ fontWeight: 'bold' }}>
                        EXPERIENCE HIGHLIGHTS
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              NETWORK ADMINISTRATOR:
                            </span>{' '}
                            Provided workable and proven solutions to maintain
                            various operating environments. Installed,
                            configured, and maintained the network for military
                            training school, achieving zero classroom downtime
                            for more than three years. Demonstrated strong
                            diagnostic abilities with attention to detail and
                            ability to work effectively and efficiently in a
                            fast-paced environment.
                          </p>
                          <p>
                            Recognised as a competent and credible authority on
                            establishing procedures, conducting tests to verify
                            correct operation of equipment/ systems,
                            implementing fault-tolerant procedures for hardware
                            and software failures, and designing audit
                            procedures to test systems integrity and
                            reliability.
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              PROJECT MANAGER:
                            </span>{' '}
                            Managed $3.9M supply inventory and an annual budget
                            of $710K. Provided all logistics, including parts
                            issues, contingency purchasing, and emergency field
                            delivery, with no measurable losses
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              RISK ANALYST:
                            </span>{' '}
                            Identified potential liabilities in computerised
                            military accounting system training programme.
                            Analysed accuracy, usage feasibility, and
                            deficiencies while providing solutions to obstacles.
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>LEADER: </span>{' '}
                            Earned multiple awards for performance excellence.
                            Motivated and inspired organisations ranging in size
                            from 35-450 personnel. Effectively guided and
                            directed associates to achieve their highest
                            potential.
                          </p>
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='8'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘ACHIEVEMENT HIGHLIGHTS’ OR ‘ACCOMPLISHMENT
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        If you prefer grouping your most significant and
                        relevant accomplishments in one place, add this section.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Using this style can help recruiters to more easily
                          see how your experience, skills, and knowledge fit the
                          present role.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Place this section at the beginning of your CV.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#ec6336'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Don’t bury your biggest accomplishments in a sea of
                          small type of dense text. Be specific; not complex.
                        </div>
                      </p>

                      <p style={{ Margin_top: '2rem' }}>Here is an example:</p>
                      <p style={{ fontWeight: 'bold' }}>
                        ACHIEVEMENT HIGHLIGHTS
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Manage and monitor 2016-2018 Budget Support Programme
                          to realise the provision of EUR98 million to the Niger
                          Republic government budget to support fiscal
                          responsibility and reforms.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Co-formulated the 2019-2020 Budget Support Programme
                          with funding of EUR54 million.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Designed technical assistance in the EUR8 million
                          State Building Contract project, 2017-2020
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Trained 1,570 staff successfully from the Ministries
                          of Finance, Health, Infrastructure, Agriculture, and
                          Education in programme-based budgeting.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Drafted and developed laws, procedures, rules,
                          regulations, and guides related to the budget process.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='9'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘HONOURS AND AWARDS’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Add this section if you wish to showcase any
                        distinguishing honours or awards.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>Include this section in any of the following ways:</p>
                      <p>
                        As a separate category either near the start or the end
                        of your CV As a category integrated into the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Summary’ </span>
                        section with a
                        <span style={{ fontWeight: 'bold' }}>
                          {' '}
                          ‘Honours and Awards’
                        </span>{' '}
                        subheading
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        Integrated into the jobs where you won the{' '}
                        <span style={{ fontWeight: 'bold' }}>Honours</span> or
                        <span style={{ fontWeight: 'bold' }}>Awards</span>{' '}
                        Listed in the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Education’</span>{' '}
                        section
                      </p>

                      <p style={{ marginBottom: '2rem' }}>
                        Depending on your needs, you can include. . .
                        <br />
                        board of directors’ affiliations
                        <br />
                        media mentions
                        <br />
                        patents
                        <br />
                        public speaking activities
                        <br />
                        publications
                      </p>

                      <p style={{ marginBottom: '2rem' }}>
                        . . . or anything that tells people you’re an expert in
                        your field, known by your peers, and valued for your
                        contributions and achievements.
                      </p>

                      <p>
                        Like{' '}
                        <span style={{ fontWeight: 'bold' }}>
                          ‘Honours and Awards’
                        </span>{' '}
                        , the list above can be added in a separate section or
                        integrated into your{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Summary’,</span>{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Experience’</span>{' '}
                        , or{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Education’ </span>{' '}
                        section.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='10'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘PUBLICATIONS’ AND ‘PUBLIC SPEAKING’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Separate sections containing third-party endorsements of
                        your expertise.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        These types of achievements are precious for most CVs
                        and can be a large boost to being recognised by
                        recruiters.
                      </p>
                      <p>
                        Create a separate section for each, integrate them into
                        your{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Summary’</span>{' '}
                        section, or add them to the appropriate work or school
                        listing in{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Education’</span>
                        .
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='11'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘PROFESSIONAL ASSOCIATIONS’, OR ‘PROFESSIONAL
                      AFFILIATIONS’, OR ‘ASSOCIATION MEMBERSHIPS’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        This section includes any committees, leadership roles,
                        or accomplishments you’ve earned.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        Feel free to experiment in using any of these titles.
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        If you were involved in any professional associations
                        you feel are relevant to your industry, list them here.
                      </p>

                      <p>
                        Don’t leave any relevant accomplishment out! This can be
                        a valuable section of your CV if used properly.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='12'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      CERTIFICATIONS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        In this section, you can include any professional
                        certifications that are relevant to the job role you’re
                        applying for.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        It’s good to include the certification date and the
                        awarding body.
                      </p>

                      <p>
                        Here are some examples in the IT field you can shout
                        about in this section:
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Microsoft
                        Certified Systems Engineer (MSCE)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        A+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        Linux+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        Network+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> ITIL
                        Foundations
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Sun
                        Certified System Administrator (SCSA)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Linux +
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> MCSA
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> VMware
                        Certified Professional (VCP)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Cisco
                        Certified Network Associate, Routing &
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Switching
                        (CCNA-R&S)
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='13'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      SOFTWARE
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p style={{ marginBottom: '2rem' }}>
                        In this section, you list hands-on tech professional
                        software that you can demonstrate or have technical
                        proficiency in.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        Think of any computer software you use in your field
                        that makes a method to work. List them here. And
                        indicate the level of your proficiency in using it.
                      </p>

                      <p>
                        Here are some examples in data analytics and helpdesk
                        fields:
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'end',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            AzureDesk
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Dreamweaver
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Eviews
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Flash
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            HappyFox
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Hitachi HCP/HDI
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> NVivo
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            HelpSpot
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> NVivo
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Oracle ZFS
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Python
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Qualtrics
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> R
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> SPSS
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Stata
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Tableau
                          </p>
                        </div>
                        <div style={{ width: '50%' }}>
                          <div>
                            <p
                              style={{
                                color: '#e7264c',
                                fontSize: '20px',
                                fontWeight: 'bold',
                              }}
                            >
                              SOFTWARE
                            </p>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>HelpSpot</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '75%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>AzureDesk</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '50%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>SPSS</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '40%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Happyfox</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '90%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Flash</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '70%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Dreamweaver</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '80%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='14'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      LANGUAGES
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p style={{ marginBottom: '2rem' }}>
                        In this section, you list hands-on tech professional
                        software that you can demonstrate or have technical
                        proficiency in.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        If you speak, read, or write multiple international
                        languages, prominently shout about them ─ especially if
                        the job you’re applying for considers these languages
                        important. And indicate your proficiency level as well.
                      </p>

                      <p>Here are some examples:</p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'end',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            English
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            French
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            German
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Hindi
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Italian
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Mandarin
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Polish
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Portuguese
                          </p>
                        </div>
                        <div style={{ width: '50%' }}>
                          <div>
                            <p
                              style={{
                                color: '#e7264c',
                                fontSize: '20px',
                                fontWeight: 'bold',
                              }}
                            >
                              LANGUAGES
                            </p>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>English</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '90%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>French</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '40%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Spanish</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '80%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        );
      },
    });
  };

 

  // const updateBuilderDocument = () => {
  //   return resumeId && pageUpdatableData === null ? (
  //     <div className='builder_loader_wrapper'>
  //       <ThreeDots wrapperClass='loader' />
  //     </div>
  //   ) : (
  //     // <div className='builder_loader_wrapper'>
  //     //   <ThreeDots wrapperClass='loader' />
  //     // </div>
  //     <BuilderDocument
  //       isSubscriptionExpired={isSubscriptionExpired}
  //       loginPopup={loginPopup}
  //       loginPopupBG={loginPopupBG}
  //       userLoggedIn={userLoggedIn}
  //       userData={userData}
  //       resumeId={resumeId}
  //       saveBuilderData={saveBuilderData}
  //       pageDocumentData={pageDocumentData}
  //       document_name={resumeId ? resumeData?.documentName : document_name}
  //       setDocument_name={setDocument_name}
  //       templateName={TemplateSelector}
  //       templateDataSelector={templateDataSelector}
  //       addSectionModal={addSectionModal}
  //       addSectionModalBG={addSectionModalBG}
  //       pageBorderColor={pageBorderColor}
  //       pageBorderWidth={pageBorderWidth}
  //       pageBorderStyle={pageBorderStyle}
  //       borderedPage={borderedPage}
  //       headingTextStyleConditions={headingTextStyleConditions}
  //       bodyTextStyleConditions={bodyTextStyleConditions}
  //       headingTextSizeConditions={headingTextSizeConditions}
  //       bodyTextSizeConditions={bodyTextSizeConditions}
  //       mainPanelBgColor={mainPanelBgColor}
  //       sidePanelTextColor={sidePanelTextColor}
  //       sidePanelBgColor={sidePanelBgColor}
  //       pageUpdatableData={pageUpdatableData}
  //       pageLayout={pageLayout}
  //       lineHeight={lineHeight}
  //       docummentMargin={docummentMargin}
  //       docummentDateFormat={docummentDateFormat}
  //       documentHeadingTextStyle={documentHeadingTextStyle}
  //       documentBodyTextStyle={documentBodyTextStyle}
  //       documentBodyTextSize={documentBodyTextSize}
  //     />
  //   );
  // };

  const updateBuilderDocument = () => {
    return  resumeId ? (
      resumeId && pageUpdatableData === null ?(
        <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
        <BuilderDocument
        isSubscriptionExpired={isSubscriptionExpired}
        loginPopup={loginPopup}
        loginPopupBG={loginPopupBG}
        userLoggedIn={userLoggedIn}
        userData={userData}
        resumeId={resumeId}
        saveBuilderData={saveBuilderData}
        pageDocumentData={pageDocumentData}
        initialDocumentName={resumeData?.documentName}
        document_name={document_name}
        // document_name={resumeId ? resumeData?.documentName : document_name}
        setDocument_name={setDocument_name}
        templateName={TemplateSelector}
        templateDataSelector={templateDataSelector}
        addSectionModal={addSectionModal}
        addSectionModalBG={addSectionModalBG}
        pageBorderColor={pageBorderColor}
        pageBorderWidth={pageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        borderedPage={borderedPage}
        headingTextStyleConditions={headingTextStyleConditions}
        bodyTextStyleConditions={bodyTextStyleConditions}
        headingTextSizeConditions={headingTextSizeConditions}
        bodyTextSizeConditions={bodyTextSizeConditions}
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
    )
  
    ) : (
      resumeId || pageUpdatableData === null ?(
            <div className='builder_loader_wrapper'>
            <ThreeDots wrapperClass='loader' />
          </div>
        ) : (
            <BuilderDocument
            isSubscriptionExpired={isSubscriptionExpired}
            loginPopup={loginPopup}
            loginPopupBG={loginPopupBG}
            userLoggedIn={userLoggedIn}
            userData={userData}
            resumeId={resumeId}
            saveBuilderData={saveBuilderData}
            pageDocumentData={pageDocumentData}
            initialDocumentName={resumeData?.documentName}
            document_name={document_name}
            // document_name={resumeId ? resumeData?.documentName : document_name}
            setDocument_name={setDocument_name}
            templateName={TemplateSelector}
            templateDataSelector={templateDataSelector}
            addSectionModal={addSectionModal}
            addSectionModalBG={addSectionModalBG}
            pageBorderColor={pageBorderColor}
            pageBorderWidth={pageBorderWidth}
            pageBorderStyle={pageBorderStyle}
            borderedPage={borderedPage}
            headingTextStyleConditions={headingTextStyleConditions}
            bodyTextStyleConditions={bodyTextStyleConditions}
            headingTextSizeConditions={headingTextSizeConditions}
            bodyTextSizeConditions={bodyTextSizeConditions}
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
        )
  
    )
  };

  console.log('pageUpdatableData', pageUpdatableData);

  useEffect(() => {
    templateUpdatableData &&
      setDataUpdatableRight(setDataUpdatableRightConditions);
    templateUpdatableData &&
      setDataUpdatableLeft(setDataUpdatableLeftConditions);
    templateUpdatableData && setSidePanelBgColor(setSidePanelBgColorSelector);
    templateUpdatableData &&
      setSidePanelTextColor(setSidePanelTextColorSelector);
    templateUpdatableData && setMainPanelBgColor(setMainPanelBgColorSelector);

    console.log('from useEffect ', templateUpdatableData);
    // // console.log('from useEffect ', dataUpdatableRight)
    // // console.log('from useEffect ', dataUpdatableLeft)
    templateUpdatableData &&
      (template === 'executiveTemplate_8' ||
      template === 'executiveTemplate_9' ||
      template === 'executiveTemplate_10'
        ? setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo,
            },
            {
              key: 2,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo + 1,
            },
          ])
        : setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo,
            },
          ]));

    updateBuilderDocument();
    setKey(key + 1);
  }, [templateUpdatableData]);

  // useEffect(() => {

  // }, [])

  const login_Modal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal '>
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

  const [filterResume, setFilterResume] = useState('All');

  const dropdownOptions = ['All', 'Resumes', 'Executive Resumes'];
  const defaultDropdownOption = dropdownOptions[0];

  const chooseTemplateData = [
    {
      name: 'template_1',
      img: '/assets/images/Templates/template_1.png',
      alt: 'template_1',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_2',
      img: '/assets/images/Templates/template_2.png',
      alt: 'template_2',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_3',
      img: '/assets/images/Templates/template_3.png',
      alt: 'template_3',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_4',
      img: '/assets/images/Templates/template_4.png',
      alt: 'template_4',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_5',
      img: '/assets/images/Templates/template_5.png',
      alt: 'template_5',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_6',
      img: '/assets/images/Templates/template_6.png',
      alt: 'template_6',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_7',
      img: '/assets/images/Templates/template_7.png',
      alt: 'template_7',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_8',
      img: '/assets/images/Templates/template_8.png',
      alt: 'template_8',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_9',
      img: '/assets/images/Templates/template_9.png',
      alt: 'template_9',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_10',
      img: '/assets/images/Templates/template_10.png',
      alt: 'template_10',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_11',
      img: '/assets/images/Templates/template_11.png',
      alt: 'template_11',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_12',
      img: '/assets/images/Templates/template_12.png',
      alt: 'template_12',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_13',
      img: '/assets/images/Templates/template_13.png',
      alt: 'template_13',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_14',
      img: '/assets/images/Templates/template_14.png',
      alt: 'template_14',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_15',
      img: '/assets/images/Templates/template_15.png',
      alt: 'template_15',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_16',
      img: '/assets/images/Templates/template_16.png',
      alt: 'template_16',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_17',
      img: '/assets/images/Templates/template_17.png',
      alt: 'template_17',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_18',
      img: '/assets/images/Templates/template_18.png',
      alt: 'template_18',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_19',
      img: '/assets/images/Templates/template_19.png',
      alt: 'template_19',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_20',
      img: '/assets/images/Templates/template_20.png',
      alt: 'template_20',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_21',
      img: '/assets/images/Templates/template_21.png',
      alt: 'template_21',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_22',
      img: '/assets/images/Templates/template_22.png',
      alt: 'template_22',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_23',
      img: '/assets/images/Templates/template_23.png',
      alt: 'template_23',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_24',
      img: '/assets/images/Templates/template_24.png',
      alt: 'template_24',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_25',
      img: '/assets/images/Templates/template_25.png',
      alt: 'template_25',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_26',
      img: '/assets/images/Templates/template_26.png',
      alt: 'template_26',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_27',
      img: '/assets/images/Templates/template_27.png',
      alt: 'template_27',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_28',
      img: '/assets/images/Templates/template_28.png',
      alt: 'template_28',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_29',
      img: '/assets/images/Templates/template_29.png',
      alt: 'template_29',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_30',
      img: '/assets/images/Templates/template_30.png',
      alt: 'template_30',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: null,
      img: null,
      alt: null,
      section: 'separator',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_1',
      img: '/assets/images/Templates/executiveTemplate_1.png',
      alt: 'executiveTemplate_1',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_2',
      img: '/assets/images/Templates/executiveTemplate_2.png',
      alt: 'executiveTemplate_2',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_3',
      img: '/assets/images/Templates/executiveTemplate_3.png',
      alt: 'executiveTemplate_3',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_4',
      img: '/assets/images/Templates/executiveTemplate_4.png',
      alt: 'executiveTemplate_4',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_5',
      img: '/assets/images/Templates/executiveTemplate_5.png',
      alt: 'executiveTemplate_5',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_6',
      img: '/assets/images/Templates/executiveTemplate_6.png',
      alt: 'executiveTemplate_6',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_7',
      img: '/assets/images/Templates/executiveTemplate_7.png',
      alt: 'executiveTemplate_7',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_8',
      img: '/assets/images/Templates/executiveTemplate_8.png',
      alt: 'executiveTemplate_8',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_9',
      img: '/assets/images/Templates/executiveTemplate_9.png',
      alt: 'executiveTemplate_9',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_10',
      img: '/assets/images/Templates/executiveTemplate_10.png',
      alt: 'executiveTemplate_10',
      type: 'Executive Resumes',
      sort: 'all',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (!userLoggedIn) {
        localStorage.setItem('pageData', pageDocumentData);
        loginPopup.current && (loginPopup.current.style.display = 'flex'); // modal visible
        loginPopupBG.current && (loginPopupBG.current.style.display = 'flex'); // modal bg visible
      }
    }, 20000);
    if (userLoggedIn) {
      // login_Modal()
      loginPopup.current && (loginPopup.current.style.display = 'none'); // modal visible
      loginPopupBG.current && (loginPopupBG.current.style.display = 'none'); // modal bg visible
    }
  });

  return (
    <div className='builder'>
      <BuilderHeader
        builderData={dataUpdatableRight ? dataUpdatableRight : { length: 0 }}
        userLoggedIn={userLoggedIn}
        userData={userData}
      />
      <BuilderSubHeader
        pageBorderColor={pageBorderColor}
        setPageBorderColor={setPageBorderColor}
        pageBorderWidth={pageBorderWidth}
        setPageBorderWidth={setPageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        setPageBorderStyle={setPageBorderStyle}
        borderedPage={borderedPage}
        setBorderedPage={setBorderedPage}
        sidePanelTextColor={sidePanelTextColor}
        setSidePanelTextColor={setSidePanelTextColor}
        sidePanelBgColor={sidePanelBgColor}
        setSidePanelBgColor={setSidePanelBgColor}
        setPageLayout={setPageLayout}
        setDocummentMargin={setDocummentMargin}
        setLineHeight={setLineHeight}
        lineHeight={lineHeight}
        setDocummentDateFormat={setDocummentDateFormat}
        setDocumentHeadingTextStyle={setDocumentHeadingTextStyle}
        setDocumentBodyTextStyle={setDocumentBodyTextStyle}
        setDocumentBodyTextSize={setDocumentBodyTextSize}
      />

      <div style={{ overflowX: 'hidden' }}>
        <div
          style={{ display: showChangeTemplateSidebar ? 'block' : 'none' }}
          onClick={() =>
            setShowChangeTemplateSidebar(!showChangeTemplateSidebar)
          }
          className='change_template_sidebar_BG'
        ></div>
        <div
          className={`change_template_sidebar ${
            showChangeTemplateSidebar ? 'show_change_template_sidebar' : null
          }`}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
            }}
            className='change_template_sidebar_header '
          >
            Choose Your Template
            <div
              style={{ marginTop: '0', fontSize: '12px' }}
              className='chooseTemplateDropdown change_template_sidebar_dropdown'
            >
              <Dropdown
                className='dropdown dropdown_chooseTemplate change_template_sidebar_dropdown_setting '
                options={dropdownOptions}
                value={defaultDropdownOption}
                onChange={(e) => setFilterResume(e.value)}
                placeholder='Select an option'
              />
            </div>
          </div>
          <div className='change_template_sidebar_main'>
            <div className='sidebar_templates'>
              {/* <div onClick={(e) => setTemplate('template_1')} className='sidebar_template'>
                <img src='/assets/images/Templates/template_1.png' className={template === 'template_1' ? 'template_selected' : null} alt='template_1' />
              </div>
              <div onClick={(e) => setTemplate('template_2')} className='sidebar_template'>
              <img src='/assets/images/Templates/template_2.png' className={template === 'template_2' ? 'template_selected' : null} alt='template_2' />
              </div> */}

              {chooseTemplateData
                .filter((e) =>
                  filterResume === 'Resumes'
                    ? e.type === 'Resumes'
                    : filterResume === 'Executive Resumes'
                    ? e.type === 'Executive Resumes'
                    : e.sort === 'all'
                )
                .map((choose_template) =>
                  choose_template.section === 'separator' ? (
                    <div
                      style={{ fontSize: '0.9rem' }}
                      className='executive_templates_separator'
                    >
                      <span style={{ textDecoration: 'none' }}>
                        Executive Resumes - Premium Resumes
                      </span>{' '}
                      <br />(
                      <span style={{ textDecoration: 'none' }}>
                        {' '}
                        For Mid-Managerial & Managerial Role Applicants
                      </span>
                      )
                    </div>
                  ) : (
                    <div
                      onClick={(e) => {
                        setTemplate(choose_template.name);
                        setPageUpdatableData(null);
                        history.push(`/builder/${choose_template.name}`);
                      }}
                      className='sidebar_template'
                    >
                      <img
                        src={choose_template.img}
                        className={
                          template === choose_template.name
                            ? 'template_selected'
                            : null
                        }
                        alt={choose_template.alt}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
          {/* <button onClick={(e) => setTemplate('template_1')} className='template-1'>Tempelete_1</button>
          <button onClick={(e) => setTemplate('template_2')} className='template-2'>Tempelete_2</button> */}
        </div>
        {/* <BuilderDocument mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} pageUpdatableData={pageUpdatableData} pageLayout={pageLayout} lineHeight={lineHeight} docummentMargin={docummentMargin} docummentDateFormat={docummentDateFormat} documentHeadingTextStyle={documentHeadingTextStyle} documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
      </div>
      {updateBuilderDocument()}
      {/* <UpdateBuilderDocument /> */}

      <div className='builder_add_btns_wrapper'>
        <div className='builder_add_btns'>
          <div
            onClick={() =>
              setShowChangeTemplateSidebar(!showChangeTemplateSidebar)
            }
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z' />
            </svg>
            Change Template
          </div>
          <div
            onClick={() => {
              addSectionModal.current.style.display = 'flex'; // modal visible
              addSectionModalBG.current.style.display = 'flex'; // modal bg visible
            }}
          >
            {/* <img src="/assets/images/addSection.png" alt="addSection " /> */}
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <g data-name='Layer 2'>
                <g data-name='file-add'>
                  <rect width='24' height='24' opacity='0' />
                  <path d='M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z' />
                  <path d='M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z' />
                </g>
              </g>
            </svg>
            Add Section
          </div>
          <div
            onClick={() => {
              proTips_Modal();
            }}
          >
            <svg viewBox='0 0 24 24' fill='#000000'>
              <rect fill='none' height='24' width='24' y='0' />
              <path d='M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,19h8v-2H5V19z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27 C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5 c0,2.47,1.49,3.89,2.35,4.5h6.3C13.01,13.39,14.5,11.97,14.5,9.5z M21.37,7.37L20,8l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6 L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6z' />
            </svg>
            Pro Tips
          </div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://cvjury.com/request-a-review/'
          >
            {/* <svg viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg> */}
            <svg viewBox='0 0 24 24' fill='#000000'>
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z' />
            </svg>
            Resume Review
          </a>
        </div>
      </div>
      <div
        ref={addSectionModalBG}
        onClick={() => {
          addSectionModal.current.style.display = 'none'; // modal hidden
          addSectionModalBG.current.style.display = 'none'; // modal bg hidden
        }}
        className='addSectionModal_bg'
      ></div>
      <div ref={addSectionModal} className='addSectionModal'>
        <div className='addSectionModal_Main'>
          <div className='addSectionModal_header'>Choose Section to Add:</div>
          <div className='addSectionModal_types'>
            <button onClick={AddParagraphSelector} className='add_paragraph'>
              Paragraph
            </button>
            <button onClick={AddHeadingSelector} className='add_Heading'>
              Heading
            </button>
            <button onClick={AddSectionSelector} className='add_SubHeading'>
              Section
            </button>
          </div>
        </div>
      </div>

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
