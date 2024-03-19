import React, {useState} from 'react';
import Navigation from "../component/navigation.jsx";
import './stylesheet.scss'
import {Outlet} from "react-router-dom";
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let tab = [{
    "info1" : "Vous pourrez retrouver tous les différents Pays du Monde",
    "info2" : "Ainsi que toutes les informations concernant ceux-ci"
},
    {
        "info1" : "Vous observerez des données : Nom, Population, etc",
        "info2" : "Vous pourrez spécifier vos recherches"
    }
];

const Info = (props) => {
    return (
        <div className="info-accueil">
            <ul className="ul-accueil">
                <li className="li1"><p>{props.information.info1}</p></li>
                <li className="li2"><p>{props.information.info2}</p></li>
            </ul>
        </div>
    )
}


const Accueil = () => {
    const [index, setIndex] = useState(0)
    let realIndex=0
    async function changeInfo(){
        const inf= document.querySelector(".ul-accueil")
        inf.style.transition="0.5s"
        await delay(5000)
        inf.style.opacity=0
        inf.style.transform = "translateX(60%)"
        await delay(300)
        inf.style.transform = "translateX(-60%)"
        await delay(200)
        inf.style.opacity=1
        inf.style.transform = "translateX(0)"


        if (realIndex===tab.length-1){
            setIndex(0)
            realIndex=0

        }else{
            setIndex(index+1)
            realIndex=realIndex+1
        }
        changeInfo()


    }
    console.log(index)
    document.addEventListener("DOMContentLoaded",()=>{
        changeInfo();
    })

    return (
        <>
            <nav>
                <Navigation/>
            </nav>
            <section className="info-sec">
                <h2 className="info-title">Informations : </h2>
                <Info information={tab[index]}/>
            </section>

        </>
    );
};

export default Accueil;