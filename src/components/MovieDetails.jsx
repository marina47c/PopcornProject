import { useEffect, useState } from "react";
import StarRating from "./StarRating/StarReting";
import Loader from "./Loader";

const KEY = "504376ed";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
    );
    const data = await response.json();
    setMovie(data);
    setIsLoading(false);
  }

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
    };

    onAddWatched(newWatchedMovie);
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button onClick={onCloseMovie} className="btn-back">
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} ImdbRating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating size={24} maxRating={10} />
            </div>

            <button className="btn-add" onClick={handleAdd}>
              + Add to list
            </button>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
