import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function BuilderHeader({
  builderData,
  userData,
  userLoggedIn,
  coverLetter,
  linkedIn,
  share,
}) {
  const params = useParams();
  // // console.log(builderData.length);
  const [linkedInDropdown, setLinkedInDropdown] = useState(false);

  const [active, setActive] = useState('resume');

  // var brorserHistory = BrowserRouter.
  const history = useHistory();

  // // console.log('header', userLoggedIn);

  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = (e) => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 426px)');
  // // console.log(isMobile);

  const styles = {
    builder_header_main: (isMobile) => ({
      width: isMobile && userLoggedIn ? 'calc(-127px + 100%)' : null,
    }),
    header_help_review: (isMobile) => ({
      marginRight: isMobile && userLoggedIn ? '-1.7rem' : null,
    }),
    builder_header_account: (isMobile) => ({
      marginRight: isMobile && userLoggedIn ? '0' : null,
    }),
    builder_header_back: (isMobile) => ({
      display: isMobile && !userLoggedIn ? 'none' : null,
    }),
  };

  const imageUrl = localStorage.getItem('imageUrl');

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('imageUrl');

    setTimeout(() => window.location.reload(), 1000);
  };

  const go_to_another_page_Modal = (path) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal'>
            <div>
              {/* <h1></h1> */}
              <p>By clicking it, You can loose all your data</p>
              <p>Do you want to Continue?</p>
              <div>
                <a href='#'>
                  <button onClick={() => onClose()}>No</button>
                </a>
                <a href='#'>
                  <button
                    onClick={() => (history.push(`/${path}`), onClose())}
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
  console.log(share);
  return (
    <header className='builder_header'>
      <div className='builder_header_back'>
        {share !== 'share' && (
          <div onClick={() => history.goBack()} className='back_arrow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
      </div>

      <div
        style={styles.builder_header_main(isMobile)}
        className='builder_header_main'
      >
        <div className='builder_header_main_btns'>
          <div className='main_logo_header'>
            <div>
              <img src='/assets/images/logo_black.png' alt='logo' />
            </div>
          </div>
          {share !== 'share' && (
            <div className='main_buttons_section'>
              {builderData.length === 0 &&
              params.id === undefined &&
              params.headingId === undefined &&
              params.design === undefined &&
              params.category === undefined &&
              params.chosenTemplate === undefined ? (
                <div
                  onClick={() => history.push('/builderChooseBlankOrExample')}
                  // onClick={() =>go_to_another_page_Modal('builderChooseBlankOrExample')}
                  className={`resume_btn ${
                    !coverLetter && !linkedIn ? 'builder_active' : ''
                  } `}
                >
                  <svg
                    height='19px'
                    viewBox='0 0 24 24'
                    width='19px'
                    // fill={active === 'resume' ? '#ffffff' : '#000000'}
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z' />
                  </svg>
                  <div>{!coverLetter && !linkedIn ? 'RESUME' : 'Resume'}</div>
                </div>
              ) : (
                <div
                  onClick={() =>
                    !coverLetter && !linkedIn
                      ? null
                      : go_to_another_page_Modal('builderChooseBlankOrExample')
                  }
                  // onClick={() => history.push('/builderChooseBlankOrExample')}
                  className={`resume_btn ${
                    !coverLetter && !linkedIn ? 'builder_active' : ''
                  } `}
                >
                  <svg
                    height='19px'
                    viewBox='0 0 24 24'
                    width='19px'
                    // fill={active === 'resume' ? '#ffffff' : '#000000'}
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z' />
                  </svg>
                  <div>{!coverLetter && !linkedIn ? 'RESUME' : 'Resume'}</div>
                </div>
              )}
              {builderData.length === 0 &&
              params.id === undefined &&
              params.headingId === undefined &&
              params.design === undefined &&
              params.category === undefined &&
              params.chosenTemplate === undefined ? (
                <div
                  onClick={() => history.push('/category')}
                  className={`cover_btn ${
                    coverLetter ? 'builder_active' : ''
                  } `}
                >
                  <svg height='19px' viewBox='0 0 24 24' width='19px'>
                    <g>
                      <rect fill='none' height='24' width='24' />
                      <g>
                        <path d='M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z' />
                      </g>
                      <path d='M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z' />
                    </g>
                  </svg>
                  <div>{coverLetter ? 'COVER LETTER' : 'Cover Letter'}</div>
                </div>
              ) : (
                <div
                  onClick={() =>
                    !coverLetter && go_to_another_page_Modal('category')
                  }
                  className={`cover_btn ${
                    coverLetter ? 'builder_active' : ''
                  } `}
                >
                  <svg height='19px' viewBox='0 0 24 24' width='19px'>
                    <g>
                      <rect fill='none' height='24' width='24' />
                      <g>
                        <path d='M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z' />
                      </g>
                      <path d='M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z' />
                    </g>
                  </svg>
                  <div>{coverLetter ? 'COVER LETTER' : 'Cover Letter'}</div>
                </div>
              )}

              <div
                style={{ display: linkedInDropdown ? 'block' : 'none' }}
                className='linkedInDropdownBG'
                onClick={() => setLinkedInDropdown(false)}
              ></div>
              <div
                // onClick={() => !linkedIn && go_to_another_page_Modal('linkedIn')}
                onClick={() => setLinkedInDropdown(!linkedInDropdown)}
                className={`linkedin_btn ${linkedIn ? 'builder_active' : ''} `}
              >
                <svg width='19' height='19' viewBox='0 0 24 24'>
                  <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                </svg>
                <div>{linkedIn ? 'LINKEDIN' : 'LinkedIn'}</div>

                <div
                  className='linkedInDropdown'
                  style={{ display: linkedInDropdown ? 'flex' : 'none' }}
                >
                  {builderData.length === 0 &&
                  params.id === undefined &&
                  params.headingId === undefined &&
                  params.design === undefined &&
                  params.category === undefined &&
                  params.chosenTemplate === undefined ? (
                    <div
                      onClick={() => history.push('/linkedIn_headline')}
                      className={`linkedin_btn `}
                    >
                      <svg width='19' height='19' viewBox='0 0 24 24'>
                        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                      </svg>
                      <div>LinkedIn Headline</div>
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        go_to_another_page_Modal('linkedIn_headline')
                      }
                      className={`linkedin_btn `}
                    >
                      <svg width='19' height='19' viewBox='0 0 24 24'>
                        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                      </svg>
                      <div>LinkedIn Headline</div>
                    </div>
                  )}

                  {builderData.length === 0 &&
                  params.id === undefined &&
                  params.headingId === undefined &&
                  params.design === undefined &&
                  params.category === undefined &&
                  params.chosenTemplate === undefined ? (
                    <div
                      onClick={() => history.push('/linkedIn')}
                      className={`linkedin_btn `}
                    >
                      <svg width='19' height='19' viewBox='0 0 24 24'>
                        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                      </svg>
                      <div>LinkedIn Summary</div>
                    </div>
                  ) : (
                    <div
                      onClick={() => go_to_another_page_Modal('linkedIn')}
                      className={`linkedin_btn `}
                    >
                      <svg width='19' height='19' viewBox='0 0 24 24'>
                        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                      </svg>
                      <div>LinkedIn Summary</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          style={styles.header_help_review(isMobile)}
          className='header_help_review '
        >
          <a
            title='Help'
            className='help'
            target='_blank'
            rel='noreferrer'
            href='https://cvjury.com/help-desk/'
          >
            {/* Help Centre */}
            <svg className='h-2 w-2' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a
            title='Feedback'
            className='help'
            target='_blank'
            rel='noreferrer'
            href='https://cvjury.com/product-feedback/'
          >
            {/* Leave Feedback */}
            <svg viewBox='0 0 24 24' fill='#000000'>
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z' />
            </svg>
          </a>
        </div>
      </div>

      <div
        style={styles.builder_header_back(isMobile)}
        className='builder_header_back '
      >
        {userLoggedIn ? (
          <Link
            to='/profile/dashboard'
            style={styles.builder_header_account(isMobile)}
            className='builder_header_account '
          >
            <img
              className='header_profile'
              src={
                imageUrl
                  ? imageUrl
                  : userData.profileImg
                  ? userData.profileImg
                  : '/assets/images/profile_new.jpg'
              }
              alt=''
            />
            {/* {imageUrl ? (
              <img src={imageUrl} alt='imageUrl' />
              ) : (
              <img src='' alt='imageUrl' />
              // <svg
              //   xmlns='http://www.w3.org/2000/svg'
              //   height='24px'
              //   viewBox='0 0 24 24'
              //   width='24px'
              //   fill='#000000'
              // >
              //   <path d='M0 0h24v24H0z' fill='none' />
              //   <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
              // </svg>
            )} */}

            <div
              style={{ display: 'none' }}
              className='header_profile_dropdown'
            >
              <Link to='/profile/dashboard' className='drpdwn_profile'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                </svg>
                Profile
              </Link>
              <div onClick={handleLogout} className='drpdwn_logout'>
                <svg width='14' viewBox='0 0 24 25' fill='none'>
                  <path
                    d='M21.6061 12.1141C21.5311 8.99503 20.4514 6.55075 18.2771 4.61633C17.8947 4.27893 17.7072 3.87405 17.8122 3.3717C17.9022 2.92933 18.1796 2.62192 18.622 2.48696C19.0868 2.3445 19.4842 2.47196 19.8366 2.78687C21.4261 4.18895 22.5883 5.88345 23.3006 7.88536C25.7598 14.8358 21.4936 22.3486 14.2658 23.7881C9.36973 24.7628 4.12878 22.416 1.7145 18.0373C-0.812246 13.4562 -0.53483 8.95754 2.47177 4.66881C2.93664 4.00901 3.54396 3.44667 4.11379 2.86935C4.67612 2.31451 5.4259 2.337 5.89826 2.86935C6.36312 3.38669 6.29564 4.12897 5.72581 4.63882C4.7511 5.50856 3.96383 6.52076 3.4015 7.70541C0.642321 13.5012 4.05381 20.3317 10.3894 21.4413C15.6379 22.3636 20.5564 18.8396 21.4486 13.5462C21.5386 13.0063 21.5686 12.4515 21.6061 12.1141Z'
                    fill='black'
                  />
                  <path
                    d='M13.2086 6.04089C13.2086 7.63042 13.2161 9.22744 13.2086 10.817C13.2011 11.7017 12.4213 12.279 11.6266 12.0016C11.1692 11.8442 10.8543 11.4318 10.8243 10.9519C10.8168 10.8695 10.8168 10.787 10.8168 10.697C10.8168 7.58543 10.8093 4.47386 10.8243 1.36978C10.8243 1.11486 10.8768 0.837438 10.9818 0.612505C11.2142 0.132648 11.7765 -0.0922853 12.2939 0.0351768C12.8262 0.162639 13.2011 0.620003 13.2011 1.20483C13.2086 2.81685 13.2086 4.42887 13.2086 6.04089Z'
                    fill='black'
                  />
                </svg>
                Logout
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
