import React from "react";
import styled from "styled-components";
import avalithLogo from "../assets/icons/avalith.png";

const Container = styled.div`
  background-color: black;
  height: 60px;
  position: fixed;
  width: 100%;
`;

const Logo = styled.img`
  width: 35px;
  height: 39px;
  margin: 10px 0px 0px 30px;
  cursor: pointer;
`;

function Header(props) {
  return (
    <Container>
      <Logo
        onClick={props.sideMenuHandler}
        src={avalithLogo}
        alt="avalith.png"
      />
    </Container>
  );
}

export default Header;
