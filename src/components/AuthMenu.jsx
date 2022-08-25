import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import AuthMenuChart from './AuthMenuChart';
import '../../src/App.css';

const AuthMenu = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'company',
      headerName: 'Empresa',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'origen',
      headerName: 'Cuenta Origen',
      width: 110,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'solution',
      headerName: 'Solución',
      width: 168,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },

    {
      field: 'amount',
      headerName: 'Monto',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'autorize',
      headerName: 'Autorizar',
      width: 70,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
      renderCell: (params) => {
        return (
          <div>
            {data ? (
              <div>
                <Checkbox
                  onChange={(e) => handleChangeAuthorized(e, params.row.docId)}
                  checked={params.row.isAuthorized}
                  size='small'
                  sx={{
                    '&.Mui-checked': {
                      color: '#5db761',
                    },
                  }}
                />
              </div>
            ) : (
              <p>Data is loading...</p>
            )}
          </div>
        );
      },
    },
    {
      field: 'reject',
      headerName: 'Rechazar',
      width: 70,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
      renderCell: (params) => {
        return (
          <div>
            {data ? (
              <div>
                <Checkbox
                  onChange={(e) => handleChangeRejected(e, params.row.docId)}
                  checked={params.row.isRejected}
                  size='small'
                  sx={{
                    '&.Mui-checked': {
                      color: '#f44336',
                    },
                  }}
                />
              </div>
            ) : (
              <p>Data is loading...</p>
            )}
          </div>
        );
      },
    },
  ];

  //GETTING DATA FROM FIREBASE
  useEffect(() => {
    onSnapshot(collection(db, 'transaction'), (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          isAuthorized: false,
          isRejected: false,
          ...doc.data(),
        };
      });
      setData(dataFromFirestore);
    });
  }, []);

  //HANDLECHANGE AUTHORIZE
  const handleChangeAuthorized = (e, docId) => {
    setData((prevState) => [
      ...prevState.map((element) => {
        return element.docId === docId
          ? {
              ...element,
              isAuthorized: !element.isAuthorized,
            }
          : element;
      }),
    ]);
  };

  //HANDLECHANGE REJECT
  const handleChangeRejected = (e, docId) => {
    setData((prevState) => [
      ...prevState.map((element) => {
        return element.docId === docId
          ? {
              ...element,
              isRejected: !element.isRejected,
            }
          : element;
      }),
    ]);
  };

  //FILTERING PENDING
  const pendingTransactions = data.filter((item) => {
    return item.status === 'pendiente';
  });

  //EXECUTE TRANSACTION
  const sendTransaction = () => {
    const authorizeTransactions = data.filter(
      (item) => item.isAuthorized === true
    );
    const rejectedTransactions = data.filter(
      (item) => item.isRejected === true
    );

    if (authorizeTransactions) {
      const authorizeArr = authorizeTransactions.map((item) => {
        const sendTransaction = doc(db, 'transaction', item.docId);

        updateDoc(sendTransaction, {
          status: 'aprobada',
        });
      });
    }

    if (rejectedTransactions) {
      const rejectedArr = rejectedTransactions.map((item) => {
        const sendTransaction = doc(db, 'transaction', item.docId);
        updateDoc(sendTransaction, {
          status: 'rechazada',
        });
      });
    }
  };

  return (
    <div>
      <h1 className='text-3xl text-[#003767] flex ml-2 my-6 font-bold font-sans'>
        Autorizar Transacciones Multiempresa{' '}
      </h1>

      <div className='flex flex-col h-screen w-screen'>
        <div style={{ height: 430, width: '60%' }}>
          <DataGrid
            rowHeight={25}
            columns={columns}
            rows={pendingTransactions}
            pageSize={10}
            rowsPerPageOptions={[10]}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            sx={{
              boxShadow: 0,
              border: 0,
              fontSize: 11,
              m: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
              textAlign: 'center',
              '& .itau-app-USD': {
                bgcolor: '#B4B4B4',
              },
            }}
            getRowClassName={(params) => `itau-app-${params.row.amount}`}
          />
        </div>
        <button
          className='ml-3 bg-[#f89719] border-[#ec7e00fd] border text-[#0c0902b2] font-bolds rounded-2xl w-[120px] h-[35px] text-sm hover:bg-[#FFE6CE]'
          onClick={() => sendTransaction()}
        >
          Ejecutar
        </button>

        <div className='flex  mt-6 ml-96'>
          <AuthMenuChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default AuthMenu;
