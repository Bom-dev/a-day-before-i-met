import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dept from './components/Dept';
import DeptDetail from './components/DeptDetail';
import Pick from './components/Pick';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Dept />} />
          <Route path="/department/detail" element={<DeptDetail />} />
          <Route path="/pick" element={<Pick />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;