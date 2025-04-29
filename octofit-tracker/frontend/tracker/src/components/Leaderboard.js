import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || 'http://localhost:8000';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/leaderboard/`)
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map(entry => (
          <li key={entry.id}>{entry.name}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
