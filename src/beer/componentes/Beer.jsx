import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hook/useForm"
import { getBeerByName } from "../../helper/getBeerByName";
import { BeerId } from "./BeerId";

export const Beer = () => {


    const navigate = useNavigate();
    const location = useLocation();

    //Location =trae  todo el query, es decir lo que se escribio en el input
    //se instala query-string para poder detructurar lo que viene en el serach ?q=searchText
    //queryString es para obtener los Query parametros
    const { q = '' } = queryString.parse(location.search);

    const cervezas = getBeerByName(q);

    console.log('cerveza', cervezas);



    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText.toLowerCase().trim()}`)

    }

    const message = 'hola'

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div>
                <h4>Searching</h4>
                <hr />
                <form onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search beer"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange} />


                    <button>
                        Search
                    </button>

                </form>
            </div>
            <div >
                <h4>Results</h4>
                <hr />
                <div>

                    {cervezas
                        ?
                        cervezas.map(cerveza => (
                            <BeerId key={cerveza.id}
                                name={cerveza.name}
                                img={cerveza.image_url}
                                descripcion={cerveza.description} />

                        ))
                :<p>{message}</p>}
                </div>

            </div>
        </>
    )
}
