import React, { useState } from 'react';

export default function COVERLETTER17DATA() {
  const [name, setName] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'SUSAN',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 5,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 5,
            style: 'fontsize-30',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '1r2cu',
        text: 'MURDOC',
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
        key: '637gr',
        text: 'DESIGNER',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: 'fontsize-14',
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
        text: '(128-369-2912)',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 14,
            style: 'fontsize-14',
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
        text: 'susanmurdoc@gmail.com',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 21,
            style: 'fontsize-14',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [address, setAddress] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Sunset Drive Boston, MA 03091',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 29,
            style: 'fontsize-14',
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

  const CoverLetter17Data = {
    phone,
    setName,
    email,
    setPosition,
    position,
    setPhone,
    address,
    setEmail,
    name,
    setAddress,
    personal_info,
    setPersonal_info,
    personal_info_descp,
    setPersonal_info_descp,
    enterName,
    setEnterName,
    lorealIpsum,
    setLorealIpsum,
  };

  return { CoverLetter17Data };
}
