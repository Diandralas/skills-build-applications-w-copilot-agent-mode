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
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.members && Array.isArray(team.members) ? team.members.map(member => member.username).join(', ') : 'No members'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
