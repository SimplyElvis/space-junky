import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: var(--footer-height);
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  background-color: var(--clr-darkblue);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <section>Built with Reactjs v17</section>
      <section>Nasa API via proxy server</section>
    </StyledFooter>
  );
};

export default Footer;
