import React, { useState, useEffect } from 'react';
import { Redirect, withRouter, useHistory } from 'react-router-dom';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import { loadStripe } from '@stripe/stripe-js';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import {
  getSubscriptions,
  getProductId,
  getCustomerInvoicesById,
  getCustomerPaymentIntents,
} from '../../API/index';
import { Elements, useStripe } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_RJgWhGMxoH382zC7NjEm7D7H001Z6jEqhN');
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const SubscriptionWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <Subscription {...props} />
  </Elements>
);

const Subscription = ({ userLoggedIn, userData, location, ...props }) => {
  const history = useHistory();
  // console.log(location);

  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  // const [subscriptions, setSubscriptions] = useState(null);
  // const [customerPaymentIntents, setCustomerPaymentIntents] = useState([]);
  const [product, setProduct] = useState(null);
  const [invoices, setInvoices] = useState(null);
  const trialDays = 3;
  // console.log('invoices', invoices);
  // console.log(customerPaymentIntents);
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // console.log(new URLSearchParams(window.location.search).get('priceId'));

    // Retrieve the PaymentIntent
    clientSecret &&
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Payment Successfully');
            // setMessage('Trial Successfully activated');
            break;

          case 'processing':
            setMessage(
              "Payment processing. We'll update you when payment is received."
            );
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);

  useEffect(() => {
    const fetchData = async () => {
      // getCustomerPaymentIntents(userData?.stripeId).then((res) => {
      //   // console.log(res?.data);
      //   setCustomerPaymentIntents(
      //     res?.data.paymentIntents.data?.filter((e) => e.status === 'succeeded')
      //   );
      // });
      // getSubscriptions(userData?.stripeId).then((res) => {
      //   setSubscriptions(res?.data.subscriptions.data);
      // });
      getCustomerInvoicesById(userData?.stripeId).then((res) => {
        setInvoices(res?.data?.invoices?.data);
      });
    };
    userData?.stripeId && fetchData();
  }, [userData?.stripeId]);

  console.log(invoices);

  useEffect(() => {
    if(props?.subscriptions && props?.customerPaymentIntents ) { 
      if(props?.subscriptions?.length > 0) {
        getProductId(props?.subscriptions[0].plan.product).then((res) =>
            setProduct(res?.data.product)
          ).catch(() => console.log('err'))
      }else if (props?.customerPaymentIntents.length > 0 ) {
         getProductId('prod_NIGHGjRemCNczf').then((res) =>
           setProduct(res?.data.product)).catch(() => console.log('err'))
      } else {
        history.push('/select-bundle')
      }
    }
      
  }, [props?.subscriptions, props?.customerPaymentIntents ]);
  // if (subscriptions?.length === 0) {
  //   return <Redirect to={{ pathname: '/select-bundle' }} />;
  // }
  // setTimeout(() => {
  // }, 1000);
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
  };
  var TransactionOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const trialStartDate =
    props?.customerPaymentIntents?.length > 0 &&
    new Date(props?.customerPaymentIntents[0].created * 1000);
  const currentPeriodEndsOn =
    props?.subscriptions?.length > 0
      ? new Date(props?.subscriptions[0]?.current_period_end * 1000)
      : props?.customerPaymentIntents?.length > 0
      ? new Date(trialStartDate.setDate(trialStartDate.getDate() + trialDays))
      : new Date();
  // new Date(trialStartDate.setDate(trialStartDate.getDate() + 3));

  // console.log('trialStartDate', trialStartDate);
  // console.log('currentPeriodEndsOn', currentPeriodEndsOn);

  const today = new Date();
  // console.log(today > currentPeriodEndsOn);

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar
          page={'subscription'}
          userLoggedIn={userLoggedIn}
          userData={userData}
        />
        <div className='profile_hero_subs'>
          <h2>{message}</h2>
          <div className='profile_header'>
            <div className='profile_toast'>Subscriptions details</div>
          </div>
          <div className='acc_details'>
            <div className='plan pricing_cards subs_cards '>
              <div className=' pricing_card diamond'>
                <div>
                  <div className='subs_card_header'>
                    <div className='pricing_title'>{product?.name}</div>
                    <div
                      className='active_sub'
                      style={{
                        background: today > currentPeriodEndsOn && 'red',
                      }}
                    >
                      {today > currentPeriodEndsOn ? 'Expired' : 'Active'}
                    </div>
                  </div>
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
                      LinkedIn summary generator
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
                      Resume/CV/Job description scanner
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
                    <span>
                      {/* {product?.name === 'Silver' ? 1 : 7} -Day Trial */}
                    </span>{' '}
                    <br />₤
                    {props?.subscriptions?.length > 0
                      ? props?.subscriptions[0].plan.amount / 100
                      : props?.customerPaymentIntents?.length > 0 &&
                        props?.customerPaymentIntents[0].amount / 100}
                    <br />
                    <span>
                      {' '}
                      {product?.name === 'Silver'
                        ? `${trialDays}- Day Trial`
                        : product?.name === 'Gold'
                        ? 'Monthly'
                        : product?.name === 'Platinum'
                        ? 'Ouarterly'
                        : 'Annually'}
                    </span>
                    <br />
                    <span style={{ fontSize: '13px' }}>
                      Ends on :{' '}
                      {currentPeriodEndsOn
                        .toLocaleDateString('en-US', options)
                        .toString()}
                    </span>
                  </div>
                  <div className='action_btn'>
                    <button
                      onClick={() =>
                        props?.subscriptions.length > 0
                          ? history.push(
                              `/select-bundle/${props?.subscriptions[0].id}`
                            )
                          : history.push(`/select-bundle`)
                      }
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='transactions'>
              <div className='transactions_header'>
                <h4>Transactions</h4>
              </div>
              <div className='transactions_body'>
                <div className='profile_container transaction_table'>
                  <table>
                    <thead>
                      <td className='billing_period'>Billing Period</td>
                      <td className='amount'>Amount</td>
                      <td className='amount'>Charged On</td>
                      <td>Action</td>
                    </thead>
                    <tbody>
                      {invoices
                        ?.sort((a, b) => a.created < b.created)
                        .map((invoice) => (
                          <tr id={invoice.id}>
                            <td className='billing_period'>
                              {new Date(
                                invoice.lines.data[0].period.start * 1000
                              )
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}{' '}
                              -{' '}
                              {new Date(invoice.lines.data[0].period.end * 1000)
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}
                            </td>
                            <td className='amount'>
                              $ {invoice.amount_paid / 100}
                            </td>
                            <td className='amount'>
                              {new Date(invoice.created * 1000)
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}
                            </td>
                            <td>
                              <a
                                href={invoice.invoice_pdf}
                                target='_blank'
                                rel='noreferrer'
                              >
                                <svg
                                  // onClick={() =>history.push(`/builder_view/${documentData.templateName}/${pageData.id}`)}
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
                            </td>
                          </tr>
                        ))}
                      {props?.customerPaymentIntents
                        ?.sort((a, b) => a.created < b.created)
                        .map((paymentIntent) => (
                          <tr id={paymentIntent.id}>
                            <td className='billing_period'>
                              {new Date(paymentIntent.created * 1000)
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}{' '}
                              -{' '}
                              {new Date(
                                new Date(paymentIntent.created * 1000).setDate(
                                  trialStartDate.getDate() + trialDays
                                )
                              )
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}
                            </td>
                            <td className='amount'>
                              $ {paymentIntent.amount_received / 100}
                            </td>
                            <td className='amount'>
                              {new Date(paymentIntent.created * 1000)
                                .toLocaleDateString('en-US', TransactionOptions)
                                .toString()}
                            </td>
                            <td></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
};

export default withRouter(SubscriptionWrapper);
