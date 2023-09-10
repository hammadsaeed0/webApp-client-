import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

export default function Sidebar({ userData }) {
  const { page } = useParams();

  return (
    <div className='profile_sidebar_resume admin_sidebar'>
      <div>
        <div className='sidebar_content'>
          <Link to='/admin/dashboard'>
            <div
              className={
                (page === 'dashboard' || page === undefined) && 'active'
              }
            >
              <svg
                fill='#ffffff'
                viewBox='0 0 48 48'
                width='22px'
                height='22px'
              >
                <path d='M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z' />
              </svg>
              Dashboard
            </div>
          </Link>
          <Link to='/admin/all_users'>
            <div className={page === 'all_users' && 'active'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                width='22px'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
              All Users
            </div>
          </Link>
          <Accordion
            className='proTips_Accordian profile_Accordian'
            flush
            defaultActiveKey={
              page === 'linkedIn' || page === 'linkedIn_createNew' ? '1' : null
            }
          >
            <Accordion.Item className='proTips_Accordian_Item' eventKey='1'>
              <Accordion.Header className='proTips_Accordian_Header'>
                <div>
                  <span className='proTips_Accordian_Header_linkedIn_svg'>
                    <img
                      src='/assets/images/linkedIn_profile.png'
                      alt='linkedIn_profile'
                    />
                  </span>
                  LinkedIn
                </div>
                <span className='proTips_Accordian_Header_expand_svg'>
                  <svg viewBox='0 0 24 24' width='20px' fill='#fff'>
                    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
                    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
                  </svg>
                </span>
              </Accordion.Header>
              <Accordion.Body
                className={`proTips_Accordian_Body ${
                  page === 'linkedIn' ? 'accordian_body_inverted' : null
                }`}
              >
                <Link to='/admin/linkedIn'>
                  {/* <img
                    src='/assets/images/linkedIn_profile.png'
                    alt='linkedIn_profile'
                  /> */}
                  View All
                </Link>
              </Accordion.Body>
              <Accordion.Body
                className={`proTips_Accordian_Body ${
                  page === 'linkedIn_createNew'
                    ? 'accordian_body_inverted'
                    : null
                }`}
              >
                <Link to='/admin/linkedIn_createNew'>
                  {/* <img
                    src='/assets/images/linkedIn_profile.png'
                    alt='linkedIn_profile'
                  /> */}
                  Create New
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            {' '}
            <a
              href='https://cvjury.com/help-desk/'
              target={'_blank'}
              rel='noreferrer'
            >
              <img src='/assets/images/help_profile.png' alt='help_profile' />
              Help
            </a>
          </div>
        </div>
      </div>
      <div className='footer'>© 2022 CVJURY</div>
      {/* <button className='contact'>Contact us</button> */}
    </div>
  );
}
