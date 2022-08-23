import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AuthMenuChart from './AuthMenuChart';
import '../../src/App.css';

const AuthMenu = () => {
  const [data, setData] = useState([]);
  //const [authorize, setAuthorize] = useState([]);
  //const [reject, setReject] = useState([]);

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'company',
      headerName: 'Empresa',
      width: 200,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'origen',
      headerName: 'Cuenta Origen',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'solution',
      headerName: 'Solución',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'amount',
      headerName: 'Monto',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'details',
      headerName: 'Detalles',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      renderCell: (params) => {
        return (
          <div>
            {data ? (
              <div>
                <Checkbox
                  size='small'
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
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
      field: 'autorize',
      headerName: 'Autorizar',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      renderCell: (params) => {
        return (
          <div>
            {data ? (
              <div>
                <Checkbox
                  // onClick={() => authorizeTransaction(params)}
                  onChange={(e) => handleChange(e, params.row.docId)}
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
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
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

  //HANDLECHANGE
  const handleChange = (e, docId) => {
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

  //HANDLECHANGE
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

  //AUTHORIZE TRANSACTIONS
  const authorizeTransaction = (transaction) => {
    const isTransactionPresent = authorize.some(
      (item) => item.id === transaction.id
    );
    if (isTransactionPresent) {
      const updateAuthorize = authorize.map((item) => {
        if (item.id === transaction.id) {
          return { ...item, count: --item.count };
        }
        return item;
      });
      setAuthorize(updateAuthorize);
    } else {
      setAuthorize([...authorize, { ...transaction, count: 1 }]);
    }
  };

  //REJECT TRANSACTIONS
  const rejectTransaction = (transaction) => {
    const isTransactionPresent = reject.some(
      (item) => item.id === transaction.id
    );
    if (isTransactionPresent) {
      const updateReject = reject.map((item) => {
        if (item.id === transaction.id) {
          return { ...item, count: --item.count };
        }
        return item;
      });
      setReject(updateReject);
    } else {
      setReject([...reject, { ...transaction, count: 1 }]);
    }
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
      <h2>Autorizar Transacciones Multiempresa: </h2>
      <div style={{ height: 450, width: '72%' }}>
        <DataGrid
          rowHeight={25}
          columns={columns}
          rows={pendingTransactions}
          pageSize={20}
          sx={{
            boxShadow: 2,
            fontSize: 12,
            border: 2,
            m: 2,
            borderColor: '#ffb64c',
            '& .MuiDataGrid-cell:hover': {
              color: '#ffb64c',
            },
            '& .itau-app-USD': {
              bgcolor: '#B4B4B4',
            },
          }}
          getRowClassName={(params) => `itau-app-${params.row.amount}`}
        />
      </div>
      <button onClick={() => sendTransaction()}>Ejecutar</button>
      <div>
        <AuthMenuChart data={data} />
      </div>
    </div>
  );
};

export default AuthMenu;
