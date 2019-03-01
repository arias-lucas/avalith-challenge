import React, { useState } from "react";
import styled from "styled-components";
import DevInfo from "./DevInfo";
import SearchTextFilter from "./SearchTextFilter";
import CheckboxButtonFilter from "./CheckboxButtonFilter";

const StyledSideMenu = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  margin-top: 60px;
  padding-bottom: 10px;
  position: fixed;
  ${({ displaySideMenu }) => displaySideMenu && `display: ${displaySideMenu}`};

  @media (min-width: 1000px) {
    width: 300px;
    height: 100%;
    padding-bottom: 0px;
  }
`;

const SeparatorDiv = styled.div`
  text-align: center;
  margin-top: 20px;

  @media (min-width: 1000px) {
    margin-top: 50px;
  }
`;

const checkboxButtonOptions = [
  { key: "fe", name: "Frontend", defaultValue: true },
  { key: "be", name: "Backend", defaultValue: true }
];

function SideMenu(props) {
  const [filterValue, setFilterValue] = useState("");
  const [optionCheckbox, setOptionCheckbox] = useState({
    Frontend: true,
    Backend: true
  });

  const resetFilter = () => {
    setFilterValue("");
    let updatedCards = props.filterCards(
      optionCheckbox,
      filterCheckbox,
      props.originalCards
    );
    props.setFilteredCards(updatedCards);
  };

  const filterSearch = (value, card) => {
    return (
      card.cardTitle.toLowerCase().search(value.toLowerCase()) !== -1 ||
      card.cardDescription.toLowerCase().search(value.toLowerCase()) !== -1
    );
  };

  const filterCheckbox = (object, card) => {
    for (var check in object) {
      if (object.hasOwnProperty(check)) {
        if (object[check] && card.cardTechnology.includes(check)) {
          return true;
        }
      }
    }
    return false;
  };

  const applyFilters = (searchValue, checkboxObject) => {
    let updatedCards = props.filterCards(
      searchValue,
      filterSearch,
      props.originalCards
    );
    updatedCards = props.filterCards(
      checkboxObject,
      filterCheckbox,
      updatedCards
    );
    props.setFilteredCards(updatedCards);
  };

  const handleSearchChange = event => {
    const searchValue = event.target.value;
    setFilterValue(searchValue);
    if (!searchValue) {
      resetFilter();
    } else if (searchValue.length >= 3) {
      applyFilters(searchValue, optionCheckbox);
    }
  };

  const handleOptionChange = function(event) {
    const { name, checked } = event.target;
    const checkboxObject = { ...optionCheckbox, [name]: checked };
    setOptionCheckbox(checkboxObject);
    applyFilters(filterValue, checkboxObject);
  };

  const displaySideMenu = props.isSideMenuOpen ? "block" : "none";

  const renderFilters = () => {
    if (!props.hideFilters) {
      return (
        <div>
          <SeparatorDiv>
            <SearchTextFilter
              handleSearchChange={handleSearchChange}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              resetFilter={resetFilter}
            />
          </SeparatorDiv>
          <SeparatorDiv>
            <CheckboxButtonFilter
              options={checkboxButtonOptions}
              handleOptionChange={handleOptionChange}
              optionCheckbox={optionCheckbox}
              setOptionCheckbox={setOptionCheckbox}
            />
          </SeparatorDiv>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledSideMenu displaySideMenu={displaySideMenu}>
      <DevInfo info={{ name: "LUCAS ARIAS", dni: "35.620.248", age: "28" }} />
      {renderFilters()}
    </StyledSideMenu>
  );
}

export default SideMenu;
