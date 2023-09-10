import React, { useState, useRef } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';
import BuilderHeader from '../../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Design() {
  const history = useHistory();
  const { category } = useParams();

  const [filterResume, setFilterResume] = useState('All');

  const dropdownOptions = ['All', 'Resumes', 'Executive Resumes'];
  const defaultDropdownOption = dropdownOptions[0];

  const [chosenTemplate, setChosenTemplate] = useState('template_1');

  const chooseTemplateData = [
    {
      name: 'design_1',
      img: '/assets/images/CoverLetters/Designs/design_1.png',
      alt: 'design_1',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_2',
      img: '/assets/images/CoverLetters/Designs/design_2.png',
      alt: 'design_2',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_3',
      img: '/assets/images/CoverLetters/Designs/design_3.png',
      alt: 'design_3',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_4',
      img: '/assets/images/CoverLetters/Designs/design_4.png',
      alt: 'design_4',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_5',
      img: '/assets/images/CoverLetters/Designs/design_5.png',
      alt: 'design_5',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_6',
      img: '/assets/images/CoverLetters/Designs/design_6.png',
      alt: 'design_6',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_7',
      img: '/assets/images/CoverLetters/Designs/design_7.png',
      alt: 'design_7',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_8',
      img: '/assets/images/CoverLetters/Designs/design_8.png',
      alt: 'design_8',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_9',
      img: '/assets/images/CoverLetters/Designs/design_9.png',
      alt: 'design_9',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_10',
      img: '/assets/images/CoverLetters/Designs/design_10.png',
      alt: 'design_10',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_11',
      img: '/assets/images/CoverLetters/Designs/design_11.png',
      alt: 'design_11',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_12',
      img: '/assets/images/CoverLetters/Designs/design_12.png',
      alt: 'design_12',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_13',
      img: '/assets/images/CoverLetters/Designs/design_13.png',
      alt: 'design_13',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_14',
      img: '/assets/images/CoverLetters/Designs/design_14.png',
      alt: 'design_14',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_15',
      img: '/assets/images/CoverLetters/Designs/design_15.png',
      alt: 'design_15',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_16',
      img: '/assets/images/CoverLetters/Designs/design_16.png',
      alt: 'design_16',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_17',
      img: '/assets/images/CoverLetters/Designs/design_17.png',
      alt: 'design_17',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_18',
      img: '/assets/images/CoverLetters/Designs/design_18.png',
      alt: 'design_18',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_19',
      img: '/assets/images/CoverLetters/Designs/design_19.png',
      alt: 'design_19',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_20',
      img: '/assets/images/CoverLetters/Designs/design_20.png',
      alt: 'design_20',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_21',
      img: '/assets/images/CoverLetters/Designs/design_21.png',
      alt: 'design_21',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_22',
      img: '/assets/images/CoverLetters/Designs/design_22.png',
      alt: 'design_22',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_23',
      img: '/assets/images/CoverLetters/Designs/design_23.png',
      alt: 'design_23',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_24',
      img: '/assets/images/CoverLetters/Designs/design_24.png',
      alt: 'design_24',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_25',
      img: '/assets/images/CoverLetters/Designs/design_25.png',
      alt: 'design_25',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_26',
      img: '/assets/images/CoverLetters/Designs/design_26.png',
      alt: 'design_26',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_27',
      img: '/assets/images/CoverLetters/Designs/design_27.png',
      alt: 'design_27',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_28',
      img: '/assets/images/CoverLetters/Designs/design_28.png',
      alt: 'design_28',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_29',
      img: '/assets/images/CoverLetters/Designs/design_29.png',
      alt: 'design_29',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_30',
      img: '/assets/images/CoverLetters/Designs/design_30.png',
      alt: 'design_30',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_31',
      img: '/assets/images/CoverLetters/Designs/design_31.png',
      alt: 'design_31',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_32',
      img: '/assets/images/CoverLetters/Designs/design_32.png',
      alt: 'design_32',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_33',
      img: '/assets/images/CoverLetters/Designs/design_33.png',
      alt: 'design_33',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_34',
      img: '/assets/images/CoverLetters/Designs/design_34.png',
      alt: 'design_34',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_35',
      img: '/assets/images/CoverLetters/Designs/design_35.png',
      alt: 'design_35',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_36',
      img: '/assets/images/CoverLetters/Designs/design_36.png',
      alt: 'design_36',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_37',
      img: '/assets/images/CoverLetters/Designs/design_37.png',
      alt: 'design_37',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_38',
      img: '/assets/images/CoverLetters/Designs/design_38.png',
      alt: 'design_38',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_39',
      img: '/assets/images/CoverLetters/Designs/design_39.png',
      alt: 'design_39',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'design_40',
      img: '/assets/images/CoverLetters/Designs/design_40.png',
      alt: 'design_40',
      type: 'Resumes',
      sort: 'all',
    },
  ];

  return (
    <>
      <BuilderHeader builderData={{ length: 0 }} coverLetter={true} />
      <div className='chooseTemplate'>
        <div className='chooseTemplate_heading'>
          Choose A Design to Get Started
          <div
            style={{ textAlign: 'start' }}
            className='chooseTemplateDropdown'
          >
            {/* <Dropdown
            className='dropdown dropdown_chooseTemplate'
            options={dropdownOptions}
            value={defaultDropdownOption}
            onChange={(e) => setFilterResume(e.value)}
            placeholder='Select an option'
          /> */}
          </div>
        </div>
        <div className='chooseTemplate_main'>
          {chooseTemplateData
            .filter((e) =>
              filterResume === 'Resumes'
                ? e.type === 'Resumes'
                : filterResume === 'Executive Resumes'
                ? e.type === 'Executive Resumes'
                : e.sort === 'all'
            )
            .map((template) =>
              template.section === 'separator' ? (
                <div className='executive_templates_separator'>
                  <span>Executive Resumes - Premium Resumes</span> <br />(
                  <span> For Mid-Managerial & Managerial Role Applicants</span>)
                </div>
              ) : (
                <div className='template_wrapper'>
                  <div
                    onClick={() =>
                      history.push(
                        `/CoverLetter/${category && category}/${template.name}`
                      )
                    }
                    className='template_box'
                  >
                    <img src={template.img} alt={template.alt} />
                    <button
                      onClick={() =>
                        history.push(
                          `/CoverLetter/${category && category}/${
                            template.name
                          }`
                        )
                      }
                    >
                      Use Category
                    </button>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
}
