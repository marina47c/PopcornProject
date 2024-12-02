import Movie from "./Movie";

const MovieList = ({ movies, selectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} selectMovie={selectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
