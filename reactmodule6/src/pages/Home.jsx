import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to React Router</h1>

      <p>
        This is the Home Page of our React Router practice project.
      </p>

      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default Home;