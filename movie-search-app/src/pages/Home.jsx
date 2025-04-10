import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]); // Stores trending or search results
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(""); // Store query for pagination

  // Fetch trending movies when the page loads
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results) {
          setMovies(data.results); // Store trending movies
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    if (!hasSearched) {
      fetchTrendingMovies(); // Fetch trending movies if no search has been made
    }
  }, [hasSearched]);

  // Handle movie search
  const handleSearch = async (query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setHasSearched(true);
    setQuery(trimmedQuery);
    setPage(1);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?query=${trimmedQuery}&api_key=${API_KEY}&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setMovies(data.results); // Replace trending movies with search results
        setTotalPages(data.total_pages || 1);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  // Load more movies
  const loadMoreMovies = async () => {
    if (page >= totalPages) return;
    if (!query) return; // Ensure query exists before making the request

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const nextPage = page + 1;
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&page=${nextPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Movie Search App 🎬</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList searchResults={movies} hasSearched={hasSearched} />
      {page < totalPages && movies.length > 0 && (
        <button
          onClick={loadMoreMovies}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Home;