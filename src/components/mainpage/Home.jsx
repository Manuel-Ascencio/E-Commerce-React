import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Slider from "./Slider";

function Home() {
  return (
    <Section>
      <div className="card">
        <Categories />
        <Slider />
      </div>
    </Section>
  );
}

const Section = styled.section`
  max-width: 90%;
  margin: auto;
  .card {
    // display: flex;
    // justify-content: space-between;
  }
`;

export default Home;
