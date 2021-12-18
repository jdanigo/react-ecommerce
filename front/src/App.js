import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useRoutes } from "react-router-dom";
import DefaultLayout from './layouts/default';
import Home from './screens/home';
import Producto from './screens/producto';
import './App.css';
import Categoria from './screens/categoria';
function App() {
  
  const mainRoutes = {
    path: '/',
    element: <DefaultLayout/>,
    children: [
     {path: '/', element: <Home/> },
     {path: 'producto/:id', element: <Producto/> },
     {path: 'categoria', element: <Categoria/> },
    ],
  };

  const routing = useRoutes([mainRoutes]);
  return (
    <>{routing}</>
  );
}

export default App;
