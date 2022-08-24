import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import DashboardMulti from '../components/DashboardMulti';

//import Center from '../components/Center';

const Movements = () => {
  return (
    <div>
      <NavBar />
      <div className='main-grid'>
        <SideBar />
        <div>
          {/* <Center /> */}
          <DashboardMulti />
          Ultimos Movimientos
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movements;
