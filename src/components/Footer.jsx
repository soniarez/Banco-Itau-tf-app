import React from 'react'
import Link from '@mui/material/Link'



const Footer = () => {
  return (
    <div className='bg-orange-100 text-gray-700 inset-x-0 bottom-0 p-4 flex justify-between h-[91px] '>
      <section className='mx-14 flex items-center'>
          <p>  Infórmese sobre la garantía estatal de los depósitos en su banco o en  <Link href="#" underline="hover">
            {'www.cmfchile.cl'}
          </Link>
            © 2022 Banco Itaú. Todos los derechos reservados. Av. Presidente Riesco 5537, Las Condes.</p>
        </section>
      <ol className=' text-orange-600 p-2 flex items-center space-x-6 mr-6'>
        <a href="https://www.facebook.com/itauchile" className="fa-brands fa-square-facebook buttons" target="_blank" rel="noreferrer" aria-label="Facebook"></a>
        <a href="https://www.instagram.com/itauchile/" className="fa-brands fa-square-instagram buttons" target="_blank" rel="noreferrer" aria-label='Instagram'></a>
        <a href="https://twitter.com/itauchile" className="fa-brands fa-square-twitter buttons" target="_blank" rel="noreferrer" aria-label="Twitter"></a>
        <a href="https://cl.linkedin.com/company/itauchile" className="fa-brands fa-linkedin buttons" target="_blank" rel="noreferrer" aria-label="Linkedin"></a>
        <a href="https://www.tiktok.com/@itauchile?lang=es" className="fa-brands fa-tiktok buttons" target="_blank" rel="noreferrer" aria-label="TikTok"></a>
      </ol>
    </div>
  )
}

export default Footer
