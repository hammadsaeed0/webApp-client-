import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';

import { CoverLetterProtipData } from '../../ProTip/CoverLetterProTipData';
import CoverLetterProtip from '../../ProTip/CoverLetterProtip';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));
// prettier-ignore
export default function CoverLetter8({ showProtip, readOnly, chosenCategory, sidePanelTextColor, sidePanelBgColor, mainPanelBgColor, page, rightMainRef, setDataUpdatableLeft, dataUpdatableLeft, dataUpdatableRight, setDataUpdatableRight, docummentMargin, documentHeadingTextStyle, documentBodyTextStyle, documentBodyTextSize, headingTextStyleConditions, bodyTextStyleConditions, headingTextSizeConditions, bodyTextSizeConditions, }) {
  
  const [temp, setTemp] = useState();
  const [temp2, setTemp2] = useState();
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
            {descp.header ? null : descp.subHeader ? null : (
                <div
                  name='experience_heading'
                  id={descp.id}
                  rows='1'
                  placeholder='Experience Name'
                  style={{ color: sidePanelTextColor }}
                  className={`section_heading  ${headingTextStyleConditions}  ${headingTextSizeConditions} `}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <div>
                        {descp.type === 'personal' ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill='#000000'
                          >
                            <path d='M0 0h24v24H0z' fill='none' />
                            <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                          </svg>
                        ) : descp.type === 'skills' ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            enable-background='new 0 0 24 24'
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill='#000000'
                          >
                            <g>
                              <rect fill='none' height='24' width='24' />
                            </g>
                            <g>
                              <g>
                                <path d='M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z M3,19c0.22-0.72,3.31-2,6-2c2.7,0,5.8,1.29,6,2H3z' />
                                <path d='M4.74,9H5c0,2.21,1.79,4,4,4s4-1.79,4-4h0.26c0.27,0,0.49-0.22,0.49-0.49V8.49c0-0.27-0.22-0.49-0.49-0.49H13 c0-1.48-0.81-2.75-2-3.45V5.5C11,5.78,10.78,6,10.5,6S10,5.78,10,5.5V4.14C9.68,4.06,9.35,4,9,4S8.32,4.06,8,4.14V5.5 C8,5.78,7.78,6,7.5,6S7,5.78,7,5.5V4.55C5.81,5.25,5,6.52,5,8H4.74C4.47,8,4.25,8.22,4.25,8.49v0.03C4.25,8.78,4.47,9,4.74,9z M11,9c0,1.1-0.9,2-2,2s-2-0.9-2-2H11z' />
                                <path d='M21.98,6.23l0.93-0.83l-0.75-1.3l-1.19,0.39c-0.14-0.11-0.3-0.2-0.47-0.27L20.25,3h-1.5L18.5,4.22 c-0.17,0.07-0.33,0.16-0.48,0.27L16.84,4.1l-0.75,1.3l0.93,0.83C17,6.4,17,6.58,17.02,6.75L16.09,7.6l0.75,1.3l1.2-0.38 c0.13,0.1,0.28,0.18,0.43,0.25L18.75,10h1.5l0.27-1.22c0.16-0.07,0.3-0.15,0.44-0.25l1.19,0.38l0.75-1.3l-0.93-0.85 C22,6.57,21.99,6.4,21.98,6.23z M19.5,7.75c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25 S20.19,7.75,19.5,7.75z' />
                                <path d='M19.4,10.79l-0.85,0.28c-0.1-0.08-0.21-0.14-0.33-0.19L18.04,10h-1.07l-0.18,0.87c-0.12,0.05-0.24,0.12-0.34,0.19 l-0.84-0.28l-0.54,0.93l0.66,0.59c-0.01,0.13-0.01,0.25,0,0.37l-0.66,0.61l0.54,0.93l0.86-0.27c0.1,0.07,0.2,0.13,0.31,0.18 L16.96,15h1.07l0.19-0.87c0.11-0.05,0.22-0.11,0.32-0.18l0.85,0.27l0.54-0.93l-0.66-0.61c0.01-0.13,0.01-0.25,0-0.37l0.66-0.59 L19.4,10.79z M17.5,13.39c-0.49,0-0.89-0.4-0.89-0.89c0-0.49,0.4-0.89,0.89-0.89s0.89,0.4,0.89,0.89 C18.39,12.99,17.99,13.39,17.5,13.39z' />
                              </g>
                            </g>
                          </svg>
                        ) : descp.type === 'software' ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill='#000000'
                          >
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
                          </svg>
                        ) : descp.type === 'language_skills' ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill='#000000'
                          >
                            <path d='M0 0h24v24H0z' fill='none' />
                            <path d='M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' />
                          </svg>
                        ) : null}
                      </div>
                      <div>
                        <BuilderEditor readOnly={readOnly}
                          key={index + 1}
                          content={descp.heading} setEditorData={descp.setHeading}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        width:
                          index === 1 ? '50%' : index === 3 ? '30%' : '20%',
                        border: '1px solid',
                      }}
                    ></div>
                  </div>
                </div>
              )}

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
                        className={` description ${bodyTextStyleConditions} ${bodyTextSizeConditions} `}>
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
              ) : descp.type === 'contact' ? (
                <div className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}>
                    {descp.contactType.map((type, index) => (
                      <div key={index} className='template_1_subSection section'>
                          
                          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}>
                              <div style={{ width: '40px', height: '30px', borderRadius: '100%', background: sidePanelBgColor, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                {type.type === 'phone' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#ffffff">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                                  </svg>
                                ) : type.type === 'email' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#ffffff">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                                </svg>
                                ) : type.type === 'address' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#ffffff">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                                </svg>
                                ) : type.type === 'website' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#ffffff">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                                  </svg>
                                ) : null}
                              </div>
                              <BuilderEditor readOnly={readOnly} key={index+2} content={type.name} setEditorData={type.setName} />
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
        style={{ background: mainPanelBgColor, padding: '0', width: '100%' }}
      >
        <div
          style={{
            display: page === 1 ? null : 'none',
            borderBottom: `2px solid ${sidePanelBgColor}`,
            borderTop: `20px solid ${sidePanelBgColor}`,
            paddingTop: '0',
            paddingBottom: '1rem',
          }}
          className={` ${
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
          }`}
        >
          <div>
            <div> 
            <span>
              <CoverLetterProtip showProtip={showProtip}
                heading={CoverLetterProtipData.NAME_CONTACT_INFO.heading}
                body={CoverLetterProtipData.NAME_CONTACT_INFO.body}
              />
            </span>
              <BuilderEditor readOnly={readOnly} key='4534' content={dataUpdatableLeft[0].heading[0].name} setEditorData={dataUpdatableLeft[0].heading[0].setName} /> </div>

            <div> <BuilderEditor readOnly={readOnly} key='4534' content={dataUpdatableLeft[0].heading[0].position} setEditorData={dataUpdatableLeft[0].heading[0].setPosition} /> </div>
          </div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}
          >
            {dataUpdatableLeft[0].contacts.map((data, index) => (
              <div
                key={index}
                style={{
                  width: '40%',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div>
                  {data.type === 'phone' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20px'
                      viewBox='0 0 24 24'
                      width='20px'
                      fill='#000000'
                    >
                      {' '}
                      <path d='M0 0h24v24H0V0z' fill='none' />{' '}
                      <path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' />{' '}
                    </svg>
                  ) : data.type === 'address' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20px'
                      viewBox='0 0 24 24'
                      width='20px'
                      fill='#000000'
                    >
                      {' '}
                      <path d='M0 0h24v24H0V0z' fill='none' />{' '}
                      <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />{' '}
                    </svg>
                  ) : data.type === 'email' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20px'
                      viewBox='0 0 24 24'
                      width='20px'
                      fill='#000000'
                    >
                      {' '}
                      <path d='M0 0h24v24H0V0z' fill='none' />{' '}
                      <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />{' '}
                    </svg>
                  ) : data.type === 'linkedIn' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      viewBox='0 0 24 24'
                    >
                      <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                    </svg>
                  ) : null}
                </div>

                <div>
                  <BuilderEditor readOnly={readOnly} key='4534' content={data.description} setEditorData={data.setDescription} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ paddingTop: '1rem' }}
          ref={rightMainRef}
          className={` blankTemplate_profile ${
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
          }`}
        >
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
      </div>
    </div>
  );
}
