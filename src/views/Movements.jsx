import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import DashboardMulti from '../components/DashboardMulti';

const Movements = () => {
  return (
    <div>
      <NavBar />
      <div className='flex'>
        <SideBar />
        <div>
          <DashboardMulti />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movements;
