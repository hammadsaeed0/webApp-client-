import React, { useState } from 'react';

export default function COVERLETTER20DATA() {
  const [name, setName] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'ANGELO FERNANDO',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 15,
            style: 'BOLD',
          },
          {
            offset: 0,
            length: 15,
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
        text: 'GLOBAL OPERATION MANAGER',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 24,
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
        text: 'Phone',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 5,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 5,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6h964',
        text: '+44-771-789-0033',
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
        text: 'Email',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 5,
            style: 'fontsize-12',
          },
          {
            offset: 0,
            length: 5,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6h964',
        text: 'afernando@gmail.com',
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
        data: {},
      },
    ],
    entityMap: {},
  });

  const [address, setAddress] = useState({
    blocks: [
      {
        key: '637gr',
        text: 'Address',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'fontsize-12',
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
      {
        key: '6h964',
        text: 'Wilt Drive, London',
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

  const CoverLetter20Data = {
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
    personal_info_descp,
    setPersonal_info_descp,
    enterName,
    setEnterName,
    lorealIpsum,
    setLorealIpsum,
  };

  return { CoverLetter20Data };
}
