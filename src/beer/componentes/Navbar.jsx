import { Link,NavLink, useNavigate, } from 'react-router-dom';



export const Navbar = () => {

    const navigate = useNavigate();
  return (
    <nav className ="Horizontal">
    
            <Link className="linke active" to="/beer">
                Beer
            </Link >      

            <NavLink className="linke" to="/beerlist">     
                ListBeer
            </NavLink>

            <NavLink className="linke" to="/vermas">     
                DetalBeer
            </NavLink>
        
    
        
    </nav>
  )
}
