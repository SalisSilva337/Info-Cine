import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext()!;

    if (favorites.length > 0) {
        return (
            <div className="favorites-container">
                <h2 className="favorites-title">My Favorites</h2>
                <div className="favorites-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
    )
    } else {
        return (
            <div className="favorites-empty">
                <h2>My Favorites</h2>
                <p>You haven't added any movies to your favorites yet.</p>
            </div>
        )
}
    
}

export default Favorites