import type { NextPage } from 'next';
import styled from 'styled-components';

const Hero = styled.div`
  height: 100vh;
  background-color: black;
  z-index: -2;
  .lines {
    position: absolute;
    background-image: url('/animations/Lines_1.gif');
    background-repeat: no-repeat;
    background-size: cover;

    mix-blend-mode: overlay;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
  }

  .image {
    ::before {
      content: '';
      background-image: url('/images/BlueRadiant.png');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 0.5;
      top: 0;
      left: 0;
    }

    ::after {
      content: '';
      background-image: url('/images/ellipse-green.png');
      background-position: 500px -200px;
      z-index: 2;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Headline = styled.h1`
  font-size: 100px;
  color: white;
  font-family: 'Raleway';
  font-weight: 800;
  z-index: 2;
  p {
    margin: 0;
    font-style: italic;
    color: #aad725;
  }
`;

const Home: NextPage = () => {
  return (
    <Hero>
      <div>
        <Headline>
          GEO-GRAPHICALLY <p>UNIQUE</p> MERCH
        </Headline>
      </div>
      <div className="image-container">
        <div className="lines"></div>
        <div className="image"></div>
      </div>
    </Hero>
  );
};

export default Home;
