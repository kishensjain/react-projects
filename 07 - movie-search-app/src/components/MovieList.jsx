import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({searchResults, hasSearched}) => {
  return (
    <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {searchResults.length > 0 ? (
        searchResults.map((movie) => (
          <Link to = {`/movie/${movie.id}`} key={movie.id}>
          <div
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col h-[400px]">
              <img
                src={movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://placehold.co/500x750?text=No+Image&font=roboto"
                }
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md"
              />

            <h3 className="text-white text-lg mt-2 font-bold">{movie.title}</h3>
            <p className="text-gray-400 text-sm">
              {movie.release_date ? movie.release_date : "Unknown Release Date"}
            </p>
          </div>
          </Link>
        ))
      ): hasSearched ? (
        <p className="text-white text-center w-full">No movies found...</p>
      ) : null }
    </div>
  )
}

export default MovieList
