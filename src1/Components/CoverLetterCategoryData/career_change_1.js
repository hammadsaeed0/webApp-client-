import React, { useState } from 'react';

export default function Career_change_1Category() {
  const [NAME_CONTACT_INFO, setNAME_CONTACT_INFO] = useState({
    blocks: [],
    entityMap: {},
  });

  const [DATE, setDATE] = useState({
    blocks: [
      {
        key: 'ecf5i',
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
    ],
    entityMap: {},
  });

  const [RECIPIENT, setRECIPIENT] = useState({
    blocks: [
      {
        key: '51hen',
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
        key: 'fd6i',
        text: "{Hiring manager's job title}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 28,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 28,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8m29c',
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
        key: '9ee5n',
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
        key: '755vb',
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
        key: 'euo45',
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
        key: 'f3j2i',
        text: 'Re: {Name of job title you are applying for}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 44,
            style: 'fontsize-12',
          },
          {
            offset: 4,
            length: 40,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f0f0p',
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
        key: '83psi',
        text: "Dear Mr/Mrs. {Hiring manager's surname},",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 40,
            style: 'fontsize-12',
          },
          {
            offset: 13,
            length: 26,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '55gd0',
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
        key: '2bd5b',
        text: 'I am writing to apply for the {Job Title} position at {Company Name}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 69,
            style: 'fontsize-12',
          },
          {
            offset: 30,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 54,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fipm3',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '70tr9',
        text: "I've spent the past {Number of years' experience} years {List 2-3 of your main duties/tasks. that closely match the top 2-3 duties/requirements on the job description}, I now wish to transition into a {Mention job title/department} role within your team.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 254,
            style: 'fontsize-12',
          },
          {
            offset: 20,
            length: 29,
            style: 'BOLD',
          },
          {
            offset: 56,
            length: 111,
            style: 'BOLD',
          },
          {
            offset: 201,
            length: 30,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [CORE_CONTENT, setCORE_CONTENT] = useState({
    blocks: [
      {
        key: '18d52',
        text: "Although successful in my {Industry you've worked in} career, I have realised the aspects of my work I find most rewarding are all in {Main function of the job you are applying for}-related functions. I believe my enthusiasm for {Main function of the job you are applying for} and ability to learn on the fly, would provide value for your team by adding a unique perspective.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 375,
            style: 'fontsize-12',
          },
          {
            offset: 26,
            length: 28,
            style: 'BOLD',
          },
          {
            offset: 134,
            length: 47,
            style: 'BOLD',
          },
          {
            offset: 229,
            length: 48,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '94hhf',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'qtge',
        text: "I've outlined how my skills fit with your specific needs:",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 57,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'd5v8m',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'crql',
        text: "{List transferable skill-related to the job requirements}: {Explain in the first person how you demonstrated this skill and include a positive outcome/result/achievement. Where possible - include numerical data-numbers/figures/%'s)}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 232,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 232,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '74ram',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '9rsc1',
        text: "{List transferable skill-related to the job requirements}: {Explain in the first person how you demonstrated this skill and include a positive outcome/result/achievement. Where possible - include numerical data-numbers/figures/%'s)} ",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 233,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 233,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2dn7n',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6eg8p',
        text: "{List transferable skill-related to the job requirements}: {Explain in the first person how you demonstrated this skill and include a positive outcome/result/achievement. Where possible - include numerical data-numbers/figures/%'s)}",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 232,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 232,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8vsoe',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '5fmle',
        text: 'I was also thrilled to see an opportunity to join your team for several reasons.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 80,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6g9lc',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'e25n9',
        text: 'Firstly, the role would allow me to continue pursuing my passion. {Reference what the role will allow you to do something you enjoy doing}. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 140,
            style: 'fontsize-12',
          },
          {
            offset: 66,
            length: 72,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'a1ou0',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3j0hl',
        text: "Secondly, I personally identify with {Company Name}'s core values. I share the belief that <Men tion a value or values that you share with the company - and explain why the value is important to you.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 199,
            style: 'fontsize-12',
          },
          {
            offset: 37,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'r2dm',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6q59e',
        text: "Finally, I would be honoured to contribute to an organisation that's leading the charge on {Men tion what charitable/sustainable/social initiatives the company is working on or have done in the past}.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 200,
            style: 'fontsize-12',
          },
          {
            offset: 91,
            length: 108,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1tcdh',
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
        key: 'fv64n',
        text: 'I feel that my broad experience in {Mention 1-2 transferable skills related to the job requirements} combined with my expert ability to {Reference an important responsibility of the job here that you can do}, would make a valuable contribution to your organisation.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 265,
            style: 'fontsize-12',
          },
          {
            offset: 35,
            length: 66,
            style: 'BOLD',
          },
          {
            offset: 136,
            length: 71,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '134ve',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '4e05o',
        text: 'I have attached my CV for your kind consideration. Thank you for your time in reviewing my application.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 103,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6khpg',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '7ir1j',
        text: 'I look forward to hearing from you at your earliest convenience. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 65,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [CONCLUSION, setCONCLUSION] = useState({
    blocks: [
      {
        key: '5eoki',
        text: 'Sincerely,',
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
        key: 'dc3dg',
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

  const [END, setEND] = useState({
    blocks: [
      {
        key: '2kinx5',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6mvgq',
        text: '{Your First/Last Name}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 22,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 22,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2a7pv',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'a9qqq',
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
        key: '3q9uh',
        text: '{Your Phone Number)}',
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
        key: '52ct6',
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

  const CAREER_CHANGE_1 = {
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

  return { CAREER_CHANGE_1 };
}
