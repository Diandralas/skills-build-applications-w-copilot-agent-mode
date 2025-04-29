import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || 'http://localhost:8000';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/teams/`)
      .then(response => response.json())
      .then(data => {
        setTeams(data);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
