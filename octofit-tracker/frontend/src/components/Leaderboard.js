import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const API_SUFFIX = '/api/leaderboard/';
    fetch(`https://cautious-dollop-p74rqj7grxvh967j-8000.app.github.dev${API_SUFFIX}`)
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry._id}>
              <td>{entry.user.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
