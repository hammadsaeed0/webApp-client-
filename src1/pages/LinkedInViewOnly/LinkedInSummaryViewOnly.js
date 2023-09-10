import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import 'react-dropdown/style.css';
import { ThreeDots } from 'react-loader-spinner';

import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import LinkedInDocumentViewOnly from '../../Components/LinkedInViewOnly/LinkedInDocumentViewOnly/LinkedInDocument';

import Accordion from 'react-bootstrap/Accordion';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {
  get_linkedIn,
  get_linkedIn_by_id,
  get_linkedIn_categories,
  get_user_linkedIn_Summary_by_id,
} from '../../API/index';

export default function LinkedIn({ setUserLoggedIn, userData, userLoggedIn }) {
  const { id, summaryId, share } = useParams();
  const pageData = JSON.parse(localStorage.getItem('pageData'));

  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [updatableId, setUpdatableId] = useState(id && id);

  const [userLinkedInData, setUserLinkedIn] = useState(null);
  const [linkedIn, setLinkedIn] = useState('');
  const [linkedInData, setLinkedInData] = useState('');
  const [document_name, setDocument_name] = useState('Document');
  // console.log(share);

  const [linkedInHeadings, setLinkedInHeadings] = useState('');
  const [linkedInHeadingData, setLinkedInHeadingData] = useState('');

  const [categories, setCategories] = useState('');

  const [msg, setMsg] = useState();

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getLinkedInSummaryData = async () => {
    await get_user_linkedIn_Summary_by_id(summaryId, config).then((res) => {
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
    summaryId && getLinkedInSummaryData();
  }, []);
  useEffect(() => {
    userLinkedInData &&
      setLinkedInData({
        ...userLinkedInData?.documentData,
        template_profile_data: userLinkedInData?.documentData.pageEditorData,
      });
  }, [userLinkedInData]);

  function getLinkedInById(linkedIns, updatableId) {
    for (var i = 0; i < linkedIns.length; i++) {
      if (linkedIns[i].id === updatableId) {
        return linkedIns[i];
      }
    }
  }

  useEffect(() => {
    get_linkedIn_categories().then((res) => {
      //   // console.log(res);
      if (res?.status === 200 || res?.status === 304) {
        setCategories(res?.data);
      } else {
        setMsg(res);
      }
    });

    get_linkedIn().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setLinkedIn(res?.data);
      } else {
        setMsg(res);
      }
    });

    get_linkedIn_by_id(updatableId).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        // // console.log(res?.data);
        // setProfileText(res?.data.template_profile_data);
        pageData && pageData.templateName === res?.data.id
          ? setLinkedInData({
              ...pageData.pageEditorData,
              template_profile_data: pageData.pageEditorData,
            })
          : setLinkedInData(res?.data);
      } else {
        setMsg({ msg: res, status: 400 });
      }
    });
  }, [updatableId]);

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

  const [profileText, setProfileText] = useState(
    linkedInData && linkedInData.template_profile_data
  );
  // console.log(profileText);

  const pageDocumentData = JSON.stringify({
    type: 'linkedin_summary',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    templateName: updatableId,
    pageEditorData: profileText,
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
                <div className='linknedIn_protip_headline'>
                  14 Guidelines for Writing Your Perfect LinkedIn Profile
                  Summary
                </div>
                <div className='linknedIn_protip_sub_headline'>
                  Guidelines 1-7 (What to Say)
                </div>
                <p>
                  Excellent LinkedIn summaries cover seven common topics. If you
                  can incorporate three or four of these tips into your summary,
                  it will have enough substance. Let’s dive in!
                </p>
                <Accordion
                  className='proTips_Accordian proTips_linkedIn_Accordian'
                  flush
                >
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='0'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      1. <span>Talk About What Makes You Tick</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        The best summaries exude passion. Talking about what you
                        love to do adds context to your career.{' '}
                      </p>{' '}
                      <p>
                        Say what excites you most professionally—what drives you
                        aside from your monthly salary?{' '}
                      </p>{' '}
                      <p>
                        If you are a new graduate or a young professional with
                        less work experience to boost about, then showing your
                        passion becomes even more important.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='1'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      2. <span>Describe Your Present Role</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Merely listing your job title isn’t enough (for example,
                        saying that you’re a digital marketer).
                      </p>
                      <p>
                        Rather, you need to talk about what you do precisely in
                        your day-to-day work (for example, say, ‘I use
                        remarketing and retargeting to advertise our company’s
                        services on Google and Facebook’).
                      </p>

                      <p>
                        Talk about the problems you solve. Who do you solve them
                        for, and how do you do that?
                      </p>
                      <p>
                        Talking about your job in this way will paint a clearer
                        picture of your work and show your skills, practical
                        knowledge, and work style better.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='3'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      3.{' '}
                      <span>Reinterpret Your Past Experiences, If Need Be</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        You can reflect on your career thus far and highlight
                        what you think are the essential lessons you’ve learned
                        and what aspects you believe have made you what you are
                        presently.
                      </p>
                      <p>
                        If there’s any part that hasn’t been that good, talk
                        about it as well.
                      </p>
                      <p>
                        If you changed career or held obviously unrelated jobs,
                        connect the dots, and make sense of it for people to
                        learn from your experience.
                      </p>
                      <p>
                        Present this unconventional career path as good and not
                        bad for your future roles, perhaps because it has given
                        you a broader perspective.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='4'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      4.{' '}
                      <span>
                        Pinpoint Where You Have Succeeded Exceptionally
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Mention the significant takeaways from your experience
                        section.
                      </p>{' '}
                      <p>
                        {' '}
                        Look across roles and combine achievements if you can.
                      </p>{' '}
                      <p>
                        {' '}
                        This is especially applicable if you’re at a mid- to
                        late-stage in your career.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='5'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      5. <span>Show Your Personality</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Tell stories and use words that show the other sides of
                        your life, not only the professional angle.{' '}
                      </p>{' '}
                      <p>
                        Show your personal traits, such as gratefulness,
                        loyalty, humility, and humour.{' '}
                      </p>{' '}
                      <p>Show that you are authentic. </p>{' '}
                      <p>Be honest with yourself.</p>{' '}
                      <p>
                        {' '}
                        Talk about that one trait that people know you for.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='6'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      6. <span>Share What You Do When Not at Work</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        What are your hobbies, interests, or supported
                        charitable works? Remember to connect how these
                        interests help to define who you are at work.
                      </p>{' '}
                      <p>
                        {' '}
                        If you share a personal story, be sure it serves to
                        reinforce your professional strengths.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='7'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      7. <span>Add Relevant Media</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Occasionally, you can say more with an image, video, or
                        an article—as the saying goes, a picture is worth a
                        thousand words.{' '}
                      </p>{' '}
                      <p>
                        Don’t be afraid to add media to your profile and point
                        to where people can access these in your summary.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <div className='linknedIn_protip_sub_headline'>
                    Guidelines 8–14 (How to Say It)
                  </div>
                  <p>
                    The ideas you talk about in your summary are important, and
                    so are the format and tone. Once you have your core contents
                    ready, the following tips will help exponentially.
                  </p>

                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='8'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      8. <span>Your First Sentence Must Be Gold</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Although every word must fight for and justify its place
                        in your summary, your first words must blaze the trail.
                      </p>{' '}
                      <p>
                        Your first sentence should be designed to hook the
                        audience right away; if not, you could lose them.
                      </p>{' '}
                      <p>
                        Therefore, keep empty phrases such as ‘Hi, I’m Benny
                        Hawkins. I’m pleased you visited my profile’, ‘Thanks
                        for visiting!’ or ‘Welcome to my profile’ away from your
                        summary.{' '}
                      </p>{' '}
                      <p>
                        Remember, you only have a limited amount of space, so
                        avoid wasting these precious characters on filler words.{' '}
                      </p>{' '}
                      <p>
                        Cut straight to the good stuff to rope in your audience
                        to read your summary.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='9'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      9.{' '}
                      <span>
                        Keywords Are a Sure Bet for Beating the Job Robot
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Including relevant industry keywords from your sector
                        will help improve your search ranking on LinkedIn and
                        Google. Your keywords should highlight your top skills.
                        Including a subsection toward the end of your summary
                        such as ‘Specialties’, ‘Core Competencies’, or ‘Skills &
                        Interests’, among others, is one sure way to pack these
                        words in. To know what words to include as keywords, do
                        the following:
                      </p>
                      <ol>
                        <li>
                          Search for three or four job descriptions of your
                          target role.{' '}
                        </li>
                        <li>
                          Copy the targeted job description, as well as the
                          personal specifications.
                        </li>
                        <li>
                          Visit www.wordclouds.com, click Word List, click
                          Paste/Type Text, and then paste the job description
                          and personal specifications.
                        </li>
                        <li>Click Apply.</li>
                        <li>
                          Then, click on Word List again. You’ll see the most
                          common words and phrases. Typically, you won’t include
                          the filler words (‘so’, ‘a’, ‘the’, ‘it’, ‘and’, ‘by’,
                          etc.), and there you go! You will see a list of the
                          most relevant keywords that you must add to your
                          summary to increase your chances of being visible on
                          the LinkedIn algorithm.
                        </li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='10'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      10. <span>Cut the Jargon</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        There is no need to waste your scarce space on these 14
                        overused words that have lost all meaning:{' '}
                      </p>
                      <ul>
                        <li>Creative</li>
                        <li>Driven</li>
                        <li>energetic</li>
                        <li>Experienced</li>
                        <li>Expert</li>
                        <li>Innovative</li>
                        <li>Leader</li>
                        <li>Motivated</li>
                        <li>Passionate</li>
                        <li>Skilled</li>
                        <li>Specialised</li>
                        <li>Strategic</li>
                        <li>Successful</li>
                        <li>Trustworthy</li>
                      </ul>
                      <p>
                        Instead, use a thesaurus to find alternatives or, better
                        yet, show you have those traits with an example or a
                        quick story. Show don’t tell!{' '}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='11'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      11. <span>Mirror How You Speak</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Imagine you are at a seminar and met a person for the
                        first time. How would you speak to her? Write that way!
                        When you finish writing, read your summary out loud.
                        That way, you can check your voice. If you wouldn’t say
                        it out loud, then don’t write it.{' '}
                      </p>{' '}
                      <p>
                        One more thing: use the first-person pronoun ‘I’, not
                        ‘Rob Bowen has 11 years’ experience in marketing’. Also,
                        lay off the special characters and emojis.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='12'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      12. <span>Tell Stories that Resonate</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        People will remember you by the stories you tell. If you
                        start by saying, ‘When I was seven years old’ or ‘My
                        supervisor sat me down one Friday” to reveal the reason
                        you love sales, your summary will have more punch than
                        just stating, ‘I’m passionate about sales’.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='13'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      13.{' '}
                      <span>
                        Allow Some White Space to Relax the Readers’ Eyes
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        We are in the age of skimming. Breaking up your long
                        sentences and paragraphs into two or three short lines
                        of text will make your summary easily readable.
                      </p>{' '}
                      <p>
                        {' '}
                        Steer clear of long paragraphs. Opt for short syllable
                        words, such as ‘use’, over longer syllable words, such
                        as ‘utilise’.
                      </p>{' '}
                      <p>
                        {' '}
                        Make bullet points or numbered lists your friend, but
                        ensure they flow—lists aren’t an excuse for sloppy
                        thinking!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='14'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      14. <span>Ask For What You Want</span>
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        When you write, think about the actions you want your
                        audience to take after reading your summary. Is it for
                        them to connect with you? An invitation to connect would
                        be a great way to end it. Do you want them to book a
                        call for your services? A call to action such as, ‘Book
                        a Call’ would be great at the end. Depending on your
                        goal, you may ask for something else. If you’re
                        explicit, you’re more likely to get what you want.{' '}
                      </p>
                      <p>
                        Whatever field you’re in, write something engaging in
                        your summary section. It’s a strategic piece of content
                        that can endear you to your profile visitors, so make it
                        work that magic for you.
                      </p>
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

  function updateCoverLetterDocument() {
    return summaryId && !linkedInData ? (
      <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
      <LinkedInDocumentViewOnly readOnly={true}
      share={share}
        summaryId={summaryId}
        saveLinkedInData={saveLinkedInData}
        pageDocumentData={pageDocumentData}
        profileText={profileText}
        setProfileText={setProfileText}
        document_name={document_name}
        setDocument_name={setDocument_name}
        setShowChangeTemplateSidebar={setShowChangeTemplateSidebar}
        showChangeTemplateSidebar={showChangeTemplateSidebar}
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
      /> // prettier-ignore
    );
  }

  useEffect(() => {
    setKey(key + 1);
    setPageNo(pageNo + 1);
    updateCoverLetterDocument();
  }, [linkedInData, linkedInHeadingData]);

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
