import {Routes,Route} from 'react-router-dom';
import { BeerRoutes } from '../beer/routes/BeerRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
             <Route path="/*" element={<BeerRoutes />} />         
        </Routes>
    </>
  )
}
