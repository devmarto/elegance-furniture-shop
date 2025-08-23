import styled from 'styled-components';
import { Link } from 'react-router';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;
