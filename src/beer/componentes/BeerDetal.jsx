import { Link } from "react-router-dom"



export const BeerDetal = ({name,img,descripcion,id}) => {


  return (
    <>
      <div className="fila">
        <div className="grip-container">
          <div className="card">
              <div className="col-4">
                  <img src={img} alt={name}/>
              </div>
              <div className="col-8">
                  <h1>{name}</h1>
                  <p className="textcenter">{descripcion}</p>
                  <Link to={`/vermas/${id}`} className= ".link" >
                    Mas...
                  </Link>
              </div>
          </div>
        </div>
      </div> 
    </>
  )
}
