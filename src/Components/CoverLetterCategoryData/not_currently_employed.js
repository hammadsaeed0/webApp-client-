import React, { useState } from 'react';

export default function Not_currenty_employedCategory() {
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
        key: 'ahhoa',
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
        key: 'ah4kk',
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
        key: 'c7k6t',
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
        key: '1ub8j',
        text: '{Company name} ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 15,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 15,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'asnvq',
        text: '{Address} ',
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
        key: '3u6if',
        text: "{Hiring manager's email}",
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
        key: '45e7r',
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
        key: 'a0g58',
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
        key: '8cq4f',
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
        key: '89d17',
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
            offset: 28,
            length: 24,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8cq4ff1',
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
        key: 'fho9m',
        text: 'My name is {your name}, and I am an experienced {industry} professional with a proven track record of success in relevant positions including {position #1}, {position #2), and {position #3},',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 190,
            style: 'fontsize-12',
          },
          {
            offset: 11,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 48,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 142,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 157,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 176,
            length: 13,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8cq4ff2',
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
        key: '79gst',
        text: 'In my previous position as {job title} | {achievement} by {method} that resulted in {out come} and helped {company} achieve its objectives.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 139,
            style: 'fontsize-12',
          },
          {
            offset: 28,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 41,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 58,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 84,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 106,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2fa3m',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '8vhi',
        text: "I am currently looking for my next career challenge and seeing your recent {mention a recent project(s) by company}, and {company}'s plans {insert plan(s) from press release/social media}, I decided to reach out to you. Are you considering hiring a {job title} for your team? I would welcome the opportunity to discuss how I could add value to {company} with my {skill #1}, {skill #2} and {skill #3}.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 400,
            style: 'fontsize-12',
          },
          {
            offset: 75,
            length: 40,
            style: 'BOLD',
          },
          {
            offset: 121,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 139,
            length: 48,
            style: 'BOLD',
          },
          {
            offset: 249,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 344,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 362,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 374,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 390,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ecf7c',
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
        key: '7nqvi',
        text: 'I have attached my CV for your consideration. Many thanks for your time.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 72,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1cu5i',
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
        key: '5f25s',
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
        key: '11jdj',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '13jdj',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '15jdj',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'c1im9',
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
        key: '1at5j',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'l96o',
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
        key: '9h6q6',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '70i6s',
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
        key: '26eps',
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
        key: '15fv2',
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

  const NOT_CURRENTY_EMPLOYED = {
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

  return { NOT_CURRENTY_EMPLOYED };
}
