import React from "react";
import styled from "styled-components";

const Name = styled.div`
  font-size: 24px;
  font-family: "Roboto";
  line-height: 1;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const Info = styled.div`
  font-size: 18px;
  padding-top: 15px;
  line-height: 1.33;
  font-family: Roboto;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const Container = styled.div`
  background-color: #3d3d3d;
  color: white;
  height: 135px;
  width: 100%;
  text-align: center;
  display: table;
`;

const Wrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

function DevInfo(props) {
  var devInfo = props.info;
  return (
    <Container>
      <Wrapper>
        <Name>{devInfo.name}</Name>
        <Info>DNI {devInfo.dni}</Info>
        <Info>{devInfo.age} YEARS OLD</Info>
      </Wrapper>
    </Container>
  );
}

export default DevInfo;
