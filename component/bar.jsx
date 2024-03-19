import React, {createElement, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";


const Bar = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((response)=> setData(response))
    }, []);

    function barSearch(e){
        const res= document.querySelectorAll(".art-search");
        const txt =  document.querySelectorAll(".res1")
        const flags = document.querySelectorAll(".flag-search")
        const lien = document.querySelectorAll(".lien-pays")
        console.log(lien)
        let paysSelec=[] ;
        let paysImg = [];
        let search = e.target.value.toLowerCase()
        let cpt = 0
        data.forEach((data)=>{
            let pays=data.translations.fra.common
            let paysMatch=pays.slice(0,search.length).toLowerCase()
            if (paysMatch===search && cpt<3){
                cpt += 1
                paysSelec[cpt]=pays;
                paysImg[cpt]=data.flags.png;
            }





        })

        if(paysSelec.length===0){
            for(let i=0;i<3;i++){
                res[i].style.display = "none";
            }
        }else if(paysSelec.length===2){
            res[0].style.display="block"
            txt[0].textContent=paysSelec[1]
            flags[0].src=paysImg[1]
            lien[0].href="/pays/"+paysSelec[1].replace(/\s+/g, '')
            for(let i=1;i<3;i++){
                res[i].style.display = "none";
            }
        }else if(paysSelec.length===3){
            res[0].style.display="block"
            res[1].style.display="block"
            txt[0].textContent=paysSelec[1]
            txt[1].textContent=paysSelec[2]
            flags[0].src=paysImg[1]
            flags[1].src=paysImg[2]
            lien[0].href="/pays/"+paysSelec[1].replace(/\s+/g, '')
            lien[1].href="/pays/"+paysSelec[2].replace(/\s+/g, '')

            res[2].style.display="none"
        }else{
            for(let i=0;i<3;i++){
                res[i].style.display = "block";
            }
            for(let i=1;i<4;i++){
                txt[i-1].textContent=paysSelec[i]
                flags[i-1].src=paysImg[i]
                lien[i-1].href="/pays/"+paysSelec[i].replace(/\s+/g, '')


            }
        }
        if (search===""){
            for(let i=0;i<3;i++){
                res[i].style.display = "none";
            }
        }
    }
    return (
        <>
            <section className="container-search">
                <input onChange={barSearch} className="search-bar" type="search" id="bar" name="bar"
                       placeholder="Vous cherchez un pays ?"/>
                <div className="res-search">
                    <article className="art-search">
                        <a href="/pays" className="lien-pays">
                            <art className="flex-container">
                                <p className="res1"></p>
                                <img className="flag-search" src="#" alt="flags"/>
                            </art>
                        </a>
                    </article>
                    <article className="art-search">
                        <a href="/pays" className="lien-pays">
                            <art className="flex-container">
                                <p className="res1"></p>
                                <img className="flag-search" src="#" alt="flags"/>
                            </art>
                        </a>
                    </article>
                    <article className="art-search">
                        <a href="/pays" className="lien-pays">

                            <art className="flex-container">
                                <p className="res1"></p>
                                <img className="flag-search" src="#" alt="flags"/>
                            </art>
                        </a>
                    </article>
                </div>

            </section>


        </>
    );
};

export default Bar;