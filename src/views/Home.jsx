import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import WidgetsAuth from '../components/WidgetsAuth';
import HoldingDonut from '../components/HoldingDonut';
//import Center from '../components/Center';


const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='main-grid bg-[#EEEEEE]'>
        <SideBar />
        <div>
          <section className='flex flex-row mt-6'>
            <WidgetsAuth />
            <HoldingDonut />
          </section>
          {/* <Center /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home