import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid } from '@mui/x-data-grid';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Mycompanies = () => {
  const [companiesData, setCompaniesData] = useState([]);

  console.log('companie', companiesData);

  useEffect(() => {
    onSnapshot(collection(db, 'companies'), (snapshot) => {
      const companieDataFromFirestore = snapshot.docs.map((doc) => {
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
      <div className='main-grid'>
        <SideBar />
        <div>
          <h1>{companyUser[0]?.['Razon Social']}</h1>
          <h1>{companyUser[0]?.Rut}</h1>
          <div className='App'>
            <table>
              <tr>
                <th>Segmento</th>
                <th>Tipo de Cuenta</th>
                <th>Cuenta Corriente</th>
              </tr>
              <tr>
                <td>{companyUser[0].Segmento}</td>
                {companyUser[0].accounts.map((item) => {
                  return <td className='flex flex-col'>{item.tipocta}</td>;
                })}
                <td>
                  {companyUser[0].accounts.map((item) => {
                    return (
                      <td className='flex flex-col'>
                        {item.numerocta} {'X'}
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
