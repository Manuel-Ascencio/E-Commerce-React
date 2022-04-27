import React, { useState } from "react";
import styled from "styled-components";
import { BiCategory } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

function Navbar() {
  const [MovileMenu, setMovileMenu] = useState(false);

  return (
    <Header>
      <Container MovileMenu={MovileMenu}>
        <div>
          <BiCategory />
          <h4>
            Categories <FaChevronDown />
          </h4>
        </div>
        <div>
          <StyledList MovileMenu={MovileMenu}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/pages">pages</Link>
            </li>
            <li>
              <Link to="/user">user account</Link>
            </li>
            <li>
              <Link to="/vendor">vendor account</Link>
            </li>
            <li>
              <Link to="/track">track my order</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </StyledList>

          <button onClick={() => setMovileMenu(!MovileMenu)}>
            {MovileMenu ? <GrClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </Container>
    </Header>
  );
}

const Header = styled.header`
  // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 25px 20px -20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  height: 8vh;
  margin: auto;

  div:nth-child(1) {
    color: #060606;
    svg {
      font-size: 2rem;
      margin-right: 10px;
    }
    h4 {
      svg {
        font-size: 1rem;
      }
    }
    display: flex;
    align-items: center;
  }
  div:nth-child(2) {
    button {
      display: none;
    }
  }

  @media only screen and (max-width: 770px) {
    div:nth-child(2) {
      button {
        display: block;
        border: none;
        background: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
      ul {
        position: fixed;
        top: 0;
        bottom: 0;
        left: ${(props) => (props.MovileMenu ? "0" : "-100%")};
        display: flex;
        background-color: #f6f6f6;
        color: white;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        transition: 0.8s ease-in;
        z-index: 800;
        li {
          margin-bottom: 50px;
          text-transform: uppercase;
        }
      }
    }
  }
`;
const StyledList = styled.ul`
  display: flex;
  li {
    margin-left: 30px;
    a {
      color: #060606;
      transition: 0.5s;
      font-weight: 500;
    }
    a:hover {
      color: #e94560;
      transition: 0.5s;
    }
  }
`;

export default Navbar;
