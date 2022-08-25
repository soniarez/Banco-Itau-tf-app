import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid } from '@mui/x-data-grid';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import { FaRegEdit } from 'react-icons/fa';

const Mycompanies = () => {
  const [companiesData, setCompaniesData] = useState([]);

  //console.log('companie', companiesData);

  useEffect(() => {
    onSnapshot(collection(db, 'companies'), snapshot => {
      const companieDataFromFirestore = snapshot.docs.map(doc => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });
      setCompaniesData(companieDataFromFirestore);
    });
  }, []);

  const companyUser = [
    {
      Rut: '76.894.657-5',
      'Razon Social': 'MegaHold Prime',
      Segmento: 'Corporate Invesment Banking',
      accounts: [
        { numerocta: '210456783', tipocta: 'Cuenta Pesos' },
        { numerocta: '217683922', tipocta: 'Cuenta Pesos' },
        { numerocta: '229875367', tipocta: 'Cuenta Pesos' },
      ],
    },
  ];

  //   const companyUser = companiesData.filter((item) => {
  //     return item['Razon Social'] === 'MegaHold Prime';
  //   });



  return (
    <div>
      <NavBar />
      <div className="main-grid">
        <SideBar />
        <div className='mt-4'>
          <h1 className='ml-1 text-sm font-medium mt-1'>{companyUser[0]?.['Razon Social']}</h1>
          <select className="cursor-pointer" defaultValue="Rut">
          <option value="Rut" disabled>
            Rut
          </option>
          <option value="rut-company">{companyUser[0]?.Rut}</option>
        </select>
          
          <div id ="App" >
            <table className="w-2/4 my-4 mx-2 ">
              <thead className="bg-[#f5ac4a] border-b-2 border-gray-300 text-white">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-center w-12 ">
                    Segmento
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-center w-12 ">
                    Tipo de Cuenta
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-center w-12 ">
                    Cuenta Corriente
                  </th>
                </tr>
              </thead>
             
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 text-center hover:text-blue-400">
                  {companyUser[0].Segmento}
                </td>
                {companyUser[0].accounts.map(item => {
                  return (
                    <td className="flex flex-col p-3 text-sm text-gray-700 text-center hover:text-blue-400">
                      {item.tipocta}
                    </td>
                  );
                })}
                <td className="p-3 text-sm text-gray-700 text-center hover:text-blue-400 ">
                  {companyUser[0].accounts.map(item => {
                    return (
                      <td className="flex flex-col p-3 text-sm text-gray-700 text-center hover:text-blue-400 ">
                         {item.numerocta} <FaRegEdit />
                        
                      </td>
                    );
                  })}
                </td>
              </tr>
            
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Mycompanies;
