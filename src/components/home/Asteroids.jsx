import { useRef, useState } from "react";
import axios from "../../api/axios.js";
import styled from "styled-components";
import { Loading, Title } from "../styledCompnents";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  color: var(--clr-white);
`;

const AsteroidLists = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  color: white;
`;

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

const Asteroids = () => {
  const state_date = useRef("");
  const [fetched, setFetched] = useState(true);
  const [dataList, setDataList] = useState({});

  const handleAsteroidsQuery = async (event) => {
    event.preventDefault();
    setFetched(false);
    const startDate = state_date.current.value;

    try {
      const response = await axios.get("/neo", {
        params: { startDate },
      });
      setDataList(response.data);
      setFetched(true);
    } catch (err) {
      alert(err);
      setFetched(true);
    }
  };

  return (
    <section className="section_spacing">
      <StyledForm onSubmit={handleAsteroidsQuery} method="GET">
        <span>
          <label htmlFor="stateDate">Start Date</label>
          <input
            type="text"
            name="startDate"
            id="startDate"
            className="input"
            placeholder="YYYY-MM-DD"
            required
            ref={state_date}
          />
        </span>

        <button className="btn">Get NEO</button>
      </StyledForm>

      <>
        {fetched ? (
          <>
            <Title>Showing {dataList.element_count} Asteroid's name</Title>
            {dataList.neoList ? (
              <AsteroidLists>
                {dataList.neoList.map((neoObj) => {
                  return neoObj.map((neo) => {
                    return <Asteroid key={neo.id}>{neo.name}</Asteroid>;
                  });
                })}
              </AsteroidLists>
            ) : null}
          </>
        ) : (
          <Loading />
        )}
      </>
    </section>
  );
};

export default Asteroids;
