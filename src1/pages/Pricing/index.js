import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Redirect, useParams } from 'react-router';

export default function Pricing({ userData }) {
  const { subscriptionId } = useParams();

  const [prices, setPrices] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState(null);
  console.log(userData);

  console.log(subscriptionId);

  console.log(JSON.parse(localStorage.getItem('downloadData')));
  useEffect(() => {
    const fetchPrices = async () => {
      const { prices } = await fetch(
        'https://cvjury.app/api/stripe/stripe-config'
        // 'http://localhost:4000/stripe/stripe-config'
      ).then((r) => r.json());
      // console.log(prices);
      setPrices(prices);
    };
    fetchPrices();
  }, []);

  const createSubscription = async (priceId) => {
    const { subscriptionId, clientSecret } = await fetch(
      'https://cvjury.app/api/stripe/create-subscription',
      // 'http://localhost:4000/stripe/create-subscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          customerId: userData?.stripeId, // ?? 'cus_M5ggybhYeH92JP',
        }),
      }
    ).then((r) => r.json());

    setSubscriptionData({ subscriptionId, clientSecret, priceId });
  };

  const createPaymentIntent = async (priceId, amount) => {
    const { client_secret, invoice } = await fetch(
      'https://cvjury.app/api/stripe/create-payment-intent',
      // 'http://localhost:4000/stripe/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          priceId: priceId,
          customerId: userData?.stripeId, // ?? 'cus_M5ggybhYeH92JP',
        }),
      }
    ).then((r) => r.json());

    console.log(client_secret);
    console.log('invoice', invoice);

    setSubscriptionData({ clientSecret: client_secret, priceId });
  };

  // const createCheckoutSession = async (priceId) => {
  //   const { payment_intent, sessionUrl } = await fetch(
  //     // 'https://cvjury.app/api/stripe/create_checkout_session',
  //     'http://localhost:4000/stripe/create-checkout-session',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         priceId: priceId,
  //         customerId: userData?.stripeId, // ?? 'cus_M5ggybhYeH92JP',
  //       }),
  //     }
  //   ).then((r) => r.json());

  //   console.log(payment_intent, sessionUrl);

  //   setSubscriptionData({ payment_intent, sessionUrl });
  // };

  if (subscriptionData?.clientSecret) {
    return (
      <Redirect
        to={{
          pathname: '/subscribe',
          state: subscriptionData,
        }}
      />
    );
  }

  return (
    <div className='pricing'>
      <div className='pricing_header'>
        <div className='pricing_logo'>
          <img src='/assets/images/logo.png' alt='cv_jury' />
        </div>
        <div className='pricing_step'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            width={35}
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
          Build
        </div>
        <div className='pricing_step pricing_step_active'>
          <div className='step_no'>2</div>
          Select Bundle
        </div>
        <div className='pricing_step'>
          <div className='step_no'>3</div>
          Payment Details
        </div>
        <div className='pricing_step'>
          <div className='step_no'>4</div>
          Download
        </div>
      </div>
      <div className='pricing_body'>
        <div className='pricing_hero_text'>
          To Unlock All Features, <br />
          Select A Bundle You Love Below & Pay: <br />
          <span>There's No Automatic Renewal or Recharge on Your Card</span>
        </div>
        <div className='pricing_cards'>
          {prices.map(
            (price) =>
              price.product.name === 'Diamond' && (
                <div className=' pricing_card diamond'>
                  <div>
                    <div className='pricing_title'>{price.product.name}</div>
                    <div className='pricing_descp'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        40 resume/CV templates
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        40 matching cover letter templates
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        Circa 55,000 pre-written content
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        LinkedIn summary Generator
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        LinkedIn headline generator
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        Resume/CV/Job Description Scanner
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                          width={20}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        Unlimited downloads ─ Pdf, Word, txt
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='amount'>
                      {/* <span>7-Day Trial</span>  */}
                      <br />₤{price.unit_amount / 100} <br />
                      <span>Annually</span>
                    </div>
                    <div className='action_btn'>
                      <button onClick={() => createSubscription(price.id)}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
          {prices.map((price) =>
            price.product.name === 'Platinum' ? (
              <div className=' pricing_card platinum'>
                <div>
                  <div className='pricing_title'>{price.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    {/* <span>7-Day Trial</span> */}
                    <br />₤{price.unit_amount / 100} <br />
                    <span>Quarterly</span>
                  </div>
                  <div className='action_btn'>
                    <button onClick={() => createSubscription(price.id)}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
          {prices.map((price) =>
            price.product.name === 'Gold' ? (
              <div className=' pricing_card gold'>
                <div>
                  <div className='pricing_title'>{price.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    {/* <span>7-Day Trial</span>  */}
                    <br />₤{price.unit_amount / 100} <br />
                    <span>Monthly</span>
                  </div>
                  <div className='action_btn'>
                    <button onClick={() => createSubscription(price.id)}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
          {prices.map((price) =>
            price.product.name === 'Silver' ? (
              <div className=' pricing_card silver'>
                <div>
                  <div className='pricing_title'>{price.product.name}</div>
                  <div className='pricing_descp'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 resume/CV templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      40 matching cover letter templates
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Circa 55,000 pre-written content
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn summary Generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      LinkedIn headline generator
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Resume/CV/Job Description Scanner
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        width={20}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      Unlimited downloads ─ Pdf, Word, txt
                    </div>
                  </div>
                </div>
                <div>
                  <div className='amount'>
                    {/* <span>1-Day Trial</span>  */}
                    <br />₤{price.unit_amount / 100} <br />
                    <span>3-Day Trial</span>
                  </div>
                  <div className='action_btn'>
                    {/* <button onClick={() => createSubscription(price.id)}> */}
                    <button
                      onClick={() =>
                        createPaymentIntent(price.id, price.unit_amount)
                      }
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className='accepts_payments'>
          We Accept:
          <div className='payment_logos'>
            <svg
              width='780px'
              height='780px'
              viewBox='0 -140 780 780'
              version='1.1'
            >
              <path
                d='m293.2 348.73l33.359-195.76h53.358l-33.384 195.76h-53.333zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-0.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-0.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885 0.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-0.271 30.088 3.534 39.936 7.5l4.781 2.259 7.231-42.427m137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555 0.084 68.336 0.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-0.314 0.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293v3e-3zm-363.3-126.41l-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-0.063 84.004-195.39-56.524-1e-3'
                fill='#0E4595'
              />
              <path
                d='m146.92 152.96h-86.041l-0.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528'
                fill='#F2AE14'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='800'
              width='1200'
              id='svg895'
              version='1.1'
              viewBox='-96 -98.908 832 593.448'
            >
              <defs id='defs879'>
                <style id='style877' type='text/css'></style>
              </defs>
              <path
                id='rect887'
                display='inline'
                fill='#ff5f00'
                stroke-width='5.494'
                d='M224.833 42.298h190.416v311.005H224.833z'
              />
              <path
                id='path889'
                d='M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z'
                fill='#eb001b'
                stroke-width='5.494'
              />
              <path
                id='path891'
                d='M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z'
                class='e'
                fill='#f79e1b'
                stroke-width='5.494'
              />
              <path
                id='path893'
                d='M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z'
                class='e'
                fill='#f79e1b'
                stroke-width='5.494'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
            >
              <path d='M12.607,7.501H10V14.5h0.983v-2.834v-0.002h1.624c0.669,0,1.232-0.198,1.687-0.596l0.004-0.003C14.726,10.724,15,10.198,15,9.607c0-0.008,0-0.016,0-0.023c0.009-0.563-0.248-1.101-0.706-1.478l0.003,0.003C13.862,7.73,13.292,7.5,12.669,7.5C12.647,7.5,12.625,7.501,12.607,7.501z M13.602,8.734c0.252,0.225,0.395,0.533,0.395,0.855c0,0.323-0.143,0.631-0.395,0.856c-0.255,0.24-0.608,0.372-0.973,0.362h-1.648V8.363h1.645c0.016-0.001,0.032-0.001,0.048-0.001C13.034,8.362,13.361,8.504,13.602,8.734z' />
              <polygon points='6.811 8.543 6.811 8.543 6.814 8.546' />
              <path d='M0.435,13.296l0.011,0.022C1.131,14.616,2.494,15.5,4.064,15.5c0.006,0,0.012,0,0.017,0c1.101,0,2.029-0.354,2.705-0.966C7.556,13.838,8,12.808,8,11.592c0-0.273-0.023-0.544-0.07-0.813H4.081v1.54h2.204c-0.091,0.497-0.385,0.937-0.814,1.217c-0.367,0.243-0.839,0.381-1.39,0.381H4.08c-1.055-0.007-1.952-0.685-2.288-1.645c-0.083-0.241-0.13-0.501-0.13-0.771c0-0.274,0.047-0.538,0.128-0.766l0.005-0.017c0.33-0.946,1.228-1.626,2.286-1.633c0.013,0,0.027,0,0.04,0c0.59,0,1.127,0.228,1.526,0.6l1.164-1.142c-0.706-0.647-1.646-1.042-2.68-1.042c-0.017,0-0.035,0-0.05,0H4.08c-0.006,0-0.01,0-0.016,0c-1.569,0-2.932,0.884-3.628,2.203C0.158,10.243,0,10.853,0,11.501C0,12.156,0.161,12.774,0.435,13.296z' />
              <polygon points='22.978 9.501 21.53 12.99 21.51 12.99 20.02 9.501 19 9.501 21.061 14.05 19.898 16.5 20.866 16.5 24 9.501' />
              <path d='M19,14.347v-2.893c0-0.606-0.181-1.084-0.543-1.432c-0.363-0.348-0.858-0.522-1.484-0.522c-0.805,0-1.413,0.307-1.823,0.92l0.747,0.488c0.275-0.415,0.65-0.623,1.124-0.623c0.003,0,0.006,0,0.009,0c0.313,0,0.598,0.123,0.808,0.322l0.001,0.001c0.214,0.187,0.349,0.462,0.349,0.768c0,0.004,0,0.008,0,0.011v0.201c-0.325-0.191-0.74-0.287-1.243-0.287c-0.59,0.001-1.062,0.144-1.415,0.431C15.177,12.02,15,12.405,15,12.89c0,0.011,0,0.022,0,0.033c0,0.444,0.193,0.842,0.502,1.117c0.336,0.307,0.752,0.46,1.25,0.46c0.582,0,1.049-0.268,1.4-0.805h0.037v0.652H19z M17.769,13.303c-0.253,0.262-0.596,0.411-0.953,0.412c-0.239,0.004-0.472-0.077-0.659-0.23l-0.002-0.001c-0.17-0.131-0.28-0.336-0.28-0.567c0-0.002,0-0.005,0-0.007c0-0.256,0.116-0.469,0.348-0.643c0.23-0.173,0.517-0.26,0.862-0.26c0.473,0,0.841,0.109,1.106,0.329c0,0.001,0,0.003,0,0.004C18.191,12.72,18.029,13.063,17.769,13.303z' />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='800'
              width='1200'
              viewBox='-150 -249.37925 1300 1496.2755'
            >
              <path
                d='M0 0h997.517v538.49l-49.375 77.147 49.375 68.661v313.219H0v-507.63l30.859-35.488L0 420.454z'
                fill='#016fd0'
              />
              <path
                d='M193.64 695.099v-156.61h165.82l17.791 23.193 18.38-23.193h601.886V684.3s-15.74 10.643-33.945 10.8H630.295l-20.058-24.688V695.1h-65.73v-42.142s-8.979 5.882-28.39 5.882h-22.373v36.26h-99.52l-17.766-23.69-18.038 23.69zM0 420.454l37.393-87.177h64.668l21.22 48.833v-48.833h80.388l12.633 35.295 12.247-35.295h360.858v17.744s18.97-17.744 50.146-17.744l117.085.41 20.854 48.193v-48.603h67.273l18.515 27.683v-27.683h67.89v156.61h-67.89l-17.744-27.774v27.773h-98.838l-9.94-24.687h-26.57l-9.779 24.687h-67.028c-26.826 0-43.974-17.381-43.974-17.381v17.381H488.343L468.285 465.2v24.687H92.481L82.548 465.2H56.06l-9.86 24.686H0z'
                fill='#fff'
              />
              <path
                d='M50.628 352.584L.193 469.848h32.836l9.306-23.482h54.1l9.257 23.482h33.56L88.863 352.584zm18.66 27.29l16.49 41.034H52.75zm73.435 89.954V352.564l46.661.173 27.14 75.605 26.49-75.778h46.289v117.264h-29.316v-86.405l-31.076 86.405h-25.71l-31.162-86.405v86.405zm166.638 0V352.564h95.663v26.23h-66.038v20.058h64.495v24.688h-64.495v20.83h66.038v25.458zm112.636-117.244v117.264h29.316v-41.66h12.343l35.15 41.66h35.826l-38.574-43.203c15.831-1.336 32.161-14.923 32.161-36.018 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.51c8.04 0 13.887 6.288 13.887 12.343 0 7.79-7.577 12.344-13.452 12.344h-33.945zm118.807 91.014h-29.933V352.564h29.933zm70.975 0h-6.46c-31.262 0-50.243-24.63-50.243-58.15 0-34.349 18.768-59.114 58.246-59.114h32.402v27.773h-33.586c-16.026 0-27.36 12.507-27.36 31.63 0 22.71 12.96 32.248 31.63 32.248h7.715zm63.792-117.244l-50.435 117.264h32.836l9.305-23.482h54.1l9.258 23.482h33.559l-50.387-117.264zm18.66 27.29l16.49 41.034h-33.029zm73.386 89.954V352.564h37.272l47.59 73.676v-73.676h29.317v117.264h-36.067l-48.796-75.604v75.604zM213.699 675.04V557.776h95.662v26.23h-66.038v20.059h64.495v24.687h-64.495v20.83h66.038v25.458zm468.748 0V557.776h95.662v26.23h-66.038v20.059h64.187v24.687H712.07v20.83h66.038v25.458zm-369.373 0l46.578-57.908-47.687-59.356H348.9l28.4 36.693 28.497-36.693h35.488l-47.06 58.632 46.663 58.632H403.96l-27.576-36.114-26.905 36.114zM444.37 557.796V675.06h30.087v-37.03h30.859c26.111 0 45.903-13.853 45.903-40.792 0-22.317-15.523-39.442-42.094-39.442zm30.087 26.52h32.498c8.436 0 14.465 5.17 14.465 13.5 0 7.826-5.999 13.501-14.561 13.501h-32.402zm89.491-26.54V675.04h29.316v-41.66h12.344l35.15 41.66h35.825l-38.573-43.202c15.83-1.336 32.16-14.924 32.16-36.019 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.511c8.039 0 13.887 6.288 13.887 12.344 0 7.79-7.577 12.343-13.453 12.343h-33.945zm198.423 91.034v-25.458h58.671c8.681 0 12.44-4.692 12.44-9.837 0-4.93-3.747-9.913-12.44-9.913h-26.513c-23.045 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 46-36.935h57.088l-12.343 26.385h-49.375c-9.438 0-12.343 4.952-12.343 9.682 0 4.86 3.59 10.222 10.8 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32zm107.597 0v-25.458h58.67c8.682 0 12.44-4.692 12.44-9.837 0-4.93-3.746-9.913-12.44-9.913h-26.512c-23.046 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 45.999-36.935h57.089l-12.344 26.385h-49.374c-9.438 0-12.344 4.952-12.344 9.682 0 4.86 3.59 10.222 10.801 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32z'
                fill='#016fd0'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='800'
              width='1200'
              viewBox='-18.537885 -7.5445 160.66167 45.267'
            >
              <path
                d='M46.211 6.749h-6.839a.95.95 0 00-.939.802l-2.766 17.537a.57.57 0 00.564.658h3.265a.95.95 0 00.939-.803l.746-4.73a.95.95 0 01.938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 01.563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 00-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.562.66h2.95a.95.95 0 00.939-.803l1.77-11.209a.568.568 0 00-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 00-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 00-.912-.678h-3.234a.57.57 0 00-.541.754l3.625 10.638-3.408 4.811a.57.57 0 00.465.9h3.287a.949.949 0 00.781-.408l10.946-15.8a.57.57 0 00-.468-.895z'
                fill='#253B80'
              />
              <path
                d='M94.992 6.749h-6.84a.95.95 0 00-.938.802l-2.766 17.537a.569.569 0 00.562.658h3.51a.665.665 0 00.656-.562l.785-4.971a.95.95 0 01.938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 01.562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 00-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.564.66h2.949a.95.95 0 00.938-.803l1.771-11.209a.571.571 0 00-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219l-2.807 17.858a.569.569 0 00.562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 00-.562-.659h-3.16a.571.571 0 00-.562.482z'
                fill='#179BD7'
              />
              <path
                d='M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 01.314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 011.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 01-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 00-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 01-.096.035z'
                fill='#253B80'
              />
              <path
                d='M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 00.695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 00-1.336-1.03z'
                fill='#179BD7'
              />
              <path
                d='M21.754 7.151a9.757 9.757 0 00-1.203-.267 15.284 15.284 0 00-2.426-.177h-7.352a1.172 1.172 0 00-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 011.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 00-1.017-.429 9.045 9.045 0 00-.277-.087z'
                fill='#222D65'
              />
              <path
                d='M9.614 7.699a1.169 1.169 0 011.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 011.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 00.795.932h5.791l1.454-9.225z'
                fill='#253B80'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='800'
              width='1200'
              y='0'
              x='0'
              id='Layer_1'
              version='1.1'
              viewBox='-54 -37.45 468 224.7'
            >
              <style id='style16' type='text/css'></style>
              <g transform='translate(-54 -36)' id='g32'>
                <path
                  id='path18'
                  d='M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16z'
                  class='st2'
                />
                <path
                  id='path20'
                  d='M301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4z'
                  class='st2'
                />
                <path
                  id='polygon22'
                  class='st2'
                  d='M248.9 36l-25.1 5.3v20.4l25.1-5.4z'
                />
                <path
                  id='rect24'
                  class='st2'
                  d='M223.8 69.3h25.1v87.5h-25.1z'
                />
                <path
                  id='path26'
                  d='M196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4z'
                  class='st2'
                />
                <path
                  id='path28'
                  d='M146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19z'
                  class='st2'
                />
                <path
                  id='path30'
                  d='M79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 54 78.2 54 95.9c0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z'
                  class='st2'
                />
              </g>
            </svg>

            <svg
              version='1.1'
              id='layer'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='-153 -46 652 652'
              xmlSpace='preserve'
              style={{ width: '130px', height: '130px' }}
            >
              <path
                class='st0'
                d='M-45.8,232.2h-80.4c-2.7,0-5,2.3-5,5.1v9.1c0,2.8,2.3,5.1,5,5.1h80.4c2.8,0,5-2.3,5.1-5.1v-9
	C-40.7,234.5-43,232.2-45.8,232.2L-45.8,232.2z M-45.8,282.7h-80.4c-1.3,0-2.6,0.5-3.5,1.5c-1,1-1.5,2.2-1.5,3.6v9.1
	c0,2.8,2.3,5.1,5,5.1h80.4c2.8,0,5-2.2,5.1-5.1v-9.1C-40.8,284.9-43,282.7-45.8,282.7L-45.8,282.7z M-80.9,307.9h-45.3
	c-1.3,0-2.6,0.5-3.5,1.5c-0.9,1-1.5,2.2-1.5,3.6v9.1c0,2.8,2.3,5.1,5,5.1H-81c2.8,0,5-2.3,5-5v-9.1
	C-75.9,310.1-78.1,307.8-80.9,307.9L-80.9,307.9z M-40.7,257.4h-85.5c-1.3,0-2.6,0.5-3.5,1.5c-0.9,1-1.5,2.2-1.5,3.6v9.1
	c0,2.8,2.3,5.1,5,5.1h85.4c2.8,0,5-2.3,5-5.1v-9.1C-35.7,259.7-38,257.5-40.7,257.4L-40.7,257.4z M-40.7,257.4'
              />
              <path
                class='st1'
                d='M52.8,252.6c-2.5-2.6-5.4-4.6-8.7-6c-3.3-1.4-6.8-2.1-10.4-2.1c-3.5-0.1-6.9,0.7-10.1,2.2c-2.1,1-4,2.4-5.6,4.1
	v-1.6c0-0.8-0.3-1.6-0.8-2.2c-0.5-0.6-1.3-1-2.2-1H3.9c-0.8,0-1.6,0.3-2.1,1c-0.6,0.6-0.9,1.4-0.8,2.2v74.8c0,0.8,0.3,1.6,0.8,2.2
	c0.6,0.6,1.3,0.9,2.1,0.9h11.4c0.8,0,1.5-0.3,2.1-0.9c0.6-0.5,1-1.3,0.9-2.2v-25.6c1.6,1.8,3.7,3.1,6,3.9c3,1.1,6.1,1.7,9.3,1.7
	c3.6,0,7.2-0.7,10.5-2.1c3.3-1.4,6.3-3.4,8.8-6c2.6-2.7,4.6-5.9,6-9.4c1.6-3.9,2.3-8.1,2.2-12.3c0.1-4.2-0.7-8.4-2.2-12.4
	C57.4,258.5,55.4,255.3,52.8,252.6L52.8,252.6z M42.6,279.7c-0.6,1.6-1.5,3-2.7,4.3c-2.3,2.5-5.6,3.9-9,3.9c-1.7,0-3.4-0.3-5-1.1
	c-1.5-0.7-2.9-1.6-4.1-2.8c-1.2-1.2-2.1-2.7-2.7-4.3c-1.3-3.4-1.3-7.1,0-10.5c0.6-1.6,1.6-3,2.7-4.2c1.2-1.2,2.6-2.2,4.1-2.9
	c1.6-0.7,3.3-1.1,5-1.1c1.8,0,3.4,0.3,5.1,1.1c1.5,0.7,2.9,1.6,4,2.8c1.2,1.2,2,2.6,2.7,4.2C43.9,272.6,43.8,276.3,42.6,279.7
	L42.6,279.7z M122.2,246.1h-11.3c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.9,1.4-0.9,2.3v1.4c-1.4-1.7-3.2-3-5.1-3.9
	c-3.1-1.5-6.5-2.2-9.9-2.2c-7.3,0-14.2,2.9-19.4,8c-2.7,2.7-4.8,5.9-6.2,9.4c-1.6,3.9-2.4,8.1-2.3,12.4c-0.1,4.2,0.7,8.4,2.3,12.4
	c1.5,3.5,3.5,6.7,6.2,9.4c5.1,5.2,12.1,8.1,19.3,8.1c3.4,0.1,6.8-0.7,9.9-2.2c1.9-1,3.8-2.3,5.2-3.9v1.5c0,0.8,0.3,1.6,0.9,2.2
	c0.6,0.5,1.3,0.9,2.1,0.9h11.3c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.4,0.9-2.2v-50.3c0-0.8-0.3-1.6-0.8-2.2
	C123.8,246.5,123,246.1,122.2,246.1L122.2,246.1z M106.9,279.7c-0.6,1.6-1.5,3-2.7,4.3c-1.2,1.2-2.5,2.2-4,2.9
	c-3.2,1.5-6.9,1.5-10.1,0c-1.5-0.7-2.9-1.7-4.1-2.9c-1.2-1.2-2.1-2.7-2.7-4.3c-1.2-3.4-1.2-7.1,0-10.5c0.6-1.6,1.5-2.9,2.7-4.2
	c1.2-1.2,2.5-2.2,4.1-2.9c3.2-1.5,6.9-1.5,10,0c1.5,0.7,2.9,1.6,4,2.8c1.1,1.2,2,2.6,2.7,4.2C108.2,272.6,108.2,276.3,106.9,279.7
	L106.9,279.7z M234.8,272.9c-1.6-1.4-3.5-2.6-5.5-3.4c-2.1-0.9-4.4-1.5-6.6-2l-8.6-1.7c-2.2-0.4-3.8-1-4.6-1.7
	c-0.7-0.5-1.2-1.3-1.2-2.2c0-0.9,0.5-1.7,1.6-2.4c1.5-0.8,3.1-1.2,4.8-1.1c2.2,0,4.4,0.5,6.4,1.3c2,0.9,3.9,1.8,5.7,3
	c2.5,1.6,4.7,1.3,6.2-0.5l4.1-4.7c0.8-0.8,1.2-1.8,1.3-2.9c-0.1-1.2-0.7-2.2-1.6-3c-1.7-1.5-4.5-3.1-8.2-4.7
	c-3.7-1.6-8.4-2.4-13.9-2.4c-3.4-0.1-6.7,0.4-9.9,1.4c-2.7,0.9-5.3,2.2-7.6,3.9c-2.1,1.6-3.7,3.6-4.9,6c-1.1,2.3-1.7,4.8-1.7,7.3
	c0,4.7,1.4,8.5,4.2,11.3c2.8,2.8,6.5,4.7,11.1,5.6l9,2c1.9,0.3,3.9,0.9,5.7,1.8c1,0.4,1.6,1.4,1.6,2.5c0,1-0.5,1.9-1.6,2.7
	c-1.1,0.8-2.9,1.3-5.3,1.3c-2.4,0-4.9-0.5-7.1-1.6c-2.1-1-4-2.3-5.8-3.8c-0.8-0.6-1.6-1.1-2.6-1.5c-1-0.3-2.3,0-3.6,1.1l-4.9,3.7
	c-1.4,1-2.1,2.7-1.7,4.3c0.3,1.7,1.6,3.3,4.1,5.2c6.2,4.2,13.6,6.4,21.1,6.2c3.5,0,7-0.4,10.3-1.4c2.9-0.9,5.6-2.2,8-4
	c2.2-1.6,4-3.7,5.2-6.2c1.2-2.4,1.8-5,1.8-7.7c0.1-2.4-0.4-4.8-1.4-7C237.7,276,236.4,274.3,234.8,272.9L234.8,272.9z M284.2,286.6
	c-0.5-0.9-1.4-1.5-2.5-1.7c-1,0-2.1,0.3-2.9,0.9c-1.4,0.9-3,1.4-4.6,1.5c-0.5,0-1.1-0.1-1.6-0.2c-0.6-0.1-1.1-0.4-1.5-0.8
	c-0.5-0.5-0.9-1.1-1.2-1.7c-0.4-1-0.6-2-0.5-3v-20.5H284c0.9,0,1.7-0.4,2.3-1c0.6-0.6,1-1.3,1-2.2v-8.7c0-0.9-0.3-1.7-1-2.2
	c-0.6-0.6-1.4-0.9-2.2-0.9h-14.7v-14c0-0.8-0.3-1.7-0.9-2.2c-0.6-0.5-1.3-0.8-2.1-0.9h-11.4c-0.8,0-1.6,0.3-2.2,0.9
	c-0.6,0.6-1,1.4-1,2.2v14h-6.5c-0.8,0-1.6,0.3-2.2,1c-0.5,0.6-0.8,1.4-0.8,2.2v8.7c0,0.8,0.3,1.6,0.8,2.2c0.5,0.7,1.3,1,2.2,1h6.5
	v24.4c-0.1,2.9,0.5,5.8,1.7,8.4c1.1,2.2,2.5,4.1,4.4,5.7c1.8,1.5,3.9,2.6,6.2,3.2c2.3,0.7,4.7,1.1,7.1,1.1c3.1,0,6.3-0.5,9.3-1.5
	c2.8-0.9,5.3-2.5,7.3-4.6c1.3-1.3,1.4-3.4,0.4-4.9L284.2,286.6z M346,246.1h-11.3c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.4-0.9,2.3
	v1.4c-1.4-1.7-3.1-3-5.1-3.9c-3.1-1.5-6.5-2.2-9.9-2.2c-7.3,0-14.2,2.9-19.4,8c-2.7,2.7-4.8,5.9-6.2,9.4c-1.6,3.9-2.4,8.1-2.3,12.3
	c-0.1,4.2,0.7,8.4,2.3,12.4c1.4,3.5,3.6,6.7,6.2,9.4c5.1,5.2,12,8.1,19.3,8.1c3.4,0.1,6.8-0.7,9.9-2.1c2-1,3.8-2.3,5.2-3.9v1.5
	c0,0.8,0.3,1.6,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9H346c1.7,0,3-1.3,3-3v-50.3c0-0.8-0.3-1.6-0.8-2.2
	C347.7,246.5,346.9,246.1,346,246.1L346,246.1z M330.8,279.7c-0.6,1.6-1.5,3-2.7,4.3c-1.2,1.2-2.5,2.2-4,2.9
	c-1.6,0.7-3.3,1.1-5.1,1.1c-1.8,0-3.4-0.4-5-1.1c-1.5-0.7-2.9-1.7-4.1-2.9c-1.2-1.2-2.1-2.7-2.6-4.3c-1.2-3.4-1.2-7.1,0-10.5
	c0.6-1.6,1.5-3,2.6-4.2c1.2-1.2,2.6-2.2,4.1-2.9c1.6-0.7,3.3-1.1,5-1.1c1.7,0,3.4,0.3,5.1,1.1c1.5,0.7,2.8,1.6,4,2.8
	c1.2,1.2,2.1,2.6,2.7,4.2C332.1,272.5,332.1,276.3,330.8,279.7L330.8,279.7z M408,285.8l-6.5-5c-1.2-1-2.4-1.3-3.4-0.9
	c-0.9,0.4-1.7,1-2.4,1.7c-1.4,1.7-3.1,3.2-4.9,4.5c-2,1.1-4.1,1.7-6.3,1.5c-2.6,0-5-0.7-7.1-2.2c-2.1-1.5-3.7-3.5-4.5-6
	c-0.6-1.7-0.9-3.4-0.9-5.1c0-1.8,0.3-3.5,0.9-5.3c0.6-1.6,1.4-3,2.6-4.2c1.2-1.2,2.5-2.2,4-2.8c1.6-0.7,3.3-1.1,5.1-1.1
	c2.2-0.1,4.4,0.5,6.3,1.6c1.9,1.2,3.5,2.7,4.9,4.5c0.6,0.7,1.4,1.3,2.3,1.7c1,0.4,2.2,0.1,3.4-0.9l6.5-4.9c0.8-0.5,1.4-1.3,1.7-2.2
	c0.4-1,0.3-2.1-0.3-3c-2.5-3.9-5.9-7.1-10-9.4c-4.3-2.4-9.4-3.7-15.1-3.7c-4,0-8,0.8-11.8,2.3c-3.6,1.5-6.8,3.6-9.5,6.3
	c-2.7,2.7-4.9,5.9-6.4,9.5c-3.1,7.5-3.1,15.9,0,23.4c1.5,3.5,3.6,6.8,6.4,9.4c5.7,5.6,13.3,8.6,21.3,8.6c5.7,0,10.8-1.3,15.1-3.7
	c4.1-2.3,7.6-5.5,10.1-9.5c0.5-0.9,0.6-2,0.3-2.9C409.4,287.2,408.8,286.4,408,285.8L408,285.8z M468.2,297.5l-17.9-26.2l15.3-20.2
	c0.7-0.9,1-2.2,0.6-3.3c-0.3-0.8-1-1.6-2.9-1.6h-12.1c-0.7,0-1.4,0.2-2,0.5c-0.8,0.4-1.4,1-1.8,1.7l-12.2,17.1h-2.9v-40.4
	c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.3-0.9-2.1-0.9h-11.3c-0.8,0-1.6,0.3-2.2,0.9c-0.6,0.6-0.9,1.3-0.9,2.2v74.5
	c0,0.9,0.3,1.6,0.9,2.2c0.6,0.6,1.4,0.9,2.2,0.9h11.3c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.4,0.9-2.2v-19.7h3.2l13.3,20.4
	c0.8,1.5,2.3,2.4,3.9,2.4h12.7c1.9,0,2.7-0.9,3.1-1.7C469,299.8,468.9,298.5,468.2,297.5L468.2,297.5z M186.4,246.1h-12.7
	c-1,0-1.9,0.3-2.6,1c-0.6,0.6-1,1.3-1.2,2.1l-9.4,34.8h-2.3l-10-34.8c-0.2-0.7-0.5-1.4-1-2.1c-0.6-0.7-1.4-1.1-2.3-1.1H132
	c-1.7,0-2.7,0.5-3.2,1.7c-0.3,1-0.3,2.1,0,3.1l16,49c0.3,0.7,0.6,1.5,1.2,2c0.6,0.6,1.5,0.9,2.4,0.9h6.8l-0.6,1.6l-1.5,4.5
	c-0.5,1.4-1.3,2.6-2.5,3.5c-1.1,0.8-2.4,1.3-3.8,1.2c-1.2,0-2.3-0.3-3.4-0.7c-1.1-0.5-2.1-1.1-3-1.8c-0.8-0.6-1.8-0.9-2.9-0.9h-0.1
	c-1.2,0.1-2.3,0.7-2.9,1.8l-4,5.9c-1.6,2.6-0.7,4.2,0.3,5.1c2.2,2,4.7,3.5,7.5,4.4c3.1,1.1,6.3,1.6,9.5,1.6c5.8,0,10.6-1.6,14.3-4.7
	c3.8-3.4,6.7-7.8,8.1-12.8l18.6-60.6c0.4-1.1,0.5-2.2,0.1-3.2C188.8,246.9,188.1,246.1,186.4,246.1L186.4,246.1z M186.4,246.1'
              />
            </svg>
          </div>
        </div>

        <div className='brands'>
          <div className='brands_hero'>
            {/* These are brands employ some of <br />
            the users of our CV building tools */}
            Top Hiring Brands
          </div>
          <div className='brands_logos_wrapper'>
            <div className='brands_logos'>
              {/* <svg
              style={{ marginBottom: '-1rem' }}
              height='200'
              width='200'
              version='1.0'
              viewBox='-150 -75.3385 1300 452.031'
            >
              <path
                d='M620.38 235.668c-58.111 42.833-142.34 65.686-214.86 65.686-101.685 0-193.227-37.61-262.483-100.161-5.44-4.92-.565-11.623 5.964-7.792 74.74 43.486 167.153 69.647 262.613 69.647 64.38 0 135.202-13.32 200.322-40.961 9.837-4.179 18.064 6.442 8.444 13.581'
                fill='#f90'
                fill-rule='evenodd'
              />
              <path
                d='M644.54 208.027c-7.4-9.49-49.102-4.484-67.82-2.264-5.702.697-6.572-4.266-1.436-7.835 33.213-23.375 87.712-16.628 94.067-8.793 6.355 7.879-1.654 62.508-32.865 88.582-4.788 4.005-9.359 1.872-7.226-3.439 7.009-17.498 22.723-56.718 15.28-66.251'
                fill='#f90'
                fill-rule='evenodd'
              />
              <path
                d='M578.026 32.908V10.186c0-3.439 2.612-5.746 5.746-5.746H685.5c3.265 0 5.877 2.35 5.877 5.746v19.457c-.044 3.265-2.786 7.531-7.661 14.278l-52.714 75.262c19.588-.478 40.264 2.438 58.024 12.45 4.005 2.263 5.093 5.572 5.398 8.836v24.246c0 3.308-3.657 7.182-7.487 5.18-31.298-16.41-72.868-18.195-107.474.174-3.526 1.916-7.226-1.915-7.226-5.223v-23.027c0-3.7.043-10.012 3.743-15.627l61.072-87.581h-53.15c-3.264 0-5.876-2.307-5.876-5.703M206.939 174.683h-30.95c-2.96-.217-5.31-2.437-5.528-5.267V10.578c0-3.178 2.655-5.703 5.963-5.703h28.86c3.004.13 5.398 2.438 5.616 5.31V30.95h.566c7.53-20.067 21.677-29.425 40.743-29.425 19.37 0 31.472 9.358 40.178 29.425 7.487-20.067 24.507-29.425 42.746-29.425 12.971 0 27.162 5.354 35.824 17.368 9.794 13.363 7.792 32.777 7.792 49.797l-.044 100.248c0 3.178-2.655 5.746-5.963 5.746h-30.906c-3.09-.217-5.572-2.698-5.572-5.746V84.752c0-6.704.61-23.42-.87-29.774-2.307-10.665-9.228-13.669-18.196-13.669-7.487 0-15.322 5.006-18.5 13.016-3.177 8.01-2.872 21.416-2.872 30.427v84.185c0 3.178-2.656 5.746-5.964 5.746h-30.906c-3.134-.217-5.572-2.698-5.572-5.746l-.043-84.185c0-17.717 2.916-43.79-19.066-43.79-22.243 0-21.373 25.42-21.373 43.79v84.185c0 3.178-2.655 5.746-5.963 5.746M778.958 1.524c45.923 0 70.779 39.437 70.779 89.583 0 48.448-27.467 86.885-70.78 86.885-45.096 0-69.646-39.438-69.646-88.583 0-49.449 24.855-87.885 69.647-87.885m.261 32.429c-22.81 0-24.246 31.08-24.246 50.45 0 19.415-.304 60.854 23.985 60.854 23.985 0 25.116-33.43 25.116-53.802 0-13.407-.566-29.426-4.614-42.136-3.482-11.057-10.403-15.366-20.24-15.366m130.065 140.73h-30.819c-3.09-.217-5.572-2.698-5.572-5.746l-.043-158.882c.26-2.916 2.83-5.18 5.963-5.18H907.5c2.699.13 4.919 1.96 5.528 4.44v24.29h.566c8.663-21.721 20.807-32.081 42.18-32.081 13.886 0 27.424 5.005 36.13 18.717C1000 32.951 1000 54.325 1000 69.691v99.986c-.348 2.786-2.916 5.006-5.963 5.006H963c-2.83-.217-5.18-2.307-5.485-5.006V83.402c0-17.368 2.003-42.79-19.37-42.79-7.53 0-14.452 5.05-17.89 12.711-4.354 9.708-4.92 19.371-4.92 30.08v85.534c-.043 3.178-2.742 5.746-6.05 5.746M496.931 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.753 14.06-21.416 14.06-11.883 0-18.848-9.053-18.848-22.417 0-26.379 23.637-31.167 46.054-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.145-12.493-17.76-20.633-16.977 17.325-29.034 22.505-51.017 22.505-26.074 0-46.315-16.063-46.315-48.23 0-25.117 13.581-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.2-10.752v-4.004c0-7.357.565-16.063-3.788-22.418-3.743-5.702-10.97-8.053-17.368-8.053-11.797 0-22.287 6.05-24.855 18.587-.523 2.786-2.569 5.528-5.398 5.659l-29.992-3.221c-2.524-.566-5.354-2.612-4.614-6.486C417.795 10.97 450.703 0 480.13 0c15.061 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.008 20.85 11.666 28.686 1.96 2.786 2.394 6.138-.13 8.227-6.312 5.267-17.543 15.061-23.724 20.546l-.043-.087M91.194 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.71 14.06-21.416 14.06-11.883 0-18.805-9.053-18.805-22.417 0-26.379 23.637-31.167 46.011-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.102-12.493-17.76-20.633-16.977 17.325-28.99 22.505-51.017 22.505C20.285 176.86 0 160.797 0 128.63c0-25.117 13.625-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.199-10.752v-4.004c0-7.357.566-16.063-3.744-22.418-3.787-5.702-11.012-8.053-17.368-8.053-11.796 0-22.33 6.05-24.899 18.587-.522 2.786-2.568 5.528-5.354 5.659L9.794 53.846c-2.525-.566-5.31-2.612-4.614-6.486C12.101 10.97 44.966 0 74.392 0c15.06 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.007 20.85 11.666 28.686 2.003 2.786 2.438 6.138-.087 8.227-6.312 5.267-17.542 15.061-23.723 20.546l-.087-.087'
                fill-rule='evenodd'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='200'
              width='200'
              viewBox='-132.87405 -41.4045 1151.5751 248.427'
            >
              <path
                d='M838.877 142.146c0-12.962 10.523-23.478 23.478-23.478 12.962 0 23.472 10.516 23.472 23.478 0 12.962-10.51 23.472-23.472 23.472-12.955 0-23.478-10.51-23.478-23.472'
                fill='#86bc24'
              />
              <path
                d='M90.11 79.968c0-14.87-2.874-25.903-8.622-33.09-5.754-7.182-14.47-10.769-26.189-10.769H42.833v90.938h9.538c13.017 0 22.555-3.858 28.628-11.603 6.067-7.73 9.11-19.558 9.11-35.476m44.457-1.549c0 27.093-7.283 47.97-21.848 62.623-14.565 14.66-35.041 21.99-61.434 21.99H0V.689h54.864c25.449 0 45.096 6.665 58.94 19.987 13.84 13.329 20.762 32.568 20.762 57.744m142.057 84.61h40.809V.008h-40.809zm98.137-60.808c0 10.394 1.359 18.322 4.07 23.77 2.717 5.456 7.268 8.18 13.668 8.18 6.331 0 10.809-2.724 13.417-8.18 2.609-5.448 3.906-13.376 3.906-23.77 0-10.34-1.318-18.139-3.96-23.404-2.65-5.278-7.167-7.921-13.573-7.921-6.264 0-10.74 2.63-13.458 7.86-2.711 5.238-4.07 13.057-4.07 23.465m76.597 0c0 19.803-5.19 35.251-15.598 46.325-10.4 11.08-24.96 16.624-43.675 16.624-17.949 0-32.236-5.666-42.84-16.998-10.618-11.331-15.924-26.644-15.924-45.951 0-19.742 5.197-35.082 15.605-46.02 10.407-10.937 25-16.406 43.79-16.406 11.61 0 21.882 2.534 30.782 7.596 8.906 5.06 15.781 12.31 20.611 21.752 4.837 9.43 7.249 20.462 7.249 33.078m16.206 60.809h40.816V41.937h-40.816zm-.001-135.741h40.815V0h-40.815zm123.506 104.855c5.51 0 12.073-1.4 19.729-4.178v30.468c-5.503 2.419-10.734 4.151-15.707 5.177-4.973 1.04-10.809 1.556-17.486 1.556-13.703 0-23.58-3.444-29.647-10.32-6.04-6.875-9.07-17.432-9.07-31.678V73.252h-14.293V41.947h14.294V11.023l41.128-7.153v38.077h26.039v31.305h-26.04v47.133c0 7.84 3.69 11.76 11.053 11.76m94.462 0c5.51 0 12.072-1.4 19.728-4.178v30.468c-5.495 2.419-10.733 4.151-15.706 5.177-4.98 1.04-10.795 1.556-17.487 1.556-13.702 0-23.58-3.444-29.633-10.32-6.053-6.875-9.083-17.432-9.083-31.678V73.252h-14.3V41.947h14.3V10.554L674.47 3.87v38.077h26.054v31.305H674.47v47.133c0 7.84 3.69 11.76 11.06 11.76m71.228-44.675c.557-6.63 2.452-11.488 5.685-14.593 3.248-3.098 7.256-4.646 12.053-4.646 5.23 0 9.388 1.739 12.473 5.244 3.104 3.485 4.72 8.152 4.85 13.995zm57.554-33.397c-9.701-9.511-23.465-14.273-41.27-14.273-18.717 0-33.119 5.469-43.214 16.406-10.089 10.938-15.136 26.63-15.136 47.08 0 19.802 5.456 35.074 16.339 45.794 10.89 10.72 26.181 16.087 45.876 16.087 9.457 0 17.595-.645 24.416-1.93 6.78-1.27 13.342-3.566 19.708-6.881l-6.27-27.29c-4.627 1.889-9.029 3.343-13.186 4.3-6.006 1.393-12.596 2.093-19.77 2.093-7.866 0-14.076-1.922-18.627-5.768-4.552-3.852-6.978-9.164-7.256-15.93h72.949V95.167c0-17.887-4.851-31.59-14.559-41.094M188.73 87.47c.557-6.63 2.452-11.488 5.686-14.593 3.24-3.098 7.255-4.646 12.058-4.646 5.218 0 9.375 1.739 12.467 5.244 3.104 3.485 4.714 8.152 4.857 13.995zm57.56-33.397c-9.707-9.511-23.464-14.273-41.276-14.273-18.724 0-33.119 5.469-43.207 16.406-10.088 10.938-15.143 26.63-15.143 47.08 0 19.802 5.449 35.074 16.345 45.794 10.884 10.72 26.176 16.087 45.87 16.087 9.457 0 17.595-.645 24.416-1.93 6.78-1.27 13.342-3.566 19.715-6.881l-6.277-27.29c-4.627 1.889-9.03 3.343-13.18 4.3-6.019 1.393-12.602 2.093-19.776 2.093-7.86 0-14.076-1.922-18.627-5.768-4.559-3.852-6.977-9.164-7.256-15.93h72.949V95.167c0-17.887-4.851-31.59-14.552-41.094'
                fill='#0f0b0b'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='200'
              width='200'
              viewBox='-150 -39.7765 1300 238.659'
            >
              <path
                d='M988.307 5.583v29.781c-15.429-5.824-29.166-8.77-41.188-8.77-7.122 0-12.792 1.32-17.056 3.869-4.264 2.571-6.44 5.737-6.44 9.473 0 4.967 4.813 9.385 14.506 13.341l28.001 13.627c22.64 10.792 33.87 25.122 33.87 43.123 0 14.967-5.956 26.902-17.979 35.738-11.935 8.923-28.001 13.34-48.002 13.34-9.231 0-17.517-.395-24.88-1.23-7.363-.79-15.825-2.418-25.21-4.747v-31.166c17.21 5.824 32.88 8.77 46.99 8.77 16.837 0 25.21-4.88 25.21-14.727 0-4.901-3.428-8.857-10.395-11.957l-31.1-13.253c-11.473-5.187-20.001-11.473-25.584-18.924-5.495-7.516-8.286-16.132-8.286-25.979 0-13.78 5.802-24.88 17.275-33.32C909.6 4.198 924.942 0 944.02 0c6.198 0 13.342.55 21.254 1.56 7.978 1.077 15.649 2.396 23.034 4.023zm-880.83 0v29.781c-15.43-5.824-29.144-8.77-41.167-8.77-7.143 0-12.791 1.32-17.055 3.869-4.264 2.571-6.44 5.737-6.44 9.473 0 4.967 4.88 9.385 14.572 13.341l28.001 13.627c22.55 10.792 33.804 25.122 33.804 43.123 0 14.967-5.978 26.902-17.913 35.738-12.022 8.923-28.001 13.34-48.068 13.34-9.231 0-17.54-.395-24.902-1.23-7.363-.79-15.737-2.418-25.188-4.747v-31.166c17.276 5.824 32.947 8.77 46.97 8.77 16.835 0 25.21-4.88 25.21-14.727 0-4.901-3.408-8.857-10.31-11.957l-31.1-13.253c-11.56-5.187-20.088-11.473-25.583-18.924C2.725 64.355 0 55.74 0 45.892c0-13.78 5.759-24.88 17.297-33.32C28.771 4.198 44.134 0 63.212 0c6.264 0 13.319.55 21.32 1.56 7.912 1.077 15.582 2.396 22.945 4.023zm32.089 150.732V2.79h45.607v153.524zM220.45 2.791h111.653v28.375H264.34v34.045h58.772v25.584H264.34v35.738h69.146v29.782H220.45zm193.92 0l38.001 93.982 39.76-93.982h52.882v153.524h-42.576V55.057l-44.175 102.664h-26.287L389.49 55.057v101.258h-30.793V2.79zm165.856 0h111.652v28.375h-67.391v34.045h58.772v25.584h-58.772v35.738h68.776v29.782H580.226zm169.019 55.058v98.466h-30.773V2.79h49.784l52.881 96.774V2.791h30.768v153.524h-48.374z'
                class='fil0'
                clip-rule='evenodd'
                fill='#099'
                fill-rule='evenodd'
                image-rendering='optimizeQuality'
                shape-rendering='geometricPrecision'
                text-rendering='geometricPrecision'
              />
            </svg> */}

              <img src='/assets/images/brandlogos/amazon.png' alt='amazon' />

              <img src='/assets/images/brandlogos/hsbc.png' alt='hsbc' />

              <img
                src='/assets/images/brandlogos/deloitte.png'
                alt='deloitte'
              />

              <img src='/assets/images/brandlogos/siemens.png' alt='siemens' />
            </div>
            <div className='brands_logos'>
              <img src='/assets/images/brandlogos/tata.png' alt='tata' />

              <img src='/assets/images/brandlogos/stanbic.png' alt='stanbic' />

              <img src='/assets/images/brandlogos/sasol.png' alt='sasol' />

              <img src='/assets/images/brandlogos/absa.png' alt='absa' />
            </div>
          </div>
        </div>

        <div className=''>
          <div className='brands_hero'>Frequently Asked Questions</div>

          <Accordion className='proTips_Accordian faq_accordian' flush>
            <Accordion.Item className='proTips_Accordian_Item' eventKey='1'>
              <Accordion.Header className='proTips_Accordian_Header'>
                <div>Can I change (upgrade) my package?</div>
                <span className='proTips_Accordian_Header_expand_svg'>
                  <svg viewBox='0 0 24 24' width='20px' fill='#fff'>
                    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
                    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
                  </svg>
                </span>
              </Accordion.Header>
              <Accordion.Body className={`proTips_Accordian_Body `}>
                Immediately you've finished creating your CV, you can download a
                DOCX (Microsoft Word), PDF, TXT or forwarding to our reviewer
                directly from your dashboard or from the CV editor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className='proTips_Accordian faq_accordian' flush>
            <Accordion.Item className='proTips_Accordian_Item' eventKey='1'>
              <Accordion.Header className='proTips_Accordian_Header'>
                <div>Can I download my CV to Word or PDF</div>
                <span className='proTips_Accordian_Header_expand_svg'>
                  <svg viewBox='0 0 24 24' width='20px' fill='#fff'>
                    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
                    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
                  </svg>
                </span>
              </Accordion.Header>
              <Accordion.Body className={`proTips_Accordian_Body `}>
                Immediately you've finished creating your CV, you can download a
                DOCX (Microsoft Word), PDF, TXT or forwarding to our reviewer
                directly from your dashboard or from the CV editor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className='proTips_Accordian faq_accordian' flush>
            <Accordion.Item className='proTips_Accordian_Item' eventKey='1'>
              <Accordion.Header className='proTips_Accordian_Header'>
                <div>
                  Why should I provide SOME contents for cover letter & LinkedIn
                  summary/Headline myself?
                </div>
                <span className='proTips_Accordian_Header_expand_svg'>
                  <svg viewBox='0 0 24 24' width='20px' fill='#fff'>
                    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
                    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
                  </svg>
                </span>
              </Accordion.Header>
              <Accordion.Body className={`proTips_Accordian_Body `}>
                Immediately you've finished creating your CV, you can download a
                DOCX (Microsoft Word), PDF, TXT or forwarding to our reviewer
                directly from your dashboard or from the CV editor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className='proTips_Accordian faq_accordian' flush>
            <Accordion.Item className='proTips_Accordian_Item' eventKey='1'>
              <Accordion.Header className='proTips_Accordian_Header'>
                <div>Is there a money-back gurantee?</div>
                <span className='proTips_Accordian_Header_expand_svg'>
                  <svg viewBox='0 0 24 24' width='20px' fill='#fff'>
                    <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
                    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
                  </svg>
                </span>
              </Accordion.Header>
              <Accordion.Body className={`proTips_Accordian_Body `}>
                Immediately you've finished creating your CV, you can download a
                DOCX (Microsoft Word), PDF, TXT or forwarding to our reviewer
                directly from your dashboard or from the CV editor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className='pricing_footer'>
          <span>Terms & Conditions</span>
          <span>Privacy</span>
          <span>Cookies Policy</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}
