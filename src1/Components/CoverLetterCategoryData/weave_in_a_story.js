import React, { useState } from 'react';

export default function Weave_in_a_storyCategory() {
  const [NAME_CONTACT_INFO, setNAME_CONTACT_INFO] = useState({
    blocks: [],
    entityMap: {},
  });

  const [DATE, setDATE] = useState({
    blocks: [
      {
        key: 'a1s8b',
        text: '12 January 2022',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 15,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '35ham',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [RECIPIENT, setRECIPIENT] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Mr Lott Garry',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 13,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'r5lk',
        text: 'Director, Careers & Professional Development ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 45,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ijv6',
        text: 'Postgraduate Careers Services, University of London',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 51,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '35s4p',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [LETTER_HEADING, setLETTER_HEADING] = useState({
    blocks: [
      {
        key: '5oika',
        text: 'Re: Senior Careers Consultant Role - Job Reference LNP-347586',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 61,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 61,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8srmv',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [SALUTATION, setSALUTATION] = useState({
    blocks: [
      {
        key: 'a4v3k',
        text: 'Dear Mr Garry',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 13,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '69kki',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [INTRODUCTION, setINTRODUCTION] = useState({
    blocks: [
      {
        key: '1qpp',
        text: "After teaching entrepreneurship and financial mathematics for six years in Singapore, I moved to England in 2015 to study for my PhD. I had also taught macroeconomics for two sessions at the University of Cardiff on part-time. A turn of events led me to my current position, managing Apex Labs Recruitment Ltd and helping PhD, MSc, and BSc job seek ers successfully understand and navigate today's tough job market.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 415,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3tqvd',
        text: 'In this role, I work with recent graduates and alumni, counselling and retraining them to land jobs. This experience fits perfectly with the requirements for the career consultant role at the University of London, where I would be advising MBAs on the strategies to implement to land top jobs upon graduation.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 309,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bag7t',
        text: 'Even though I am a PhD holder applying for this role, I believe that this position will still be challenging, and I am excited to learn on the fly.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 147,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '21vlh',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [CORE_CONTENT, setCORE_CONTENT] = useState({
    blocks: [
      {
        key: '18e8f',
        text: 'My skills fit your needs as follows:',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 36,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '5kgpa',
        text: 'Coaching and Networking: At Apex Labs Recruitment Ltd, I help job seekers under stand what job roles to look for. I teach them how to professionally create LinkedIn profiles by optimising the headline and sub-headlines, profile photo, summary section, and achievements, among other sections. I also teach them how to write cover letters to get interviews, how to connect with alumni, and how to identify industry problems and trends and develop networks. Also, I sit as an industry advisory board member of the University of Westminster advising on graduate employability and networking with practitioners.',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 606,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1cgra',
        text: 'Social Media: I have developed a strong presence on social media. For example, nearly 24,000 job seekers and professionals follow me on LinkedIn. Job seekers have downloaded my CV, and cover letter templates almost 9,000 times, indicating how useful they considered my ideas and approaches to writing these documents.',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 317,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '29nuq',
        text: 'Facilitation: At Solutions Recruitment Ltd, I have assisted the team with sourcing Dot Net Developers for over 15 UK companies, used our CV resource platforms to find talented candidates, negotiated contracts, and placed successful candidates, all while working remotely and part-time.',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 285,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2no74',
        text: "Working in the private employment agency subsector has given me an invaluable founda tion, and now I am ready to move into career advisory in a university setting. I am eager to learn more about the University of London's strategies for transitioning postgraduates either on a one-to-one or group coaching from an academic degree to the career world and discuss how my experience might benefit the Postgraduate Careers Service team.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 432,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '7tl40',
        text: 'I have attached my CV for your review. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 39,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [REQUEST, setREQUEST] = useState({
    blocks: [
      {
        key: '4s6pf',
        text: 'I welcome the chance to speak with you in person to discuss this opportunity further.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 85,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '15f37',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [CONCLUSION, setCONCLUSION] = useState({
    blocks: [
      {
        key: 'freen',
        text: 'Sincerely yours, ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 17,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [END, setEND] = useState({
    blocks: [
      {
        key: '1657',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '14337',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '15327',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '97miv',
        text: 'My kame Joel Daniel',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 19,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const WEAVE_IN_A_STORY = {
    NAME_CONTACT_INFO,
    setNAME_CONTACT_INFO,
    DATE,
    setDATE,
    RECIPIENT,
    setRECIPIENT,
    LETTER_HEADING,
    setLETTER_HEADING,
    SALUTATION,
    setSALUTATION,
    INTRODUCTION,
    setINTRODUCTION,
    CORE_CONTENT,
    setCORE_CONTENT,
    REQUEST,
    setREQUEST,
    CONCLUSION,
    setCONCLUSION,
    END,
    setEND,
  };

  return { WEAVE_IN_A_STORY };
}
