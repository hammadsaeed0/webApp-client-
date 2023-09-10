import React, { useState } from 'react';

export default function COVERLETTER22DATA() {
  const [name, setName] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'BELLA',
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
            style: 'color-#2E58A6',
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
        key: '81h3h',
        text: 'THOMSON',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 7,
            style: 'color-#000000',
          },
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

  const [position, setPosition] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'CALL CENTER SERVICE MANAGER',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 27,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 27,
            style: 'color-#808080',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [profileDescp, setProfileDescp] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'bella.thomson@apple.com',
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
        data: {
          'text-align': 'right',
        },
      },
      {
        key: '816hk',
        text: 'linkedin.com/in/bella.thomson-service',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 37,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {
          'text-align': 'right',
        },
      },
      {
        key: 'fg084',
        text: '+1.523.711.2009 ',
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
        data: {
          'text-align': 'right',
        },
      },
      {
        key: '4c9f3',
        text: 'Orlando, Florida (Open to Relocation)',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 37,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {
          'text-align': 'right',
        },
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

  const CoverLetter22Data = {
    position,
    setName,
    profileDescp,
    setPosition,
    name,
    setProfileDescp,
    personal_info_descp,
    setPersonal_info_descp,
    enterName,
    setEnterName,
    lorealIpsum,
    setLorealIpsum,
  };

  return { CoverLetter22Data };
}
