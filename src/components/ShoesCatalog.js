import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ShoesDisplay from "./ShoesDisplay";
import "./ShoesDisplay.css";

/*npx json-server --watch data/db.json --port 8000*/

const ShoesCatalog = () => {

const{data:shoes, isPending, error} = useFetch('http://localhost:8000/shoes/')

    return (  
        <>
            <div className="container">    
            </div>
                <div className="shoes-catalog">
                    { error && <div>{ error }</div> }
                    { isPending && <div style={{color:"#fff", alignItems:"center" ,textAlign:"center", justifyContent:"center", height:"600px", width:"100%"}}>
                        <p style={{color:"#fff", fontSize: "60px", fontStyle:"oblique", marginTop:"200px"}}>Loading...</p></div> }
                    {shoes && <ShoesDisplay shoes={shoes}/>}
                </div>
            
        </>
    );
}
 
export default ShoesCatalog;