import './Movie.css'

function Movie(props) {
    return(
        <div className={props.rating > 8 ? 'movie popular' : 'movie'}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
            <p>
                Year: {props.year} <br />
                Rating: {props.rating}  <br />
            </p>
            <p>Genres:  {props.genres.map((gen, i) => <span key={i}>{gen} </span>)} </p>
        </div>
    )
}
export default Movie;