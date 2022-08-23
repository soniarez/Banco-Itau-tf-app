import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db } from '../firebase/init';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import '../../src/App.css';

const AuthMenu = () => {
  const [data, setData] = useState([]); //Setea nuestra data
  const [selectionModel, setSelectionModel] = useState([]); //Para el checkbox cuadrito, que escucha todos los cambios. Se llama selectionModel: https://mui.com/x/react-data-grid/selection/

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'company',
      headerName: 'Empresa',
      width: 130,
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
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'details',
      headerName: 'Ver Detalles',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      renderCell: (params) => {
        return (
          <div>
            {data ? (
              <div>
                {/* Este checkbox es el componente de las tablas, los botoncitos redondos, que se agregan con esa propiedad de renderCell para agregarlos en cada fila: https://mui.com/material-ui/react-checkbox/ */}
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
                  size='small'
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
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
                  size='small'
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
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

  useEffect(() => {
    onSnapshot(collection(db, 'transaction'), (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setData(dataFromFirestore);
    });
  }, []);

  return (
    <div>
      <h2>Autorizar Transacciones Multiempresa</h2>
      <div style={{ height: 350, width: '75%' }}>
        {/*DataGrid es el componte tabla*/}
        {/*checkboxSelection: Este prop de checkboxSelection es el que hace que aparezca el checkbox cuadrado, y lo de abajo es lo que se le pasa para que escuche cada cambio: https://mui.com/x/react-data-grid/selection/*/}
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          columns={columns}
          rows={data}
          pageSize={5}
          sx={{
            boxShadow: 2,
            border: 2,
            m: 2,
            borderColor: '#ffb64c',
            '& .MuiDataGrid-cell:hover': {
              color: '#ffb64c',
            },
          }}
        />
      </div>
    </div>
  );
};

export default AuthMenu;
