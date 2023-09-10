import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import Pagination from '@mui/material/Pagination';
import usePagination from '../../../hooks/usePagination';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { getAllAccounts } from '../../../API/index';

export default function Linkedin() {
  const jwtToken = localStorage.getItem('jwtToken');

  const [searchText, setSearchText] = useState('');
  const [allAccounts, setAllAccounts] = useState('');
  const [msg, setMsg] = useState(false);
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };
  let [page, setPage] = useState(1);
  const [filterPagination, setFilterPagination] = useState('10');
  const PER_PAGE =
    filterPagination === 'All' ? allAccounts.length : Number(filterPagination);

  const count = Math.ceil(allAccounts.length / PER_PAGE);
  const _DATA = usePagination(allAccounts, PER_PAGE);

  const handlePageChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const [filterPlan, setFilterPlan] = useState('All');
  const [filterRole, setFilterRole] = useState('All');
  const [filterFromDate, setFilterFromDate] = useState('');
  const [filterToDate, setFilterToDate] = useState('');
  console.log(filterFromDate, filterToDate);

  const planOptions = ['All', 'Paid', 'Free'];
  const defaultPlanOption = planOptions[0];

  const roleOptions = ['All', 'Admin', 'User'];
  const defaultRoleOption = roleOptions[0];

  const paginationOptions = ['10', '20', '50', '100', 'All'];
  const defaultPaginationOption = paginationOptions[0];

  useEffect(() => {
    getAllAccounts(config).then((res) => {
      if (res?.status === 200) {
        setAllAccounts(res?.data);
      } else {
        setMsg(res);
      }
    });
  }, []);

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

  const handleFilterDurationSubmit = (e) => {
    e.preventDefault();
    const fromDate = e.target[0].value;
    const toDate = e.target[1].value;
    setFilterFromDate(fromDate);
    setFilterToDate(toDate);
  };

  return (
    <div
      className='chooseTemplate_main linkedin_admin_view_main all_users_page'
      style={{ gap: '0' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div className='chooseViewLinkedIn'>
          <h2>All Users</h2>
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
      <div className='search_all_users'>
        <div className='search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className='sort_dropdown sort_container'>
          <span>Plan :</span>
          <Dropdown
            className=' dropdown_chooseTemplate category_dropdown_chooseTemplate'
            options={planOptions}
            value={defaultPlanOption}
            onChange={(e) => setFilterPlan(e.value)}
            placeholder='Select an option'
          />
        </div>
        <div className='sort_dropdown sort_container'>
          <span>Role :</span>
          <Dropdown
            className=' dropdown_chooseTemplate category_dropdown_chooseTemplate'
            options={roleOptions}
            value={defaultRoleOption}
            onChange={(e) => setFilterRole(e.value)}
            placeholder='Select an option'
          />
        </div>
        <div className='sort_dropdown sort_container searchInDuration'>
          <form onSubmit={handleFilterDurationSubmit}>
            <div>
              <span>From:</span>
              <input required type='date' name='filterDate' id='filterDate' />
            </div>
            <div>
              <span>to:</span>
              <input required type='date' name='filterDate' id='filterDate' />
            </div>
            <div>
              <button type='submit'>Go</button>
              <button
                disabled={
                  filterFromDate === '' && filterToDate === '' ? true : false
                }
                type='button'
                onClick={() => {
                  setFilterFromDate('');
                  setFilterToDate('');
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='all_users_pagination_count'>
        <div className='pagination_dropdown sort_container'>
          <Dropdown
            className=' dropdown_chooseTemplate category_dropdown_chooseTemplate'
            options={paginationOptions}
            value={defaultPaginationOption}
            onChange={(e) => setFilterPagination(e.value)}
            placeholder='Select an option'
          />
          <span>
            {filterPagination === 'All'
              ? 'Showing ' + allAccounts.length
              : 'Showing ' + filterPagination + ' out of ' + allAccounts.length}
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Plan</th>
            <th className='created_on'>Created On</th>
          </tr>
        </thead>

        <tbody style={{ position: 'relative' }}>
          {allAccounts ? (
            _DATA
              .currentData()
              // .sort((a, b) => a.created < b.created)
              .filter(
                (account) =>
                  account.firstName
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  account.email.toLowerCase().includes(searchText.toLowerCase())
              )
              // .filter((account) =>
              //   filterPlan === 'All'
              //     ? account.plan
              //     : account.plan === filterPlan
              // )
              .filter((account) =>
                filterFromDate === ''
                  ? account.created
                  : account.created > filterFromDate
              )
              .filter((account) =>
                filterToDate === ''
                  ? account.created
                  : account.created < filterToDate
              )
              .filter((account) =>
                filterRole === 'All'
                  ? account.role
                  : account.role === filterRole
              )
              .map((account, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{account.firstName + ' ' + account.lastName}</td>
                  <td>{account.email}</td>
                  <td>{account.role}</td>
                  <td>{account.plan}</td>
                  <td className='created_on'>{formatDate(account.created)}</td>
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
      {allAccounts && (
        <Pagination
          className='all_users_pagination'
          // variant='outlined'
          shape='circular'
          count={count}
          page={page}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
}
