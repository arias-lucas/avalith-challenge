import React from "react";
import styled from "styled-components";
import clearIcon from "../assets/icons/clear.svg";

const Input = styled.input`
  background-color: black;
  border: none;
  width: 200px;
  color: white;
  font-family: Roboto;
  font-size: 18px;
  outline: none;
`;

const Container = styled.div`
  border-bottom: 1px solid white;
  width: 240px;
  display: inline-block;
  text-align: left;
`;

const ClearButton = styled.img`
  cursor: pointer;
  width: 18px;
  margin: 0 0 -2px 22px;
`;

function SearchTextFilter(props) {
  const showClearIcon = () => {
    if (props.filterValue) {
      return (
        <ClearButton onClick={props.resetFilter} src={clearIcon} alt="clear" />
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Input
        placeholder="Search in cards"
        value={props.filterValue}
        onChange={props.handleSearchChange}
        type="text"
        name="search"
      />
      {showClearIcon()}
    </Container>
  );
}

export default SearchTextFilter;
