import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';
import Accordion from 'react-bootstrap/Accordion';
import BuilderProtip from '../../ProTip/BuilderProtip';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));

const Template7 = ({
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
  // // console.log(page)

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
                      // dataOnLeft();
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
                    // dataOnLeft();
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
    // dataOnLeft();
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
            <div key={data.key} ref={data.ref} className={data.class}>
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
                <div
                  style={{
                    display: index === 0 ? 'none' : null,
                    border: `1px solid ${sidePanelBgColor}`,
                    margin: '1rem 0',
                  }}
                ></div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                  }}
                >
                  <div style={{ width: '70%' }}>
                    {data.left.map((leftData, index) => (
                      <div
                        style={{ color: sidePanelTextColor }}
                        className={`section_heading  `}
                      >
                        {/* Heading */}
                        {leftData.heading ===
                        'none' ? null : leftData.header ? (
                          <div
                            className={`${headingTextStyleConditions} ${headingTextSizeConditions}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              {leftData.protip && (
                                <svg
                                  className='builder_protip'
                                  style={{ display: showProtip ? '' : 'none' }}
                                  viewBox='0 0 24 24'
                                  width='17px'
                                  fill='#000000'
                                  onClick={() =>
                                    proTips_Modal(
                                      leftData.protip &&
                                        BuilderProtip(leftData.protip)
                                          .BuilderProtip.heading,
                                      leftData.protip &&
                                        BuilderProtip(leftData.protip)
                                          .BuilderProtip.body
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
                                content={leftData.name}
                                setEditorData={leftData.setName}
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`${headingTextStyleConditions} ${headingTextSizeConditions}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              {leftData.name && (
                                <svg
                                  className='builder_protip'
                                  style={{ display: showProtip ? '' : 'none' }}
                                  viewBox='0 0 24 24'
                                  width='17px'
                                  fill='#000000'
                                  onClick={() =>
                                    proTips_Modal(
                                      leftData.name &&
                                        BuilderProtip(leftData.name)
                                          .BuilderProtip.heading,
                                      leftData.name &&
                                        BuilderProtip(leftData.name)
                                          .BuilderProtip.body
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
                                content={leftData.heading}
                                setEditorData={leftData.setHeading}
                              />
                            </div>
                          </div>
                        )}

                        {/* Description */}
                        {leftData.description ===
                        'none' ? null : leftData.header ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            <BuilderEditor
                              readOnly={readOnly}
                              key={index + 2}
                              content={leftData.position}
                              setEditorData={leftData.setPosition}
                            />
                          </div>
                        ) : leftData.type === 'contact' ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {leftData.contactType.map((type, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        leftData.contactType.findIndex(
                                          (e) => e.key === type.key
                                        );
                                      delete_subsection_Modal(
                                        leftData.contactType,
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
                                      const findIndex =
                                        leftData.contactType.findIndex(
                                          (e) => e.key === type.key
                                        );
                                      const arr = array_copy(
                                        leftData.contactType,
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
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    gap: '1rem',
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '28px',
                                      height: '28px',
                                      borderRadius: '100%',
                                      background: sidePanelBgColor,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    {type.type === 'phone' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='20px'
                                        viewBox='0 0 24 24'
                                        width='20px'
                                        fill='#ffffff'
                                      >
                                        <path d='M0 0h24v24H0V0z' fill='none' />
                                        <path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' />
                                      </svg>
                                    ) : type.type === 'email' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='20px'
                                        viewBox='0 0 24 24'
                                        width='20px'
                                        fill='#ffffff'
                                      >
                                        <path d='M0 0h24v24H0V0z' fill='none' />
                                        <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
                                      </svg>
                                    ) : type.type === 'address' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='20px'
                                        viewBox='0 0 24 24'
                                        width='20px'
                                        fill='#ffffff'
                                      >
                                        <path d='M0 0h24v24H0V0z' fill='none' />
                                        <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
                                      </svg>
                                    ) : type.type === 'website' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='20px'
                                        viewBox='0 0 24 24'
                                        width='20px'
                                        fill='#ffffff'
                                      >
                                        <path d='M0 0h24v24H0V0z' fill='none' />
                                        <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z' />
                                      </svg>
                                    ) : null}
                                  </div>
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 2}
                                    content={type.name}
                                    setEditorData={type.setName}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : leftData.type === 'skills' ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {leftData.description.map((descp, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        leftData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        leftData.description,
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
                                      const findIndex =
                                        leftData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        leftData.description,
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

                                <BuilderEditor
                                  readOnly={readOnly}
                                  key={index + 2}
                                  content={descp.type}
                                  setEditorData={descp.setType}
                                />

                                {descp.description.map((skill, index) => (
                                  <div
                                    key={index}
                                    className='template_1_subSection section'
                                  >
                                    <div
                                      key={index + 1}
                                      className={`template_2_description ${bodyTextStyleConditions} ${bodyTextSizeConditions} `}
                                      style={{ color: sidePanelTextColor }}
                                    >
                                      <div style={{ width: '40%' }}>
                                        <BuilderEditor
                                          readOnly={readOnly}
                                          content={skill.name}
                                          setEditorData={skill.setName}
                                        />
                                      </div>
                                      <div
                                        style={{ width: '40%' }}
                                        onClick={() => {
                                          changeExperticeModal(
                                            descp.description
                                          );
                                          dataOnRight();
                                          setTemp(index + 1);
                                        }}
                                      >
                                        {/* <div style={{cursor: 'pointer'}} onClick={() => changeExperticeModal(descp.expertice)} className='progressBarContainer'> */}
                                        <div
                                          style={{
                                            background: '#666666',
                                            height: '10px',
                                            cursor: 'pointer',
                                          }}
                                          className=''
                                        >
                                          <div
                                            style={{
                                              background: sidePanelBgColor,
                                              height: '10px',
                                              width: skill.expertice + '%',
                                            }}
                                            className=''
                                          >
                                            {' '}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : leftData.type === 'interests' ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                            style={{
                              display: 'flex',
                              justifyContent: 'start',
                              alignItems: 'center',
                              gap: '1rem',
                              flexWrap: 'wrap',
                            }}
                          >
                            {leftData.description.map((descp, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        leftData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        leftData.description,
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
                                      const findIndex =
                                        leftData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        leftData.description,
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

                                <div>
                                  <div
                                    style={{
                                      width: '40px',
                                      height: '40px',
                                      border: `1px solid ${sidePanelBgColor}`,
                                      borderRadius: '100%',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    {descp.name === 'football' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#69615F'
                                        enable-background='new 0 0 24 24'
                                        height='35px'
                                        viewBox='0 0 24 24'
                                        width='35px'
                                      >
                                        <g>
                                          <rect
                                            fill='none'
                                            height='24'
                                            width='24'
                                          />
                                        </g>
                                        <g>
                                          <g>
                                            <path d='M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,5.3l1.35-0.95 c1.82,0.56,3.37,1.76,4.38,3.34l-0.39,1.34l-1.35,0.46L13,6.7V5.3z M9.65,4.35L11,5.3v1.4L7.01,9.49L5.66,9.03L5.27,7.69 C6.28,6.12,7.83,4.92,9.65,4.35z M7.08,17.11l-1.14,0.1C4.73,15.81,4,13.99,4,12c0-0.12,0.01-0.23,0.02-0.35l1-0.73L6.4,11.4 l1.46,4.34L7.08,17.11z M14.5,19.59C13.71,19.85,12.87,20,12,20s-1.71-0.15-2.5-0.41l-0.69-1.49L9.45,17h5.11l0.64,1.11 L14.5,19.59z M14.27,15H9.73l-1.35-4.02L12,8.44l3.63,2.54L14.27,15z M18.06,17.21l-1.14-0.1l-0.79-1.37l1.46-4.34l1.39-0.47 l1,0.73C19.99,11.77,20,11.88,20,12C20,13.99,19.27,15.81,18.06,17.21z' />
                                          </g>
                                        </g>
                                      </svg>
                                    ) : descp.name === 'game' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#69615F'
                                        enable-background='new 0 0 24 24'
                                        height='35px'
                                        viewBox='0 0 24 24'
                                        width='35px'
                                      >
                                        <g>
                                          <rect
                                            fill='none'
                                            height='24'
                                            width='24'
                                          />
                                        </g>
                                        <g>
                                          <g>
                                            <path d='M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z' />
                                            <polygon points='9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10' />
                                            <circle cx='17' cy='12' r='1' />
                                            <circle cx='15' cy='9' r='1' />
                                          </g>
                                        </g>
                                      </svg>
                                    ) : descp.name === 'mic' ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#69615F'
                                        xmlnsXlink='http://www.w3.org/1999/xlink'
                                        width='30px'
                                        height='30px'
                                        x='0px'
                                        y='0px'
                                        viewBox='0 0 489.8 489.8'
                                        xmlSpace='preserve'
                                      >
                                        {' '}
                                        <g>
                                          {' '}
                                          <path d='M439.647,342c7.3-7.3,7.3-18.8,1-27.1l-171.8-215.1c-6.4-56.1-54.1-99.8-111.8-99.8c-62,0-112.5,50.5-112.5,112.5 c0,58.6,45.1,106.9,102.4,112l213.4,170.5c11.3,8.4,22.9,2.1,28.1-2.1l7.3-7.3c2.6,5.8,4.1,12.1,4.1,18.8c0,11.5-5.2,24-13.6,32.3 c-17.7,17.7-48,17.7-65.7,0l-123-123c-10.4-10.4-24-15.6-38.6-15.6s-28.1,5.2-38.6,15.6c-20.9,20.9-20.9,56.3,0,77.1l84.4,84.4 c8.3,8.3,20.9,8.3,29.2,0s8.3-20.9,0-29.2l-84.4-84.4c-5.2-6.3-5.2-14.6,0-19.8c5.2-5.2,14.6-5.2,19.8,0l122,123 c16.7,16.7,39.6,25,61.5,25c22.9,0,44.8-8.3,62.6-24c16.7-16.7,26.1-38.6,26.1-61.5c0-17.6-5.5-34.5-15.6-49L439.647,342z M85.547,112.6c0-39.4,32.1-71.5,71.5-71.5c36.6,0,66.8,27.6,71,63.1l-79.4,79.4C113.147,179.4,85.547,149.2,85.547,112.6zM370.747,351.3l-185.6-148l62.6-62.6l148,185.6L370.747,351.3z' />{' '}
                                        </g>{' '}
                                      </svg>
                                    ) : null}
                                  </div>
                                  <div>
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      key={index + 2}
                                      content={descp.icon}
                                      setEditorData={descp.setIcon}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            <BuilderEditor
                              readOnly={readOnly}
                              key={index + 2}
                              content={leftData.description}
                              setEditorData={leftData.setDescription}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{ height: '70%', position: 'absolute', left: '35%' }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        position: 'absolute',
                        left: '-4px',
                        background: sidePanelBgColor,
                        border: `1px solid ${sidePanelBgColor}`,
                        borderRadius: '100%',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '1px',
                        position: 'absolute',
                        height: '100%',
                        border: `1px solid ${sidePanelBgColor}`,
                      }}
                    ></div>
                  </div>

                  <div style={{ width: '120%' }}>
                    {data.right.map((rightData, index) => (
                      <div
                        style={{ color: sidePanelTextColor }}
                        className={`section_heading   
																				${headingTextStyleConditions} ${headingTextSizeConditions} `}
                      >
                        {/* Heading */}
                        {rightData.heading ===
                        'none' ? null : rightData.header ? (
                          <div
                            className={`${headingTextStyleConditions} ${headingTextSizeConditions}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              {rightData.name && (
                                <svg
                                  className='builder_protip'
                                  style={{ display: showProtip ? '' : 'none' }}
                                  viewBox='0 0 24 24'
                                  width='17px'
                                  fill='#000000'
                                  onClick={() =>
                                    proTips_Modal(
                                      rightData.protip &&
                                        BuilderProtip(rightData.protip)
                                          .BuilderProtip.heading,
                                      rightData.protip &&
                                        BuilderProtip(rightData.protip)
                                          .BuilderProtip.body
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
                                content={rightData.heading}
                                setEditorData={rightData.setHeading}
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`${headingTextStyleConditions} ${headingTextSizeConditions}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              {rightData.name && (
                                <svg
                                  className='builder_protip'
                                  style={{ display: showProtip ? '' : 'none' }}
                                  viewBox='0 0 24 24'
                                  width='17px'
                                  fill='#000000'
                                  onClick={() =>
                                    proTips_Modal(
                                      rightData.name &&
                                        BuilderProtip(rightData.name)
                                          .BuilderProtip.heading,
                                      rightData.name &&
                                        BuilderProtip(rightData.name)
                                          .BuilderProtip.body
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
                                content={rightData.heading}
                                setEditorData={rightData.setHeading}
                              />
                            </div>
                          </div>
                        )}

                        {/* Description */}
                        {rightData.description ===
                        'none' ? null : rightData.header ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {rightData.description.map((descp, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        rightData.description,
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
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        rightData.description,
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

                                <BuilderEditor
                                  readOnly={readOnly}
                                  key={index + 2}
                                  content={descp.description}
                                  setEditorData={descp.setDescription}
                                />
                              </div>
                            ))}
                          </div>
                        ) : rightData.type === 'education' ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {rightData.description.map((descp, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        rightData.description,
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
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        rightData.description,
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

                                <div>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      key={index + 2}
                                      content={descp.heading}
                                      setEditorData={descp.setHeading}
                                    />
                                    <BuilderEditor
                                      readOnly={readOnly}
                                      key={index + 2}
                                      content={descp.tenure}
                                      setEditorData={descp.setTenure}
                                    />
                                  </div>
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 2}
                                    content={descp.name}
                                    setEditorData={descp.setName}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : rightData.type === 'experience' ? (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {rightData.description.map((descp, index) => (
                              <div
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        rightData.description,
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
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        rightData.description,
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

                                <div>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'start',
                                    }}
                                  >
                                    <div style={{ width: '50%' }}>
                                      <BuilderEditor
                                        readOnly={readOnly}
                                        key={index + 2}
                                        content={descp.heading}
                                        setEditorData={descp.setHeading}
                                      />
                                    </div>
                                    <div>
                                      <BuilderEditor
                                        readOnly={readOnly}
                                        key={index + 2}
                                        content={descp.tenure}
                                        setEditorData={descp.setTenure}
                                      />
                                    </div>
                                  </div>
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 2}
                                    content={descp.description}
                                    setEditorData={descp.setDescription}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : rightData.type === 'certifications' ? (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'start',
                              flexWrap: 'wrap',
                            }}
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            {rightData.description.map((descp, index) => (
                              <div
                                style={{ width: '50%' }}
                                key={index}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        rightData.description,
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
                                      const findIndex =
                                        rightData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        rightData.description,
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

                                <div>
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 2}
                                    content={descp.description}
                                    setEditorData={descp.setDescription}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            className={`${bodyTextStyleConditions} ${bodyTextSizeConditions}`}
                          >
                            <BuilderEditor
                              readOnly={readOnly}
                              key={index + 2}
                              content={rightData.description}
                              setEditorData={rightData.setDescription}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div style={{display: index === 0 ? 'none' : 'block'}} className='Template_3_divider_main'></div> */}
              </div>
            </div>
          }
        </>
      ));
  }

  useEffect(() => {
    dataOnRight();
    // dataOnLeft()
  }, [dataUpdatableRight, dataUpdatableLeft]);

  // const rightSectionHeight = rightMainRef.current.clientHeight;

  // // setTimeout(() => // console.log(rightSectionHeight), 0)
  // // console.log(rightSectionHeight)

  return (
    <div className='blankTemplate_page'>
      <div
        style={{ background: sidePanelBgColor }}
        className={`Template_3_sidebar ${
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
        {/* {dataOnLeft()} */}
      </div>
      <div
        style={{ background: mainPanelBgColor }}
        className={`Template_7_main ${
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
    </div>
  );
};

export default Template7;
