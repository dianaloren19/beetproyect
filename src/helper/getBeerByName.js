import { useFetch } from "../hook/useFetch";


export const getBeerByName = (name = '') => {

    const  {beers} = useFetch();
    

    name = name.toLowerCase().trim();
    if ( name.length === 0 ) return false;

    return beers.filter(
        beer => beer.name.toLowerCase().includes( name ) 
    );
}

