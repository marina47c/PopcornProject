import { useEffect, useState } from "react";

const KEY = "504376ed";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    getMovieDetails(selectedId);
  }, [selectedId]);

  async function getMovieDetails(selectedId) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
    );
    const data = await response.json();
    setMovie(data);
  }

  return (
    <div className="details">
      <header></header>
      <button onClick={onCloseMovie} className="btn-back">
        &larr;
      </button>
    </div>
  );
};

export default MovieDetails;
