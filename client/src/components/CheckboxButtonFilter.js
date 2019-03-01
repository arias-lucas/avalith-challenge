import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Roboto;
  font-size: 18px;
  width: 240px;
  text-align: left;
  display: inline-block;
  line-height: 1.33;
  color: #f8f8f8;
`;

const Option = styled.div`
  padding-top: 5px;

  @media (min-width: 1000px) {
    padding-top: 20px;
  }
`;

const Title = styled.div`
  margin-bottom: 7px;
`;

function CheckboxButtonFilter(props) {
  const renderOptions = props =>
    props.options.map(function(option) {
      return (
        <Option key={option.key}>
          <label>
            <input
              type="checkbox"
              name={option.name}
              checked={
                props.optionCheckbox[option.name] !== undefined
                  ? props.optionCheckbox[option.name]
                  : option.defaultValue
              }
              onChange={props.handleOptionChange}
            />
            {option.name}
          </label>
        </Option>
      );
    });

  return (
    <Container>
      <Title>Filter by</Title>
      {renderOptions(props)}
    </Container>
  );
}

export default CheckboxButtonFilter;
