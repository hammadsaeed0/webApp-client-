import React, { useState } from 'react';

export default function COVERLETTER16DATA() {
  const [name, setName] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'JEREMY',
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
            style: 'fontsize-48',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'e030t',
        text: 'AYLESBURY',
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
            style: 'fontsize-48',
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
        key: '637gr',
        text: 'MANAGER',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'fontsize-18',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [phone, setPhone] = useState({
    blocks: [
      {
        key: '637gr',
        text: '+1(212) 820-3746',
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
    ],
    entityMap: {},
  });

  const [email, setEmail] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'jeremyalesbury@gmail.com | www.linkedin/in/jeremyat',
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
    ],
    entityMap: {},
  });

  const [personal_info, setPersonal_info] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'CONTACT',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 13,
            style: 'fontsize-16',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [personal_info_descp, setPersonal_info_descp] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Greek Road, \nLondon +44-765-110-9800 \njessejones@gmail.com ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 6,
            style: 'fontsize-12',
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
        text: 'Enter Name',
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

  const CoverLetter16Data = {
    phone,
    setName,
    email,
    setPosition,
    position,
    setPhone,
    name,
    setEmail,
    personal_info,
    setPersonal_info,
    personal_info_descp,
    setPersonal_info_descp,
    enterName,
    setEnterName,
    lorealIpsum,
    setLorealIpsum,
  };

  return { CoverLetter16Data };
}
