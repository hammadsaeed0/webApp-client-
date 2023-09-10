import React, { useState } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';
import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function ChooseTemplate() {
  const history = useHistory();

  const [filterResume, setFilterResume] = useState('All');

  const dropdownOptions = ['All', 'Resumes', 'Executive Resumes'];
  const defaultDropdownOption = dropdownOptions[0];

  const [chosenTemplate, setChosenTemplate] = useState('template_1');

  const chooseTemplateData = [
    {
      name: 'template_1',
      img: '/assets/images/Templates/template_1.png',
      alt: 'template_1',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_2',
      img: '/assets/images/Templates/template_2.png',
      alt: 'template_2',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_3',
      img: '/assets/images/Templates/template_3.png',
      alt: 'template_3',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_4',
      img: '/assets/images/Templates/template_4.png',
      alt: 'template_4',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_5',
      img: '/assets/images/Templates/template_5.png',
      alt: 'template_5',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_6',
      img: '/assets/images/Templates/template_6.png',
      alt: 'template_6',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_7',
      img: '/assets/images/Templates/template_7.png',
      alt: 'template_7',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_8',
      img: '/assets/images/Templates/template_8.png',
      alt: 'template_8',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_9',
      img: '/assets/images/Templates/template_9.png',
      alt: 'template_9',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_10',
      img: '/assets/images/Templates/template_10.png',
      alt: 'template_10',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_11',
      img: '/assets/images/Templates/template_11.png',
      alt: 'template_11',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_12',
      img: '/assets/images/Templates/template_12.png',
      alt: 'template_12',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_13',
      img: '/assets/images/Templates/template_13.png',
      alt: 'template_13',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_14',
      img: '/assets/images/Templates/template_14.png',
      alt: 'template_14',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_15',
      img: '/assets/images/Templates/template_15.png',
      alt: 'template_15',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_16',
      img: '/assets/images/Templates/template_16.png',
      alt: 'template_16',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_17',
      img: '/assets/images/Templates/template_17.png',
      alt: 'template_17',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_18',
      img: '/assets/images/Templates/template_18.png',
      alt: 'template_18',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_19',
      img: '/assets/images/Templates/template_19.png',
      alt: 'template_19',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_20',
      img: '/assets/images/Templates/template_20.png',
      alt: 'template_20',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_21',
      img: '/assets/images/Templates/template_21.png',
      alt: 'template_21',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_22',
      img: '/assets/images/Templates/template_22.png',
      alt: 'template_22',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_23',
      img: '/assets/images/Templates/template_23.png',
      alt: 'template_23',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_24',
      img: '/assets/images/Templates/template_24.png',
      alt: 'template_24',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_25',
      img: '/assets/images/Templates/template_25.png',
      alt: 'template_25',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_26',
      img: '/assets/images/Templates/template_26.png',
      alt: 'template_26',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_27',
      img: '/assets/images/Templates/template_27.png',
      alt: 'template_27',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_28',
      img: '/assets/images/Templates/template_28.png',
      alt: 'template_28',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_29',
      img: '/assets/images/Templates/template_29.png',
      alt: 'template_29',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_30',
      img: '/assets/images/Templates/template_30.png',
      alt: 'template_30',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: null,
      img: null,
      alt: null,
      section: 'separator',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_1',
      img: '/assets/images/Templates/executiveTemplate_1.png',
      alt: 'executiveTemplate_1',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_2',
      img: '/assets/images/Templates/executiveTemplate_2.png',
      alt: 'executiveTemplate_2',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_3',
      img: '/assets/images/Templates/executiveTemplate_3.png',
      alt: 'executiveTemplate_3',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_4',
      img: '/assets/images/Templates/executiveTemplate_4.png',
      alt: 'executiveTemplate_4',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_5',
      img: '/assets/images/Templates/executiveTemplate_5.png',
      alt: 'executiveTemplate_5',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_6',
      img: '/assets/images/Templates/executiveTemplate_6.png',
      alt: 'executiveTemplate_6',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_7',
      img: '/assets/images/Templates/executiveTemplate_7.png',
      alt: 'executiveTemplate_7',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_8',
      img: '/assets/images/Templates/executiveTemplate_8.png',
      alt: 'executiveTemplate_8',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_9',
      img: '/assets/images/Templates/executiveTemplate_9.png',
      alt: 'executiveTemplate_9',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_10',
      img: '/assets/images/Templates/executiveTemplate_10.png',
      alt: 'executiveTemplate_10',
      type: 'Executive Resumes',
      sort: 'all',
    },
  ];

  return (
    <>
      <BuilderHeader builderData={{ length: 0 }} />
      <div className='chooseTemplate'>
        <div className='chooseTemplate_heading'>
          Choose A Template to Get Started
          <div
            style={{ textAlign: 'start' }}
            className='chooseTemplateDropdown'
          >
            <Dropdown
              className='dropdown dropdown_chooseTemplate'
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
                    onClick={() => history.push(`/builder/${template.name}`)}
                    className='template_box'
                  >
                    <img src={template.img} alt={template.alt} />
                    <button
                      onClick={() => history.push(`/builder/${template.name}`)}
                    >
                      Use Template
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
