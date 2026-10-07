import { NavLink, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <span className="badge bg-primary rounded-pill mb-3">OctoFit Tracker</span>
          <h1 className="display-4 fw-bold">Train smarter, compete harder.</h1>
          <p className="lead text-secondary">
            Track workouts, grow your team, and stay motivated with a modern fitness dashboard.
          </p>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary btn-lg">View Leaderboard</button>
            <button className="btn btn-outline-primary btn-lg">Log Activity</button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title mb-3">Weekly Snapshot</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Workout streak</span>
                  <strong>12 days</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Team score</span>
                  <strong>8,460</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Calories burned</span>
                  <strong>2,430</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row g-4">
        {[
          ['Profile', '12 workouts this month'],
          ['Teams', '3 active squads'],
          ['Leaderboard', 'Top 5% in your group'],
          ['Workouts', '4 tailored recommendations'],
        ].map(([title, description]) => (
          <div className="col-md-6 col-xl-3" key={title}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand fw-bold">OctoFit</span>
          <div className="navbar-nav ms-auto gap-3">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
