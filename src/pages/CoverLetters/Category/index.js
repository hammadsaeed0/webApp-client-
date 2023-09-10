import React, { useState, useRef } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';

import BuilderHeader from '../../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Category() {
  const history = useHistory();

  const [filterResume, setFilterResume] = useState('All');

  const dropdownOptions = [
    'All',
    'STANDARD',
    'CURRENTLY EMPLOYED',
    'NOT CURRENTLY EMPLOYED',
    'CAREER CHANGE',
    'RECENT GRADUATE',
  ];
  const defaultDropdownOption = dropdownOptions[0];

  const [chosenTemplate, setChosenTemplate] = useState('template_1');

  const chooseTemplateData = [
    {
      name: 'standard',
      heading: 'For any job application',
      img: '/assets/images/CoverLetters/Category/standard.png',
      alt: 'category_1',
      type: 'STANDARD',
      sort: 'all',
    },
    {
      name: 'currently_employed_1',
      heading: 'Seeking expert/consultant position',
      img: '/assets/images/CoverLetters/Category/currently_employed_1.png',
      alt: 'category_2',
      type: 'CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'currently_employed_2',
      heading: 'Seeking any other career goal',
      img: '/assets/images/CoverLetters/Category/currently_employed_2.png',
      alt: 'category_3',
      type: 'CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'currently_employed_3',
      heading: 'Seeking higher position',
      img: '/assets/images/CoverLetters/Category/currently_employed_3.png',
      alt: 'category_4',
      type: 'CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'not_currently_employed_but_experienced',
      heading: 'Returning to work after layoff ',
      img: '/assets/images/CoverLetters/Category/not_currently_employed_but_experienced.png',
      alt: 'category_5',
      type: 'NOT CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'recent_graduate_with_internship_experience',
      heading: 'Intern experience',
      img: '/assets/images/CoverLetters/Category/recent_graduate_with_internship_experience.png',
      alt: 'category_6',
      type: 'RECENT GRADUATE',
      sort: 'all',
    },
    {
      name: 'recent_graduate_no_internship_experience',
      heading: 'No intern experience',
      img: '/assets/images/CoverLetters/Category/recent_graduate_no_internship_experience.png',
      alt: 'category_7',
      type: 'RECENT GRADUATE',
      sort: 'all',
    },
    {
      name: 'career_change_1',
      heading: 'Change within same industry',
      img: '/assets/images/CoverLetters/Category/career_change_1.png',
      alt: 'category_8',
      type: 'CAREER CHANGE',
      sort: 'all',
    },
    {
      name: 'career_change_2',
      heading: 'Change to different sector/industry',
      img: '/assets/images/CoverLetters/Category/career_change_2.png',
      alt: 'category_9',
      type: 'CAREER CHANGE',
      sort: 'all',
    },
    {
      name: 'career_change_3',
      heading: 'Any other career change reasons',
      img: '/assets/images/CoverLetters/Category/career_change_3.png',
      alt: 'category_10',
      type: 'CAREER CHANGE',
      sort: 'all',
    },
    {
      name: 'triple_part_strategy',
      heading: 'Seeking junior level position',
      img: '/assets/images/CoverLetters/Category/triple_part_strategy.png',
      alt: 'category_11',
      type: 'CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'purpose_changes',
      heading: 'Returning to work after a professional certification',
      img: '/assets/images/CoverLetters/Category/purpose_changes.png',
      alt: 'category_12',
      type: 'NOT CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'what_you_can_offer',
      heading: 'Returning to work after contract ended',
      img: '/assets/images/CoverLetters/Category/what_you_can_offer.png',
      alt: 'category_13',
      type: 'NOT CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'harp_on_previous_results',
      heading: 'Retuning to work after maternity/paternity leave',
      img: '/assets/images/CoverLetters/Category/harp_on_previous_results.png',
      alt: 'category_14',
      type: 'NOT CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'weave_in_a_story',
      heading: 'Seeking first managerial position',
      img: '/assets/images/CoverLetters/Category/weave_in_a_story.png',
      alt: 'category_15',
      type: 'CURRENTLY EMPLOYED',
      sort: 'all',
    },
    {
      name: 'bring_relevant_case_study',
      heading: 'Returning to work after working on own business',
      img: '/assets/images/CoverLetters/Category/bring_relevant_case_study.png',
      alt: 'category_16',
      type: 'NOT CURRENTLY EMPLOYED',
      sort: 'all',
    },
  ];

  return (
    <>
      <BuilderHeader builderData={{ length: 0 }} coverLetter={true} />
      <div className='chooseTemplate'>
        <div className='chooseTemplate_heading'>
          <h1>16 Best Cover Letter Templates</h1>
          Choose A Category to Get Started
          <h6 style={{ marginTop: '1rem' }}>
            Never rely on boring generic cover letters! Instead, follow our
            approach that satisfies the hiring manager’s <br />
            job description 100%. Make a lasting impression with a
            fit-for-purpose cover letter.
          </h6>
          <div
            style={{ textAlign: 'start' }}
            className='chooseTemplateDropdown'
          >
            <Dropdown
              className='dropdown dropdown_chooseTemplate category_dropdown_chooseTemplate'
              options={dropdownOptions}
              value={defaultDropdownOption}
              onChange={(e) => setFilterResume(e.value)}
              placeholder='Select an option'
            />
          </div>
        </div>
        <div className='chooseTemplate_main'>
          {chooseTemplateData
            .filter((e) =>
              filterResume === 'STANDARD'
                ? e.type === 'STANDARD'
                : filterResume === 'CURRENTLY EMPLOYED'
                ? e.type === 'CURRENTLY EMPLOYED'
                : filterResume === 'NOT CURRENTLY EMPLOYED'
                ? e.type === 'NOT CURRENTLY EMPLOYED'
                : filterResume === 'CAREER CHANGE'
                ? e.type === 'CAREER CHANGE'
                : filterResume === 'RECENT GRADUATE'
                ? e.type === 'RECENT GRADUATE'
                : e.sort === 'all'
            )
            .map((template) => (
              <div className='template_wrapper category_template_wrapper'>
                <div
                  onClick={() => history.push(`/design/${template.name}`)}
                  className='template_box category_template_box sidebar_template_cover_letter'
                >
                  <div className='templateHeading'>{template.heading}</div>
                  <img src={template.img} alt={template.alt} />
                  <button
                    onClick={() => history.push(`/design/${template.name}`)}
                  >
                    Use Category
                  </button>
                </div>
              </div>
            ))}
        </div>
        <h6 style={{ marginTop: '3rem', color: '#ed9131' }}>
          *The categorisations are merely advisory, you can select any of the 16
          cover letter templates, then, amend it to fit your purpose or
          application.
        </h6>
      </div>
    </>
  );
}
