import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../img/logo.png';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (user, password) => {
        if (user === '768946575' && password === '123456') {
            localStorage.setItem('business', 'MegaHold Prime');
            localStorage.setItem('user', 'MegaHold');
            navigate('/Home');
        } else if (user === '901235670' && password === '123456') {
            localStorage.setItem('business', 'Inmobiliaria Velasco');
            localStorage.setItem('user', 'Velasco');
            navigate('/Home');
        } else alert('login incorrecto');
    };


  return (
    <>
      <div className="bg-[url('/BG.jpg')] bg-cover w-full h-screen flex items-center justify-center flex-col">
        <div className='bg-[#FAFBFC] backdrop-blur-xl bg-opacity-70 max-w-md drop-shadow-lg rounded-xl px-12 p-10 text-center w-96'>
          <section className='flex items-center justify-center flex-col'>
            <a>
              <img src='/logo.png' className='h-14' />
            </a>
            <span className='py-6 inline-block text-base'>
              Te damos la bienvenida al <br /> portal <b>Itaú Empresas</b>
            </span>
          </section>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              login(user, password);
            }}
          >
            <label className='text-[#43484C] text-sm flex justify-start mb-2'>
              Ingresa tu RUT usuario
            </label>
            <input
              className='bg-[#EEEEEE] bg-opacity-70 backdrop-blur-xl h-10 w-full mb-6 border-[#B4B4B4] border rounded'
              type='text'
              name='user'
              value={user}
              onChange={(ev) => setUser(ev.target.value)}
            ></input>
            <label className='text-[#43484C] text-sm flex justify-start mb-2'>
              Ingresa tu clave internet
            </label>
            <input
              className='bg-[#EEEEEE] bg-opacity-70 backdrop-blur-xl h-10 w-full mb-6 border-[#B4B4B4] border rounded'
              type='password'
              name='password'
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            ></input>
            <div className='group'>
              <button
                type='submit'
                className='bg-[#EEEEEE] bg-opacity-70 border-[#EC7000] border text-[#EC7000] h-10 w-full text-sm rounded-xl hover:bg-[#EC7000] group-hover:text-[#EEEEEE]'
              >
                Ingresar
              </button>

    return (
        <>
            <div className="bg-[url('./img/BG.jpg')] bg-cover w-full h-screen flex items-center justify-center flex-col">
                <div className='bg-[#FAFBFC] backdrop-blur-xl bg-opacity-70 max-w-md drop-shadow-lg rounded-xl px-12 p-10 text-center w-96'>
                    <section className="flex items-center justify-center flex-col">
                        <a>
                            <img src={logo} className="h-14" alt="Logo de Itaú" />
                        </a>
                        <span className="py-6 inline-block text-base">Te damos la bienvenida al <br /> portal <b>Itaú Empresas</b></span>
                    </section>
                    <form onSubmit={ev => { ev.preventDefault(); login(user, password); }}>
                        <label className="text-[#43484C] text-sm flex justify-start mb-2">Ingresa tu RUT usuario</label>
                        <input
                            className='bg-[#EEEEEE] bg-opacity-70 backdrop-blur-xl h-10 w-full mb-6 border-[#B4B4B4] border rounded'
                            type='text'
                            name='user'
                            value={user}
                            onChange={ev => setUser(ev.target.value)}
                        ></input>
                        <label className="text-[#43484C] text-sm flex justify-start mb-2">Ingresa tu clave internet</label>
                        <input
                            className='bg-[#EEEEEE] bg-opacity-70 backdrop-blur-xl h-10 w-full mb-6 border-[#B4B4B4] border rounded'
                            type='password'
                            name='password'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        ></input>
                        <div className='group'>
                            <button type='submit' className="bg-[#EEEEEE] bg-opacity-70 border-[#EC7000] border text-[#EC7000] h-10 w-full text-sm rounded-xl hover:bg-[#EC7000] group-hover:text-[#EEEEEE]">Ingresar</button>
                        </div>
                    </form>
                    <section className="mt-6 flex items-center justify-center flex-col">
                        <div className="w-36 flex group justify-center items-center">
                            <a href="#" className="text-[#007ab7] group-hover:text-[#0D47A1] text-sm m-0 "> ¿Olvidaste tu clave?</a>
                        </div>
                    </section>
                    <div className="flex group mt-5">
                        <button className="bg-[#EEEEEE] backdrop-blur-xl bg-opacity-70 border-[#DFE6EE] border text-[#007AB7] h-10 w-full text-sm rounded-xl hover:bg-[#003767] group-hover:text-[#EEEEEE] group-hover:border-[#003767] mt-3">¿Aun no tienes tu clave?</button>
                    </div>
                </div>

            </div>
            <footer className='bg-[#003767] inset-x-0 bottom-0 p-4 flex items-center justify-center h-12 fixed'>
                <div className="text-[#EEEEEE]">
                    <p>¿En qué te podemos ayudar?<a href="callto://600 6860 888" className="mx-2"><strong>☎ 600 6860 888 </strong></a> Llámanos e ingresa el Rut de tu Empresa</p>
                </div>
            </footer>
        </>
    );
};

export default Login;
