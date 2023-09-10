import React, { useState } from 'react';

export default function Currenty_employed_1Category() {
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
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 6,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '84i58',
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
        key: 'eu3sm',
        text: "{Hiring manager's name}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 23,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 23,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3b3p4',
        text: "{Hiring manager's job title}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 28,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 28,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '89lf0',
        text: '{Company Address}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 17,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 17,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2obmc',
        text: '{Company name}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 14,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 14,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6hkem',
        text: "{Hiring manager's email}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 24,
            style: 'BOLD',
          },
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
        key: 'cl4t',
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
        key: '16jfb',
        text: 'Re: {Job title you are applying for} Vacancy',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 44,
            style: 'fontsize-12',
          },
          {
            offset: 5,
            length: 31,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2q4u8',
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
        key: '9n117',
        text: "Dear {hiring manager's name}, or Dear Hiring Manager,",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 53,
            style: 'fontsize-12',
          },
          {
            offset: 6,
            length: 22,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '4bq6p',
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
        key: '11ud0',
        text: 'I can provide the multidisciplinary strength and agility to excel as a {job title} position at {company}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 105,
            style: 'fontsize-12',
          },
          {
            offset: 71,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 95,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '4bq6p',
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
        key: 'dru5i',
        text: 'As a / an {current job title} with {number} years of experience in {match your most important responsibilities with those in job description}, I am confident that my skills make me an ideal fit for this position.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 212,
            style: 'fontsize-12',
          },
          {
            offset: 10,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 35,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 67,
            length: 74,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bgjt2',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bm64r',
        text: 'In my current role at {current company} I have {include achievement related to job description}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 95,
            style: 'fontsize-12',
          },
          {
            offset: 22,
            length: 17,
            style: 'BOLD',
          },
          {
            offset: 47,
            length: 48,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'c344s',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cr5dk',
        text: "I am interested in this opportunity to join your team for several reasons. The role would allow me to {state what the role will allow you to do}. Also, I identify with {company}'s core values, I share the belief that {value #1}. {value #2}, and {value #3} are important because {give reason}. Finally, I would like to contribute to an organisation that is leading the charge on {mention one of the company's charitable/sustainable/social initia tives}.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 452,
            style: 'fontsize-12',
          },
          {
            offset: 102,
            length: 41,
            style: 'BOLD',
          },
          {
            offset: 168,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 217,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 229,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 245,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 278,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 378,
            length: 73,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cn8dj',
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
        key: '6plca',
        text: 'My broad experience in {industry} combined with my expertise in {main role/responsi bility in job description} would make a valuable contribution to your organisation.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 167,
            style: 'fontsize-12',
          },
          {
            offset: 23,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 64,
            length: 46,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '12etm',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '5a2tm',
        text: 'Attached is my CV for your consideration.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 41,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fp1j7',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '7h688',
        text: 'Thank you for your time, and I look forward to hearing from you.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 64,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '63p1n',
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
        key: 'disb8',
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
        key: 'fkjgh5',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fk235',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f86gh5',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '37bh',
        text: 'SIGNATURE',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fiah5',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '71hvh',
        text: '{Your Name}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 11,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '818r6',
        text: '{Your Email}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 12,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8fflb',
        text: '{Your Phone Number}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 19,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'e04b4',
        text: '{Your LinkedIn URL}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 19,
            style: 'BOLD',
          },
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

  const CURRENTY_EMPLOYED_1 = {
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

  return { CURRENTY_EMPLOYED_1 };
}
