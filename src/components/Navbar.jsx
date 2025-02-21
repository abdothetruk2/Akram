import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container">
        <Link to="/" className="navbar-brand text-white text-uppercase fw-bolder fs-2">
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? 'active rounded-3' : ''
                  }`
                }
                style={{ width: 'fit-content' }}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? 'active rounded-3' : ''
                  }`
                }
                style={{ width: 'fit-content' }}
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? 'active rounded-3' : ''
                  }`
                }
                style={{ width: 'fit-content' }}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;