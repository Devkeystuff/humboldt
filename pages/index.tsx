import type { NextPage } from "next";
import { StyledHero } from "../components/styled/IndexWelcome.styled.ts";
import { StyledVideo } from "../components/styled/IndexVideo.styled.ts";
import { StyledSteps } from "../components/styled/IndexSteps.styled.ts";
import { Button } from "../components/styled/Button.styled";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <StyledHero>
        <div className="shirtDisplay">
          <img src="/images/shirts-corners.png"></img>
          <img id="shirts-on-display" src="/images/humboldt-white.png"></img>
        </div>
        <div>
          <h1>GEO-GRAPHICALLY <p>UNIQUE</p> MERCH</h1>
          <p>Order uniquely designed merch to represent the place you have travelled to.</p>
          <Button>Create</Button>
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
          <iframe src="https://www.youtube.com/embed/HpOD1w1E5kg"></iframe>
        </div>
      </StyledVideo>

      <StyledSteps>
        <h2>IT'S JUST THAT EASY</h2>
        <div className="StepsDiv">
          <div>
            <img src="/images/GreenFrame.png"></img>
            <p>SELECT</p>
            <p className="steps-tutorial">Select a place you would like to display on your merch</p>
          </div>
          <div>
            <img src="/images/paint-brush.png"></img>
            <p>CUSTOMIZE</p>
            <p className="steps-tutorial">Uniquely customize merch to your own liking and write a description about the place</p>
          </div>
          <div>
            <img src="/images/credit-card.png"></img>
            <p>ORDER</p>
            <p className="steps-tutorial">Finalize the process by filling in the necessary payment information</p>
          </div>
        </div>
      </StyledSteps>
    </div>
  );
};

export default Home;
