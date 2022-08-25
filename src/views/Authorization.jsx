import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import AuthMenu from '../components/AuthMenu';

const Authorization = () => {
  return (
    <div >
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className='flex justify-center items-center'>
        <AuthMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
};



export default Authorization;
