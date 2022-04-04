import styled from "styled-components";
import { ContentOfTheDay, Asteroids } from "../components";

const StyledHome = styled.main`
  background-color: var(--clr-white);
  color: var(--clr-black);
  max-width: var(--page-max-width);
  padding-inline: var(--page-padding);
  margin-inline: auto;
`;

const Home = () => {
  return (
    <StyledHome>
      <ContentOfTheDay />
      <Asteroids />
    </StyledHome>
  );
};

export default Home;
