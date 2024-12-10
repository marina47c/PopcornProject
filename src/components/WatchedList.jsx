import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onRemoveWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onRemoveWatched={onRemoveWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
