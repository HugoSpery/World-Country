import React from 'react';
import Navigation from "../component/navigation.jsx";
import ListPays from "../component/list-pays.jsx";
import Bar from "../component/bar.jsx";
import { Outlet } from "react-router-dom";
const Pays = () => {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <Bar />
            <div className="div-flags">
                <ListPays />
            </div>

        </>
);
};

export default Pays;