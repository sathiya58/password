
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Password Reset App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
