import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db } from '../firebase/init';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';

const Mycompanies = () => {
  const [companiesData, setCompaniesData] = useState([]);

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

  const columns = [
    {
      field: 'rut',
      headerName: 'Rut',
      width: 135,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'Razon social',
      headerName: 'Razon Social',
      width: 200,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'aliascompany',
      headerName: 'Editar Alias Empresa',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
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
      width: 160,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'aliascta',
      headerName: 'Editar Alias Cuenta',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
      editable: true,
    },
    {
      field: 'numerocta',
      headerName: 'Cuenta Corriente',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
  ];

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-[#003767] flex ml-6 mt-6 font-bold font-sans'>Mis Empresas </h1>
      <section className="flex mt-6 -ml-12 justify-center h-screen w-screen ">
        <div style={{ height: 750, width: 1100 }}>
          <DataGrid
            rows={normalizedData}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            rowHeight={30}
            pageSize={20}
            rowsPerPageOptions={[20]}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            sx={{
              boxShadow: 0,
              border: 0,
              fontSize: 14,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
              '& .itau-app-USD': {
                bgcolor: '#B4B4B4',
              },
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
      </section>
    </div>
  );
};

export default Mycompanies;
