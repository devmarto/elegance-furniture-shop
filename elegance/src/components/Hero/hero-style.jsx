import HeroImg from '../../../public/assets/hero-main.jpg';
import styled from 'styled-components';

export const HeroContainer = styled.header`
   background-image: url(${HeroImg});
   background-size: cover;
   background-position: center;
   height: 85vh;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: white;
   padding: 0 20px;
`;

export const HeroContent = styled.div`
   position: relative;
   top: -3rem;

`;

export const HeroTitle = styled.h1`
   font-size: 4.75rem;
   color: #FFFFFF;
   font-family: 'DM Sans', sans-serif;
   font-weight: 600;
   max-width: 1246px;
   width: 100%;
   margin: 0 auto 1.5rem;
`;

export const HeroSubtitle = styled.p`
   font-size: 1.25rem;
   color: #FFFFFF;
   font-family: 'DM Sans', sans-serif;
   font-weight: 200;
   max-width: 600px;
   width: 100%;
   margin: 0 auto 1.5rem;
`;