import React, { useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [genre, setGenre] = useState('');
  const [games, setGames] = useState([]);

  const handleGenreClick = async (selectedGenre) => {
    setGenre(selectedGenre);
    try {
      const response = await axios.get(`/api/genres?genre=${selectedGenre}`);
      setGames(response.data);
    } catch (err) {
      console.log("Error connecting: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex w-4/5 max-w-screen-xl p-6 rounded-lg shadow-2xl bg-gray-900 border border-gray-700">
        {/* Choose a Genre Section */}
        <div className="text-white w-1/3 p-6 flex flex-col items-start space-y-6">
          <h1 className="text-4xl font-bold text-rose-400">Choose a Genre</h1>

          {/* Genre buttons */}
          <div className="w-full space-y-3">
            {['action', 'adventure', 'rpg', 'shooter', 'strategy', 'sports', 'racing', 'simulation', 'horror', 'fighting'].map((genreItem) => (
              <button
                key={genreItem}
                onClick={() => handleGenreClick(genreItem)}
                className="w-full text-left px-5 py-3 text-xl font-semibold text-gray-300 bg-transparent rounded-md border-2 border-transparent hover:bg-slate-700 hover:border-slate-500 hover:text-white transition duration-300 transform hover:scale-105"
              >
                {genreItem.charAt(0).toUpperCase() + genreItem.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical line */}
        <div className="w-px bg-slate-600 mx-6" />

        {/* Game list display */}
        <div className="text-white w-2/3 p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-rose-400">Game List</h2>
          {games.length > 0 ? (
            <ul className="space-y-4">
              {games.map((game, index) => (
                <li key={index} className="bg-slate-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-rose-400">{game.Title}</h3>
                  <p><strong className="text-rose-300">Genre:</strong> {game.Metadata.Genres}</p>
                  <p><strong className="text-rose-300">Publisher:</strong> {game.Metadata.Publishers}</p>
                  <p><strong className="text-rose-300">Max Players:</strong> {game.Features["Max Players"]}</p>
                  <p><strong className="text-rose-300">Review Score:</strong> {game.Metrics["Review Score"]}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No games found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
