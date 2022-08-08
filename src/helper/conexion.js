

export const conexion = async() => {
let message
    const url='https://api.punkapi.com/v2/beers';
    const resp= await fetch(url);

    if (!resp.ok) {
       message = `An error has occured: ${resp.status}`;
      throw new Error(message);
    }

    if(resp.length <= 0){
      message="there no are beers";
    }

    const data = await resp.json();

   
 

  return {data, message};
}

