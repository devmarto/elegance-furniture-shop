import { Link } from 'react-router';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroContent } from './hero-style';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Evaluate your interior <br />With Expert design services</HeroTitle>
        <HeroSubtitle>Transform you furniture by using the Elegance for effortless and beautiful home decoration.</HeroSubtitle>
        <Link to="/shop">
          <Button>Shop Now</Button>
        </Link>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;