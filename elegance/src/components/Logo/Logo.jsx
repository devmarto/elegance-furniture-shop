//import { Link } from "react-router";
import logoIcon from '../../assets/logo.svg';
import { LogoContainer, StyledLink, LogoText } from './logo-style';

const Logo = () => {
  return (
    <StyledLink to={'/'}>
      <LogoContainer>
        <img src={logoIcon} alt="Logo Elegance" />
        <LogoText>Elegance</LogoText>
      </LogoContainer>
    </StyledLink>
  )
}

export default Logo;