import React, { useState } from 'react';

import LinkedInCategory from '../../../Components/Admin/CreateNew/LinkedInCategory/index';
import LinkedInHeadline from '../../../Components/Admin/CreateNew/LinkedInHeading/index';
import LinkedInTemplate from '../../../Components/Admin/CreateNew/LinkedInTemplate/index';

export default function CreateLinkedInTemp() {
  const [createNewToggle, setCreateNewToggles] = useState('category');

  return (
    <div className='admin_create_new'>
      <div className='chooseCreateLinkedIn'>
        <div
          onClick={() => setCreateNewToggles('category')}
          className={
            createNewToggle === 'category' ? 'chooseLinkedInSelected' : null
          }
        >
          Headline Category
        </div>
        <div
          onClick={() => setCreateNewToggles('headline')}
          className={
            createNewToggle === 'headline' ? 'chooseLinkedInSelected' : null
          }
        >
          Headline
        </div>
        <div
          onClick={() => setCreateNewToggles('template')}
          className={
            createNewToggle === 'template' ? 'chooseLinkedInSelected' : null
          }
        >
          Template
        </div>
      </div>
      <div className='createLinkedInTemp'>
        {createNewToggle === 'category' ? (
          <LinkedInCategory />
        ) : createNewToggle === 'headline' ? (
          <LinkedInHeadline />
        ) : createNewToggle === 'template' ? (
          <LinkedInTemplate />
        ) : null}
      </div>
    </div>
  );
}
