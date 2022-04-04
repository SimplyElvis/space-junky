import { Link } from "react-router-dom";
import styled from "styled-components";

import space_matador from "../images/space.png";

const StyledHeader = styled.header`
  height: var(--header-height);
  width: 100%;

  > section {
    max-width: var(--max-page-width);
    margin-inline: auto;
    padding-inline: var(--page-padding);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    border-bottom: solid 1px var(--clr-light);
  }
`;

const SpaceMatador = styled.span`
  font-size: 1.6rem;
  color: var(--clr-blue);
  font-weight: var(--fw-bold);
  cursor: pointer;
  word-spacing: 4px;
  transition: color 0.2s ease-in;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 52px;
    width: 52px;
  }

  a {
    font-size: inherit;
    font-color: inherit;
    font-weight: inherit;
  }

  :hover {
    color: var(--clr-darkblue);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <SpaceMatador>
          <img src={space_matador} alt="space matador" />
          <Link to="/">Space Matador</Link>
        </SpaceMatador>

        <nav className="nav">
          <Link to="/map">Map</Link>
          <span>Link</span>
        </nav>
      </section>
    </StyledHeader>
  );
};

export default Header;
