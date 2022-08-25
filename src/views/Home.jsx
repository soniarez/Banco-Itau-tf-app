import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import WidgetsAuth from '../components/WidgetsAuth';
import HoldingDonut from '../components/HoldingDonut';
import Donut from '../components/Donut';

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
          <div>
            <h1 className='text-3xl text-[#003767] flex ml-2 my-6 font-bold font-sans'>Resumen de empresas</h1>
            <section className='flex flex-row'>
              <Donut segment={'Corporate Invesment Banking'} />
              <Donut segment={'Grandes Empresas'} />
              <Donut segment={'Inmobiliaria'} />
            </section>
            <section className='flex flex-row'>
              <Donut segment={'Institucionales'} />
              <Donut segment={'Multinacionales'} />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home