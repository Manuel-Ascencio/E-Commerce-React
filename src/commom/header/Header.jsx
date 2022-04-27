import React from "react";
import styled from "styled-components";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
}

// const HeaderStyled = styled.header``;

export default Header;
