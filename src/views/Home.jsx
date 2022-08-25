import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import WidgetsAuth from '../components/WidgetsAuth';
import HoldingDonut from '../components/HoldingDonut';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='main-grid bg-[#EEEEEE]'>
        <SideBar />
        <div> 
       <div className='flex justify-center'>
          <WidgetsAuth />
          <HoldingDonut />
          {/* <Center /> */}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home