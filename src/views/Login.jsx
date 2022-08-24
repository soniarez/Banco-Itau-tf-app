import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const login = (user, password) =>{
        if(user === 'admin' && password === '123456')
        navigate('/choose')
        else alert('login incorrecto');
    }
    return(
        <div className="flex items-center flex-col">
            <picture className="my-16">
                <img alt='Logo' src='./IMGS/nonnaQueen.png'/>
            </picture>
            <div className='bg-green max-w-xs shadow-md rounded-xl px-10 pt-10 pb-10 text-center'>
                <form 
                    onSubmit={ev =>{
                        ev.preventDefault();

                        login(user, password);
                    
                    }}
                >
                    <label>Usuario</label>
                    <input 
                        className='bg-green-light rounded'
                        type='text'
                        name='user'
                        placeholder='usuario'
                        value={user}
                        onChange={ev => setUser(ev.target.value)}
                    ></input>
                    <label>Contraseña</label>
                    <input 
                        className='bg-green-light rounded'
                        type='password'
                        name='password'
                        placeholder='contraseña'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        ></input>
                    <button type='submit'>Acceder</button>
                </form>
            </div>
        </div>
    );
}

export default Login