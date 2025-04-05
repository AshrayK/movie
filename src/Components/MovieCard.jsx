import '../css/MovieCard.css'
import {useMovieContext} from '../contexts/MovieContext.jsx';
function MovieCard(props) {
  const {addToMovies,removeFromFavorites,isFavorite} = useMovieContext()
  const favourite = isFavorite(props.movie.id);
  function handleOverlay(e) {
    e.preventDefault();
    if (favourite) removeFromFavorites(props.movie.id)
    else addToMovies(props.movie);
  }
  return (
    <div className="movie_card">
      <div className="movie_poster">
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
        <div className="movie_overlay">
          <button className={`favourite_btn ${favourite ? "active" : ""}`} onClick={handleOverlay}>
            ❤
          </button>
          </div>
        </div>
        <div className="movie_info">
          <h3>{props.movie.title}</h3>
          <p>{props.movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
