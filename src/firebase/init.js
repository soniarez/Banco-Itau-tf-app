import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import config from './config';
import { getFormatCurrency } from '../utility/currencychange';

// Initialize Firebase
const app = initializeApp(config);

const db = getFirestore(app);

// let transactions = {
//   data: [

//   ],
// };

// let movements = {
//   data: [

//   ],
// };

// let companies = {
//   data: [

//   ],
// };

// export const dataset = companies.data.forEach(function (obj) {
//   const postId = Math.random().toString(16).slice(2);
//   addDoc(collection(db, 'companies'), {
//     id: postId,
//     rut: obj.Rut,
//     'Razon Social': obj['Razon Social'],
//     segment: obj.Segmento,
//     accounts: obj['Cuenta Corriente'],
//     // payment: obj.abono
//     //   ? `${obj.currencycode} ${getFormatCurrency(obj.abono, obj.currencycode)}`
//     //   : '-',
//     // charge: obj.cargo
//     //   ? `${obj.currencycode} ${getFormatCurrency(obj.cargo, obj.currencycode)}`
//     //   : '-',
//   })
//     .then(function (docRef) {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch(function (error) {
//       console.error('Error adding document: ', error);
//     });
// });

export { app, db, collection, onSnapshot, updateDoc, doc };
