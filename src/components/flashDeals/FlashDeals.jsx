import React from "react";
import styled from "styled-components";
import { FaBolt } from "react-icons/fa";
import FlashCard from "./FlashCard";

function flashDeals({ productItems }) {
  return (
    <Section>
      <div>
        <div>
          <FaBolt />
          <h1>Flash Deals</h1>
        </div>
        <FlashCard productItems={productItems} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  max-width: 90%;
  margin: auto;
  margin-top: 30px;
  svg {
    color: #e94560;
  }
  h1 {
    display: inline-block;
  }
`;

export default flashDeals;
