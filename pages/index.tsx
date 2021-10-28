import type { NextPage } from "next";
import { StyledHero } from "../components/styled/IndexWelcome.styled.ts";
import { StyledVideo } from "../components/styled/IndexVideo.styled.ts";
import { StyledSteps } from "../components/styled/IndexSteps.styled.ts";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <StyledHero>
        <div className="shirtDisplay">

        </div>
        <div>
          <h1>GEO-GRAPHICALLY <p>UNIQUE</p> CLOTHING</h1>
          <p>Order uniquely designed t-shirts to represent the place you have travelled to.</p>
          <button>Create</button>
        </div>
      </StyledHero>

      <StyledVideo>
        <div>
          <span>
            <h2>HOW IT'S DONE</h2>
          </span>
          <p>Watch this simple video to quickly grasp the idea of how Humboldt. works</p>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/HpOD1w1E5kg"></iframe>
        </div>
      </StyledVideo>

      <StyledSteps>
        <div>
          <h2>IT'S JUST THAT EASY</h2>
        </div>
        <div className="StepsDiv">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledSteps>
    </div>
  );
};

export default Home;
