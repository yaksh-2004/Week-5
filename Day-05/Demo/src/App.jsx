import React from 'react';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
      </Routes>

    </div>

  );
}

export default App;