import { useEffect, useState } from "react";

const useFetchSimple = (url) => {
    const[data,setData] = useState(null)


    function randomInt(){
        return Math.floor(Math.random() * (100 - 1)) + 1;
    }
    const[randomId, setRandomId] = useState(randomInt())
    
    useEffect(()=>{
        fetch(url + randomId) 
        .then(res=>{
            return res.json()
        }).then(data=>{
            setData(data)
        })
       
    },[url])  
     return{data};
}
 
export default useFetchSimple;