import React, { useState } from 'react';

export default function Career_change_2Category() {
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
            style: 'fontsize-11',
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
        key: '66adn',
        text: "{Hiring manager's name} ",
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '26a7n',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ft806',
        text: '(Company name)',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bp214',
        text: '{Address) ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 10,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f7l5e',
        text: "{Hiring manager's email)",
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'dbs2i',
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
        key: '5gcre',
        text: 'Re: (Job title given in job description) Vacancy',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 48,
            style: 'fontsize-11',
          },
          {
            offset: 4,
            length: 37,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cgkdk',
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
        key: 'c4eeo',
        text: 'Dear Hiring Manager, or Dear (name of hiring manager),',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 54,
            style: 'fontsize-11',
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
        key: '8vepq',
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
        key: 'b1fg4',
        text: 'I am intrigued by your requirements for the (job title) because they match the significant accomplishments of my career at (company)',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 132,
            style: 'fontsize-11',
          },
          {
            offset: 44,
            length: 11,
            style: 'BOLD',
          },
          {
            offset: 123,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '32rgc',
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
        key: '4p7hu',
        text: 'During the past (number) years, I have been (doing activity #1) and (doing activity #2) in {sector} while organising and planning (type of tasks or projects). I now wish to tran sition into a (type of role) within your team.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 224,
            style: 'fontsize-11',
          },
          {
            offset: 16,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 43,
            length: 20,
            style: 'BOLD',
          },
          {
            offset: 68,
            length: 19,
            style: 'BOLD',
          },
          {
            offset: 90,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 130,
            length: 27,
            style: 'BOLD',
          },
          {
            offset: 192,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'it14',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'diqd9',
        text: 'Although successful in my previous career as a/an (previous role), I have realised the most rewarding aspects of my work are all in (type of role)-related functions. I believe my enthusiasm for (type of role) and ability to learn quickly would provide value for your team by adding a unique perspective.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 303,
            style: 'fontsize-11',
          },
          {
            offset: 50,
            length: 15,
            style: 'BOLD',
          },
          {
            offset: 132,
            length: 14,
            style: 'BOLD',
          },
          {
            offset: 194,
            length: 14,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '82jkk',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ev41b',
        text: 'Here is why I believe my skills fit your specific needs:',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 56,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'biiun',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6lmeb',
        text: 'Leader and Multi-Tasker: I have a strong ability to manage various responsibilities simulta neously. While at (company), I regularly (activity #1) and (activity #2} to achieve (re sults) while ensuring (type of customer/client) received optimal attention and (type of service), I soon became the "go-to" person for any employees who had questions or faced issues.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 363,
            style: 'fontsize-11',
          },
          {
            offset: 110,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 132,
            length: 14,
            style: 'BOLD',
          },
          {
            offset: 151,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 176,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 202,
            length: 26,
            style: 'BOLD',
          },
          {
            offset: 259,
            length: 17,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '67kcc',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '63327ffda',
        text: 'Stellar Communicator and Organizer: I have exceptional communication skills across all levels of management. I was the first point of contact for all queries relating to (subject or issue) in my previous role and was responsible organising (related solution) to ensure (positive outcome/result) for (type of customer/client)',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 324,
            style: 'fontsize-11',
          },
          {
            offset: 170,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 240,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 269,
            length: 24,
            style: 'BOLD',
          },
          {
            offset: 299,
            length: 25,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'brp33',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '94v1o',
        text: 'Multi-Faceted and Adaptable: I am a dedicated and hardworking professional with the ability to think on my feet and solve problems. I previously led a (type of project) to (pur pose of project) and was responsible for (responsibility #1) and (responsibility #2).',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 262,
            style: 'fontsize-11',
          },
          {
            offset: 151,
            length: 17,
            style: 'BOLD',
          },
          {
            offset: 172,
            length: 21,
            style: 'BOLD',
          },
          {
            offset: 218,
            length: 20,
            style: 'BOLD',
          },
          {
            offset: 241,
            length: 20,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6a4hi',
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
        key: '6uf1h',
        text: 'I feel that my broad professional experience in (type of industry) combined with my expert ability to (skill #1) and (skill #2) would make a valuable contribution to the team at {company)',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 187,
            style: 'fontsize-11',
          },
          {
            offset: 48,
            length: 18,
            style: 'BOLD',
          },
          {
            offset: 102,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 117,
            length: 10,
            style: 'BOLD',
          },
          {
            offset: 178,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '386uq',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f1hsc',
        text: 'Please find my CV attached for your review. I would welcome the opportunity to discuss this opportunity further with you and answer any questions you may have.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 159,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'i07j',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '73klv',
        text: 'Thank you for considering my application.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 41,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '39dd4',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '1dgim',
        text: 'I look forward to hearing from you.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 35,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '7doun',
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
        key: '247n0',
        text: 'Sincerely,',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'fontsize-11',
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
        key: '2lase',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '2kudve',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '247n0',
        text: 'SIGNATURE',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1it99',
        text: '{your name}',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '247ie',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '4p3pd',
        text: '{Your Email)',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ab58c',
        text: '(Your Phone Number)',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'b7n34',
        text: '(Your Linkedin URL)',
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
            style: 'fontsize-11',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const CAREER_CHANGE_2 = {
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

  return { CAREER_CHANGE_2 };
}
