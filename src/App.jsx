import React, { useState,useEffect } from 'react'
import {BrowserRouter, Routes, Route, Outlet,createBrowserRouter,RouterProvider} from "react-router-dom";
import Accueil from "./Accueil.jsx";
import Pays from "./Pays.jsx";
import PagePays from "./pagePays.jsx";

/*
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/pays" element={<Pays />}/>
        <Route path="/test" element={<PagePays nom="Italie"/>}/>
    </Routes>
</BrowserRouter>
</>

 */

function App() {

    let tab =[
        {
            path: "/",
            element: <Accueil />,
        },
        {
            path : "/pays",
            element : <Pays />

        },
        {
            path : "/pays/:paysNom",
            element: <PagePays />
        }
    ];
    /*
    for(let i=0;i<data.length;i++){
        let nomPays = data[i].translations.fra.common
        tab[i+2]={path:"/pays"+nomPays.replace(/\s+/g, ''),element: <h1>hello</h1>}

    }

     */





    const router = createBrowserRouter(tab)

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
