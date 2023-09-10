import React, { useState } from 'react';

import AdminBuilderEditor from '../../Admin_BuilderEditor/Admin_BuilderEditor';

import { create_linkedIn_category } from '../../../../API/index';
import { useHistory } from 'react-router';

export default function LinkedInCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [profileText, setProfileText] = useState('');
  const [msg, setMsg] = useState(false);
  const history = useHistory();

  const jwtToken = localStorage.getItem('jwtToken');

  const linkedIn_data = {
    category: categoryName,
  };

  function handleSubmit(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };

    create_linkedIn_category(linkedIn_data, config).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setMsg({ msg: 'Data saved successfully', status: res?.status });

        history.push('/admin/linkedIn/category');
        setTimeout(() => {
          setMsg('');
          setCategoryName('');
          setProfileText('');
        }, 1000);
      } else {
        setMsg(res?.data);
      }
    });
  }

  return (
    <div className='createLinkedInTemp_main'>
      {/* <h3>Create New LinkedIn Category</h3> */}
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
        <div className='linkedInCategory'>
          <div className='admin_linkedIn_heading'>Category Name :</div>
          <textarea
            required
            type='text'
            onChange={(e) => setCategoryName(e.target.value)}
            name='linkedInTempName'
            id='linkedInTempName'
          />
        </div>
        {/* <div>
          <div>LinkedIn Profile Data :</div>
          <div className='admin_builderEditor'>
            <AdminBuilderEditor setProfileText={setProfileText} />
          </div>
        </div> */}
        <div className='createLinkedInTemp_submitBn'>
          <button onClick={(e) => handleSubmit(e)} type='submit'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
