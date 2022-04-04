import { useEffect, useRef, useState } from "react";
import axios from "../../api/axios.js";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const Asteroids = () => {
  const state_date = useRef("");
  const end_date = useRef("");

  const handleAsteroidsQuery = async (event) => {
    event.preventDefault();
    const payload = {
      startDate: state_date.current.value,
      endDate: end_date.current.value,
    };

    try {
      const response = await axios.post("/neo", JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
      if (response?.error_message) {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <StyledForm onSubmit={handleAsteroidsQuery} method="POST">
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
        <span>
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            className="input"
            placeholder="YYYY-MM-DD"
            required
            ref={end_date}
          />
        </span>
        <button className="btn">Get NEO</button>
      </StyledForm>
      <section>Load</section>
    </section>
  );
};

export default Asteroids;
