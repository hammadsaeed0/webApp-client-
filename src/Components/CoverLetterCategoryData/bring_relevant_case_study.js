import React, { useState } from 'react';

export default function Bring_relevant_case_studyCategory() {
  const [NAME_CONTACT_INFO, setNAME_CONTACT_INFO] = useState({
    blocks: [],
    entityMap: {},
  });

  const [DATE, setDATE] = useState({
    blocks: [],
    entityMap: {},
  });

  const [RECIPIENT, setRECIPIENT] = useState({
    blocks: [],
    entityMap: {},
  });

  const [LETTER_HEADING, setLETTER_HEADING] = useState({
    blocks: [],
    entityMap: {},
  });

  const [SALUTATION, setSALUTATION] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Dear Emmy Anlyan,',
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
      {
        key: '3s3na',
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
        key: '2161r',
        text: "I grew up with Google. When I was seven years old, I used to sneak down to my Dad's office at five in the morning to play video games. I still remember opening the browser and seeing the bright, multi-colored letters above the search box for the first time. I've always been interested in the tech space and, while my background has mainly been in the sciences, I'm ready to dive head first into the digital world.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 414,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '4of14',
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
        key: '14pju',
        text: 'I believe I would be a great fit for the Digital Advertising Sales Account Manager role because I have a deep understanding of the businesses that partner with Google and how they define success.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 195,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'uesv',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3dne8',
        text: 'You might notice that there isn\'t much "traditional" digital experience on my resume. That is because, coming from a scientific background, I needed to take a different path. In an effort to gain experience, I created my own agency called OpenWater Analytics. I specialized in using AdWords to generate real estate leads for private communities. I managed the entire sales process from cold outreach, to closing, to servicing the accounts on your platform. Most recently, I helped a community in South Carolina sell every listing on their site (about 15 homes) in less than 6 months. Our cost per lead was half of the competition and we did it all for less than the commission the realtor would have made on a single house (including ad spend).',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 744,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '4sqnl',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'aegdu',
        text: "Understanding how these small businesses worked was critical to my success, and I believe those skills will help Google acquire happier, more successful customers who are inclined to spend. In addition, I've done some research on your team and have come to understand that your largest challenge is around successfully growing smaller accounts at scale. Based on my experience, I've put together a few suggestions below this letter - I'm happy to chat through them in more detail if you'd like.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 494,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'deku2',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '60m0v',
        text: "I wanted to close with a quick story about Google that solidified my choice to apply. My referral, [Name of Referral], works in the education vertical. He services the southeast and many of his accounts are rural. On his last visit down there, in a South Carolina town of 1,500 with no wifi, a teacher asked him if Google could help bring the internet to them. When [Name of Referral] made it back to the office, he emailed Astro Teller asking about the potential for Project Loon to help bring this town in the 21st century. To his surprise, Astro wrote him back within the week mentioning that he'd look into it.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 614,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bhd1o',
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
        key: '464go',
        text: "While things didn't pan out, the fact that director of Google's moonshot project division wrote back an employee about an elementary school in South Carolina blew me away. That is the kind of work I want to be doing.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 216,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'au58s',
        text: "Thank you for taking the time to read my note, I'm incredibly excited to have the opportunity to be considered for this position.",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 129,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '93th0',
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
        key: '334oo',
        text: 'Best regards,',
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
    ],
    entityMap: {},
  });

  const [END, setEND] = useState({
    blocks: [
      {
        key: '93ggsh0',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '93dsa0',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '9ssss',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '4b3lb',
        text: 'Austin Belcak',
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
    ],
    entityMap: {},
  });

  const BRING_RELEVANT_CASE_STUDY = {
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

  return { BRING_RELEVANT_CASE_STUDY };
}
