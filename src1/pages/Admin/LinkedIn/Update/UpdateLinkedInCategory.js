import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import LinkedInEditor from '../../../../Components/LinkedIn/LinkedInEditor';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import {
  get_linkedIn_by_id,
  update_linkedIn,
  get_linkedIn_category_by_id,
  update_linkedIn_category,
} from '../../../../API/index';

export default function UpdateLinkedInCategory() {
  const history = useHistory();
  const { id } = useParams();

  const [linkedInData, setLinkedInData] = useState('');
  // // console.log(linkedInData);

  const [templateName, setCategory] = useState('');
  const [profileText, setProfileText] = useState('');
  const [msg, setMsg] = useState(false);
  const [contentBlockData, setContentBlockData] = useState(true);
  // // console.log(contentBlockData);

  useEffect(() => {
    get_linkedIn_category_by_id(id).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setLinkedInData(res?.data);
        // setContentBlockData(
        //   convertToRaw(
        //     ContentState.createFromBlockArray(
        //       convertFromHTML(res?.data.template_profile_data)
        //     )
        //   )
        // );
      } else {
        // // console.log(res);
        setMsg({ msg: res, status: 400 });
      }
    });
  }, []);

  function handleSubmit(e) {
    const linkedIn_data = {
      category: templateName,
    };
    e.preventDefault();
    // // console.log({ templateName, profileText });

    update_linkedIn_category(id, linkedIn_data).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setMsg({ msg: 'Data saved successfully', status: res?.status });

        history.push('/admin/linkedIn/category');
        setTimeout(() => {
          setMsg('');
          setCategory('');
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
        {/* <h3>Create New LinkedIn Template</h3> */}
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
          <div className='linkedInCategory'>
            <div>LinkedIn Category Name :</div>
            <textarea
              required
              type='text'
              defaultValue={linkedInData && linkedInData.category}
              onChange={(e) => setCategory(e.target.value)}
              name='linkedInTempName'
              id='linkedInTempName'
            />
          </div>
          {/* <div>
            <div>LinkedIn Profile Data :</div>
            <div className='admin_builderEditor'>
              {linkedInData ? (
                // <LinkedInEditor
                //   admin={true}
                //   wrapperClassName='Admin_builderEditor_wrapper'
                //   editorClassName='Admin_builderEditor_editor'
                //   toolbarClassName='Admin_builderEditor_toolbar'
                //   markdownData={
                //     linkedInData && linkedInData.template_profile_data
                //   }
                //   setProfileText={setProfileText}
                // />
                <textarea
                  required
                  type='text'
                  onChange={(e) => setCategory(e.target.value)}
                  name='linkedInTempName'
                  id='linkedInTempName'
                />
              ) : (
                <Skeleton className={'loader loader_linkedIn'} />
              )}
            </div>
          </div> */}
          <div className='createLinkedInTemp_submitBn'>
            <button onClick={(e) => handleSubmit(e)} type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
