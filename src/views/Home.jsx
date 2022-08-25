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
      <div className='flex bg-[#EEEEEE]'>
        <SideBar />
        <div>
          <section className='flex justify-center ml-8'>
            <WidgetsAuth />
            <HoldingDonut />
          </section>
          <div className='flex flex-col items-center mb-6'>
            <h1 className='text-3xl text-[#003767] flex ml-2 my-6 font-bold font-sans'>Resumen de Empresas</h1>
            <section className='flex flex-row border-t  border-[#D8D8D8]'>
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