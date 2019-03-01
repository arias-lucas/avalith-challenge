import React from "react";
import styled from "styled-components";

/**
 * Let's do some maths!
 * max-width:
 * 450px = (15*6) (margin cards) + (30*2) (margin container) + 300(menu)
 * 150px = (15*6) (margin cards) + (30*2) (margin container)
 *  */
const Container = styled.div`
  max-width: ${props =>
    props.isSideMenuOpen
      ? "calc((100vw - 450px) / 3)"
      : "calc((100vw - 150px) / 3)"};
  min-width: 300px;
  background-color: white;
  margin: 15px;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  flex: 0 0 auto;
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled.div`
  padding: 30px;
  font-family: Roboto;
  color: black;
  font-size: 15px;

  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;

function Card(props) {
  return (
    <Container isSideMenuOpen={props.isSideMenuOpen}>
      <Image
        src={props.card.cardImageUrl}
        alt={props.card.cardTitle.toLowerCase() + "_image"}
      />
      <Description>{props.card.cardDescription}</Description>
    </Container>
  );
}

export default Card;
