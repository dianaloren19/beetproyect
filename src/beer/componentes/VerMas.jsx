import { Navigate, useParams } from "react-router-dom";
import { getBeetById } from "../../helper/getBeetById";


export const VerMas = () => {

    const {id} = useParams();
    

    const beerss = getBeetById(id);
  
    
     if(!beerss){
       return <p>Error</p>
     }
     console.log(beerss)
     
  return (
    <>
     <div className="fila">
        <div className="grip-container">
          <div className="card">
              <div className="col-4">
                  <img src={beerss.image_url} alt={beerss.name}/>
              </div>
              <div className="col-8">
                  <h1>{beerss.name}</h1>
                  <hr/>
                  <p className="textcenter">{beerss.description}</p> 
                  <hr/>
                  <hr/>   
                  <p className="textcenter">Ph: {beerss.ph}</p> 
                  <p className="textcenter">Srm: {beerss.srm}</p> 
                  <hr/>
                  <p className="textcenter">Tagline: {beerss.tagline}</p>            
              </div>
          </div>
        </div>
      </div> 
    </>
   
  )
}
