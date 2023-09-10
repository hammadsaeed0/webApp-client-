import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Accordion from 'react-bootstrap/Accordion';

export default function ProfileSidebar({ page, userData }) {
  // console.log(userData);

  const imageUrl = localStorage.getItem('imageUrl');
  return (
    <div className='profile_sidebar_resume'>
      <div>
        <div className='profile_photo'>
          <img
            className='profile_photo_pic'
            src={
              imageUrl
                ? imageUrl
                : userData.profileImg
                ? userData.profileImg
                : '/assets/images/profile_new.jpg'
            }
            alt='Profile'
          />
          {userData ? (
            userData.firstName + ' ' + userData.lastName
          ) : (
            <Skeleton className='profile_loader' />
          )}
        </div>
        <div className='sidebar_content'>
          <Link to='/profile/dashboard'>
            <div className={page === 'dashboard' && 'active'}>
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
          <Link to='/profile/resume'>
            <div className={page === 'resume' && 'active'}>
              <img
                src='/assets/images/resume_profile.png'
                alt='resume_profile'
              />
              My Resume
            </div>
          </Link>
          <Link to='/profile/cover_letter'>
            <div className={page === 'cover_letter' && 'active'}>
              <img
                src='/assets/images/cover_letter_profile.png'
                alt='cover_letter_profile'
              />
              Cover Letter
            </div>
          </Link>
          <Link style={{ display: 'none' }} to='/profile/linkedIn'>
            {' '}
            <div className={page === 'linkedIn' && 'active'}>
              <img
                src='/assets/images/linkedIn_profile.png'
                alt='linkedIn_profile'
              />
              LinkedIn Profile
            </div>
          </Link>
          <Accordion
            className='proTips_Accordian profile_Accordian'
            flush
            defaultActiveKey={
              page === 'linkedIn_headline' || page === 'linkedIn_summary'
                ? '1'
                : null
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
                  page === 'linkedIn_headline'
                    ? 'accordian_body_inverted'
                    : null
                }`}
              >
                <Link to='/profile/linkedIn_headline'>
                  {/* <img
                    src='/assets/images/linkedIn_profile.png'
                    alt='linkedIn_profile'
                  /> */}
                  LInkedIn Headline
                </Link>
              </Accordion.Body>
              <Accordion.Body
                className={`proTips_Accordian_Body ${
                  page === 'linkedIn_summary' ? 'accordian_body_inverted' : null
                }`}
              >
                <Link to='/profile/linkedIn_summary'>
                  {/* <img
                    src='/assets/images/linkedIn_profile.png'
                    alt='linkedIn_profile'
                  /> */}
                  Linkedin Summary
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Link to='/subscription'>
            {' '}
            <div className={page === 'subscription' && 'active'}>
              <svg
                version='1.1'
                id='Layer_1'
                x='0px'
                y='0px'
                viewBox='0 0 122.88 109.93'
                width='25px'
                fill='#fff'
              >
                <g>
                  <path d='M115.47,65.19c-2.39,12.7-9.16,23.86-18.67,31.85c-9.57,8.04-21.89,12.88-35.33,12.88c-12.63,0-24.28-4.27-33.57-11.45 C18.4,91.14,11.38,80.77,8.27,68.81l6.86-1.78c2.7,10.41,8.82,19.44,17.09,25.83c8.08,6.24,18.22,9.95,29.24,9.95 c11.73,0,22.47-4.21,30.78-11.19c7.95-6.68,13.7-15.91,15.98-26.44h-7.33l10.99-13.39l10.99,13.39H115.47L115.47,65.19z M61.29,69.07V56.52c-4.42-1.12-7.65-2.81-9.7-5.07c-2.06-2.27-3.1-5.02-3.1-8.26c0-3.28,1.17-6.04,3.5-8.26 c2.33-2.23,5.43-3.51,9.3-3.85v-2.95h4.94v2.95c3.62,0.38,6.49,1.47,8.64,3.26c2.13,1.79,3.5,4.19,4.09,7.19l-8.63,0.98 c-0.53-2.36-1.9-3.96-4.1-4.8v11.71c5.46,1.29,9.18,2.98,11.15,5.04c1.98,2.07,2.97,4.72,2.97,7.96c0,3.62-1.24,6.66-3.73,9.14 c-2.49,2.48-5.95,4.02-10.39,4.63v5.6h-4.94v-5.53c-3.9-0.42-7.06-1.69-9.51-3.83c-2.45-2.14-4-5.17-4.68-9.08l8.83-0.92 c0.36,1.6,1.04,2.97,2.04,4.13C58.97,67.72,60.07,68.55,61.29,69.07L61.29,69.07z M61.29,37.6c-1.33,0.42-2.38,1.11-3.15,2.07 c-0.78,0.96-1.16,2.02-1.16,3.18c0,1.06,0.35,2.04,1.06,2.95c0.71,0.9,1.8,1.64,3.26,2.19V37.6L61.29,37.6z M66.23,69.57 c1.7-0.33,3.1-1.05,4.16-2.15C71.47,66.31,72,65.01,72,63.5c0-1.33-0.45-2.49-1.36-3.45c-0.89-0.97-2.36-1.71-4.42-2.23V69.57 L66.23,69.57z M7.46,44.74C9.83,32.15,16.5,21.08,25.87,13.1C35.47,4.93,47.9,0,61.46,0c11.93,0,22.97,3.8,31.98,10.26 c9.25,6.63,16.35,16.06,20.08,27.06l-3.36,1.14l-3.36,1.14c-0.09-0.28-0.19-0.56-0.29-0.83c-3.31-9.21-9.38-17.11-17.2-22.72 c-7.84-5.62-17.45-8.93-27.84-8.93c-11.84,0-22.67,4.28-31.01,11.38c-7.84,6.67-13.49,15.82-15.76,26.24h7.29L10.99,58.13L0,44.74 H7.46L7.46,44.74z' />
                </g>
              </svg>
              My subscriptions
            </div>
          </Link>
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
