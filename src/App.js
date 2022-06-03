import React from 'react';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Main from './components/body/pages/main/Main';
import About from './components/body/pages/about/About';
import Product from './components/body/pages/product/Product';
import WhatItIsKineziology from './components/body/pages/whatItIsKineziology/WhatItIsKineziology';
import News from './components/body/pages/news/News';
import Doterra from './components/body/pages/doterra/Doterra';

import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';


function App() {


  return (

      <>

        <Menu/>

          <div className="body-container">

            <Routes>
              <Route path="/"  element={<Main/>} />
              <Route path="about" element={<About/>} />
              <Route path="product" element={<Product/>} />
              <Route path="doterra" element={<Doterra/>} />
              <Route path="WhatItIsKineziology" element={<WhatItIsKineziology/>} />
              <Route path="news" element={<News/>} />
            </Routes>

          </div>

        <Footer/>

      </>
      
  );
}

export default App;

