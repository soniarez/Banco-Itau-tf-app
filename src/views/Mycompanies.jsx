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

  const normalizedData = companiesData
    .map((company, idx) => {
      return company.accounts.map((item, index) => {
        return {
          ...item,
          id: company.id + index,
          segment: company.segment,
          'Razon social': company['Razon Social'],
          aliascompany: `Empresa ${idx + 1}`,
          rut: company.rut,
          aliascta: `Cuenta ${index + 1}`,
        };
      });
    })
    .flat(2);

  console.log('normalized', normalizedData);

  const columns = [
    {
      field: 'rut',
      headerName: 'Rut',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'Razon social',
      headerName: 'Razon Social',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'aliascompany',
      headerName: 'Alias Empresa',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
      editable: true,
    },
    {
      field: 'segment',
      headerName: 'Segmento',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'tipocta',
      headerName: 'Tipo de Cuenta',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'aliascta',
      headerName: 'Alias Cuenta',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
      editable: true,
    },
    {
      field: 'numerocta',
      headerName: 'Cuenta Corriente',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
  ];

  //   const companyUser = [
  //     {
  //       Rut: '76.894.657-5',
  //       'Razon Social': 'MegaHold Prime',
  //       Segmento: 'Corporate Invesment Banking',
  //       accounts: [
  //         { numerocta: '210456783', tipocta: 'Cuenta Pesos' },
  //         { numerocta: '217683922', tipocta: 'Cuenta Pesos' },
  //         { numerocta: '229875367', tipocta: 'Cuenta Pesos' },
  //       ],
  //     },
  //   ];

  return (
    <div>
      <NavBar />
      <div className='main-grid'>
        <SideBar />
        <div className='mt-4'>
          <div style={{ height: 430, width: '100%' }}>
            <DataGrid
              rows={normalizedData}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mycompanies;
