import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const API_SUFFIX = '/api/workouts/';
    fetch(`https://cautious-dollop-p74rqj7grxvh967j-8000.app.github.dev${API_SUFFIX}`)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Workout Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
