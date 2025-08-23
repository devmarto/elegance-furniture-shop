import { Outlet, Link } from "react-router";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/CartIcon/CardIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { NavContainer, NavLinks, NavLinkContainer } from './navbar-style';
import Logo from "../../components/Logo/Logo";


const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  return (
    <Fragment>
      <NavContainer>
        <Logo />
        <NavLinkContainer>
          <NavLinks className="nav-links">
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
          </NavLinks>
        </NavLinkContainer>
        <div className="container-nav-action">
          {currentUser ? (
              <span className="container-nav-link" onClick={signOutHandler}>Sign Out</span>
            ) : (
              <Link to={'/auth'}>
                <p>Auth</p>
              </Link>
            )
          }
          <CardIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;