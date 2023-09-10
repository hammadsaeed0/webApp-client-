import React, { useState } from 'react';

export default function COVERLETTER9DATA() {
  // Header

  const [name, setName] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'NELSON BRIGGS',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 13,
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
        text: 'Director, IT Strategic Data Management',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 38,
            style: 'fontsize-16',
          },
          {
            offset: 0,
            length: 38,
            style: 'color-#1D1D1B',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });

  const [main_descp, setMain_descp] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Resolve issues & meet challenges with exceptional problem solving, deftly balanced with a focus on the bottom-line impact',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 121,
            style: 'fontsize-14',
          },
          {
            offset: 0,
            length: 121,
            style: 'ITALIC',
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
        text: 'Personal Info',
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
        text: 'New York, NY',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 12,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {
          'text-align': 'right',
        },
      },
      {
        key: 'an9gf',
        text: '1-(277)-009-5609 | ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 19,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {
          'text-align': 'right',
        },
      },
      {
        key: '64t7q',
        text: 'nelson@briggs.com ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 18,
            style: 'fontsize-12',
          },
        ],
        entityRanges: [],
        data: {
          'text-align': 'right',
        },
      },
      {
        key: 'eqbqu',
        text: 'www.linkedin.com/in/nelson',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 26,
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

  const CoverLetter9Data = {
    position,
    setName,
    name,
    setPosition,
    main_descp,
    setMain_descp,
    personal_info,
    setPersonal_info,
    personal_info_descp,
    setPersonal_info_descp,
    enterName,
    setEnterName,
    lorealIpsum,
    setLorealIpsum,
  };

  return { CoverLetter9Data };
}
