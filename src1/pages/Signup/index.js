import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

import {
  register,
  register_social,
  resend_email,
  create_stripe_customer,
} from '../../API/index';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import graphic1 from '../../Assets/svg/Build-Your-Resume-With-Confidencee.svg';
import graphic2 from '../../Assets/svg/If-For-Any-Reason-You-Dont-Appreciate-Templaates.svg';

export default function Signup({
  userLoggedIn,
  stripeCustomer,
  setStripeCustomer,
}) {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [revealPwd, setRevealPwd] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const [message, setMessage] = useState({ message: true, type: '' });
  // // console.log(userLoggedIn)

  const [type, setType] = useState('');
  // console.log(type)

  const main_data = useRef(null);
  const bar = useRef(null);
  const regSuccess = useRef(null);

  const data = {
    title: 'Mr',
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: pwd,
    confirmPassword: pwd,
    acceptTerms: true,
    notRobot: notRobot,
    stripeId: stripeCustomer?.id,
  };

  const model = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
            {/* </div> */}
          </div>
        );
      },
    });
  };

  const RegSuccessModel = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel regSuccessModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button
              onClick={() => {
                onClose();
                history.push(`/login/${email}`);
              }}
            >
              Close
            </button>
            {/* </div> */}
          </div>
        );
      },
    });
  };
  console.log(stripeCustomer);

  const handleRegister = async (e) => {
    if (firstName !== '' && lastName !== '' && email !== '' && pwd !== '') {
      setMessage({ message: false, type: '' });

      create_stripe_customer({ email: email }).then((res) => {
        console.log(res);
        if (res?.status === 200) {
          setStripeCustomer(res?.data.customer);
          register({ ...data, stripeId: res?.data.customer.id }).then((resp) => {
            if (resp.status === 200) {
              setMessage({ message: resp.data.message, type: 'success' });
            } else {
              // // console.log(res)
              setMessage({ message: resp, type: 'error' });
            }
          });
        }
      });

      // await register(data).then((res) => {
      //   // // console.log(res)
      //   if (res?.status === 200) {
      //     setMessage({ message: res?.data.message, type: 'success' });
      //     create_stripe_customer({ email: email }).then((res) => {
      //       console.log(res);
      //       setStripeCustomer(res?.data.customer);
      //     });
      //   } else {
      //     // // console.log(res)
      //     setMessage({ message: res, type: 'error' });
      //   }
      // });

      setTimeout(() => {
        main_data.current.style.display = 'none';
      }, 1000);
      setTimeout(() => {
        bar.current.style.display = 'block';
        bar.current.classList.add('expandBar');
      }, 2000);
      setTimeout(() => {
        bar.current.classList.add('expandBarAgain');
      }, 3000);
      setTimeout(() => {
        bar.current.style.display = 'none';
        regSuccess.current.style.display = 'flex';
      }, 4000);
    } else if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      pwd === ''
    ) {
      setMessage({ message: 'Fill the feilds', type: 'error' });
      // model('Fill the feilds')
    }
    // else if (!notRobot) {
    //   // // console.log('chech box')
    //   setMessage('Verify, Not a Robot')
    //   // model('Verify, Not a Robot')
    // }
  };

  const handleResend = (e) => {
    // // console.log(email)
    setMessage({ message: false, type: '' });

    resend_email(email).then((res) => {
      // // console.log(res)
      if (res?.status === 200) {
        setMessage({ message: res?.data.message, type: 'success' });
      }
    });
  };

  const handleGoogleSignInFailure = (response) => {
    // console.log(response);
  };

  const handleGoogleSignInSuccess = (response) => {
    setMessage({ message: false, type: '' });
    // console.log(response);
    localStorage.clear();

    const accessToken = response.accessToken;
    const tokenId = response.tokenId;
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const googleId = response.profileObj.googleId;

    const regData = {
      title: 'Mr.',
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      facebook: {
        id: response.userID,
        email: response.email,
        token: response.token,
        image: response.image,
      },
      google: {
        id: response.profileObj.googleId,
        email: response.profileObj.email,
        token: response.accessToken,
        image: response.profileObj.imageUrl,
      },
      acceptTerms: true,
    };

    create_stripe_customer({ email: email }).then((res) => {
      if (res?.status === 200) {
        console.log(res);
        setStripeCustomer(res?.data.customer);
        register_social({ ...regData, stripeId: res?.data.customer.id }).then(
          (res) => {
            // // console.log(res)
            if (res?.status === 200) {
              setMessage({ message: res?.data.message, type: 'success' });
            } else {
              // // console.log(res)
              setMessage({ message: res, type: 'error' });
            }
          }
        );
      }
    });

    setTimeout(() => {
      main_data.current.style.display = 'none';
    }, 1000);
    setTimeout(() => {
      bar.current.style.display = 'block';
      bar.current.classList.add('expandBar');
    }, 2000);
    setTimeout(() => {
      bar.current.classList.add('expandBarAgain');
    }, 3000);
    setTimeout(() => {
      bar.current.style.display = 'none';
      regSuccess.current.style.display = 'flex';
    }, 4000);

    // localStorage.setItem('accessToken', accessToken )
    // localStorage.setItem('tokenId', tokenId )
    // localStorage.setItem('name', name )
    // localStorage.setItem('email', email )
    // localStorage.setItem('googleId', googleId )
  };

  function responseFacebook(response) {
    // console.log('here');
    // console.log(response);
    localStorage.clear();

    const name = response.name;
    const email = response.email;
    const accessToken = response.accessToken;
    const userID = response.userID;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userID', userID);
  }

  const componentClicked = (response) => {
    // console.log('clicked');
    // console.log(response);
  };

  return userLoggedIn ? (
    // <div>Logged in</div>
    <Redirect to='/builder' /> //profile
  ) : (
    <div className='app'>
      <div className='resumeVector_login_left'>
        {/* <img src={graphic1} alt='graphic1' /> */}
        <img
          src='/assets/images/character_1.png'
          alt='graphic1'
          style={{ maxWidth: '400px' }}
        />
      </div>
      <div className='resumeVector_login_right' style={{ width: 'auto' }}>
        <img
          src='/assets/images/character_2.png'
          alt='graphic2'
          style={{ maxWidth: '400px', transform: 'scaleX(-1)' }}
        />
      </div>
      <div style={{ margin: '3rem' }} className=''>
        <img src='/assets/images/logo.png' alt='logo' />
      </div>
      <div className='hero_signup'>
        {/* <div className='logo'>
          <img src="/assets/images/logo.png" alt="logo" />
        </div> */}
        <div className='main'>
          <div ref={main_data}>
            <div className='main_header'>
              <div className='main_header_left'>
                <div>
                  <Link to='/login' className='main_login'>
                    Login
                  </Link>
                </div>
                <div>
                  <Link to='/signup' className='main_signup'>
                    Sign up
                  </Link>
                  <div className='main_header_active'></div>
                </div>
              </div>
              <div className={message.type === 'success' ? 'success' : 'error'}>
                <p>{message.message || <Skeleton className={'loader'} />}</p>
              </div>
            </div>
            <div className='name'>
              <input
                id='firstName'
                className='firstName'
                type='text'
                placeholder='first name'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                id='lastName'
                className='lastName'
                type='text'
                placeholder='last name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              id='email'
              className='email'
              type='email'
              placeholder='john@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='pwd_container'>
              <input
                id='password'
                className='password'
                type={revealPwd ? 'text' : 'password'}
                placeholder='Enter password'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pwd_eye'
                viewBox='0 0 20 20'
                fill='currentColor'
                title={revealPwd ? 'Show password' : 'Hide password'}
                onClick={() => setRevealPwd((show) => !show)}
                style={{ fill: revealPwd ? '#EC6336' : 'currentcolor' }}
              >
                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                <path
                  fillRule='evenodd'
                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            {/* <div className='main_notRobot'>
              <div className='verify'>
                <input id='robotVerify' type="checkbox" onChange={e => setNotRobot(e.target.checked)} />
                <label className='robotVerify' htmlFor="robotVerify">I am not a robot!</label>               
              </div>
            </div> */}

            <button className='btn_register' onClick={handleRegister}>
              Register
            </button>

            {/* Saperator */}
            <div className='saperator'>
              <div className='saperator_line'></div>
              <div>or</div>
              <div className='saperator_line'></div>
            </div>

            <div className='btn_social'>
              <div
                onClick={() => setType('google')}
                className='btn_google_wrapper'
              >
                <GoogleLogin
                  className='btn_google'
                  clientId='769476610482-ngdor573c32k74i7doriadinlti73m80.apps.googleusercontent.com'
                  buttonText='Sign in with Google'
                  onSuccess={handleGoogleSignInSuccess}
                  onFailure={handleGoogleSignInFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
              {/* <button className='btn_google'>
              <img className='google' src="/assets/images/google.png" alt="google" />
              Sign up with Google
              </button> */}

              {/* <button className='btn_facebook'>
              <img className='facebook' src="/assets/images/facebook.png" alt="facebook" />
              Sign up with Facebook
              </button> */}

              <div
                onClick={() => setType('facebook')}
                className='btn_facebook_wrapper'
              >
                <FacebookLogin
                  icon='fab fa-facebook-f'
                  appId='701833601223271'
                  autoLoad={false}
                  fields='name,email,picture'
                  onClick={componentClicked}
                  callback={() => responseFacebook}
                />
              </div>
            </div>

            <p className='credit'>
              By continuing, you’re agreeing to our{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://cvjury.com/terms-and-conditions/'
              >
                Customer Terms of Service
              </a>{' '}
              and{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://cvjury.com/privacy-policy/'
              >
                {' '}
                Privacy Policy
              </a>
            </p>
          </div>

          <div ref={bar} className='mail_footer_only'></div>
          <div ref={regSuccess} className='mailSuccess mailSuccess_signup'>
            <div className='reg_success_img'>
              <img
                className='mailSuccess_img'
                src='/assets/images/successful.png'
                alt='mailSended'
              />
            </div>
            {/* <p  className='mailSuccess_text'>Registration successful, please check your email for verification instructions</p> */}
            <p className='mailSuccess_signUp'>
              {message.message || <Skeleton className={'loader_signUp'} />}
            </p>
            {/* <p className='reg_success_text'>
              Registration successful, <br /> please check your email for <br />
              verification instructions.
            </p> */}
            <div className='singnUp_links'>
              <p className='backToLogin resendMail' onClick={handleResend}>
                Resend email
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </p>
              <Link to='/login' className='backToLogin'>
                Back to Login?
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
