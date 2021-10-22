import type { NextPage } from "next";
import { StyledHero } from "../components/styled/IndexWelcome.styled.ts";
import { StyledVideo } from "../components/styled/IndexVideo.styled.ts";
import { StyledSteps } from "../components/styled/IndexSteps.styled.ts";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div>
    <StyledHero></StyledHero>
    <StyledVideo></StyledVideo>
    <StyledSteps></StyledSteps>
  </div>;
};

export default Home;
