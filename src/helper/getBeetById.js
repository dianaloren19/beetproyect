
import { useFetch } from '../hook/useFetch';

export const getBeetById = (id) => {

     

     const  {beers} = useFetch();

     return beers.find( beer => beer.id == id );

 
}
