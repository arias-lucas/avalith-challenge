import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media (min-width: 1000px) {
    max-height: 175vh;
  }
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 24px;
  letter-spacing: 0.2px;
  color: #020202;
  padding-bottom: 30px;
  text-align: center;

  @media (min-width: 1000px) {
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const showCards = props => {
  if (props.cards) {
    return props.cards.map(function(card, index) {
      return (
        <StyledLink
          key={card.cardId}
          to={{ pathname: "/cardpost/" + card.cardId, index: index }}
        >
          <Card card={card} isSideMenuOpen={props.isSideMenuOpen} />
        </StyledLink>
      );
    });
  }
};

const getTitle = () => {
  return <Title>LANGUAGES & TECHNOLOGIES</Title>;
};

function Dashboard(props) {
  return (
    <div>
      {getTitle()}
      <CardsContainer>{showCards(props)}</CardsContainer>
    </div>
  );
}

export default Dashboard;
