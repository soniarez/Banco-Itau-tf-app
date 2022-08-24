import React from 'react';


const NavBar = () => {
  return (
    <nav className="bg-[#FFFFFF] h-[100px] w-screen flex flex-wrap items-center py-2 border-b-2 border-[#EFE9E5] box-border pb-4 shadow-lg justify-between">
      <div className='flex justify-between items-center w-screen'>
      <div className='flex flex-wrap items-center justify-between'>
        <section className="flex items-center justify-center">
          <a className="mr-4 ml-32">
            <img src="https://d1dzq2r60kxox4.cloudfront.net/uploads/bb9193d2-d4b8-4f76-bcf2-d6e935663c0b/original/header_logo.svg" alt="Logo de Itaú" />
          </a>
          <span className='border-r-4 border-[#003399] h-8 w-1 rounded'></span>
          <div className="flex flex-row ml-8 items-center mr-12">
            <a className='bg-[#EEEEEE] rounded-[100%] h-10 w-10 flex items-center justify-center mr-2' >
              <img className="py-2 h-[35px]" src="../public/empresa.png" alt="Logo Empresa" />
            </a>
            <h1 className='text-[#EC7000] text-sm font-bold font-sans'>Nombre Cliente</h1>
          </div>
        </section>
      </div>
      <div>
        <button className='mr-12 bg-[#FFFFFF] border-[#EC7000] border text-[#EC7000] font-bolds rounded-2xl w-[120px] h-[35px] text-sm hover:bg-[#FFE6CE]'>Ver Empresas</button>
      </div>
      <div className='flex justify-end mr-32'>
        <section className='flex flex-row items-center mr-12'>
          <a className='bg-[#EEEEEE] rounded-[100%] h-10 w-10 flex items-center justify-center mr-2' >
            <img className="py-2 h-8" src="../public/user.png" alt="Logo Usuario" />
          </a>
          <h1 className='text-sm font-bold font-sans mr-20'>Nombre Usuario</h1>
        </section>
        <button className='bg-[#ff002b] text-[#FFFFFF] text-sm h-[35px] w-[70px] rounded-2xl font-bold'>Salir</button>
      </div>
      </div>
    </nav>
  )
}

export default NavBar
