import { Link } from 'react-router';
import styled from "styled-components";

export const CardListItemContainer = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.25rem 0 0 0;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;