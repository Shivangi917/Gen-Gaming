const GameList = require('../video_games.json');

exports.GameController = (req, res) => {
  const { genre } = req.query;

  if (!genre) {
    return res.status(400).json({ error: 'Genre is required' });
  }

  const filteredGames = GameList.filter((game) =>
    game.Metadata.Genres.toLowerCase().includes(genre.toLowerCase())
  );

  if (filteredGames.length === 0) {
    return res.status(404).json({ message: 'No games found for this genre' });
  }

  res.json(filteredGames);
};