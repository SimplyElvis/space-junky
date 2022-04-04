import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: var(--footer-height);
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  background-color: chocolate;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <section>left</section>
      <section>right</section>
    </StyledFooter>
  );
};

export default Footer;
