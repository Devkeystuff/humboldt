import type { NextPage } from "next";
import { StyledHero } from "../components/styled/IndexWelcome.styled";
import { StyledVideo } from "../components/styled/IndexVideo.styled";
import { StyledSteps } from "../components/styled/IndexSteps.styled";

const Home: NextPage = () => {
  return (
    <div>
      <StyledHero>
        <div className="shirtDisplay"></div>
        <div>
          <h1>
            GEO-GRAPHICALLY <p>UNIQUE</p> CLOTHING
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            morbi tellus euismod ornare semper nisl, quam convallis.
          </p>
          <button>Create</button>
        </div>
      </StyledHero>

      <StyledVideo>
        <div>
          <span>
            <h2>HOW IT&quot;S DONE</h2>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            posuere pellentesque elit turpis scelerisque in ligula. Mollis odio
            lectus mattis est nisi, pretium ac duis feugiat. Orci pulvinar proin
            amet enim at nunc id ac. Mattis amet faucibus mus ut nibh neque.
          </p>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/HpOD1w1E5kg"></iframe>
        </div>
      </StyledVideo>

      <StyledSteps>
        <div>
          <h2>IT&quot;S JUST THAT EASY</h2>
          <h2>IT&quot;S JUST THAT EASY</h2>
        </div>
        <div className="StepsDiv">
          <div>
            <p>IT&quot;S JUST THAT EASY</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </StyledSteps>
    </div>
  );
};

export default Home;
