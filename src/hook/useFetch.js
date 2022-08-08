
import { useEffect, useState } from "react";
import { conexion } from "../helper/conexion";




export const useFetch = () => {

  const [beers, setBeer] = useState([]);

    const getBeer = async()=>{
        const newBeer = await conexion();
        setBeer(newBeer);    
        
    }
    useEffect(() => {
        getBeer();
    }, [])
    
  return {
    beers
  }
}
