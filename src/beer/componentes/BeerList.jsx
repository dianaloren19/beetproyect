
import { useFetch } from "../../hook/useFetch"
import { BeerDetal } from "./BeerDetal";



export const BeerList = () => {

const  {beers} = useFetch();
   

  return (
    <>
        <div className="fila">
       
          {
            
            beers.map((element) =>(
              <BeerDetal key={element.id}
                name={element.name}
                img={element.image_url}
                descripcion={element.description}
                id={element.id}/>
            ))
          }
       
        </div>
    </>

  )
}
