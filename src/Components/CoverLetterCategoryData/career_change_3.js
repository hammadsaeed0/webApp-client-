import React, { useState } from 'react';

export default function Career_change_3Category() {
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
        key: 'cp5l1',
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
        key: '1ar2l',
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
        key: '38ppp',
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
        key: '83p8v',
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
        key: 'borml',
        text: '{Address)',
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
        key: 'ea6a1',
        text: "(Hiring manager's email)",
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
        key: 'edsci',
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
        key: '68v7j',
        text: 'Re: {Job title you are applying for} Role',
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
        key: '2arg9',
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
        key: 'khb4',
        text: 'Dear Hiring Manager, or Dear {name of hiring manager},',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 54,
            style: 'fontsize-12',
          },
          {
            offset: 29,
            length: 24,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '5gs1i',
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
        key: 'd93fj',
        text: 'I am applying for the {job title} position at {company}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 56,
            style: 'fontsize-12',
          },
          {
            offset: 22,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 47,
            length: 8,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'aj8ev',
        text: 'My name is {your name}, and I am an experienced {industry or sector} professional with a proven track record of success in relevant positions including {position #1}, {position#2}, and {position #3}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 199,
            style: 'fontsize-12',
          },
          {
            offset: 11,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 48,
            length: 20,
            style: 'BOLD',
          },
          {
            offset: 152,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 167,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 185,
            length: 13,
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
        key: '9d90l',
        text: 'I am reaching out because although I have been very happy with my current job, it is time for me to make a change. I am reliable, innovative, and experienced. My {number} years in the {type of industry} industry have given me transferable skills that are valuable in almost any company or industry. My people skills are exceptional - just ask anyone I have worked with over the past {number} years. And if you need someone to multitask on tight deadlines, look no further.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 472,
            style: 'fontsize-12',
          },
          {
            offset: 162,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 184,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 383,
            length: 8,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bnfi4',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2m76c',
        text: 'My extensive experience includes {responsibility #1},{responsibility #2}, and (responsibility #3) which make me an ideal candidate for the position of {job title}, which is why I now wish to transition into a {type of role} within your team',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 240,
            style: 'fontsize-12',
          },
          {
            offset: 33,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 53,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 78,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 151,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 209,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '60b0f',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fgfej',
        text: 'Although successful in my {type of career}, I have realised the aspects of my work I am most passionate about and rewarded by are in (type of role)-related functions. My enthusiasm for {main function of the job title} combined with my {ability #1}, {ability #2}, and {ability #3} will add value to your current team.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 316,
            style: 'fontsize-12',
          },
          {
            offset: 26,
            length: 16,
            style: 'BOLD',
          },
          {
            offset: 185,
            length: 32,
            style: 'BOLD',
          },
          {
            offset: 235,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 249,
            length: 12,
            style: 'BOLD',
          },
          {
            offset: 267,
            length: 12,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6gppk',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ecn9a',
        text: 'Here is how my skills fit the specific needs outlined in the job description:',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 77,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'd7vr2',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3a40l',
        text: '(insert transferable skill related to the job requirements): I have been able to success fully {example of skill} when {time when you used this skill} by {how you used the skill} so that {example of quantifiable result/outcome of using skill}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 243,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 59,
            style: 'BOLD',
          },
          {
            offset: 95,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 119,
            length: 31,
            style: 'BOLD',
          },
          {
            offset: 154,
            length: 24,
            style: 'BOLD',
          },
          {
            offset: 187,
            length: 55,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bpq0s',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '4l289',
        text: '{insert transferable skill related to the job requirements}: My previous position as (job title} required exceptional {skill} to enable me to successfully manage and motivate {type of employees or teams} to achieve {a goal / an objective}, which resulted in {quantifia ble result / outcome} for {previous company}',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 313,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 59,
            style: 'BOLD',
          },
          {
            offset: 118,
            length: 7,
            style: 'BOLD',
          },
          {
            offset: 175,
            length: 28,
            style: 'BOLD',
          },
          {
            offset: 215,
            length: 23,
            style: 'BOLD',
          },
          {
            offset: 258,
            length: 32,
            style: 'BOLD',
          },
          {
            offset: 296,
            length: 17,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fipub',
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
        key: '3eq90',
        text: 'I am looking for a {type of role} role at a company in the {type of industry} industry, which is why I feel I am a perfect fit for the position of {job title} at {company}. My exten sive background in {previous area/industry} would be beneficial to your team by provid ing a distinct approach to dealing with {skill-related area}. I am excited about this oppor tunity and ready to meet the challenge of leadership responsibilities at {company}.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 444,
            style: 'fontsize-12',
          },
          {
            offset: 19,
            length: 14,
            style: 'BOLD',
          },
          {
            offset: 59,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 147,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 162,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 201,
            length: 24,
            style: 'BOLD',
          },
          {
            offset: 309,
            length: 20,
            style: 'BOLD',
          },
          {
            offset: 434,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'vpc9',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2crmd',
        text: 'Please consider my application. I have attached my CV and look forward to hearing from you soon. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 97,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6j2oj',
        text: 'Thank you for your time',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
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
        key: '4jng9',
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
        key: '6vctu',
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
    ],
    entityMap: {},
  });

  const [END, setEND] = useState({
    blocks: [
      {
        key: 'avn2g',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'wffsg',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f8msn',
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
        key: 'rrkg',
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
        key: '2nhq3',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f8k0n',
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
        key: '65nc1',
        text: '{Your Phone Number}',
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
      {
        key: '2kd91',
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

  const CAREER_CHANGE_3 = {
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

  return { CAREER_CHANGE_3 };
}
