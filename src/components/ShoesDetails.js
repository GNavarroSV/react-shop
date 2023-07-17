import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFetchSimple from "../hooks/useFetchSimple";
import {Button} from './Button';
import './ShoesDisplay.css'

const ShoesDetails = () => {
    const {id}  = useParams();

    
    
    

    const{data:shoe, isPending, error} = useFetch(`http://localhost:8000/shoes/${id}`);

    const{data:randomShoe1} = useFetchSimple('http://localhost:8000/shoes/')
    const{data:randomShoe2} = useFetchSimple('http://localhost:8000/shoes/')
    const{data:randomShoe3} = useFetchSimple('http://localhost:8000/shoes/')
   
    return (  
        <div className="shoe-main-container" >
            <div className="shoe-details-container">
                <div className="rndm-1" data-category ="Click for more details">
                    {randomShoe1&&<img src={randomShoe1.img} alt="" className="shoes-details-img-rndm" data-category ="More details"/>}
                </div>
          
                <div className="rndm-2" data-category ="Click for more details">
                    {randomShoe2&&<img src={randomShoe2.img} alt="" className="shoes-details-img-rndm" />}
                </div>
           
            
                <div className="rndm-3" data-category ="Click for more details">
                    {randomShoe3&&<img src={randomShoe3.img} alt="" className="shoes-details-img-rndm"/>}
                </div>
            
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {shoe&&( 
                    <div className="shoes-details-card" key={shoe.id}>
                         <img src={shoe.img} alt="" className="shoes-details-img" />
                        <div className="shoe-details-info">
                        <div className="main-details">
                            <h2 className="shoe-details-brand">{shoe.brand} -</h2>
                            <h2 className="shoe-details-model">{shoe.model}</h2>
                        </div>
                        <h5 className="shoe-details-price">{shoe.price}</h5>
                        <Button className = 'btns' buttonStyle='btn--success' buttonSize = 'btn--special' path = '/services'>BUY NOW!</Button>
                        </div>
                    </div>     
            )}
            </div>
        </div>
    );
}
 
export default ShoesDetails;