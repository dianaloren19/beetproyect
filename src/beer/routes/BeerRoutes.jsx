import {Routes,Route} from 'react-router-dom';
import {BeerList} from '../componentes/BeerList';
import { Navbar } from '../componentes/Navbar';
import { Beer } from '../componentes/Beer';
import { VerMas } from '../componentes/VerMas';





export const BeerRoutes = () => {
   
  return (

        <>  
          <div className="container">
            <Navbar />
            <Routes> 
                <Route path="beer" element={<Beer />} />
                <Route path="beerlist" element={<BeerList />} />
                <Route path="vermas/:id" element={<VerMas />} />
             </Routes>
        </div>     
        
        </>

    
        
    
  )
}
