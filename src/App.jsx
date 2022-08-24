import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Authorization from './views/Authorization';
import Movements from './views/Movements';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authorization" element={<Authorization />} />
          <Route path="/Movements" element={<Movements />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
