import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Direct from './Direct';
import ApplyMatrix from './ApplyMatrix';
import Decompose from './Decompose';

const Component = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/direct" element={<Direct />} />
      <Route path="/apply-matrix" element={<ApplyMatrix />} />
      <Route path="/decompose" element={<Decompose />} />
    </Routes>
  </Router>
);

export default Component;
