import Movie from "./Movie";
import moviesArray from '../data/movies.json'

function Main() {
    return(
        <section>
        {moviesArray.map(movie => {
            return <Movie key={movie.id} title={movie.title} year={movie.year} genres={movie.genres} rating={movie.rating} image={movie.imgURL}/>
        })}
        </section>
    )
}

export default Main;