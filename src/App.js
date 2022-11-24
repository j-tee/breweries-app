import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/components/Home';
import Navbar from './app/components/Navbar';
import BreweryDetails from './app/components/BreweryDetails';

function App() {
  return (
    <div className="container-fluid my-app">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/station-details/:name" element={<BreweryDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
