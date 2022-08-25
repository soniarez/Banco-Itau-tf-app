import Chart from 'react-apexcharts';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, db } from '../firebase/init';

const HoldingDonut = () => {
    const [data, setData] = useState([]);
    const [charge, setCharge] = useState([]);
    const [chargeT, setChargeT] = useState([]);
    const [payment, setPayment] = useState([]);
    const [paymentT, setPaymentT] = useState([]);
    const navigate = useNavigate()
console.log(data)
    useEffect(() => {
        onSnapshot(collection(db, 'movements'), (snapshot) => {
            const dataFromFirestore = snapshot.docs.map((doc) => {
                return { ...doc.data() };
            });
            setData(dataFromFirestore);
        });
    }, []);

    useEffect(() => {
        filterData()
    }, [data]);
    useEffect(() => {
        totalPayment()
    }, [charge]);
    useEffect(() => {
        totalCharge()
    }, [payment]);

    const filterData = () => {
        const charge = data.filter(item => item.charge !== '-');
        setCharge(charge);
        const payment = data.filter(item => item.payment !== '-')
        setPayment(payment)
    };

    const totalCharge = () => {
        const result = charge.map((item) => {
            return Number(item.charge.replace(/[^0-9]+/g, ""))
        })
        setPaymentT(result.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
    }
    const totalPayment = () => {
        const result = payment?.map((item) => {
            return Number(item.payment.replace(/[^0-9]+/g, ""))
        })
        setChargeT(result?.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
    }

    const options = {
        labels: ['Ganancia', 'Inversion'],
        legend: {
            position: 'left',
            horizontalAlign: 'left',
            fontSize: '20px'
        }, responsive: [
            {
                breakpoint: 800,
            }
        ],
        tooltip: {
            y: {
                formatter: (val) => {
                    return `$${val}`;
                }
            }
        },
        colors: ['#2ECC71', '#FF5733'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.4,
                stops: [10, 90, 50],
            }
        },
        plotOptions: {
            customScale: 0.8,
            pie: {
                donut: {
                    size: '45%'
                }
            }
        },
        dataLabels: {
            style: {
                colors: ['#FAFBFC'],
                fontWeight: 'bold',
                fontSize: '20px',
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                color: '#007AB7',
                opacity: 1
            }
        },
    };
    const series = [chargeT, paymentT];

    return (
        <div className={charge > payment ?'bg-[#FAFBFC] flex flex-col border border-[#2ECC71] rounded-2xl w-fit h-fit':'bg-[#FAFBFC] flex flex-col border border-[#FF5733] rounded-2xl w-fit h-fit'}>
            <h1 className='text-3xl text-[#003767] flex justify-center my-6 font-bold font-sans'>Rentabilidad Holding</h1>
            <div>
                <Chart options={options} series={series} type='donut' width='450px' />
            </div>
            <section className='flex justify-end'>
                <div className='mr-6 mb-3 h-8 w-20 group ml-20 '>
                    <button onClick={() => navigate('/movements')} className='text-[#007ab7] group-hover:text-[#003767]'>Ver mas → </button>
                </div>
            </section>
        </div>
    )
}

export default HoldingDonut;
