import './Movie.css'

function Movie(props) {

    return(
        <div className={props.rating > 8 ? 'movie popular' : 'movie'}>
        <img src={props.image} alt={props.title} />
        <div >
            <h2>{props.title}</h2>
            <p>
                Year: {props.year} <br />
                Rating: {props.rating}  <br />
            </p>
            <p>Genres:  {props.genres.map(gen => <span>{gen} </span>)} </p>
        </div>
        </div>
    )
}
export default Movie;