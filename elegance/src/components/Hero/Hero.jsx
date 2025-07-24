import HeroImg from '../../../public/assets/hero-main.jpg';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className='container-hero' style={{backgroundImage: `url(${HeroImg})`}}>
      <div className='wrapper-content-hero'>
        <div className='content-text-hero'>
          <h1 className='title-hero'>Furniture that blends with your lifestyle</h1>
          <p className='subtitle-hero'>Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod tempor incidint ut labore et dolore amnesian</p>
        </div>
        <div className='container-cta-hero'>
          <a className='cta-btn btn-primary' href='#'>Shop Now</a>
          <a className='cta-btn btn-secondary' href='#'>Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;