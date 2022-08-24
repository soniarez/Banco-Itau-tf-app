import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db } from '../firebase/init';
import { useNavigate } from "react-router-dom";

const WidgetsAuth = () => {
    const [data, setData] = useState([]);
    const [result, setResult] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        onSnapshot(collection(db, 'transaction'), (snapshot) => {
            const dataFromFirestore = snapshot.docs.map((doc) => {
                return { ...doc.data() };
            });
            setData(dataFromFirestore);
        });
    }, []);

    useEffect(() => {
        filterData()
    }, [data]);

    const filterData = () => {
        const result = data.filter(item => item.status === 'pendiente');
        setResult(result);
    };

    return (
        <div className='flex flex-col mx-16'>
        <a>
            <img src='src/img/bienvenida.png' alt="banner bienvenida" className='rounded-2xl'/>
        </a>
            <div className={result? 'bg-[#EC7000] h-fit flex flex-col rounded-2xl m-6 shadow-lg' : 'bg-[#FFFFFF] flex flex-col rounded-2xl m-6 shadow-lg border-[#EC7000] border'}>
                <div className={result ? 'flex items-center justify-center text-[#FFFFFF]' : 'flex items-center justify-center text-[#EC7000]'}>
                    <span className="pt-6 text-xl">Tienes <b>{result ? result.length : '0'}</b> Transacciones <br /> por revisar</span>
                </div>
                <section className='flex justify-end'>
                    <div className={result ? 'mr-6 mb-3 h-8 w-20 group ml-20 text-[#FFFFFF]' : 'hidden'}>
                        <button onClick={() => navigate('/authorization')} className='group-hover:text-[#007AB7]'>Ver mas → </button>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default WidgetsAuth