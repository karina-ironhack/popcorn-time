import './Movie.css'

function Movie(props) {

    // Option2 to have default image 
    // let imgTag;
    // imgTag = props.image
    // ? <img src={props.image} alt={props.title}/> 
    // : <img src='https://i.imgur.com/Z2MYNbj.png' alt={props.title}/>

    return(
        <div className={props.rating > 8 ? 'movie popular' : 'movie'}>
            <h2>{props.title}</h2>

            {/* Option2 to have default image  */}
            {/* {imgTag} */}

            {/* Option1  to have default image*/}
            {/* <img src={props.image ? props.image : 'https://i.imgur.com/Z2MYNbj.png'} alt={props.title} /> */}
            
            {/* Option3 to have default image */}
            {props.image 
            ? <img src={props.image} alt={props.title}/> 
            :  <img src='https://i.imgur.com/Z2MYNbj.png' alt={props.title}/>}

            <p>
                Year: {props.year} <br />
                Rating: {props.rating}  <br />
            </p>
            <p>Genres:  {props.genres.map((gen, i) => <span key={i}>{gen} </span>)} </p>
        </div>
    )
}
export default Movie;