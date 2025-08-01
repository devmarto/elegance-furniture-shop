import { Outlet, Link } from "react-router";
import { Fragment, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const logo = document.querySelector('.container-nav-mobile');

  const openMenuMobile = () => {
    setMenuMobile(true)
    document.body.style.overflow = 'hidden';
    logo.style.display = 'none';
  }
  const closeMenuMobile = () => {
    setMenuMobile(false);
    document.body.style.overflow = 'visible';
    logo.style.display = 'block';
  }
  return (
    <Fragment>
      <nav className="container-nav">
        <div className="logo">
          <Link to={'/'}>
            <span className="logo">Elegance</span>
          </Link>
        </div>
        <div className="wrapper-nav">
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
          <div className="container-nav-action">
            <Link to={'/register'}>
              <p>Sign Up</p>
            </Link>
            <Link to={'/login'}>
              <p>Login</p>
            </Link>
            <Link to={'/cart'}>
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile */}
      { !menuMobile ?
        <nav className="container-nav-mobile">
          <div className="logo">
            <Link to={'/'}>
              <span className="logo">Elegance</span>
            </Link>
          </div>
            <RxHamburgerMenu size={'1.5rem'} color={'#F2A213'} onClick={openMenuMobile} />
        </nav>
      :
        <></>
      }
      { menuMobile ?
        <>
          <div className="wrapper-nav-mobile">
              <IoCloseCircleOutline className="close-menu-mobile" size={'2rem'} onClick={closeMenuMobile}/>
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
              <div className="container-nav-action">
                <Link to={'/register'}>
                  <p>Sign Up</p>
                </Link>
                <Link to={'/login'}>
                  <p>Login</p>
                </Link>
                <Link to={'/cart'}>
                  <p>Cart</p>
                </Link>
              </div>
          </div>
        </>
        :
        <></>
      }
      <Outlet />
    </Fragment>
  )
}

export default Navbar;