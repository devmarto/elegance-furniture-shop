import styled from "styled-components"

export const ButtonStyle = styled.button<{
    $primary?: boolean;
    $googleSignIn?: boolean;
  }>`
   background: ${props => {
    if (props.$googleSignIn) return "#4A90E2";
    if (props.$primary) return "transparent";
    return "white";
  }};
  color: ${props => props.$googleSignIn ? "white" : "#000000"};
  font-family: 'DM Sans', sans-serif;
  font-size: 1.25em;
  padding: 1rem 2.5rem;
  border: 1px solid #000000;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${props => {
      if (props.$googleSignIn) return "#357ABD";
      if (props.$primary) return "#000000";
      return "#000000";
    }};
    color: white;
    transition: all 0.5s ease;
  }
`;