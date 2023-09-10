import React, { useEffect, useState } from 'react';

import AdminBuilderEditor from '../../Admin_BuilderEditor/Admin_BuilderEditor';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {
  get_linkedIn_categories,
  create_linkedIn_heading,
} from '../../../../API/index';
import { useHistory } from 'react-router';

export default function LinkedInHeading() {
  const [templateName, setTemplateName] = useState('');
  const [profileText, setProfileText] = useState('');
  const [msg, setMsg] = useState(false);
  const history = useHistory();
  const [categories, setCategories] = useState('');
  const [chosenCategory, setChosenCategory] = useState('');

  const jwtToken = localStorage.getItem('jwtToken');

  useEffect(() => {
    get_linkedIn_categories().then((res) => {
      //   // console.log(res);
      if (res?.status === 200) {
        setCategories(res?.data);
      } else {
        setMsg(res);
      }
    });
  }, []);

  const dropdownOptions = [
    'Select',
    ...(categories && categories.map((e) => e.category)),
  ];
  const defaultDropdownOption = dropdownOptions[0];

  const linkedIn_data = {
    heading_category: chosenCategory,
    heading_data: profileText,
  };

  function handleSubmit(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };

    create_linkedIn_heading(linkedIn_data, config).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setMsg({ msg: 'Data saved successfully', status: res?.status });

        history.push('/admin/linkedIn/headline');
        setTimeout(() => {
          setMsg('');
          setTemplateName('');
          setProfileText('');
        }, 1000);
      } else {
        setMsg(res?.data);
      }
    });
  }

  return (
    <div className='createLinkedInTemp_main'>
      {/* <h3>Create New LinkedIn Heading</h3> */}
      <div style={{ textAlign: 'right', height: '40x' }}>
        {msg && (
          <span
            className={`linkedInMsg ${
              msg.status === 200 ? 'linkedInMsg_success' : 'linkedInMsg_danger'
            }`}
          >
            {msg.msg}
          </span>
        )}
      </div>
      <form>
        <div>
          <div className='admin_linkedIn_heading'>Headline Category :</div>
          {/* <input
            required
            type='text'
            onChange={(e) => setTemplateName(e.target.value)}
            name='linkedInTempName'
            id='linkedInTempName'
          /> */}
          <Dropdown
            className='dropdown dropdown_chooseTemplate category_dropdown_admin'
            options={dropdownOptions}
            value={defaultDropdownOption}
            onChange={(e) => setChosenCategory(e.value)}
            placeholder='Select an option'
          />
        </div>
        <div>
          <div className='admin_linkedIn_heading'>Headline :</div>
          <div className='admin_builderEditor'>
            <AdminBuilderEditor setProfileText={setProfileText} />
            {/* <textarea
              required
              type='text'
              onChange={(e) => setTemplateName(e.target.value)}
              name='linkedInTempName'
              id='linkedInTempName'
            /> */}
          </div>
        </div>
        <div className='createLinkedInTemp_submitBn'>
          <button onClick={(e) => handleSubmit(e)} type='submit'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
