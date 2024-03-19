import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pays from "./Pays.jsx";
import pagePays from "./pagePays.jsx";
import Accueil from "./Accueil.jsx";

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
