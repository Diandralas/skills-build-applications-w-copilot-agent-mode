import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || 'http://localhost:8000';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/workouts/`)
      .then(response => response.json())
      .then(data => {
        setWorkouts(data);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>

        <ul>
          {workouts.map(workout => (
            <li key={workout.id}>{workout.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default Workouts;
