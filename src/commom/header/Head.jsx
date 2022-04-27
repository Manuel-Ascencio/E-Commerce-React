import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Head() {
  return (
    <Section>
      <Container>
        <div>
          <FaPhoneAlt />
          <label>+77013 3476 8965</label>
          <FaEnvelope />
          <label>example@gmail.com</label>
        </div>
        <div>
          <p>Theme FAQ's</p>
          <p>Need Helps</p>
          <span></span>
        </div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background-color: #0f3460;
  padding: 15px 0;
  color: #f6f6f6;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  div {
    display: flex;
    align-items: center;
    svg {
      font-size: 1.3rem;
      margin-right: 10px;
    }
    label {
      margin-right: 20px;
      font-size: 1.1rem;
    }
    p {
      font-size: 1.2rem;
      margin-left: 20px;
    }
  }
`;

export default Head;
