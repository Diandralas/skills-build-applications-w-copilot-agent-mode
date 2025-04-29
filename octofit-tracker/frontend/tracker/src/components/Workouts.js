import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cautious-dollop-p74rqj7grxvh967j-8000.app.github.dev/api/workouts/?format=json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setWorkouts(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      {error ? (
        <p className="text-danger">Error: {error}</p>
      ) : (
        <ul>
          {workouts.map(workout => (
            <li key={workout.id}>{workout.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Workouts;
