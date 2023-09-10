import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';
import Accordion from 'react-bootstrap/Accordion';
import BuilderProtip from '../../ProTip/BuilderProtip';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));

const Template16 = ({
  showProtip,
  readOnly,
  mainPanelBgColor,
  sidePanelTextColor,
  sidePanelBgColor,
  page,
  rightMainRef,
  setDataUpdatableLeft,
  dataUpdatableLeft,
  dataUpdatableRight,
  setDataUpdatableRight,
  docummentMargin,
  documentHeadingTextStyle,
  documentBodyTextStyle,
  documentBodyTextSize,
  headingTextStyleConditions,
  bodyTextStyleConditions,
  headingTextSizeConditions,
  bodyTextSizeConditions,
}) => {
  const [, setTemp] = useState();
  const [, setTemp2] = useState();
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
                  // // console.log(data)
                  // data.ref.current.style.display = 'none'
                  if (index > -1) {
                    arr.splice(index, 1);
                    dataOnRight();
                    dataOnLeft();
                    if (side === 'right') {
                      // setDataUpdatableRight(arr);
                      // setFilteredArray(arr)
                    } else if (side === 'left') {
                      // setDataUpdatableLeft(arr);
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

  const proTips_Modal = (heading, body) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='proTips_Modal_Container'>
            <div className='proTips_Modal'>
              <div className='proTips_ModalHeader'>
                <img src='/assets/images/logo.png' alt='logo' />
                <div>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <rect fill='none' height='24' width='24' y='0' />
                    <path d='M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,19h8v-2H5V19z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27 C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5 c0,2.47,1.49,3.89,2.35,4.5h6.3C13.01,13.39,14.5,11.97,14.5,9.5z M21.37,7.37L20,8l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6 L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6z' />
                  </svg>
                  <span>Pro Tips</span>
                </div>
                <div className='proTips_Modal_close' onClick={onClose}>
                  x
                </div>
              </div>
              <div className='proTips_ModalWrapper'>
                <Accordion
                  className='proTips_Accordian'
                  defaultActiveKey='0'
                  flush
                >
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='0'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      {heading}
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ maxHeight: 'inherit', overflowY: 'auto' }}
                      className='proTips_Accordian_Body'
                    >
                      {body}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const handleChangeSkill = (e, data, onClose) => {
    e.preventDefault();

    // // console.log(e)
    for (let i = 0; i < data.length; i++) {
      // // console.log(e.target[i].value)
      if (e.target[i].value !== '') {
        data[i].expertice = Number(e.target[i].value);
        setTemp(i + 143);
      }
    }
    dataOnRight();
    dataOnLeft();
    onClose();
    // // console.log(data)
  };

  let expertice = null;
  const changeExperticeModal = (data) => {
    // console.log(data);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui changeSkillLevelModal_wrapper '>
            <form
              onSubmit={(e) => handleChangeSkill(e, data, onClose)}
              className='changeSkillLevelModal'
            >
              <div className='changeSkillLevelModal_header'>
                <h1>Change Skill Level</h1>

                <div
                  style={{ cursor: 'pointer' }}
                  className='changeSkillLevelModal_close'
                  onClick={onClose}
                >
                  X
                </div>
              </div>

              {/* <input placeholder='none' onChange={e => expertice = e.target.value}  type='number' name='expertice' id='expertice' /> 7 */}
              <div className='skillsModal'>
                {data.map((skill) => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '75%' }}>
                      <BuilderEditor
                        readOnly={readOnly}
                        content={skill.name}
                        setEditorData={skill.setName}
                      />
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      className='skill_inputFeild'
                    >
                      {/* <div style={{width: skill.expertice+'%'}} className='progressBarCompleted'> </div> */}
                      {/* <input type='number' name='skill_level' placeholder={skill.expertice} />% */}
                      <input
                        placeholder={skill.expertice}
                        onChange={(e) => e.target.value}
                        type='number'
                        name={skill.title}
                        id='expertice'
                      />
                      %
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <button
                  type='submit'
                  // onClick={(e) => {
                  //     // console.log(e)
                  //     onClose();
                  // }}
                >
                  Yes, Change it!
                </button>
              </div>
            </form>
          </div>
        );
      },
    });
  };

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
            <div
              style={{ marginBottom: '1rem' }}
              key={data.key}
              ref={data.ref}
              className={data.class}
            >
              {/* <div className="blankTemplate_header section">
                        <BuilderEditor readOnly={readOnly} content = {main_header} />
                    </div> */}
              <div className='outerIconWrapper'>
                <span
                  // className={`${index === 0 ? 'displayNone' : null}`}
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
                <span
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
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                </span>
                {/* <span onClick={(e) => {delete_Modal(data); // console.log(data)}}> */}
                <span
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
                    className={`section_heading  
                        ${headingTextStyleConditions}

                            ${headingTextSizeConditions}
                            
                        `}
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
                        {data.type === 'education' ? (
                          <svg
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill={sidePanelBgColor}
                          >
                            <path d='M0 0h24v24H0z' fill='none' />
                            <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
                          </svg>
                        ) : data.type === 'experience' ? (
                          <svg
                            height='24px'
                            viewBox='0 0 24 24'
                            width='24px'
                            fill={sidePanelBgColor}
                          >
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
                          </svg>
                        ) : null}
                      </div>
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start',
                            flexDirection: 'row-reverse',
                          }}
                        >
                          {data.name && (
                            <svg
                              className='builder_protip'
                              style={{ display: showProtip ? '' : 'none' }}
                              viewBox='0 0 24 24'
                              width='17px'
                              fill='#000000'
                              onClick={() =>
                                proTips_Modal(
                                  data.name &&
                                    BuilderProtip(data.name).BuilderProtip
                                      .heading,
                                  data.name &&
                                    BuilderProtip(data.name).BuilderProtip.body
                                )
                              }
                            >
                              <g>
                                <rect fill='none' height='24' width='24' />
                              </g>
                              <g>
                                <g />
                                <g>
                                  <path d='M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56 C7.77,15.6,8,16.13,8,16.69V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31 c0-0.55,0.22-1.09,0.64-1.46C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,17h-4v-1h4V17z M10,19v-1h4v1H10z M15.31,13.74c-0.09,0.08-0.16,0.18-0.24,0.26H8.92c-0.08-0.09-0.15-0.19-0.24-0.27c-1.32-1.18-1.91-2.94-1.59-4.7 c0.36-1.94,1.96-3.55,3.89-3.93C11.32,5.03,11.66,5,12,5c2.76,0,5,2.24,5,5C17,11.43,16.39,12.79,15.31,13.74z' />
                                </g>
                                <g>
                                  <rect height='3' width='1' x='11.5' y='11' />
                                  <rect
                                    height='3'
                                    transform='matrix(0.7071 -0.7071 0.7071 0.7071 -4.0312 10.8536)'
                                    width='1'
                                    x='10.59'
                                    y='8.79'
                                  />{' '}
                                  <rect
                                    height='3'
                                    transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 14.7678 26.7028)'
                                    width='1'
                                    x='12.41'
                                    y='8.79'
                                  />{' '}
                                </g>{' '}
                              </g>{' '}
                            </svg>
                          )}
                          <BuilderEditor
                            readOnly={readOnly}
                            key={index + 1}
                            content={data.heading}
                            setEditorData={data.setHeading}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  style={{
                    width: '100%',
                    marginBottom: '1rem',
                    borderColor: '#31292B',
                  }}
                  className='Template_4_divider_main'
                ></div>

                {data.description === 'none' ? null : data.type ===
                    'education' || data.type === 'experience' ? (
                  data.description.map((descp, index) => (
                    <div
                      key={descp.key}
                      className='template_1_subSection section'
                    >
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
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '5px',
                        }}
                      >
                        <div style={{ width: '5%', paddingTop: '8px' }}>
                          <div
                            style={{
                              width: '10px',
                              height: '10px',
                              background: sidePanelBgColor,
                              borderRadius: '100%',
                            }}
                          ></div>
                        </div>

                        <div
                          key={index + 1}
                          className={`template_2_description_with_subsection description
                                        ${bodyTextStyleConditions}

                                        ${bodyTextSizeConditions}
                                        `}
                          style={{ color: sidePanelTextColor }}
                        >
                          <div className=''>
                            {data.type === 'experience' ? (
                              <div>
                                <BuilderEditor
                                  readOnly={readOnly}
                                  content={descp.heading}
                                  setEditorData={descp.setHeading}
                                />
                              </div>
                            ) : null}
                            <BuilderEditor
                              readOnly={readOnly}
                              content={descp.description}
                              setEditorData={descp.setDescription}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : data.type === 'section' ? (
                  // data.description.map((descp, index) => (
                  <div
                    key={index + 1}
                    className={`template_2_description description
                                    ${bodyTextStyleConditions}
    
                                    ${bodyTextSizeConditions}
                                    `}
                    style={{ color: sidePanelTextColor }}
                  >
                    {/* <div> */}
                    <BuilderEditor
                      readOnly={readOnly}
                      content={data.description}
                      setEditorData={data.setDescription}
                    />
                    {/* </div> */}
                  </div>
                ) : (
                  // ))
                  data.description.map((descp, index) => (
                    <div
                      key={descp.key}
                      className='template_1_subSection section'
                    >
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
                        className={`template_2_description_with_subsection description
                                    ${bodyTextStyleConditions}

                                    ${bodyTextSizeConditions}
                                    `}
                        style={{ color: sidePanelTextColor }}
                      >
                        {/* <div className='template_2_subsection_main'> */}
                        <BuilderEditor
                          readOnly={readOnly}
                          content={descp.description}
                          setEditorData={descp.setDescription}
                        />
                        {/* </div> */}
                      </div>
                    </div>
                  ))
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
            style={{
              display: index === 0 ? 'none' : null,
              marginBottom: '1rem',
            }}
            key={descp.key}
            className='block'
            ref={descp.ref}
          >
            {/* <div className="divider"></div> */}
            <div className='outerIconWrapper'>
              <span
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
            <div className='copyDelIconWrapper'>
              <span
                onClick={(e) => {
                  const arr = array_copy(dataUpdatableLeft, index);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp2(index + 1);
                  // // console.log(dataUpdatableLeft)
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
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </span>
              <span
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
                  className={`section_heading  
                        ${headingTextStyleConditions}

                        ${headingTextSizeConditions}
                        
                    `}
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
                      {descp.type === 'skills' ? (
                        <svg
                          height='24px'
                          viewBox='0 0 24 24'
                          width='24px'
                          fill={sidePanelBgColor}
                        >
                          <g>
                            <path d='M0,0h24v24H0V0z' fill='none' />
                            <path d='M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z' />
                          </g>
                        </svg>
                      ) : descp.type === 'language_skills' ? (
                        <svg
                          height='24px'
                          viewBox='0 0 24 24'
                          width='24px'
                          fill={sidePanelBgColor}
                        >
                          <path d='M0 0h24v24H0V0z' fill='none' />
                          <path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' />
                        </svg>
                      ) : descp.type === 'hobbies' ? (
                        <svg
                          height='24px'
                          viewBox='0 0 24 24'
                          width='24px'
                          fill={sidePanelBgColor}
                        >
                          <path d='M0 0h24v24H0z' fill='none' />
                          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                        </svg>
                      ) : descp.type === 'socialNetwork' ? (
                        <svg
                          height='24px'
                          viewBox='0 0 24 24'
                          width='24px'
                          fill={sidePanelBgColor}
                        >
                          <g>
                            <rect fill='none' height='24' width='24' />
                          </g>
                          <g>
                            <g>
                              <path d='M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,5.3l1.35-0.95 c1.82,0.56,3.37,1.76,4.38,3.34l-0.39,1.34l-1.35,0.46L13,6.7V5.3z M9.65,4.35L11,5.3v1.4L7.01,9.49L5.66,9.03L5.27,7.69 C6.28,6.12,7.83,4.92,9.65,4.35z M7.08,17.11l-1.14,0.1C4.73,15.81,4,13.99,4,12c0-0.12,0.01-0.23,0.02-0.35l1-0.73L6.4,11.4 l1.46,4.34L7.08,17.11z M14.5,19.59C13.71,19.85,12.87,20,12,20s-1.71-0.15-2.5-0.41l-0.69-1.49L9.45,17h5.11l0.64,1.11 L14.5,19.59z M14.27,15H9.73l-1.35-4.02L12,8.44l3.63,2.54L14.27,15z M18.06,17.21l-1.14-0.1l-0.79-1.37l1.46-4.34l1.39-0.47 l1,0.73C19.99,11.77,20,11.88,20,12C20,13.99,19.27,15.81,18.06,17.21z' />
                            </g>
                          </g>
                        </svg>
                      ) : null}
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          flexDirection: 'row-reverse',
                        }}
                      >
                        {descp.name && (
                          <svg
                            className='builder_protip'
                            style={{ display: showProtip ? '' : 'none' }}
                            viewBox='0 0 24 24'
                            width='17px'
                            fill='#000000'
                            onClick={() =>
                              proTips_Modal(
                                descp.name &&
                                  BuilderProtip(descp.name).BuilderProtip
                                    .heading,
                                descp.name &&
                                  BuilderProtip(descp.name).BuilderProtip.body
                              )
                            }
                          >
                            <g>
                              <rect fill='none' height='24' width='24' />
                            </g>
                            <g>
                              <g />
                              <g>
                                <path d='M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56 C7.77,15.6,8,16.13,8,16.69V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31 c0-0.55,0.22-1.09,0.64-1.46C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,17h-4v-1h4V17z M10,19v-1h4v1H10z M15.31,13.74c-0.09,0.08-0.16,0.18-0.24,0.26H8.92c-0.08-0.09-0.15-0.19-0.24-0.27c-1.32-1.18-1.91-2.94-1.59-4.7 c0.36-1.94,1.96-3.55,3.89-3.93C11.32,5.03,11.66,5,12,5c2.76,0,5,2.24,5,5C17,11.43,16.39,12.79,15.31,13.74z' />
                              </g>
                              <g>
                                <rect height='3' width='1' x='11.5' y='11' />
                                <rect
                                  height='3'
                                  transform='matrix(0.7071 -0.7071 0.7071 0.7071 -4.0312 10.8536)'
                                  width='1'
                                  x='10.59'
                                  y='8.79'
                                />{' '}
                                <rect
                                  height='3'
                                  transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 14.7678 26.7028)'
                                  width='1'
                                  x='12.41'
                                  y='8.79'
                                />{' '}
                              </g>{' '}
                            </g>{' '}
                          </svg>
                        )}
                        <BuilderEditor
                          readOnly={readOnly}
                          key={index + 1}
                          content={descp.heading}
                          setEditorData={descp.setHeading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                  borderColor: '#31292B',
                }}
                className={'Template_4_divider_sidebar'}
              ></div>

              {descp.heading ===
              'none' ? null : descp.header ? null : descp.subHeader ===
                'none' ? null : descp.description ===
                'none' ? null : descp.type === 'skills' ||
                descp.type === 'language_skills' ? (
                <div>
                  {descp.description.map((data, index) => (
                    <div
                      key={data.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
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
                        className={`template_4_description 
                                    ${bodyTextStyleConditions}
    
                                    ${bodyTextSizeConditions}
                                    `}
                        style={{
                          color: sidePanelTextColor,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <BuilderEditor
                            readOnly={readOnly}
                            content={data.name}
                            setEditorData={data.setName}
                          />
                        </div>
                        <div
                          style={{ marginLeft: '3px' }}
                          onClick={() => {
                            changeExperticeModal(descp.description);
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          {/* <BuilderEditor readOnly={readOnly} content={descp.description} /> */}

                          {/* <div style={{cursor: 'pointer'}} onClick={() => changeExperticeModal(descp.expertice)} className='progressBarContainer'> */}
                          <div
                            style={{
                              cursor: 'pointer',
                              backgroundColor: '#D3D0C8',
                              height: '3px',
                            }}
                            className='progressBarContainer_template_4'
                          >
                            {/* {descp.expertice} */}
                            <div
                              style={{
                                width: data.expertice + '%',
                                backgroundColor: sidePanelBgColor,
                                height: '3px',
                              }}
                              className='progressBarCompleted'
                            >
                              {' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : descp.type === 'hobbies' || descp.type === 'socialNetwork' ? (
                // <div  onClick={() => changeExperticeModal(descp.description)}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {descp.description.map((data, index) => (
                    <div
                      style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                      }}
                      key={data.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
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
                        style={{
                          color: sidePanelTextColor,
                          marginBottom: '0rem',
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'center',
                        }}
                        className={` description
                                ${bodyTextStyleConditions}

                                ${bodyTextSizeConditions}
                                `}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                          }}
                        >
                          {data.type === 'writing' ? (
                            <svg
                              height='24px'
                              viewBox='0 0 24 24'
                              width='24px'
                              fill={sidePanelBgColor}
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                            </svg>
                          ) : data.type === 'cooking' ? (
                            <svg
                              height='24px'
                              viewBox='0 0 24 24'
                              width='24px'
                              fill={sidePanelBgColor}
                            >
                              <g>
                                <rect fill='none' height='24' width='24' />
                              </g>
                              <g>
                                <g>
                                  <path d='M17,22c1.66,0,3-1.34,3-3s-1.34-3-3-3c-1.3,0-2.4,0.84-2.82,2H9.14l1.99-3.06C11.42,14.98,11.71,15,12,15 s0.58-0.02,0.87-0.06l1.02,1.57c0.42-0.53,0.96-0.95,1.6-1.21l-0.6-0.93C17.31,13.27,19,10.84,19,8H5c0,2.84,1.69,5.27,4.12,6.37 l-3.95,6.08c-0.3,0.46-0.17,1.08,0.29,1.38h0c0.46,0.3,1.08,0.17,1.38-0.29l1-1.55h6.34C14.6,21.16,15.7,22,17,22z M17,18 c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1C16,18.45,16.45,18,17,18z M7.42,10h9.16c-0.77,1.76-2.54,3-4.58,3 S8.19,11.76,7.42,10z' />
                                  <path d='M9.41,7h1c0.15-1.15,0.23-1.64-0.89-2.96C9.1,3.54,8.84,3.27,9.06,2H8.07C7.86,3.11,8.1,4.05,8.96,4.96 C9.18,5.2,9.75,5.63,9.41,7z' />
                                  <path d='M11.89,7h1c0.15-1.15,0.23-1.64-0.89-2.96c-0.42-0.5-0.68-0.78-0.46-2.04h-0.99c-0.21,1.11,0.03,2.05,0.89,2.96 C11.67,5.2,12.24,5.63,11.89,7z' />
                                  <path d='M14.41,7h1c0.15-1.15,0.23-1.64-0.89-2.96C14.1,3.54,13.84,3.27,14.06,2h-0.99c-0.21,1.11,0.03,2.05,0.89,2.96 C14.18,5.2,14.75,5.63,14.41,7z' />
                                </g>
                              </g>
                            </svg>
                          ) : data.type === 'music' ? (
                            <svg
                              height='24px'
                              viewBox='0 0 24 24'
                              width='24px'
                              fill={sidePanelBgColor}
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
                            </svg>
                          ) : data.type === 'reading' ? (
                            <svg
                              height='24px'
                              viewBox='0 0 24 24'
                              width='24px'
                              fill={sidePanelBgColor}
                            >
                              <g>
                                <rect fill='none' height='24' width='24' />
                              </g>
                              <g>
                                <g />
                                <g>
                                  <path d='M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z' />
                                  <g>
                                    <path d='M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z' />
                                    <path d='M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z' />
                                    <path d='M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z' />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          ) : data.type === 'facebook' ? (
                            <svg
                              height='20px'
                              viewBox='0 0 310 310'
                              width='20px'
                              fill={sidePanelBgColor}
                              version='1.1'
                              id='Layer_1'
                              xmlnsXlink='http://www.w3.org/1999/xlink'
                              x='0px'
                              y='0px'
                              xmlSpace='preserve'
                            >
                              {' '}
                              <g id='XMLID_834_'>
                                {' '}
                                <path
                                  id='XMLID_835_'
                                  d='M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z'
                                />{' '}
                              </g>{' '}
                            </svg>
                          ) : data.type === 'insta' ? (
                            <svg
                              width='20px'
                              height='20px'
                              viewBox='0 0 256 256'
                              fill={sidePanelBgColor}
                              version='1.1'
                              xmlnsxlink='http://www.w3.org/1999/xlink'
                              preserveAspectRatio='xMidYMid'
                            >
                              <g>
                                <path
                                  style={{ fill: sidePanelBgColor }}
                                  d='M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z'
                                  fill='#0A0A08'
                                ></path>
                              </g>
                            </svg>
                          ) : data.type === 'twitter' ? (
                            <svg
                              width='20px'
                              height='20px'
                              version='1.1'
                              fill={sidePanelBgColor}
                              id='Layer_1'
                              x='0px'
                              y='0px'
                              viewBox='0 0 556 556'
                              xmlnsxlink='http://www.w3.org/1999/xlink'
                              xmlspace='preserve'
                            >
                              <path
                                style={{ fill: sidePanelBgColor }}
                                d='M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906C507.7,94.204,503.76,93.294,500.398,94.784z'
                              />
                            </svg>
                          ) : data.type === 'youtube' ? (
                            <svg
                              width='20px'
                              height='20px'
                              version='1.1'
                              fill={sidePanelBgColor}
                              id='Layer_1'
                              viewBox='0 0 461.001 461.001'
                              xmlnsxlink='http://www.w3.org/1999/xlink'
                              x='0px'
                              y='0px'
                              xmlspace='preserve'
                            >
                              {' '}
                              <g>
                                <path
                                  style={{ fill: sidePanelBgColor }}
                                  d='M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'
                                />{' '}
                              </g>{' '}
                            </svg>
                          ) : null}
                        </div>
                        <div>
                          <BuilderEditor
                            readOnly={readOnly}
                            content={data.description}
                            setEditorData={data.setDescription}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                descp.description.map((data, index) => (
                  <div key={data.key} className='template_1_subSection section'>
                    <div className='subsectionCopyDelIconWrapper'>
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
                      style={{
                        color: sidePanelTextColor,
                        marginBottom: '0rem',
                      }}
                      className={` description
                        ${bodyTextStyleConditions}

                        ${bodyTextSizeConditions}
                        `}
                    >
                      <div>
                        <BuilderEditor
                          readOnly={readOnly}
                          content={data.description}
                          setEditorData={data.setDescription}
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ));
  }

  useEffect(() => {
    dataOnRight();
    dataOnLeft();
  }, [dataUpdatableRight, dataUpdatableLeft]);

  // const rightSectionHeight = rightMainRef.current.clientHeight;

  // // setTimeout(() => // console.log(rightSectionHeight), 0)
  // // console.log(rightSectionHeight)

  return (
    <div style={{ paddingBottom: '2rem' }} className='template_4_page'>
      <div
        style={{
          display: page === 1 ? 'flex' : 'none',
          padding: '2rem 2rem 0',
          color: '#fff',
          background: sidePanelBgColor,
          justifyContent: 'start',
          alignItems: 'start',
        }}
        className='template_4_header section'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '2rem',
          }}
        >
          <div style={{ width: '50%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                flexDirection: 'row-reverse',
              }}
            >
              {dataUpdatableLeft[0].name && (
                <svg
                  className='builder_protip'
                  style={{ display: showProtip ? '' : 'none' }}
                  viewBox='0 0 24 24'
                  width='17px'
                  fill='#000000'
                  onClick={() =>
                    proTips_Modal(
                      dataUpdatableLeft[0].name &&
                        BuilderProtip(dataUpdatableLeft[0].name).BuilderProtip
                          .heading,
                      dataUpdatableLeft[0].name &&
                        BuilderProtip(dataUpdatableLeft[0].name).BuilderProtip
                          .body
                    )
                  }
                >
                  <g>
                    <rect fill='none' height='24' width='24' />
                  </g>
                  <g>
                    <g />
                    <g>
                      <path d='M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56 C7.77,15.6,8,16.13,8,16.69V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31 c0-0.55,0.22-1.09,0.64-1.46C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,17h-4v-1h4V17z M10,19v-1h4v1H10z M15.31,13.74c-0.09,0.08-0.16,0.18-0.24,0.26H8.92c-0.08-0.09-0.15-0.19-0.24-0.27c-1.32-1.18-1.91-2.94-1.59-4.7 c0.36-1.94,1.96-3.55,3.89-3.93C11.32,5.03,11.66,5,12,5c2.76,0,5,2.24,5,5C17,11.43,16.39,12.79,15.31,13.74z' />
                    </g>
                    <g>
                      <rect height='3' width='1' x='11.5' y='11' />
                      <rect
                        height='3'
                        transform='matrix(0.7071 -0.7071 0.7071 0.7071 -4.0312 10.8536)'
                        width='1'
                        x='10.59'
                        y='8.79'
                      />{' '}
                      <rect
                        height='3'
                        transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 14.7678 26.7028)'
                        width='1'
                        x='12.41'
                        y='8.79'
                      />{' '}
                    </g>{' '}
                  </g>{' '}
                </svg>
              )}
              <BuilderEditor
                readOnly={readOnly}
                content={dataUpdatableLeft[0].heading}
                setEditorData={dataUpdatableLeft[0].setHeading}
              />
            </div>
            <BuilderEditor
              readOnly={readOnly}
              content={dataUpdatableLeft[0].position}
              setEditorData={dataUpdatableLeft[0].setPosition}
            />
          </div>
          <div style={{ width: '50%' }}>
            <BuilderEditor
              readOnly={readOnly}
              content={dataUpdatableLeft[0].description}
              setEditorData={dataUpdatableLeft[0].setDescription}
            />
          </div>
        </div>

        <div
          style={{
            display: page === 1 ? 'null' : 'none',
            padding: '0',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
          className='template_15_subHeader'
        >
          {dataUpdatableLeft[0].contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {contact.type === 'phone' ? (
                <svg
                  style={{ fill: '#FFF' }}
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' />
                </svg>
              ) : contact.type === 'email' ? (
                <svg
                  style={{ fill: '#FFF' }}
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
                </svg>
              ) : contact.type === 'address' ? (
                <svg
                  style={{ fill: '#FFF' }}
                  height='14px'
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                </svg>
              ) : null}
              {/*  */}
              <BuilderEditor
                readOnly={readOnly}
                content={contact.data}
                setEditorData={contact.setData}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: '2rem' }} className='template_4_hero_section'>
        <div
          style={{ width: '40%', paddingTop: '0' }}
          className={`Template_4_sidebar ${
            docummentMargin === 'Compact'
              ? 'sidebar_compact'
              : docummentMargin === 'Narrow'
              ? 'sidebar_narrow'
              : docummentMargin === 'Normal'
              ? 'sidebar_normal'
              : docummentMargin === 'Wide'
              ? 'sidebar_wide'
              : docummentMargin === 'Broad'
              ? 'sidebar_broad'
              : null
          }`}
        >
          <div style={{ padding: '0 0.5rem' }}>{dataOnLeft()}</div>
        </div>
        <div
          style={{
            background: mainPanelBgColor,
            paddingTop: '0',
            width: '60%',
            position: 'relative',
            borderLeft: `2px solid #31292B`,
          }}
          className={`Template_4_main ${
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
          <div
            style={{ padding: '0 1rem' }}
            ref={rightMainRef}
            className='blankTemplate_profile'
          >
            {dataOnRight()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template16;
