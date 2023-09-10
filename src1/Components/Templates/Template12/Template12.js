import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';
import Accordion from 'react-bootstrap/Accordion';
import BuilderProtip from '../../ProTip/BuilderProtip';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));

const Template12 = ({
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

  // const [expertice, setExpertice] = useState('')

  let expertice = null;
  const changeExperticeModal = (data) => {
    // console.log(data);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui changeSkillLevelModal_wrapper '>
            <div className='changeSkillLevelModal'>
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

              {/* <input placeholder='none' onChange={e => expertice = e.target.value}  type='number' name='expertice' id='expertice' />  */}
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
                      <input
                        type='number'
                        name='skill_level'
                        placeholder={skill.expertice}
                      />
                      %
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <button
                  onClick={() => {
                    // console.log(expertice);
                    onClose();
                  }}
                >
                  Yes, Change it!
                </button>
              </div>
            </div>
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
              style={{ display: index === 0 ? 'none' : null }}
              key={data.key}
              ref={data.ref}
              className={data.class}
            >
              {/* <div className="blankTemplate_header section">
                        <BuilderEditor readOnly={readOnly} content = {main_header} />
                    </div> */}
              <div
                style={{ left: 'auto', right: '0' }}
                className='outerIconWrapper'
              >
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
              <div
                style={{ left: 'auto', right: '-20px' }}
                className='copyDelIconWrapper'
              >
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: data.description === 'none' ? 'none' : 'flex',
                      position: 'absolute',
                      left: '-35px',
                      top: data.heading === 'none' ? '5px' : '35px',
                      backgroundColor: sidePanelBgColor,
                      padding: '3px',
                      borderRadius: '100%',
                      width: '30px',
                      height: '30px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {data.type === 'description' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20px'
                        viewBox='0 0 24 24'
                        width='20px'
                        fill='#ffffff'
                      >
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                      </svg>
                    ) : data.type === 'experience' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20px'
                        viewBox='0 0 24 24'
                        width='20px'
                        fill='#ffffff'
                      >
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
                      </svg>
                    ) : data.type === 'education' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20px'
                        viewBox='0 0 24 24'
                        width='20px'
                        fill='#ffffff'
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
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='20px'
                        viewBox='0 0 24 24'
                        width='20px'
                        fill='#ffffff'
                      >
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
                      </svg>
                    )}
                  </div>

                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: index === 1 ? 'none' : null,
                        border: `1px solid ${sidePanelBgColor}`,
                        margin: '1rem 0',
                      }}
                    ></div>

                    {data.header ? null : data.heading === 'none' ? null : (
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
                                      BuilderProtip(data.name).BuilderProtip
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
                                    <rect
                                      height='3'
                                      width='1'
                                      x='11.5'
                                      y='11'
                                    />
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
                    )}

                    {/* <div className='Template_4_divider_main'></div> */}

                    {data.header ? null : data.description ===
                      'none' ? null : data.subSection ? (
                      data.description.map((descp, index) => (
                        <div
                          key={descp.key}
                          className='template_1_subSection section'
                        >
                          <div
                            style={{ top: '50px' }}
                            className='subsectionCopyDelIconWrapper'
                          >
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
                                const arr = array_copy(
                                  data.description,
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
                            className={`template_2_description_with_subsection description
                                                ${bodyTextStyleConditions}

                                                ${bodyTextSizeConditions}
                                                `}
                            style={{ color: sidePanelTextColor }}
                          >
                            <div style={{ width: '100%' }}>
                              <div>
                                <BuilderEditor
                                  readOnly={readOnly}
                                  content={descp.name}
                                  setEditorData={descp.setName}
                                />
                              </div>

                              <div style={{}}>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                  className=''
                                >
                                  <div>
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      content={descp.heading}
                                      setEditorData={descp.setHeading}
                                    />
                                  </div>
                                  <div>
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      content={descp.tenure}
                                      setEditorData={descp.setTenure}
                                    />
                                  </div>
                                </div>
                                {data.type === 'experience' ? (
                                  <div className=''>
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      content={descp.description}
                                      setEditorData={descp.setDescription}
                                    />
                                  </div>
                                ) : null}
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
                      ))
                    )}
                  </div>
                </div>
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
          <div key={descp.key} className='block' ref={descp.ref}>
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'start',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-35px',
                    top: index === 0 ? '5px' : '40px',
                    backgroundColor: sidePanelBgColor,
                    padding: '3px',
                    borderRadius: '100%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {descp.type === 'skills' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#ffffff'
                    >
                      <path d='M0 0h24v24H0V0z' fill='none' />
                      <path d='M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82zM15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99V4.58zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12c0-3.35 2.04-6.24 5-7.42zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82zm2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42v-3.43z' />
                    </svg>
                  ) : descp.type === 'software' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#ffffff'
                    >
                      <path d='M0 0h24v24H0V0z' fill='none' />
                      <path d='M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z' />
                    </svg>
                  ) : descp.type === 'interests' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#ffffff'
                    >
                      <path d='M0 0h24v24H0V0z' fill='none' />
                      <path d='M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z' />
                    </svg>
                  ) : null}
                </div>

                <div style={{ width: '100%' }}>
                  <div
                    style={{
                      display: index === 0 ? 'none' : null,
                      border: `1px solid ${sidePanelBgColor}`,
                      margin: '1rem 0',
                    }}
                  ></div>

                  {descp.heading ===
                  'none' ? null : descp.header ? null : descp.subHeader ? null : (
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
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
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
                                      BuilderProtip(descp.name).BuilderProtip
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
                                    <rect
                                      height='3'
                                      width='1'
                                      x='11.5'
                                      y='11'
                                    />
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
                  {/* <div className={'Template_4_divider_sidebar'}></div> */}

                  {descp.header
                    ? null
                    : descp.subHeader === 'none'
                    ? null
                    : descp.description === 'none'
                    ? null
                    : descp.description.map((data, index) => (
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
                            style={{
                              color: sidePanelTextColor,
                              marginBottom: '0rem',
                            }}
                            className={` description
                                    ${bodyTextStyleConditions}

                                    ${bodyTextSizeConditions}
                                    `}
                          >
                            <BuilderEditor
                              readOnly={readOnly}
                              content={data.description}
                              setEditorData={data.setDescription}
                            />
                          </div>
                        </div>
                      ))}
                </div>
              </div>
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
    <div style={{ padding: '1rem' }} className='template_4_page'>
      <div
        style={{
          display: page === 1 ? 'flex' : 'none',
          borderBottom: `1px solid ${sidePanelBgColor}`,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ marginLeft: '1rem' }}>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                flexDirection: 'row-reverse',
              }}
            >
              {dataUpdatableRight[0].name && (
                <svg
                  className='builder_protip'
                  style={{ display: showProtip ? '' : 'none' }}
                  viewBox='0 0 24 24'
                  width='17px'
                  fill='#000000'
                  onClick={() =>
                    proTips_Modal(
                      dataUpdatableRight[0].name &&
                        BuilderProtip(dataUpdatableRight[0].name).BuilderProtip
                          .heading,
                      dataUpdatableRight[0].name &&
                        BuilderProtip(dataUpdatableRight[0].name).BuilderProtip
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
                content={dataUpdatableRight[0].heading}
                setEditorData={dataUpdatableRight[0].setHeading}
              />
            </div>
          </div>
          <div>
            <BuilderEditor
              readOnly={readOnly}
              content={dataUpdatableRight[0].position}
              setEditorData={dataUpdatableRight[0].setPosition}
            />
          </div>
        </div>
        <div
          style={{
            borderLeft: `1px solid ${sidePanelBgColor}`,
            padding: '1rem 1rem 1rem 2rem',
          }}
        >
          {dataUpdatableRight[0].description.map((data, index) => (
            <div
              key={index}
              style={{
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
                    fill={sidePanelBgColor}
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
                    fill={sidePanelBgColor}
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
                    fill={sidePanelBgColor}
                  >
                    {' '}
                    <path d='M0 0h24v24H0V0z' fill='none' />{' '}
                    <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />{' '}
                  </svg>
                ) : data.type === 'linkedIn' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='20px'
                    viewBox='0 0 24 24'
                    width='20px'
                    fill={sidePanelBgColor}
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
                  </svg>
                ) : null}
              </div>

              <div>
                <BuilderEditor
                  readOnly={readOnly}
                  key='4534'
                  content={data.description}
                  setEditorData={data.setDescription}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ padding: '2rem', height: 'auto' }}
        className='template_4_hero_section'
      >
        <div
          style={{
            background: mainPanelBgColor,
            paddingTop: '0rem',
            width: '60%',
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
          <div ref={rightMainRef} className='blankTemplate_profile'>
            {dataOnRight()}
          </div>
        </div>
        <div
          style={{
            borderLeft: `1px solid ${sidePanelBgColor}`,
            paddingTop: '0rem',
            width: '40%',
            paddingLeft: '4rem',
          }}
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
          {dataOnLeft()}
        </div>
      </div>
    </div>
  );
};

export default Template12;
