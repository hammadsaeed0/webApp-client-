import React, { useState } from 'react';

export default function Recent_graduate_with_internshipCategory() {
  const [NAME_CONTACT_INFO, setNAME_CONTACT_INFO] = useState({
    blocks: [],
    entityMap: {},
  });

  const [DATE, setDATE] = useState({
    blocks: [
      {
        key: '637gr',
        text: '{Date}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 6,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 6,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fm364',
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
        key: 'evk6h',
        text: "{Hiring manager's name} ",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 24,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 24,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2si1i',
        text: "{Hiring manager's job title} ",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 29,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 29,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'rohs',
        text: '{Company name}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 14,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'dfm2c',
        text: ' {Address}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 10,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '92ada',
        text: "{Hiring manager's email} ",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 24,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 25,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fjr0u',
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
        key: '7520o',
        text: 'Re: {job title you are applying for} Role',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 41,
            style: 'fontsize-12',
          },
          {
            offset: 4,
            length: 32,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fm364ff4',
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
        key: '4rak9',
        text: "Dear Hiring Manager, or Dear (hiring manager's name},",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 53,
            style: 'fontsize-12',
          },
          {
            offset: 29,
            length: 23,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fm364ff2',
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
        key: 'fbjh0',
        text: 'I am a recent graduate from {name of institution} with a {type of degree} in {degree discipline}, and I am excited to start my career as a professional in the (Job title} position at {company}. I am confident that I would bring value to your team.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 247,
            style: 'fontsize-12',
          },
          {
            offset: 28,
            length: 22,
            style: 'BOLD',
          },
          {
            offset: 57,
            length: 16,
            style: 'BOLD',
          },
          {
            offset: 77,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 158,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 183,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3kthi',
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
        key: '2jup5',
        text: 'While completing my undergraduate degree, I undertook a {number}-month internship as a/an (job title} at {company} where I gained exposure to many aspects of {type or area} work. During that time, I had the opportunity to develop my {skill #1}, {skill # 2} and {skill #3} and be part of the team that {explain what the team worked on}, and received excellent feedback from my manager, {name of manager}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 403,
            style: 'fontsize-12',
          },
          {
            offset: 57,
            length: 7,
            style: 'BOLD',
          },
          {
            offset: 90,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 105,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 158,
            length: 14,
            style: 'BOLD',
          },
          {
            offset: 233,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 245,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 261,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 301,
            length: 33,
            style: 'BOLD',
          },
          {
            offset: 385,
            length: 17,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '98m2a',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2kp51',
        text: "I am excited about this opportunity to join your team at {company} for several reasons. The position would allow me to pursue my passion for {example of passion - relevant to target position}. I admire {company}'s core values of {value # 1}, (value # 2 }, and {value #3). I also believe that {give example of one of the values} contributes to {positive out come}. Finally, I want to contribute to {company} as it is spearheading change in the {industry} industry,",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 463,
            style: 'fontsize-12',
          },
          {
            offset: 57,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 141,
            length: 50,
            style: 'BOLD',
          },
          {
            offset: 202,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 229,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 242,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 260,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 292,
            length: 35,
            style: 'BOLD',
          },
          {
            offset: 343,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 397,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 443,
            length: 10,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '98m2af1',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'biv22',
        text: 'My academic qualifications and experience in a fast-paced, dynamic organisation like {intern company} and ability to work independently as well as part of a team provide me with the skills and experience to be a valuable contributor at {target company}. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 254,
            style: 'fontsize-12',
          },
          {
            offset: 85,
            length: 16,
            style: 'BOLD',
          },
          {
            offset: 236,
            length: 16,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1b0do',
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

  const [REQUEST, setREQUEST] = useState({
    blocks: [
      {
        key: '7514k',
        text: 'After reviewing my resume, you will see I am a good fit for the position of {job title}. I look forward to the opportunity to discuss the position further with you at the interview.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 181,
            style: 'fontsize-12',
          },
          {
            offset: 76,
            length: 11,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6s2l9',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '7dnn2',
        text: 'Thank you for your time.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 24,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6vv56',
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
        key: '213m6',
        text: 'Sincerely, ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
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
        key: 'fhsrgs2',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fhsrgs1',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fhsrgs4',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '42n9q',
        text: 'SIGNATURE ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fc9si',
        text: '{Your Name}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 11,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '19h02',
        text: '{Your Email}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 12,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 12,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '15sta',
        text: '{Your Phone Number} ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 20,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 20,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'blh7t',
        text: '{Your LinkedIn URL}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 19,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 19,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const RECENT_GRADUATE_WITH_INTERNSHIP = {
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

  return { RECENT_GRADUATE_WITH_INTERNSHIP };
}
