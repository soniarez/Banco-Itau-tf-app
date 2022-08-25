import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Mycompanies from '../components/Mycompanies';

const Companies = () => {
  return (
    <div>
      <NavBar />
      <div className="main-grid ">
        <SideBar />
        <div>
          <Mycompanies />
        </div>
      </div>
      <Footer />
    </div>
  );
};



export default Companies;
