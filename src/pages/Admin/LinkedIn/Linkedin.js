import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Redirect, Link, useParams, useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import removeMarkdown from 'markdown-to-text';

import {
  get_linkedIn,
  delete_linkedIn,
  get_linkedIn_categories,
  delete_linkedIn_category,
  get_linkedIn_headings,
  delete_linkedIn_heading,
} from '../../../API/index';

export default function Linkedin() {
  const { id } = useParams();
  const history = useHistory();

  // // console.log('toggleView', id);
  const [viewToggle, setViewToggle] = useState(id || 'category');

  // <Skeleton className={'loader'} />

  const [linkedIn, setLinkedIn] = useState('');
  const [categories, setCategories] = useState('');
  const [linkedInHeadings, setLinkedInHeadings] = useState('');
  const [msg, setMsg] = useState();

  useEffect(() => {
    get_linkedIn_categories().then((res) => {
      // // console.log(res)
      if (res?.status === 200) {
        setCategories(res?.data);
      } else {
        setMsg(res);
      }
    });
    get_linkedIn_headings().then((res) => {
      // // console.log(res)
      if (res?.status === 200) {
        setLinkedInHeadings(res?.data);
      } else {
        setMsg(res);
      }
    });
    get_linkedIn().then((res) => {
      // // console.log(res)
      if (res?.status === 200) {
        setLinkedIn(res?.data);
      } else {
        setMsg(res);
      }
    });
  }, []);

  const [chosenCategory, setChosenCategory] = useState('All');
  const dropdownOptions = [
    'All',
    ...(categories && categories.map((e) => e.category)),
  ];
  const defaultDropdownOption = dropdownOptions[0];

  function handleDeleteTemplate(id, type) {
    // // console.log(id);
    if (type === 'template') {
      delete_linkedIn(id).then((res) => {
        // // console.log(res?.data.message);
        if (res?.status === 200) {
          // <Redirect to='/admin/linkedIn' />;
          setMsg([{ msg: res?.data.message, status: res?.status }]);
          get_linkedIn().then((res) => {
            if (res?.status === 200) {
              setLinkedIn(res?.data);
            }
          });
          setTimeout(() => {
            setMsg('');
          }, 1000);
        }
      });
    } else if (type === 'linkedIn_category') {
      delete_linkedIn_category(id).then((res) => {
        // // console.log(res?.data.message);
        if (res?.status === 200) {
          // <Redirect to='/admin/linkedIn' />;
          setMsg([{ msg: res?.data.message, status: res?.status }]);
          get_linkedIn_categories().then((res) => {
            if (res?.status === 200) {
              setCategories(res?.data);
            }
          });
          setTimeout(() => {
            setMsg('');
          }, 1000);
        }
      });
    } else if (type === 'linkedIn_heading') {
      delete_linkedIn_heading(id).then((res) => {
        // // console.log(res?.data.message);
        if (res?.status === 200) {
          // <Redirect to='/admin/linkedIn' />;
          setMsg([{ msg: res?.data.message, status: res?.status }]);
          get_linkedIn_headings().then((res) => {
            setLinkedInHeadings(res?.data);
          });
          setTimeout(() => {
            setMsg('');
          }, 1000);
        }
      });
    }
  }

  const delete_Modal = (id, type) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal'>
            <div>
              {/* <h1></h1> */}
              <p>By clicking it, You are deleting your data</p>
              <p>Do you want to Continue?</p>
              <div>
                <a href='#'>
                  <button onClick={() => onClose()}>No</button>
                </a>
                <a href='#'>
                  <button
                    onClick={(e) => (
                      e.preventDefault(),
                      handleDeleteTemplate(id, type),
                      onClose()
                    )}
                    className='login_modal_secondary_btn'
                  >
                    Yes
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  const LinkedInCategory = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Category</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody style={{ position: 'relative' }}>
          {categories ? (
            categories
              .sort((a, b) => a.created < b.created)
              .map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.category.substring(0, 30)}...</td>
                  <td>{formatDate(category.created)}</td>
                  <td className='linkedIn_table_actions'>
                    <Link
                      to={`/admin/linkedIn_view_category/${category.id}`}
                      style={{ display: 'block' }}
                      title='View'
                    >
                      <svg width='20px' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                    <Link
                      to={`/admin/linkedIn_update_category/${category.id}`}
                      title='Edit'
                    >
                      <svg viewBox='0 0 24 24' width='20px' fill='#000000'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                      </svg>
                    </Link>
                    <div
                      onClick={() =>
                        delete_Modal(category.id, 'linkedIn_category')
                      }
                      title='Delete'
                    >
                      <svg
                        width='20px'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#000'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <>
              <div className='builder_loaderWrapper'>
                <ThreeDots
                  wrapperStyle={{ left: '46%' }}
                  wrapperClass='builder_loader builder_profile_loader'
                />
              </div>
            </>
          )}
        </tbody>
      </table>
    );
  };

  const LinkedInHeading = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Category</th>
            <th>Headline</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody style={{ position: 'relative' }}>
          {linkedInHeadings ? (
            linkedInHeadings
              .sort((a, b) => a.created < b.created)
              .filter((e) =>
                chosenCategory === 'All'
                  ? e.heading_category !== ''
                  : e.heading_category === chosenCategory
              )
              .map((heading, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{heading.heading_category.substring(0, 30)}...</td>
                  <td>
                    {removeMarkdown(heading.heading_data).substring(0, 30)}...
                  </td>
                  <td>{formatDate(heading.created)}</td>
                  <td className='linkedIn_table_actions'>
                    <Link
                      to={`/admin/linkedIn_view_heading/${heading.id}`}
                      style={{ display: 'block' }}
                      title='View'
                    >
                      <svg width='20px' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                    <Link
                      to={`/admin/linkedIn_update_heading/${heading.id}`}
                      title='Edit'
                    >
                      <svg viewBox='0 0 24 24' width='20px' fill='#000000'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                      </svg>
                    </Link>
                    <div
                      onClick={() =>
                        delete_Modal(heading.id, 'linkedIn_heading')
                      }
                      title='Delete'
                    >
                      <svg
                        width='20px'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#000'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <>
              <div className='builder_loaderWrapper'>
                <ThreeDots
                  wrapperStyle={{ left: '46%' }}
                  wrapperClass='builder_loader builder_profile_loader'
                />
              </div>
            </>
          )}
        </tbody>
      </table>
    );
  };

  const LinkedInTemplate = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Profile Data</th>
            <th>Created On</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody style={{ position: 'relative' }}>
          {linkedIn ? (
            linkedIn
              .sort((a, b) => a.created < b.created)
              .map((template, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{template.template_name}</td>
                  <td>
                    {removeMarkdown(template.template_profile_data).substring(
                      0,
                      30
                    )}
                    ...
                  </td>
                  <td>{formatDate(template.created)}</td>
                  <td className='linkedIn_table_actions'>
                    <Link
                      to={`/admin/linkedIn_view/${template.id}`}
                      style={{ display: 'block' }}
                      title='View'
                    >
                      <svg width='20px' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                    <Link
                      to={`/admin/linkedIn_update/${template.id}`}
                      title='Edit'
                    >
                      <svg viewBox='0 0 24 24' width='20px' fill='#000000'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                      </svg>
                    </Link>
                    <div
                      onClick={() => delete_Modal(template.id, 'template')}
                      title='Delete'
                    >
                      <svg
                        width='20px'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#000'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <>
              <div className='builder_loaderWrapper'>
                <ThreeDots
                  wrapperStyle={{ left: '46%' }}
                  wrapperClass='builder_loader builder_profile_loader'
                />
              </div>
            </>
          )}
        </tbody>
      </table>
    );
  };

  // // console.log(chosenCategory);

  return (
    <div className='chooseTemplate_main linkedin_admin_view_main'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div className='chooseViewLinkedIn'>
          <div
            onClick={() => (
              setViewToggle('category'),
              history.push('/admin/linkedIn/category')
            )}
            className={`
              ${
                viewToggle === 'category' && id === 'category'
                  ? 'chooseLinkedInSelected'
                  : null
              }
              ${
                viewToggle === 'category' || 'id' === undefined
                  ? 'chooseLinkedInSelected'
                  : null
              }
            `}
          >
            Headline Category
          </div>
          <div
            onClick={() => (
              setViewToggle('headline'),
              history.push('/admin/linkedIn/headline')
            )}
            className={
              viewToggle === 'headline' && id === 'headline'
                ? 'chooseLinkedInSelected'
                : null
            }
          >
            Headline
          </div>
          <div
            onClick={() => (
              setViewToggle('template'),
              history.push('/admin/linkedIn/template')
            )}
            className={
              viewToggle === 'template' && id === 'template'
                ? 'chooseLinkedInSelected'
                : null
            }
          >
            Template
          </div>
        </div>
        {msg && (
          <span
            className={`linkedInMsg ${
              msg.status === 200 ? 'linkedInMsg_success' : 'linkedInMsg_danger'
            }`}
          >
            {msg[0].msg}
          </span>
        )}
      </div>
      <div
        style={{
          display:
            viewToggle === 'headline' || id === 'headline' ? 'flex' : 'none',
          justifyContent: 'end',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Dropdown
          className='dropdown dropdown_chooseTemplate category_dropdown_admin_view'
          options={dropdownOptions}
          value={defaultDropdownOption}
          onChange={(e) => setChosenCategory(e.value)}
          placeholder='Select an option'
        />
      </div>
      {id === 'category' ? (
        <LinkedInCategory />
      ) : id === 'headline' ? (
        <LinkedInHeading />
      ) : id === 'template' ? (
        <LinkedInTemplate />
      ) : viewToggle === 'category' ? (
        <LinkedInCategory />
      ) : viewToggle === 'headline' ? (
        <LinkedInHeading />
      ) : viewToggle === 'template' ? (
        <LinkedInTemplate />
      ) : null}
    </div>
  );
}
