import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdminBuilderEditor from '../../Admin_BuilderEditor/Admin_BuilderEditor';

import { create_linkedIn } from '../../../../API/index';

export default function LinkedInTemplate() {
  const [templateName, setTemplateName] = useState('');
  const [profileText, setProfileText] = useState('');
  const [msg, setMsg] = useState(false);
  const history = useHistory();

  const linkedIn_data = {
    template_name: templateName,
    template_profile_data: profileText,
  };

  function handleSubmit(e) {
    e.preventDefault();

    create_linkedIn(linkedIn_data).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setMsg({ msg: 'Data saved successfully', status: res?.status });

        history.push('/admin/linkedIn/template');
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
      {/* <h3>Create New LinkedIn Template</h3> */}
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
          <div className='admin_linkedIn_heading'>LinkedIn Summary Name :</div>
          <input
            required
            type='text'
            onChange={(e) => setTemplateName(e.target.value)}
            name='linkedInTempName'
            id='linkedInTempName'
          />
        </div>
        <div>
          <div className='admin_linkedIn_heading'>LinkedIn Summary Data :</div>
          <div className='admin_builderEditor'>
            <AdminBuilderEditor setProfileText={setProfileText} />
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
