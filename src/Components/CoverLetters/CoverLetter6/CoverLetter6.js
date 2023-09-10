import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';

import { CoverLetterProtipData } from '../../ProTip/CoverLetterProTipData';
import CoverLetterProtip from '../../ProTip/CoverLetterProtip';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));
// prettier-ignore
export default function CoverLetter6({ showProtip, readOnly, chosenCategory, sidePanelTextColor, sidePanelBgColor, mainPanelBgColor, page, rightMainRef, setDataUpdatableLeft, dataUpdatableLeft, dataUpdatableRight, setDataUpdatableRight, docummentMargin, documentHeadingTextStyle, documentBodyTextStyle, documentBodyTextSize, headingTextStyleConditions, bodyTextStyleConditions, headingTextSizeConditions, bodyTextSizeConditions, }) {
    
  const [ , setTemp] = useState();
  const [ , setTemp2] = useState();
  // // console.log(page)

  function addSection(arr, section) {
    arr.push(section);
  }

  function array_copy(arr, index) {
    arr.splice(index + 1, 0, arr[index]);
    return arr;
  }

  function arrayMove(arr, fromIndex, toIndex, position) {
    var element = arr[fromIndex];
    if (position === 'lastElement') {
      arr[fromIndex].firstPage = false;
      arr[fromIndex].secondPage = true;
      arr[toIndex].firstPage = true;
      arr[toIndex].secondPage = false;
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      // setDataUpdatableRight(arr)
      // console.log(arr[fromIndex], fromIndex);
      // console.log(arr[toIndex], toIndex);
    } else if (position === 'firstElement') {
      arr[fromIndex].firstPage = true;
      arr[fromIndex].secondPage = false;
      arr[toIndex].firstPage = false;
      arr[toIndex].secondPage = true;
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      // setDataUpdatableRight(arr)
      // console.log(arr[fromIndex], fromIndex);
      // console.log(arr[toIndex], toIndex);
    } else {
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }

    return arr;
  }

  const delete_Modal = (arr, index, side) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <div>
              <h1>Are you sure?</h1>
              <p>You want to delete this this section? You can't undo this</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  // // console.log(data)
                  // data.ref.current.style.display = 'none'
                  if (index > -1) {
                    arr.splice(index, 1);
                    if (side === 'right') {
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                      dataOnRight();
                    } else if (side === 'left') {
                      setDataUpdatableLeft(arr);
                      dataOnLeft();
                    }
                    // dataOnRight()
                    // dataOnLeft()
                    setTemp(index + 1);
                    // // console.log(arr,index)
                  }
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const delete_subsection_Modal = (arr, index, side) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <div>
              <h1>Are you sure?</h1>
              <p>You want to delete this this section? You can't undo this</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  // console.log(arr[index]);
                  // data.ref.current.style.display = 'none'
                  if (index > -1) {
                    arr.splice(index, 1);
                    // dataOnRight();
                    // dataOnLeft();
                    if (side === 'right') {
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                    } else if (side === 'left') {
                      setDataUpdatableLeft(arr);
                    }
                    // dataOnRight()
                    // dataOnLeft()
                    setTemp(index + 1);
                    // // console.log(arr,index)
                  }
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  // // console.log(dataUpdatableRight.filter(e => e.firstPage === false).map(e => e.firstPage))
  // // console.log(dataUpdatableRight.filter(e => page === 1 ? e.firstPage === true : page === 2 ? e.firstPage === false : page === 3 ? e.thirdPage === true : page === 4 ? e.thirdPage === false : null).map(e => e.firstPage ))
  const [filteredArray, setFilteredArray] = useState(
    dataUpdatableRight.filter((e) =>
      page === 1
        ? e.firstPage === true
        : page === 2
        ? e.secondPage === true
        : page === 3
        ? e.thirdPage === true
        : page === 4
        ? e.thirdPage === false
        : null
    )
  );
  // const filteredArray = dataUpdatableRight.filter(e => page === 1 ? e.firstPage === true : page === 2 ? e.secondPage === true : page === 3 ? e.thirdPage === true : page === 4 ? e.thirdPage === false : null)
  // // console.log(filteredArray)

  // // console.log('CoverLetter1', chosenCategory);

  function dataOnRight() {
    return dataUpdatableRight
      .filter((e) =>
        page === 1
          ? e.firstPage === true
          : page === 2
          ? e.secondPage === true
          : page === 3
          ? e.thirdPage === true
          : page === 4
          ? e.thirdPage === false
          : null
      )
      .map((data, index) => (
        // filteredArray.map((data, index) => (
        <>
          {
            <div key={data.key} ref={data.ref} className={data.class}>
              {/* <div className="blankTemplate_header section">
                        <BuilderEditor readOnly={readOnly} content = {main_header} />
                    </div> */}
              <div className='outerIconWrapper'>
                <span
                  // className={`${index === 0 ? 'displayNone' : null}`}
                  title='Move up'
                  onClick={(e) => {
                    const fromIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const toIndex = fromIndex - 1;
                    if (index === 0 && page !== 0) {
                      // // console.log('here')
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'firstElement'
                      );
                      setDataUpdatableRight(arr);
                    } else {
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'null'
                      );
                      setDataUpdatableRight(arr);
                    }
                    dataOnRight();
                    setTemp2(index + 1);
                    // // console.log(dataUpdatableRight)
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
                  </svg>
                </span>
                <span
                  title='Move Down'
                  className={`${
                    index >= dataUpdatableRight.length - 1
                      ? 'displayNone'
                      : null
                  }`}
                  onClick={(e) => {
                    const fromIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const toIndex = fromIndex + 1;
                    if (filteredArray.length - 1 === index) {
                      // // console.log('here')
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'lastElement'
                      );
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                    } else {
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'null'
                      );
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                    }
                    dataOnRight();
                    setTemp2(index + 1);
                    // // console.log(dataUpdatableRight)
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                  </svg>
                </span>
              </div>
              <div className='copyDelIconWrapper'>
                {/* Duplicate Section */}
                <span
                  title='Duplicate Section'
                  onClick={(e) => {
                    const findIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const arr = array_copy(dataUpdatableRight, findIndex);
                    setDataUpdatableRight(arr);
                    setFilteredArray(arr);
                    dataOnRight();
                    setTemp(index + 1);
                    // // console.log(arr[findIndex])
                  }}
                >
                  <svg
                    style={{ maxWidth: '18px' }}
                    version='1.1'
                    className='h-6 w-6'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    x='0px'
                    y='0px'
                    viewBox='0 0 64 64'
                    enable-background='new 0 0 64 64'
                    xmlSpace='preserve'
                  >
                    <g id='Text-files'>
                      <path
                        d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                    C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                    c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                    h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                    C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                    c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                    c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                    c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                    c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                    h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                      />
                      <path
                        d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                    c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                    C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                      />
                      <path
                        d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                    c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                    C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                      />
                      <path
                        d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                    S39.16465,29.4603004,38.6031494,29.4603004z'
                      />
                      <path
                        d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                    S29.0059509,37.5872993,28.4444485,37.5872993z'
                      />
                    </g>
                  </svg>
                </span>

                {/* Delete Section */}
                <span
                  title='Delete Section'
                  onClick={(e) => {
                    const findIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    delete_Modal(dataUpdatableRight, findIndex, 'right');
                    dataOnRight();
                    // // console.log(data, data.key);
                    // // console.log(dataUpdatableRight.findIndex(e => e.key === data.key))
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#fff'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </span>
              </div>
              <div className='section'>
                {data.heading === 'none' ? null : (
                  <div
                    name='main_section_heading'
                    id={data.id}
                    rows='1'
                    placeholder='Enter'
                    style={{ color: sidePanelTextColor }}
                    className={`section_heading  
                        ${headingTextStyleConditions}

                            ${headingTextSizeConditions}
                            
                        `}
                  >
                    {/* {index} */}
                    <BuilderEditor readOnly={readOnly} key={index + 1} content={data.heading} setEditorData={data.setHeading} />
                  </div>
                )}
                {data.description === 'none' ? null : data.subSection ? (
                  data.description.map((descp, index) => (
                    <div className='template_1_subSection'>
                      <div className='subsectionCopyDelIconWrapper'>
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            delete_subsection_Modal(
                              data.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#fff'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            const arr = array_copy(data.description, findIndex);
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        className={`description
                                    ${bodyTextStyleConditions}

                                    ${bodyTextSizeConditions}
                                    `}
                        style={{ color: sidePanelTextColor }}
                      >
                        <BuilderEditor readOnly={readOnly} content={descp.description} setEditorData={descp.setDescription} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    key={index + 1}
                    className={`description
                                ${bodyTextStyleConditions}

                                ${bodyTextSizeConditions}
                                `}
                    style={{ color: sidePanelTextColor }}
                  >
                    <BuilderEditor readOnly={readOnly} content={data.description} setEditorData={data.setDescription} />
                  </div>
                )}
              </div>
            </div>
          }
        </>
      ));
  }

  function dataOnLeft() {
    return dataUpdatableLeft
      .filter((e) => (page === 1 ? e.firstPage === true : null))
      .map((descp, index) => (
        <>
          <div
            style={{ display: index === 0 ? 'none' : null }}
            key={descp.key}
            className='block'
            ref={descp.ref}
          >
            {/* <div className='divider'></div> */}
            <div style={{ display: 'none' }} className='outerIconWrapper'>
              <span
                title='Move up'
                className={`${index === 0 ? 'displayNone' : null}`}
                onClick={(e) => {
                  const arr = arrayMove(dataUpdatableLeft, index, index - 1);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp(index + 1);
                  // // console.log(dataUpdatableRight)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
                </svg>
              </span>
              <span
                title='Move down'
                className={`${
                  index >= dataUpdatableLeft.length - 1 ? 'displayNone' : null
                }`}
                onClick={(e) => {
                  const arr = arrayMove(dataUpdatableLeft, index, index + 1);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp(index + 1);
                  // // console.log(dataUpdatableRight)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                </svg>
              </span>
            </div>
            <div style={{ display: 'none' }} className='copyDelIconWrapper'>
              <span
                title='Dublicate section'
                onClick={(e) => {
                  const arr = array_copy(dataUpdatableLeft, index);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp2(index + 1);
                  // // console.log(dataUpdatableLeft)
                }}
              >
                <svg
                  style={{ maxWidth: '18px' }}
                  version='1.1'
                  className='h-6 w-6'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  x='0px'
                  y='0px'
                  viewBox='0 0 64 64'
                  enable-background='new 0 0 64 64'
                  xmlSpace='preserve'
                >
                  <g id='Text-files'>
                    <path
                      d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                    C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                    c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                    h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                    C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                    c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                    c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                    c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                    c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                    h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                    />
                    <path
                      d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                    c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                    C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                    />
                    <path
                      d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                    c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                    C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                    />
                    <path
                      d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                    S39.16465,29.4603004,38.6031494,29.4603004z'
                    />
                    <path
                      d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                    S29.0059509,37.5872993,28.4444485,37.5872993z'
                    />
                  </g>
                </svg>
              </span>
              <span
                title='Delete section'
                onClick={(e) => {
                  delete_Modal(dataUpdatableLeft, index, 'left');
                  dataOnLeft();
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#fff'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </span>
            </div>
            <div className='sidebar_section '>
              <div
                name='experience_heading'
                id={descp.id}
                rows='1'
                placeholder='Experience Name'
                style={{ color: sidePanelTextColor }}
                className={`section_heading  
                        ${headingTextStyleConditions}

                        ${headingTextSizeConditions}
                        
                    `}
              >
                {/* {descp.heading} */}
                {/* {index} */}
                <BuilderEditor readOnly={readOnly} key={index + 1} content={descp.heading} setEditorData={descp.setHeading} />
              </div>

              {descp.header ? null : descp.description ===
                'none' ? null : descp.type === 'personalInfo' ? (
                // <div  onClick={() => changeExperticeModal(descp.description)}>
                <div>
                  {descp.description.map((data, index) => (
                    <div
                      key={data.key}
                      className='template_1_subSection section'
                    >
                      <div
                        style={{ display: 'none' }}
                        className='subsectionCopyDelIconWrapper'
                      >
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            delete_subsection_Modal(
                              descp.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#fff'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            const arr = array_copy(
                              descp.description,
                              findIndex
                            );
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        style={{ marginBottom: '0rem' }}
                        className={` description
                                ${bodyTextStyleConditions}

                                ${bodyTextSizeConditions}
                                `}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start',
                            gap: '5px',
                          }}
                        >
                          <div>
                            <BuilderEditor readOnly={readOnly} content={data.description} setEditorData={data.setDescription} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : descp.subSection ? (
                descp.description.map((data, index) => (
                  <div className='template_1_subSection'>
                    <div
                      style={{ display: 'none' }}
                      className='subsectionCopyDelIconWrapper'
                    >
                      <span
                        title='Delete Sub Section'
                        onClick={(e) => {
                          // dataOnRight();
                          const findIndex = descp.description.findIndex(
                            (e) => e.key === data.key
                          );
                          delete_subsection_Modal(
                            descp.description,
                            findIndex,
                            'right'
                          );
                          dataOnRight();
                          setTemp(index + 1);
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='#fff'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </span>

                      <span
                        title='Duplicate Sub Section'
                        onClick={(e) => {
                          const findIndex = descp.description.findIndex(
                            (e) => e.key === data.key
                          );
                          const arr = array_copy(descp.description, findIndex);
                          // array_copy(data.description, findIndex);
                          setDataUpdatableRight(arr);
                          setFilteredArray(arr);
                          dataOnRight();
                          setTemp(index + 1);
                          // // console.log(arr[findIndex])
                        }}
                      >
                        <svg
                          style={{ maxWidth: '18px' }}
                          version='1.1'
                          className='h-6 w-6'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          x='0px'
                          y='0px'
                          viewBox='0 0 64 64'
                          enable-background='new 0 0 64 64'
                          xmlSpace='preserve'
                        >
                          <g id='Text-files'>
                            <path
                              d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                            />
                            <path
                              d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                            />
                            <path
                              d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                            />
                            <path
                              d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                            />
                            <path
                              d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                            />
                          </g>
                        </svg>
                      </span>
                    </div>

                    <div
                      key={index + 1}
                      className={`description
                                    ${bodyTextStyleConditions}

                                    ${
                                      documentBodyTextSize === 'Very Small'
                                        ? 'body_verySmall'
                                        : documentBodyTextSize === 'Small'
                                        ? 'body_small'
                                        : documentBodyTextSize === 'Medium'
                                        ? 'body_medium'
                                        : documentBodyTextSize === 'Large'
                                        ? 'body_large'
                                        : null
                                    }
                                    `}
                      style={{ color: sidePanelTextColor }}
                    >
                      <BuilderEditor readOnly={readOnly} content={data.description} setEditorData={data.setDescription} />
                    </div>
                  </div>
                ))
              ) : (
                <div
                  key={index + 1}
                  className={`description
                                ${bodyTextStyleConditions}

                                ${
                                  documentBodyTextSize === 'Very Small'
                                    ? 'body_verySmall'
                                    : documentBodyTextSize === 'Small'
                                    ? 'body_small'
                                    : documentBodyTextSize === 'Medium'
                                    ? 'body_medium'
                                    : documentBodyTextSize === 'Large'
                                    ? 'body_large'
                                    : null
                                }
                                `}
                  style={{ color: sidePanelTextColor }}
                >
                  <BuilderEditor readOnly={readOnly} content={descp.description} setEditorData={descp.setDescription} />
                </div>
              )}
            </div>
          </div>
        </>
      ));
  }

  useEffect(() => {
    // dataOnRight();
    // dataOnLeft();
  }, []);

  // const rightSectionHeight = rightMainRef.current.clientHeight;

  // // setTimeout(() => // console.log(rightSectionHeight), 0)
  // // console.log(rightSectionHeight)

  return (
    <div className='blankTemplate_page'>
      <div
        style={{
          width: '100%',
          background: mainPanelBgColor,
          padding: '0',
        }}
        className={`blankTemplate_main`}
      >
        
        <div style={{background: sidePanelBgColor, padding: '2rem 2rem 1rem'}} className="Template_5_header">
          <div style={{ display: page === 1 ? null : 'none' }}>
            <div>
          <span>
                <CoverLetterProtip showProtip={showProtip}
                heading={CoverLetterProtipData.NAME_CONTACT_INFO.heading}
                body={CoverLetterProtipData.NAME_CONTACT_INFO.body}
              />
            </span>
              <BuilderEditor readOnly={readOnly} content={dataUpdatableLeft[0].heading} setEditorData={dataUpdatableLeft[0].setHeading} />
              </div>
              <BuilderEditor readOnly={readOnly} content={dataUpdatableLeft[0].position} setEditorData={dataUpdatableLeft[0].setPosition} />

              <div className="Template_5_header_description">
                  {dataUpdatableLeft[0].description.map((headerItems) => (
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      {
                      headerItems.type === 'phone' ? 
                      <svg style={{ fill: sidePanelTextColor}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
                      : headerItems.type === 'email' ? 
                      <svg style={{ fill: sidePanelTextColor}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                      : headerItems.type === 'linkedIn' ? 
                      <svg style={{ fill: sidePanelTextColor}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                      : headerItems.type === 'address' ? 
                      <svg style={{ fill: sidePanelTextColor}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                      : null
                  }
                  {/*  */}
                      <BuilderEditor readOnly={readOnly} content={headerItems.data} setEditorData={headerItems.setData} />
                  </div>
                  ))}
              </div>
          </div>
        </div>
        <div className={`blankTemplate_header  ${
          docummentMargin === 'Compact'
            ? 'compact'
            : docummentMargin === 'Narrow'
            ? 'narrow'
            : docummentMargin === 'Normal'
            ? 'normal'
            : docummentMargin === 'Wide'
            ? 'wide'
            : docummentMargin === 'Broad'
            ? 'broad'
            : null
        }`}>
          {/* <BuilderEditor readOnly={readOnly} content={dataUpdatableRight[0].description.NAME_CONTACT_INFO}/> */}
          <div className='blankTemplate_header section '>
          {/* <BuilderEditor readOnly={readOnly} content={dataUpdatableRight[0] dataUpdatableRight[set0.description.NAME_CONTACT_INFO}/> */}
          {dataUpdatableRight[0].description.DATE.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.DATE.heading}
                  body={CoverLetterProtipData.DATE.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.DATE}
                setEditorData={dataUpdatableRight[0].description.setDATE}
              />
            </div>
          )}
          {dataUpdatableRight[0].description.RECIPIENT.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.RECIPIENT.heading}
                  body={CoverLetterProtipData.RECIPIENT.body}
                />
              </span>

              {/* {// console.log(dataUpdatableRight[0].description.INTRODUCTION.blocks.length)} */}

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.RECIPIENT}
                setEditorData={dataUpdatableRight[0].description.setRECIPIENT}
              />
            </div>
          )}
          {dataUpdatableRight[0].description.LETTER_HEADING.blocks.length >
            0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.LETTER_HEADING.heading}
                  body={CoverLetterProtipData.LETTER_HEADING.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.LETTER_HEADING}
                setEditorData={
                  dataUpdatableRight[0].description.setLETTER_HEADING
                }
              />
            </div>
          )}
          {dataUpdatableRight[0].description.SALUTATION.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.SALUTATION.heading}
                  body={CoverLetterProtipData.SALUTATION.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.SALUTATION}
                setEditorData={dataUpdatableRight[0].description.setSALUTATION}
              />
            </div>
          )}

          {dataUpdatableRight[0].description.INTRODUCTION.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.INTRODUCTION.heading}
                  body={CoverLetterProtipData.INTRODUCTION.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.INTRODUCTION}
                setEditorData={
                  dataUpdatableRight[0].description.setINTRODUCTION
                }
              />
            </div>
          )}

          {dataUpdatableRight[0].description.CORE_CONTENT.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.CORE_CONTENT.heading}
                  body={CoverLetterProtipData.CORE_CONTENT.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.CORE_CONTENT}
                setEditorData={
                  dataUpdatableRight[0].description.setCORE_CONTENT
                }
              />
            </div>
          )}

          {dataUpdatableRight[0].description.REQUEST.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.REQUEST.heading}
                  body={CoverLetterProtipData.REQUEST.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.REQUEST}
                setEditorData={dataUpdatableRight[0].description.setREQUEST}
              />
            </div>
          )}

          {dataUpdatableRight[0].description.CONCLUSION.blocks.length > 0 && (
            <div>
              <span>
                <CoverLetterProtip showProtip={showProtip}
                  heading={CoverLetterProtipData.CONCLUSION.heading}
                  body={CoverLetterProtipData.CONCLUSION.body}
                />
              </span>

              <BuilderEditor readOnly={readOnly}
                content={dataUpdatableRight[0].description.CONCLUSION}
                setEditorData={dataUpdatableRight[0].description.setCONCLUSION}
              />
            </div>
          )}

          {dataUpdatableRight[0].description.CONCLUSION.blocks.length > 0 && (
            <BuilderEditor readOnly={readOnly}
              content={dataUpdatableRight[0].description.END}
              setEditorData={dataUpdatableRight[0].description.setEND}
            />
          )}
        </div>
        </div>
        
        <div style={{background: sidePanelBgColor, bottom: '2rem'}} className='template_5_footer'></div>
      </div>
    </div>
  );
}
