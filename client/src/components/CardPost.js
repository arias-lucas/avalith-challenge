import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GoBackButton = styled.button`
  background-color: black;
  width: 109px;
  height: 36px;
  font-family: Roboto;
  font-size: 18px;
  color: white;
`;

const Image = styled.img`
  max-height: 300px;
  width: 100%;
`;

const Description = styled.div`
  font-family: Roboto;
  margin: 15px;
  @media (min-width: 1000px) {
    width: 70%;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.2px;
    margin: 0px;
  }
`;

function CardPost(props) {
  useEffect(() => {
    props.setHideFilters(true);
  });

  return (
    <div>
      <Link to={"/"} onClick={() => {props.setHideFilters(false)}}>
        <GoBackButton>Go Back</GoBackButton>
      </Link>
      <Image src={props.card.cardPost.postImageUrl} alt="card_image" />
      <Description>{props.card.cardPost.postDescription}</Description>
    </div>
  );
}

export default CardPost;
