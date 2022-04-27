import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-store.png";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Search() {
  return (
    <Section>
      <Container>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div>
            <FaSearch />
            <input type="text" placeholder="Search and hit enter..." />
          </div>
          <span>All Category</span>
        </div>
        <div>
          <FaUserAlt />
          <>
            <Link to="/cart">
              <FaShoppingCart />
              <span>0</span>
            </Link>
          </>
        </div>
      </Container>
    </Section>
  );
}

const Section = styled.section``;
const Container = styled.div`
  max-width: 90%;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    img {
      width: 150px;
    }
    svg {
      font-size: 1.3rem;
      cursor: pointer;
      margin-left: 20px;
      color: #060606;
    }
  }
  div:nth-child(1) {
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    border: 1px solid #39393a;
    opacity: 0.8;
    div {
      width: 80%;
      text-align: center;
      padding: 10px;
      display: flex;

      svg {
        margin-right: 20px;
      }
      input {
        width: 100%;
        font-size: 1.1rem;
        outline: none;
        border: none;
        background: none;
        border-radius: 5px;
      }
    }
    span {
      width: 20%;
      opacity: 0.8;
      padding: 10px;
      font-size: 1.1rem;
      margin: auto;
      border-left: 1px solid #39393a;
    }
  }
  div:nth-child(3) {
    margin-right: 35px;
    a {
      span {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #e94560;
        color: #f6f6f6;
        border-radius: 50%;
        position: absolute;
      }
    }
  }
`;

export default Search;
