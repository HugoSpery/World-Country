import React from 'react';
import {NavLink} from "react-router-dom";
/*rsc*/
const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav-ul">
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "navi") }>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/pays" className={(nav)=>(nav.isActive ? "nav-active" : "navi")}>
                    <li>
                        Les Pays
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;