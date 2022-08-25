import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Authorization from './views/Authorization';
import Movements from './views/Movements';
import Companies from './views/Companies';
import Login from './views/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/authorization' element={<Authorization />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/movements' element={<Movements />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
