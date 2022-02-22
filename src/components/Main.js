import Movie from "./Movie";
import moviesArray from "../data/movies.json";
import { useState } from "react";

function Main() {
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);

  const displayPopular = () => {
    let newMoviesArray = [...filteredMovies].filter(m => m.rating >= 9)
    setFilteredMovies(newMoviesArray)
  };

  return (
    <>
      <button className="button" onClick={displayPopular}>
        Show what's popular!
      </button>
      <section>
        {filteredMovies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              rating={movie.rating}
              image={movie.imgURL}
            />
          );
        })}
      </section>
    </>
  );
}

export default Main;
