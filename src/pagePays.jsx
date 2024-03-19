import Navigation from "../component/navigation.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
function PagePays (){

    const [data, setData] = useState([]);
    let index=null;
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((response)=> setData(response))
    }, []);
    const params = useParams();
    console.log(params.paysNom)
    if (index===null) {
        for (let i = 0; i < data.length; i++) {
            if (params.paysNom === data[i].translations.fra.common) {
                index=i;
            }
        }
        console.log(index)
        if (index===null){
            return (<h1 className="error">This page does not exist</h1>)
        }else{
            return (
                <>
                    <nav>
                        <Navigation />
                    </nav>
                    <section className="prez-pays">
                        <div className="prez-left">
                            <img className="prez-img" src={data[index].flags.png} alt="flags"/>
                            <h2 className="prez-txt prez-title">{data[index].translations.fra.common}</h2>
                            <h4 className="prez-txt">Capital : {data[index].capital}</h4>
                            <h4 className="prez-txt">Continent : {data[index].region}</h4>
                            <h4 className="prez-txt">Pop. : {data[index].population.toLocaleString()}</h4>

                        </div>
                        <div className="prez-right">
                            <article id="map"></article>
                        </div>

                    </section>
                </>
            )
        }

    }

}

export default PagePays