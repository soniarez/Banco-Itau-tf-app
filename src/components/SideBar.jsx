import React from 'react'
import {  Link, NavLink } from 'react-router-dom'


const SideBar = () => {
  return (
  
    <div className=' bg-gray-200 text-gray-700 w-[200px] h-screen shadow border '> 
<div className="flex flex-col items-center w-45 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
		<a className="flex items-center w-full px-3 mt-3">
			<svg className="w-8 h-8 fill-current"  viewBox="0 0 20 20" fill="currentColor">
				</svg>
			<div className="ml-2 text-sm font-bold">Dashboard Multiempresa</div>
		</a>
		
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
			
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" Link href="#">
					<svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<div className="ml-2 text-sm font-medium">Buscar</div>
				</a>

				<a className="flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 rounded" Link href="/Movements">
					<svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<div className="ml-2 text-sm font-medium">Últimos Movimientos</div>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" Link href="./Authorization">
					<svg className="w-6 h-6 stroke-current"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
					</svg>
					<div className="ml-2 text-sm font-medium">Autorizar Transacciones</div>
				</a>


			</div>
			<div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
					<svg className="w-6 h-6 stroke-current"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg> <NavLink to ='https://ww2.itau.cl/inversiones'>
					<div className="ml-2 text-sm font-medium">Productos</div></NavLink>
				</a>
				
				<a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
					<svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg> <NavLink to='https://thumbs.dreamstime.com/b/dise%C3%B1o-del-confeti-de-la-celebraci%C3%B3n-41244387.jpg'>
					<div className="ml-2 text-sm font-medium">Notificaciones</div>
					<div className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></div></NavLink>
				</a>
			</div>
		</div>

		<a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
			<svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
			</svg>
			<div className="ml-2 text-sm font-medium">Configuraciones</div>
		</a>
    
 
	</div>
    </div>
  )
  
}

export default SideBar


