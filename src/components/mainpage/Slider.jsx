import React from "react";
import styled from "styled-components";
import SlideCard from "./SlideCard";

function Slider() {
  return (
    <Content>
      <div>
        <SlideCard />
      </div>
    </Content>
  );
}

const Content = styled.section`
  div {
  }
`;

export default Slider;
