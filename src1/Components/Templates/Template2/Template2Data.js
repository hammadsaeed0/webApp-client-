import { useState } from 'react';

// const [first, setfirst] = useState(second)

export default function Template2Data() {
  const [name, setName] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'MATT MORRISON',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 13,
            style: 'ITALIC',
          },
          {
            offset: 0,
            length: 13,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 13,
            style: 'fontsize-30',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });
  const [position, setPosition] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'SALES TALENT DEVELOPMENT EXECUTIVE',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 34,
            style: 'fontsize-16',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [profile, setProfile] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'PROFILE',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'fontsize-18',
          },
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [profile_description, setProfile_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'WHAT TOPLINE GAINS IF BECOME YOUR NEWEST SALES TALENT DEVELOPMENT EXECUTIVE. ',
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
        key: 'f3320',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bbino',
        text: 'Leadership that leads other to levels even they didn’t think possible.',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 70,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'e38q2',
        text: 'Dedication to account abilities our teams see as opportunities-not burdens. ',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 76,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cpc1q',
        text: 'Business acumen that optimizes ROI on every resource, even intangi bles',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 71,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f6sh5',
        text: 'Skill to exploit markets others miss and do it faster than our competition',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 74,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [contact, setContact] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'CONTACT',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'fontsize-18',
          },
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [contact_description, setContact_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'ADDRESS ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 8,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'amrmj',
        text: 'Newly Avenue, Memphis, TN 30913 ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 32,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cavds',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cf035',
        text: 'PHONE ',
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
        key: 'aq8r5',
        text: '+1.509.389.8912 ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 16,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '8keun',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '8qjvq',
        text: 'EMAIL ',
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
        key: '297fd',
        text: 'mattmorrison@gmail.com ',
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
        key: '8cnju',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3elde',
        text: 'WEBSITE ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 8,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'a6sod',
        text: 'www.mattmorrison.com',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 20,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [experience, setExperience] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'EXPERIENCE',
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
            style: 'fontsize-24',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [exp_1_heading, setExp_1_heading] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'TOP-COLA BOTTLING, BIRMINGHAM, ALABAMA',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 38,
            style: 'fontsize-14',
          },
          {
            offset: 0,
            length: 38,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'dvtgm',
        text: 'Sales Development Manager ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 25,
            style: 'fontsize-14',
          },
          {
            offset: 0,
            length: 26,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [exp_1_tenure, setExp_1_tenure] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: '2016 - Present',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          'text-align': 'center',
        },
      },
    ],
    entityMap: {},
  });

  const [exp_1_description, setExp_1_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Expanded market share and increased sales 10% every year for 3 years. Conflicting sales approaches by integrating the best features of each. Best sales in years.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3ftvf',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '55us6',
        text: 'Outsold competitor to win dominance in market they held for 20 years. Built partnerships and expanded the channel to offset costs others thought prohibitive. Profits up.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [exp_2_heading, setExp_2_heading] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'LOGICAL CHOICE TECHNOLOGIES, CHATTANOOGA, TN',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 44,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 44,
            style: 'fontsize-14',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '14e8f',
        text: 'Regional Sales Manager Representative',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 37,
            style: 'fontsize-14',
          },
          {
            offset: 0,
            length: 37,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [exp_2_tenure, setExp_2_tenure] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: '2016 - 2018',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          'text-align': 'center',
        },
      },
    ],
    entityMap: {},
  });

  const [exp_2_description, setExp_2_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Landed $13M sale-the largest ever at the time. Helped stakeholders resolve long- standing differences to get precisely the product they needed. Met every tough deadline.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [education, setEducation] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'EDUCATION',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 9,
            style: 'fontsize-24',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [edu_1_heading, setEdu_1_heading] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'MASTER OF MARKETING',
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
            style: 'fontsize-14',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [edu_1_tenure, setEdu_1_tenure] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: '2013 - 2014',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          'text-align': 'center',
        },
      },
    ],
    entityMap: {},
  });

  const [edu_1_description, setEdu_1_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Perdido State University, Perdidio All Earned While Working 28+ Hours Per Week.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [edu_2_heading, setEdu_2_heading] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'BACHELOR OF MARKETING COMMUNICATION',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 35,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 35,
            style: 'fontsize-14',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [edu_2_tenure, setEdu_2_tenure] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: '2010 - 2013',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          'text-align': 'center',
        },
      },
    ],
    entityMap: {},
  });

  const [edu_2_description, setEdu_2_description] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'University of West Alabama, Demoplis, AL Full scholarship. Graduated with Honors.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skills, setSkills] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'SKILLS',
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
            style: 'fontsize-18',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_1, setSkill_1] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Account Management',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_2, setSkill_2] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Contract Negotiations',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_3, setSkill_3] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Customer Service',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_4, setSkill_4] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Profit Optimisation',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_5, setSkill_5] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Promotion Planning',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [skill_6, setSkill_6] = useState({
    blocks: [
      {
        key: 'dd6ea',
        text: 'Rapid Growth & Expansion',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [heading, setHeading] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'Heading',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'fontsize-30',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [enterName, setEnterName] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'Heading',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [lorealIpsum, setLorealIpsum] = useState({
    blocks: [
      {
        key: '4tpf',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat. Duis aute irure dolor in reprehenderit in voluptate \nvelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \noccaecat cupidatat non proident, sunt in culpa qui officia deserunt \nmollit anim id est laborum. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '9pv7n',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat. Duis aute irure dolor in reprehenderit in voluptate \nvelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \noccaecat cupidatat non proident, sunt in culpa qui officia deserunt \nmollit anim id est laborum. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [new_page_enterName, setNew_page_enterName] = useState({
    blocks: [
      {
        key: 'eegg9',
        text: 'New Heading',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [new_page_lorealIpsum, setNew_page_lorealIpsum] = useState({
    blocks: [
      {
        key: '4tpf',
        text: 'New Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '9pv7n',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const template2Data = {
    new_page_enterName,
    setName,
    new_page_lorealIpsum,
    setPosition,
    heading,
    setProfile,
    name,
    setProfile_description,
    position,
    setContact,
    profile,
    setContact_description,
    profile_description,
    setExperience,
    contact,
    setExp_1_heading,
    contact_description,
    setExp_1_tenure,
    experience,
    setExp_1_description,
    exp_1_heading,
    setExp_2_heading,
    exp_1_tenure,
    setExp_2_tenure,
    exp_1_description,
    setExp_2_description,
    exp_2_heading,
    setEducation,
    exp_2_tenure,
    setEdu_1_heading,
    exp_2_description,
    setEdu_1_tenure,
    education,
    setEdu_1_description,
    edu_1_heading,
    setEdu_2_heading,
    edu_1_tenure,
    setEdu_2_tenure,
    edu_1_description,
    setEdu_2_description,
    edu_2_heading,
    setSkills,
    edu_2_tenure,
    setSkill_1,
    edu_2_description,
    setSkill_2,
    skills,
    setSkill_3,
    skill_1,
    setSkill_4,
    skill_2,
    setSkill_5,
    skill_3,
    setSkill_6,
    skill_4,
    setHeading,
    skill_5,
    setEnterName,
    skill_6,
    setLorealIpsum,
    enterName,
    setNew_page_enterName,
    lorealIpsum,
    setNew_page_lorealIpsum,
  };

  return { template2Data };
}
