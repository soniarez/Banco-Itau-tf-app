import React from 'react';
import { Link } from 'react-router-dom';
//
const SideBar = () => {
  return (
    <div className='text-gray-700 w-[200px] h-screen shadow border bg-gray-100'>
      <div className="flex flex-col items-center w-45 overflow-hidden text-gray-700  rounded">
        <Link to="/home" className="flex items-center w-full px-3 mt-3  hover:bg-gray-300">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" fill="currentColor">
          </svg>
          <div className="ml-2 text-sm font-bold">Dashboard Multiempresa</div>
        </Link>

        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
            <Link
              to='/companies'
              className='flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 rounded'
            >
              <svg
                className='w-6 h-6 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>

              <div className='ml-2 text-sm font-medium'>Mis Empresas</div>
            </Link>

            <Link
              to='/movements'
              className='flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 rounded'
            >
              <svg
                className='w-6 h-6 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>

              <div className='ml-2 text-sm font-medium'>
                Últimos Movimientos
              </div>
            </Link>
            <Link
              to='/authorization'
              className='flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300'
            >
              <svg
                className='w-6 h-6 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
                />
              </svg>
              <div className='ml-2 text-sm font-medium'>
                Autorizar Transacciones
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
