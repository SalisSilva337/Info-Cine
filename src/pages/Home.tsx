import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, fetchMovies } from "../services/api.ts";
import "../css/Home.css";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  [key: string]: any;
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;
    setLoading(true);
    
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);

    } catch (error) {
        console.error("Error searching movies:", error);   
    }
    finally {
        setLoading(false);
    }

  };

  return (
    <div className="home">
        
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
        
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => {
            if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
              return <MovieCard movie={movie} key={movie.id} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
