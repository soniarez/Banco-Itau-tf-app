import React from 'react'
import Link from '@mui/material/Link'



const Footer = () => {
  return (
    <div className='bg-orange-100 text-gray-700   inset-x-0 bottom-0 p-4 flex justify-between h-[91px] '>

<h1> 
Servicio al Cliente 
<li><Link href="https://ww2.itau.cl/personas/contactanos" underline="hover">Contáctanos</Link></li>
<li><Link href="https://ww2.itau.cl/personas/sucursales" underline="hover">Sucursales</Link></li>
</h1>
      <p>  Infórmese sobre la garantía estatal de los depósitos en su banco o en  <Link href="#" underline="hover">
        {'www.cmfchile.cl'}
      </Link> 
       © 2022 Banco Itaú. Todos los derechos reservados. Av. Presidente Riesco 5537, Las Condes.</p>
      <ol className=' text-orange-600 p-2 flex space-x-6'> 
      <Link href="https://www.facebook.com/itauchile" class="fa-brands fa-square-facebook" target="_blank" rel="noreferrer" aria-label="Facebook"></Link>
      <Link href="https://www.instagram.com/itauchile/" class="fa-brands fa-square-instagram"target="_blank" rel="noreferrer" aria-label='Instagram'></Link>
      <Link href="https://twitter.com/itauchile" class="fa-brands fa-square-twitter" target="_blank" rel="noreferrer" aria-label="Twitter"></Link>
      <Link href="https://cl.linkedin.com/company/itauchile" class="fa-brands fa-linkedin" target="_blank" rel="noreferrer" aria-label="Linkedin"></Link>
      <Link href="https://www.tiktok.com/@itauchile?lang=es" class="fa-brands fa-tiktok" target="_blank" rel="noreferrer" aria-label="TikTok"></Link>
      </ol>
     
    </div>
  )
}

export default Footer
