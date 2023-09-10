import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import moment from 'moment';

import {
  getAllAccounts,
  get_resumes,
  get_cover_letters,
  get_user_linkedIn_Headline,
  get_user_linkedIn_Summary,
} from '../../../API/index';

export default function AdminDashboard() {
  const jwtToken = localStorage.getItem('jwtToken');

  const [accounts, setAccounts] = useState(false);
  const [resumes, setResumes] = useState(false);
  const [coverLetters, setCoverLetters] = useState(false);
  const [linkedinHeadlines, setLinkedinHeadlines] = useState(false);
  const [linkedinSummaries, setLinkedinSummaries] = useState(false);

  const [filterUsers, setFilterUsers] = useState('Total');
  const [filterRevenue, setFilterRevenue] = useState('Total');
  const dropdownOptions = [
    'Today',
    'Last Week',
    'This Month',
    'Last Month',
    'Total',
  ];
  const defaultDropdownOption = dropdownOptions[4];

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getUserNumbers = (accounts) => {
    let today = moment().format('YYYY-MM-DDThh:mm:ss');
    let lastWeek = moment()
      .subtract(1, 'weeks')
      .startOf('isoWeek')
      .format('YYYY-MM-DDThh:mm:ss');
    let lastMonth = moment()
      .subtract(1, 'months')
      .format('YYYY-MM-DDThh:mm:ss');
    let thisMonth = moment().startOf('month').format('YYYY-MM-DDThh:mm:ss');
    if (filterUsers === 'Total') {
      return accounts.length;
    } else if (filterUsers === 'Today') {
      return accounts.filter((e) => e.created === today).length;
    } else if (filterUsers === 'Last Week') {
      return accounts.filter((e) => e.created > lastWeek).length;
    } else if (filterUsers === 'Last Month') {
      return accounts.filter((e) => e.created > lastMonth).length;
    } else if (filterUsers === 'This Month') {
      return accounts.filter((e) => e.created > thisMonth).length;
    }
  };

  useEffect(() => {
    getAllAccounts(config).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setAccounts(res?.data);
      } else {
        setResumes([]);
      }
    });
    get_resumes().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setResumes(
          res?.data
            .sort((a, b) => a.created < b.created)
            .map((userResume) => ({
              ...userResume,
              documentData: JSON.parse(userResume.documentData),
            }))
        );
      } else if (res === 'Resume not found') {
        setResumes([]);
      }
    });
    get_cover_letters().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setCoverLetters(
          res?.data
            .sort((a, b) => a.created < b.created)
            .map((userCoverLetter) => ({
              ...userCoverLetter,
              documentData: JSON.parse(userCoverLetter.documentData),
            }))
        );
      } else if (res === 'Cover Letter not found') {
        setCoverLetters([]);
      }
    });
    get_user_linkedIn_Headline().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setLinkedinHeadlines(
          res?.data
            .sort((a, b) => a.created < b.created)
            .map((userLinkedInHeadline) => ({
              ...userLinkedInHeadline,
              documentData: JSON.parse(userLinkedInHeadline.documentData),
            }))
        );
      } else if (res === 'LinkedIn Headline not found') {
        setLinkedinHeadlines([]);
      }
    });
    get_user_linkedIn_Summary().then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setLinkedinSummaries(
          res?.data
            .sort((a, b) => a.created < b.created)
            .map((userLinkedInHeadline) => ({
              ...userLinkedInHeadline,
              documentData: JSON.parse(userLinkedInHeadline.documentData),
            }))
        );
      } else if (res === 'LinkedIn Summary not found') {
        setLinkedinSummaries([]);
      }
    });
  }, []);

  return (
    <div className='admin_dashboard'>
      <div className='dashboard_row'>
        <div className='total_container'>
          <h5>Total Assets Created </h5>
          <div className='total_counter'>
            <div className='total_counter_btn total_resumes'>
              <div className='total'>Total Resumes</div>
              <div className='icon'>
                <div>
                  <svg data-name='Layer 1' viewBox='0 0 512 512'>
                    <path d='M128.14,263.5a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,263.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,398.5Zm0-90a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,308.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,443.5ZM262.52,202.26v-5.63A47.44,47.44,0,0,0,224,150.07l-9.25-1.76a42.62,42.62,0,0,0,15.79-33.12V92.79a20.14,20.14,0,0,0-4.16-12.25,18.52,18.52,0,0,0,4.16-11.71V50.9a7.5,7.5,0,0,0-7.5-7.5H163.8c-11,0-18.67,10.68-18.67,20.27V91.16a6.84,6.84,0,0,0,.05.79c0,.28-.05.56-.05.84v22.4a42.62,42.62,0,0,0,15.79,33.12l-9.25,1.76a47.44,47.44,0,0,0-38.53,46.56v5.63a29,29,0,0,0,29,29h91.38A29,29,0,0,0,262.52,202.26ZM160.13,63.67c0-2.49,2.19-5.27,3.67-5.27h51.73V68.83a3.68,3.68,0,0,1-3.67,3.67,6.85,6.85,0,0,0-.79,0c-.28,0-.56,0-.84,0h-44.8a20.23,20.23,0,0,0-5.3.72Zm0,51.52V92.79a5.3,5.3,0,0,1,5.3-5.29h44.8a5.3,5.3,0,0,1,5.3,5.29v22.4a27.7,27.7,0,1,1-55.4,0Zm34.92,42.08v2.1a7.22,7.22,0,1,1-14.44,0v-2.1a42.35,42.35,0,0,0,14.44,0Zm-66.91,45v-5.63a32.44,32.44,0,0,1,26.33-31.83l11.38-2.16a22.22,22.22,0,0,0,44,0l11.38,2.16a32.44,32.44,0,0,1,26.33,31.83v5.63a14,14,0,0,1-14,14H142.14A14,14,0,0,1,128.14,202.26Zm0,151.24a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,353.5ZM391.36,216.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-30H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-141.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15ZM291.7,90h54.66a7.5,7.5,0,0,0,0-15H291.7a7.5,7.5,0,0,0,0,15ZM406.36,0H105.64a37.54,37.54,0,0,0-37.5,37.5v437a37.54,37.54,0,0,0,37.5,37.5H406.36a37.54,37.54,0,0,0,37.5-37.5V37.5A37.54,37.54,0,0,0,406.36,0Zm22.5,474.5a22.52,22.52,0,0,1-22.5,22.5H105.64a22.52,22.52,0,0,1-22.5-22.5V37.5A22.52,22.52,0,0,1,105.64,15H406.36a22.52,22.52,0,0,1,22.5,22.5Zm-37.5-76H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-180H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,90H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Z' />
                  </svg>
                </div>
              </div>
              <div className='count' style={{ position: 'relative' }}>
                {!resumes ? (
                  <div className='builder_loaderWrapper'>
                    <ThreeDots
                      wrapperStyle={{ top: '-3rem', right: '0' }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  resumes.length
                )}
              </div>
            </div>
            <div className='total_counter_btn total_cover_letters'>
              <div className='total'>Total Cover Letters</div>
              <div className='icon'>
                <div>
                  <svg viewBox='0 0 32 32'>
                    <path d='M4 28h2v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2zm20-2H4V2h20v24zm4-20v24H8v-2h16a2 2 0 0 0 2-2V6h2zM10 7a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2H11a1 1 0 0 0-1 1zm-3 7h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0 4h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0 4h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z' />
                  </svg>
                </div>
              </div>
              <div className='count' style={{ position: 'relative' }}>
                {!coverLetters ? (
                  <div className='builder_loaderWrapper'>
                    <ThreeDots
                      wrapperStyle={{ top: '-3rem', right: '0' }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  coverLetters.length
                )}
              </div>
            </div>
            <div className='total_counter_btn total_linkedIns_headline'>
              <div className='total'>Total LinkedIn Headlines</div>
              <div className='icon'>
                <div>
                  <svg viewBox='0 5 1036 990'>
                    <path d='M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z' />
                  </svg>
                </div>
              </div>
              <div className='count' style={{ position: 'relative' }}>
                {!linkedinHeadlines ? (
                  <div className='builder_loaderWrapper'>
                    <ThreeDots
                      wrapperStyle={{ top: '-3rem', right: '0' }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  linkedinHeadlines.length
                )}
              </div>
            </div>
            <div className='total_counter_btn total_linkedIns_summary'>
              <div className='total'>Total LinkedIn Summaries</div>
              <div className='icon'>
                <div>
                  <svg viewBox='0 5 1036 990'>
                    <path d='M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z' />
                  </svg>
                </div>
              </div>
              <div className='count' style={{ position: 'relative' }}>
                {!linkedinSummaries ? (
                  <div className='builder_loaderWrapper'>
                    <ThreeDots
                      wrapperStyle={{ top: '-3rem', right: '0' }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  linkedinSummaries.length
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='total_container user_count'>
          <h5>Total Users </h5>
          <div className='total_counter'>
            <div className='total_counter_btn total_resumes'>
              <div className='total total_counter_header'>
                <div>
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
                </div>
                <div className='sort_dropdown'>
                  <Dropdown
                    className=' dropdown_chooseTemplate category_dropdown_chooseTemplate'
                    options={dropdownOptions}
                    value={defaultDropdownOption}
                    onChange={(e) => setFilterUsers(e.value)}
                    placeholder='Select an option'
                  />
                </div>
              </div>
              <div
                className='icon'
                style={{ position: 'relative', fontSize: '72px' }}
              >
                {!accounts ? (
                  <div
                    className='builder_loaderWrapper'
                    style={{ border: 'none' }}
                  >
                    <ThreeDots
                      wrapperStyle={{
                        top: '-3rem',
                        border: 'none',
                      }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  getUserNumbers(accounts)
                )}
              </div>
              <div className='count'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard_row'>
        <div
          className='total_container linkedin_admin_view_main'
          style={{ minHeight: 'auto', padding: '0' }}
        >
          <h5>Top Users </h5>
          <div className='total_counter'>
            <table>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name</th>
                  <th>Resumes</th>
                  <th>Cover Letters</th>
                  <th>LinkedIns</th>
                </tr>
              </thead>

              <tbody style={{ position: 'relative' }}>
                <tr>
                  <td>1</td>
                  <td>Bharat</td>
                  <td>10</td>
                  <td>8</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='total_container user_count'>
          <h5>Total Revenue </h5>
          <div className='total_counter'>
            <div className='total_counter_btn total_resumes'>
              <div className='total total_counter_header'>
                <div>
                  <svg
                    version='1.1'
                    id='Layer_1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 122.88 109.93'
                    width='25px'
                    fill='#000'
                  >
                    <g>
                      <path d='M115.47,65.19c-2.39,12.7-9.16,23.86-18.67,31.85c-9.57,8.04-21.89,12.88-35.33,12.88c-12.63,0-24.28-4.27-33.57-11.45 C18.4,91.14,11.38,80.77,8.27,68.81l6.86-1.78c2.7,10.41,8.82,19.44,17.09,25.83c8.08,6.24,18.22,9.95,29.24,9.95 c11.73,0,22.47-4.21,30.78-11.19c7.95-6.68,13.7-15.91,15.98-26.44h-7.33l10.99-13.39l10.99,13.39H115.47L115.47,65.19z M61.29,69.07V56.52c-4.42-1.12-7.65-2.81-9.7-5.07c-2.06-2.27-3.1-5.02-3.1-8.26c0-3.28,1.17-6.04,3.5-8.26 c2.33-2.23,5.43-3.51,9.3-3.85v-2.95h4.94v2.95c3.62,0.38,6.49,1.47,8.64,3.26c2.13,1.79,3.5,4.19,4.09,7.19l-8.63,0.98 c-0.53-2.36-1.9-3.96-4.1-4.8v11.71c5.46,1.29,9.18,2.98,11.15,5.04c1.98,2.07,2.97,4.72,2.97,7.96c0,3.62-1.24,6.66-3.73,9.14 c-2.49,2.48-5.95,4.02-10.39,4.63v5.6h-4.94v-5.53c-3.9-0.42-7.06-1.69-9.51-3.83c-2.45-2.14-4-5.17-4.68-9.08l8.83-0.92 c0.36,1.6,1.04,2.97,2.04,4.13C58.97,67.72,60.07,68.55,61.29,69.07L61.29,69.07z M61.29,37.6c-1.33,0.42-2.38,1.11-3.15,2.07 c-0.78,0.96-1.16,2.02-1.16,3.18c0,1.06,0.35,2.04,1.06,2.95c0.71,0.9,1.8,1.64,3.26,2.19V37.6L61.29,37.6z M66.23,69.57 c1.7-0.33,3.1-1.05,4.16-2.15C71.47,66.31,72,65.01,72,63.5c0-1.33-0.45-2.49-1.36-3.45c-0.89-0.97-2.36-1.71-4.42-2.23V69.57 L66.23,69.57z M7.46,44.74C9.83,32.15,16.5,21.08,25.87,13.1C35.47,4.93,47.9,0,61.46,0c11.93,0,22.97,3.8,31.98,10.26 c9.25,6.63,16.35,16.06,20.08,27.06l-3.36,1.14l-3.36,1.14c-0.09-0.28-0.19-0.56-0.29-0.83c-3.31-9.21-9.38-17.11-17.2-22.72 c-7.84-5.62-17.45-8.93-27.84-8.93c-11.84,0-22.67,4.28-31.01,11.38c-7.84,6.67-13.49,15.82-15.76,26.24h7.29L10.99,58.13L0,44.74 H7.46L7.46,44.74z' />
                    </g>
                  </svg>
                </div>
                <div className='sort_dropdown'>
                  <Dropdown
                    className=' dropdown_chooseTemplate category_dropdown_chooseTemplate'
                    options={dropdownOptions}
                    value={defaultDropdownOption}
                    onChange={(e) => setFilterRevenue(e.value)}
                    placeholder='Select an option'
                  />
                </div>
              </div>
              <div className='icon' style={{ position: 'relative' }}>
                {!accounts ? (
                  <div
                    className='builder_loaderWrapper'
                    style={{ border: 'none' }}
                  >
                    <ThreeDots
                      wrapperStyle={{
                        top: '-3rem',
                        border: 'none',
                      }}
                      wrapperClass='builder_loader builder_profile_loader'
                    />
                  </div>
                ) : (
                  '$33k'
                )}
              </div>
              <div className='count' style={{ position: 'relative' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
