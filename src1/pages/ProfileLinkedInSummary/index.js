import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import graphic1 from '../../Assets/svg/Build-Your-Resume-With-Confidencee.svg';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {
  delete_user_linkedIn_Summary,
  get_user_linkedIn_Summary_by_userId,
} from '../../API/index';

export default function ProfileLinkedInSummary({ userLoggedIn, userData }) {
  const getPageData = JSON.parse(localStorage.getItem('pageData'));
  const userId = localStorage.getItem('id');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [pageData, setPageData] = useState(
    getPageData?.type === 'linkedin_summary' && getPageData
  );
  const [linkedinSummaries, setLinkedinSummaries] = useState(false);

  useEffect(() => {
    get_user_linkedIn_Summary_by_userId(userId).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        setLinkedinSummaries(
          res?.data.map((userLinkedInHeadline) => ({
            ...userLinkedInHeadline,
            documentData: JSON.parse(userLinkedInHeadline.documentData),
          }))
        );
        console.log(linkedinSummaries);
      } else if (res === 'LinkedIn Summary not found') {
        setLinkedinSummaries([]);
      }
    });
  }, []);

  const deleteLinkedInSummary = (id) => {
    setLoading(true);
    // console.log(id);
    delete_user_linkedIn_Summary(id).then((res) => {
      if (res?.status === 200 || res?.status === 304) {
        console.log('deleted successfully');
        console.log(res);
        get_user_linkedIn_Summary_by_userId(userId).then((resp) => {
          if (resp.status === 200 || resp.status === 304) {
            setLoading(false);
            setShowDeleteToast(true);
            setLinkedinSummaries(
              resp.data.map((userLinkedInHeadline) => ({
                ...userLinkedInHeadline,
                documentData: JSON.parse(userLinkedInHeadline.documentData),
              }))
            );
            console.log(linkedinSummaries);
          } else if (resp === 'LinkedIn Summary not found') {
            setLoading(false);
            setLinkedinSummaries([]);
          }
        });
      } else {
        setLoading(false);
        console.log(res);
      }
    });
  };

  const delete_Modal = (id, resume_name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            style={{ width: '300px', height: '180px' }}
            className='custom-ui delete_modal'
          >
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Are you sure you want to delete the Summary {resume_name} ?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  deleteLinkedInSummary(id);
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar
          page={'linkedIn_summary'}
          userLoggedIn={userLoggedIn}
          userData={userData}
        />
        {loading && (
          <div
            className='builder_loaderWrapper'
            style={{ position: 'absolute' }}
          >
            <ThreeDots
              style={{ top: '3rem' }}
              wrapperClass='builder_loader builder_profile_loader'
            />
          </div>
        )}
        <ToastContainer
          style={{ width: '210px', marginTop: '4rem' }}
          className='p-3 save_toast'
          position={'top-center'}
        >
          <Toast
            onClose={() => setShowDeleteToast(false)}
            show={showDeleteToast}
            delay={3000}
            autohide
          >
            <Toast.Body>Deleted Successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
        <div className='profile_hero_resume'>
          <div className='profile_header'>
            <div className='profile_toast'>My LinkedIns</div>
            <Link to={'/linkedIn'} className='go_to_builder'>
              <img
                src='/assets/images/linkedIn_profile.png'
                alt='linkedIn_profile'
              />
              Create New Summary
            </Link>
          </div>
          {!linkedinSummaries ? (
            <Skeleton />
          ) : linkedinSummaries.length !== 0 ? (
            <div className='profile_container'>
              <table>
                <thead>
                  {/* <td>Image</td> */}
                  <td>LinkedIn Summary Name</td>
                  <td>Created On</td>
                  <td>Last Modified</td>
                  <td>Action</td>
                </thead>
                <tbody>
                  {linkedinSummaries
                    .sort((a, b) => a.created < b.created)
                    .map(({ documentData, ...pageData }) => (
                      <tr>
                        {/* <td>
                      <img
                        src='/assets/images/Templates/template_1.png'
                        alt='template_1'
                      />
                    </td> */}
                        <td>{documentData.document_name}</td>
                        <td>{documentData.date}</td>
                        <td>{documentData.date}</td>
                        <td>
                          <svg
                            onClick={() =>
                              history.push(`/linkedIn/edit/${pageData.id}`)
                            }
                            viewBox='0 0 24 24'
                            fill='#fff'
                            stroke='1.1'
                          >
                            <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                          </svg>
                          <a
                            href={`/linkedIn_view/edit/${pageData.id}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <svg
                              // onClick={() => history.push(`/linkedIn_view/edit/${pageData.id}`)}
                              x='0px'
                              y='0px'
                              viewBox='0 0 490 490'
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                            c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                            C262.1,7.6,254.5,0,245,0z'
                                    />
                                    <path
                                      d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                            s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <svg
                            onClick={() => {
                              delete_Modal(
                                pageData.id,
                                documentData.document_name
                              );
                            }}
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
                        </td>
                      </tr>
                    ))}
                  <tr style={{ display: 'none' }}>
                    <td>
                      <img
                        src='/assets/images/Templates/template_1.png'
                        alt='template_1'
                      />
                    </td>
                    <td>Lorem Ipsum is simply</td>
                    <td>20 - Aug 2021</td>
                    <td>20 - Aug 2021</td>
                    <td>
                      <svg x='0px' y='0px' viewBox='0 0 490 490'>
                        <g>
                          <g>
                            <g>
                              <path
                                d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                          c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                          C262.1,7.6,254.5,0,245,0z'
                              />
                              <path
                                d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                          s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg
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
                    </td>
                  </tr>
                  <tr style={{ display: 'none' }}>
                    <td>
                      <img
                        src='/assets/images/Templates/template_1.png'
                        alt='template_1'
                      />
                    </td>
                    <td>Lorem Ipsum is simply</td>
                    <td>20 - Aug 2021</td>
                    <td>20 - Aug 2021</td>
                    <td>
                      <svg x='0px' y='0px' viewBox='0 0 490 490'>
                        <g>
                          <g>
                            <g>
                              <path
                                d='M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                          c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                          C262.1,7.6,254.5,0,245,0z'
                              />
                              <path
                                d='M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                          s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z'
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              to='/linkedIn'
              className='create_new'
              onClick={() => history.push('/linkedIn')}
              style={{ cursor: 'pointer' }}
            >
              {/* <img src={graphic1} alt='create new resume' /> */}
              <img
                style={{ maxWidth: '150%' }}
                src='/assets/images/no_inkedIn_summary.png'
                alt='create new linkedin resume'
              />
              {/* No Linkedin Summaries Yet? <br /> Create New Linkedin Summary */}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
}
