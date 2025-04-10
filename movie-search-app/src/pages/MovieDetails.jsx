import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate(); // For "Go Back" button
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Fix: Initialize as true
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true); // Fix: Ensure loading state is set before fetching
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        setMovie(data);
        setError(null); // Reset error state if successful
      } catch (err) {
        setError(err.message);
        setMovie(null); // Reset movie state if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p className="text-white text-center mt-4">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <button onClick={() => navigate(-1)} className="fixed top-4 left-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md shadow-lg cursor-pointer">
        ← Go Back to Search
      </button>

      {movie && (
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
            alt={movie.title}
             className="w-100 max-w-md h-120 rounded-lg shadow-lg mb-4 mx-auto"
          />
          <p className="text-gray-400 mt-2">{movie.release_date}</p>
          <p className="text-gray-300 mt-4">{movie.overview}</p>
          <p className="text-gray-300 mt-4"> Runtime : {movie.runtime} minutes</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
