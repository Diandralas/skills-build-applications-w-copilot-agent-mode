import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const API_SUFFIX = '/api/teams/';
    fetch(`https://cautious-dollop-p74rqj7grxvh967j-8000.app.github.dev${API_SUFFIX}`)
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
