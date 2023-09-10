import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import LinkedInEditor from '../../../../Components/LinkedIn/LinkedInEditor';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import {
  get_linkedIn_categories,
  get_linkedIn_heading_by_id,
  update_linkedIn_heading,
} from '../../../../API/index';

export default function UpdateLinkedInHeading() {
  const history = useHistory();
  const { id } = useParams();

  const [linkedInData, setLinkedInData] = useState('');
  // // console.log(linkedInData);

  const [categories, setCategories] = useState('');
  const [chosenCategory, setChosenCategory] = useState('');

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
    'All',
    ...(categories && categories.map((e) => e.category)),
  ];

  const defaultDropdownOption = linkedInData
    ? dropdownOptions[
        categories &&
          categories.findIndex(
            (e) => e.category === linkedInData.heading_category
          ) + 1
      ]
    : dropdownOptions[0];

  const [templateName, setTemplateName] = useState('');
  const [profileText, setProfileText] = useState('');
  const [msg, setMsg] = useState(false);
  const [contentBlockData, setContentBlockData] = useState(true);
  // // console.log(contentBlockData);

  useEffect(() => {
    get_linkedIn_heading_by_id(id).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setLinkedInData(res?.data);
        setContentBlockData(
          convertToRaw(
            ContentState.createFromBlockArray(
              convertFromHTML(res?.data.heading_data)
            )
          )
        );
      } else {
        // // console.log(res);
        setMsg({ msg: res, status: 400 });
      }
    });
  }, []);

  function handleSubmit(e) {
    const linkedIn_data = {
      heading_category: chosenCategory,
      heading_data: profileText,
    };
    e.preventDefault();
    // // console.log({ templateName, profileText });

    update_linkedIn_heading(id, linkedIn_data).then((res) => {
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
    <div className='createLinkedInTemp'>
      <div className='createLinkedInTemp_main'>
        {/* <h3>Create New LinkedIn Heading</h3> */}
        <div style={{ textAlign: 'right', height: '40x' }}>
          {msg && (
            <span
              className={`linkedInMsg ${
                msg.status === 200
                  ? 'linkedInMsg_success'
                  : 'linkedInMsg_danger'
              }`}
            >
              {msg.msg}
            </span>
          )}
        </div>
        <form>
          <div>
            <div>LinkedIn Heading Category :</div>
            <Dropdown
              disabled
              className='dropdown dropdown_chooseTemplate category_dropdown_admin'
              options={dropdownOptions}
              value={defaultDropdownOption}
              onChange={(e) => setChosenCategory(e.value)}
              placeholder='Select an option'
            />
          </div>
          <div>
            <div>LinkedIn Profile Data :</div>
            <div className='admin_builderEditor'>
              {linkedInData ? (
                <LinkedInEditor
                  readOnly={true}
                  admin={true}
                  wrapperClassName='Admin_builderEditor_wrapper'
                  editorClassName='Admin_builderEditor_editor'
                  toolbarClassName='Admin_builderEditor_toolbar'
                  markdownData={linkedInData && linkedInData.heading_data}
                  setProfileText={setProfileText}
                />
              ) : (
                <Skeleton className={'loader loader_linkedIn'} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
