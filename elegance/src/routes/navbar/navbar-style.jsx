import { Link } from "react-router";
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1296px;
  width: 100%;
  margin: 2rem auto;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
`;

export const NavLinkItemContainer = styled.li`
  padding: 0.25rem 0.75rem;
`;

export const LinkLogOut = styled.li`
  cursor: pointer;
  list-style: none;
`;

export const NavLinkItem = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 1.125em;
   &:hover {
    opacity: 0.8;
  }
  &:active {
    font-weight: bold;
  }
`;


export const ContainerNavAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;