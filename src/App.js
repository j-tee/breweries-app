import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/components/Home';
import Navbar from './app/components/Navbar';

function App() {
  return (
    <div className="container-fluid">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
