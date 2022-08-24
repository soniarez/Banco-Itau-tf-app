import React from 'react';
import AuthMenu from './AuthMenu';
import DashboardMulti from './DashboardMulti';

const Center = () => {
  return (
    <div>
      <div className='flex flex-col justify-between'>
        <AuthMenu />
        {/* <DashboardMulti /> */}
      </div>
    </div>
  );
};

export default Center;
