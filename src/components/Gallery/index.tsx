import './style.css'
import { useState } from "react"
import { movies } from "./data"
export function Gallery() {
    const [index, setIndex] = useState(0)
    let movie = movies[index]

    function avancar() {
        if (index <= movies.length - 2) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }

    }
    function anterior() {
        if (index <= 0) {
            setIndex(movies.length - 1)
        } else {
            setIndex(index - 1)
        }

    }

    return (
        <>


            <section className="gallery">


                <img src={movie.images.poster} />
                <p className="title"> Titulo: {movie.title}
                </p>
                <p className="descricao">
                    Descrição: {movie.synopsis}
                </p>
            </section>
            <button className='btn-default' onClick={anterior}>Anterior</button>
            <button className='btn-primary' onClick={avancar}>Proximo</button>
        </>
    )


}