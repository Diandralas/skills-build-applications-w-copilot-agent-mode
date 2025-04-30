import React, { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || "http://localhost:8000";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/activity/`)
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Activity Type</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
