import React, {useEffect, useState} from 'react';
import axios from "axios";



const ListPays = () => {
    const [clicked, setClicked] = useState(false)
    const [selected,setSelected] = useState("")
    const [isSelected,setIsSelected] = useState(false)
    const [data, setData] = useState([]);
    const continent=["Europe","Africa","Asia","America","Oceania"]

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((response)=> setData(response))
    }, []);

    function infoC (e){
        e.target.offsetParent.style.opacity=0.8
    }
    function nInfoC (e){
        e.target.offsetParent.style.opacity=0
    }

    function clique(e){
        console.log({clicked}.clicked)
        if ({clicked}.clicked!==false){
            e.target.offsetParent.style.opacity=0
            setClicked(false)
        }else{
            e.target.offsetParent.style.opacity=0.8
            setClicked(true)

        }

    }

    const listPays = data
        .filter((pays) => pays.continents[0].includes(selected))
        .map((pays,index) => <li key={index} className="container-flags">
        <img src={pays.flags.png} alt={pays.flags.alt}/>

        <div onMouseOver={infoC} onMouseOut={nInfoC} onClick={clique} className="info">
            <p className="reg">Cap : {pays.capital}</p>
            <p className="nom">Nom : {pays.translations.fra.common}</p>
            <p className="pop">Popu : {String(pays.population.toLocaleString())}</p>

        </div>
    </li>)

    function choix(e){
        setSelected(e.target.id)
        setIsSelected(true)
    }

    const btn = continent.map((contin)=>
        <li className="li-content">
            <input onChange={choix} type="radio" id={contin} name="check"/>
            <label htmlFor={contin}>{contin}</label>
        </li>
    )

    function outChoice(){
        let act = {selected}
        const button = document.getElementsByTagName("input")
        for (let i=0;i<6;i++) {
            button[i].checked = false;
        }
        setIsSelected(false)
        setSelected("")
    }

    return (
        <>
            <div>
                <ul className="li-selector">
                    {btn}
                </ul>
                {isSelected && (
                    <button onClick={outChoice} className="btn-filtre">Enlever le filtre</button>
                )}
            </div>
            <ul className="ul-flags">
            {listPays}
            </ul>
        </>
    );
};

export default ListPays;

