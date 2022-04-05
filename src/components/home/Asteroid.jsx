import styled from "styled-components";

const Asteroid = styled.p`
  padding-block: 0.8rem;
  font-weight: var(--fw-medium);
  font-size: 1rem;
  color: var(--clr-black);
  padding-inline: 0.6rem;
  border-radius: 0.4rem;
  background-color: var(--clr-white);
  display: inline-block;
  margin-inline: 0.5rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Asteroid = ({ name }) => {
  return <Name>{name}</Name>;
};

export default Asteroid;
