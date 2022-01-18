import type { NextPage } from 'next';
import { StyledHero } from '../components/styled/IndexWelcome.styled';
import { StyledVideo } from '../components/styled/IndexVideo.styled';
import { StyledSteps } from '../components/styled/IndexSteps.styled';
import { Button } from '../components/styled/Button.styled';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <StyledHero>
        <div className="shirtDisplay">
          <Image width={100} height={50} src="/images/shirts-corners.png" />
          <Image width={100} height={50} id="shirts-on-display" src="/images/humboldt-white.png" />
        </div>
        <div>
          <h1>
            GEO-GRAPHICALLY <p>UNIQUE</p> MERCH
          </h1>
          <p>Order uniquely designed merch to represent the place you have travelled to.</p>
          <Link href={'/create'} passHref>
            <Button>CREATE</Button>
          </Link>
        </div>
      </StyledHero>

      <StyledVideo>
        <div>
          <div>
            <h2>HOW IT'S DONE</h2>
            <p>Watch this simple video to quickly grasp the idea of how Humboldt. works</p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/IuJIE0NbL8U"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </StyledVideo>

      <StyledSteps>
        <h2>IT'S JUST THAT EASY</h2>
        <div className="StepsDiv">
          <div>
            <Image width={100} height={50} src="/images/GreenFrame.png" />
            <p>SELECT</p>
            <p className="steps-tutorial">Select a place you would like to display on your merch</p>
          </div>
          <div>
            <Image width={100} height={50} src="/images/paint-brush.png" />
            <p>CUSTOMIZE</p>
            <p className="steps-tutorial">
              Uniquely customize merch to your own liking and write a description about the place
            </p>
          </div>
          <div>
            <Image width={100} height={50} src="/images/credit-card.png" />
            <p>ORDER</p>
            <p className="steps-tutorial">Finalize the process by filling in the necessary payment information</p>
          </div>
        </div>
      </StyledSteps>
    </div>
  );
};

export default Home;
