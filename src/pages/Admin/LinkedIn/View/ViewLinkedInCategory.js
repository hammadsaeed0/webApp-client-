import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
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

  useEffect(() => {
    get_linkedIn_category_by_id(id).then((res) => {
      // // console.log(res);
      if (res?.status === 200) {
        setLinkedInData(res?.data);
      } else {
        setMsg({ msg: res, status: 400 });
      }
    });
  }, []);

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
              disabled
              required
              type='text'
              defaultValue={linkedInData && linkedInData.category}
              onChange={(e) => setCategory(e.target.value)}
              name='linkedInTempName'
              id='linkedInTempName'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
