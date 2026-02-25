import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

type Movie = {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
}

type MovieCardProps = {
    movie: Movie;
}


function MovieCard({ movie }: MovieCardProps) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()!;
    const favorite = isFavorite(movie.id);


    function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>👍</button>
            </div>
        </div>
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard  