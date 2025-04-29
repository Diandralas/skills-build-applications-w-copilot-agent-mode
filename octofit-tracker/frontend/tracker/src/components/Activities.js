import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || 'http://localhost:8000';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/activity/`)
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
