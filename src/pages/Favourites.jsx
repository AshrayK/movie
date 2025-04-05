import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext.jsx";
import MovieCard from "../Components/MovieCard.jsx";
function Favourites() {
  const { favourites } = useMovieContext();
  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourite Movies</h2>
        <div className="movies_grid">
          {favourites.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&(
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourites_empty">
      <h3>No Favourites yet.</h3>
      <p>
        The favourite is empty right now. Please empty fill something something.
      </p>
    </div>
  );
}
export default Favourites;
