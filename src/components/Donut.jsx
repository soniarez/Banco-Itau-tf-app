import Chart from 'react-apexcharts';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, db } from '../firebase/init';

const Donut = ({segment}) => {
    const [data, setData] = useState([]);
    const [charge, setCharge] = useState([]);
    const [chargeT, setChargeT] = useState([]);
    const [payment, setPayment] = useState([]);
    const [paymentT, setPaymentT] = useState([]);
    const navigate = useNavigate()

    const name= segment

    console.log(name)

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
        const charge = data.filter(item => item.charge !== '-' & item.segment == name);
        console.log(segment, 'segme?')
        setCharge(charge);
        const payment = data.filter(item => item.payment !== '-' & item.segment == name)
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
        labels: ['Ganancia', 'Inversión'],
        legend: {
            position: 'left',
            horizontalAlign: 'left',
            fontSize: '14px'
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
                    size: '55%'
                }
            }
        },
        dataLabels: {
            style: {
                colors: ['#FAFBFC'],
                fontWeight: 'bold',
                fontSize: '14px',
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
        <div className={charge > payment ?'bg-[#EDFFF5] flex flex-col border border-[#2ECC71] rounded-2xl w-fit h-fit ml-6 my-6':'bg-[#FAFBFC] flex flex-col border border-[#FFE3DD] rounded-2xl w-fit ml-6 my-6 h-fit'}>
            <h1 className='text-2xl text-[#003767] flex justify-center my-6 font-bold font-sans'>{segment}</h1>
            <div>
                <Chart options={options} series={series} type='donut' width='350px' />
            </div>
        </div>
    )
}

export default Donut;