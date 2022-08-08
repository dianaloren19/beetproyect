

export const BeerId = ({name,img,descripcion}) => {

  return (

    
    <div className="fila">
        <div className="grip-container">
          <div className="card">
              <div className="col-4">
                  <img src={img} alt={name}/>
              </div>
              <div className="col-8">
                  <h1>{name}</h1>
                  <p className="textcenter">{descripcion}</p>
              </div>
          </div>
        </div>
      </div> 
  )
}
