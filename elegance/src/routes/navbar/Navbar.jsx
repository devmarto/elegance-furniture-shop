import { Outlet, Link } from "react-router";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="container-nav">
        <div className="logo">
          <Link to={'/'}>
            <span className="logo">Elegance</span>
          </Link>
        </div>
        <div className="container-nav-link">
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="nav-link-item">
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className="nav-link-item">
              <Link to={'/features'}>Features</Link>
            </li>
            <li className="nav-link-item">
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;