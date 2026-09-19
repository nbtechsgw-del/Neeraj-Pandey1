import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>Welcome to the Student Management Dashboard.</p>

      <div className="dashboard-links">
        <Link to="/dashboard">Dashboard Home</Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/teachers">
          Teachers
        </Link>
      </div>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;