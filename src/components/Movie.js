import './Movie.css'

function Movie(props) {
    return(
        <div className="movie">
            <h2>{props.title}</h2>
            <p>
                Year: {props.year} <br />
                Rating: {props.rating}  <br />
            </p>
        </div>
    )
}

export default Movie;