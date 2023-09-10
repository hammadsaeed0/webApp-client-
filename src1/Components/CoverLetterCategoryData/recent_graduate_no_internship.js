import React, { useState } from 'react';

export default function Recent_graduate_no_internshipCategory() {
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
        key: 'dln41',
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
        key: 'dkk20',
        text: "{Hiring manager's name}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 23,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 23,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3vd21',
        text: "{Hiring manager's job title)  ",
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
            length: 30,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'chf8e',
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
        key: 'bk6l2',
        text: '{Address}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f1ev8',
        text: "{Hiring manager's email)",
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
        key: 'b6j1v',
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
        key: '3nj50',
        text: 'Re: {Job title you are applying for} Position',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 45,
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
        key: '1dnqj',
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
        key: 'bd3k4',
        text: "Dear Hiring Manager, or Dear {hiring manager's name},",
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
        key: 'afutc',
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
        key: '25ojm',
        text: 'I was excited to learn about your need for a {job title} position at {company} advertised {where ad was published}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 115,
            style: 'fontsize-12',
          },
          {
            offset: 44,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 68,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 90,
            length: 24,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ce70c',
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
        key: '1209v',
        text: 'After successfully completing a {type of degree} in {field/discipline} at {institution}, I am now looking for an exciting opportunity to develop my career in a role such as that of {job title}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 192,
            style: 'fontsize-12',
          },
          {
            offset: 32,
            length: 16,
            style: 'BOLD',
          },
          {
            offset: 52,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 75,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 180,
            length: 12,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6bbd3',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6h235',
        text: 'During my undergraduate years, I developed my {skill #1}, {skill #2} and {skill #3} skills. For my final year dissertation, I was a member of a {number}-person team. I spearheaded {name of task/project}, which aimed to {purpose of project} by using {tools / tech niques / expertise). I also developed effective communication and organisational skills by {task #1) and (task # 2) that contributed to our team receiving a {type of honour / award / recognition}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 458,
            style: 'fontsize-12',
          },
          {
            offset: 46,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 58,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 73,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 144,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 180,
            length: 22,
            style: 'BOLD',
          },
          {
            offset: 219,
            length: 20,
            style: 'BOLD',
          },
          {
            offset: 249,
            length: 33,
            style: 'BOLD',
          },
          {
            offset: 354,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 368,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 420,
            length: 38,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'adujk',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '9d3od',
        text: 'I am excited to see an opportunity to join your team a {company} because the position of {job title} would allow me to contribute to a leading player in the {industry} industry while further developing my skills and experience. Also, I share the same values of {value #1}, {value #2}, and {value #3} as {company}. I believe that giving employees {example of relevant value} is fundamental to the long-term success of a company and its clients. I feel that I have a valuable contribution to make to {company},',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 508,
            style: 'fontsize-12',
          },
          {
            offset: 55,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 89,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 157,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 261,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 273,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 289,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 303,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 346,
            length: 27,
            style: 'BOLD',
          },
          {
            offset: 498,
            length: 10,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bgmp9',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '1v49p',
        text: 'My academic qualifications, results-driven approach, and ability to work independently or as part of a team make me a good fit for the position of {job title} and would enable me to be a productive member of the team at {company}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 230,
            style: 'fontsize-12',
          },
          {
            offset: 148,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 220,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2agor',
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
        key: 'e46pm',
        text: 'I have attached my CV for you to review. I hope to have an opportunity to discuss my other positive attributes with you at the interview.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 137,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fgtlv',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'b7sjq',
        text: 'Thank you for your time reviewing my application.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 49,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1am9l',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '64ilt',
        text: 'I look forward to hearing from you.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 35,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '391ns',
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
        key: 'ai7lc',
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
        key: 'jys4',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'jys8',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'jys1',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bs1bi',
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
        key: '5cron',
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
        key: '14a8g',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ee969',
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
        key: '7r880',
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
        key: '2te1e',
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

  const RECENT_GRADUATE_NO_INTERNSHIP = {
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

  return { RECENT_GRADUATE_NO_INTERNSHIP };
}
