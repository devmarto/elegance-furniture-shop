import { Outlet, Link } from "react-router";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/CartIcon/CardIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import userIcon from '../../assets/icon/user.svg';
import wishlist from '../../assets/icon/heart.svg';
import logOut from '../../assets/icon/logout.svg';

import {
  NavContainer,
  NavLinks,
  NavLinkContainer,
  NavLinkItemContainer,
  NavLinkItem,
  ContainerNavAction,
  LinkLogOut
} from './navbar-style';
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
          <NavLinks>
            <NavLinkItemContainer>
              <NavLinkItem to={'/'}>Home</NavLinkItem>
            </NavLinkItemContainer>
            <NavLinkItemContainer>
              <NavLinkItem to={'/shop'}>Shop</NavLinkItem>
            </NavLinkItemContainer>
            <NavLinkItemContainer>
              <NavLinkItem to={'/features'}>Features</NavLinkItem>
            </NavLinkItemContainer>
            <NavLinkItemContainer>
              <NavLinkItem to={'/contact'}>Contact Us</NavLinkItem>
            </NavLinkItemContainer>
          </NavLinks>
        </NavLinkContainer>
        <ContainerNavAction>
          {currentUser ? (
              <LinkLogOut onClick={signOutHandler}>
                <img src={logOut} alt="Log Out Icon" className="logout-icon" />
              </LinkLogOut>
            ) : (
              <Link to={'/auth'}>
                <img src={userIcon} alt="User Icon" className="user-icon" />
              </Link>
            )
          }
          <Link to={'/wishlist'}>
            <img src={wishlist} alt="Wishlist Icon" className="wishlist-icon" />
          </Link>
          <CardIcon />
        </ContainerNavAction>
        {isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;