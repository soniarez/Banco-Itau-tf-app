import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import WidgetsAuth from '../components/WidgetsAuth';
import HoldingDonut from '../components/HoldingDonut';
import Donut from '../components/Donut';

const Home = () => {
  return (
    <div className='h-full'>
      <NavBar />
      <div className='main-grid bg-[#EEEEEE]'>
        <SideBar />
        <div>
          <div className='flex justify-center'>
            <WidgetsAuth />
            <HoldingDonut />
            {/* <Center /> */}
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-[#003767] flex ml-2 my-6 font-bold font-sans'>Resumen de empresas</h1>
            <section className='flex flex-row'>
              <Donut business={'MegaHold Prime'} />
              <Donut business={'Inversiones Latinoamericanas'} />
              <Donut business={'Inversiones Hacktahon'} />
            </section>
            <section className='flex flex-row'>
              <Donut business={'Supermercados Grupo 44'} />
              <Donut business={'Inmobiliaria Velasco'} />
              <Donut business={'Universidades Americanas'} />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home