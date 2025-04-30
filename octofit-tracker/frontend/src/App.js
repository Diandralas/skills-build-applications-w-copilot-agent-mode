import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/logo-small.png" alt="OctoFit Logo" />
            OctoFit Tracker App
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-primary me-2" to="/activities">Activities</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary me-2" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary me-2" to="/teams">Teams</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary me-2" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/workouts">Workouts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-4">
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
