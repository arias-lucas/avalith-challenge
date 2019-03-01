import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import CardPost from "./CardPost";

const ContentParent = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  padding: 30px 0px 0px 0px;
  width: 100%;
  margin-top: 60px;

  @media (min-width: 1000px) {
    ${({ marginLeftDashboard }) =>
      marginLeftDashboard && `margin-left: ${marginLeftDashboard}`};
    padding: 30px 30px 0px 30px;
  }
`;

function Content(props) {
  const marginLeftDashboard = props.isSideMenuOpen ? "300px" : "0px";

  return (
    <ContentParent>
      <StyledContent marginLeftDashboard={marginLeftDashboard}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={params => (
                <Dashboard
                  {...params}
                  isSideMenuOpen={props.isSideMenuOpen}
                  cards={props.cards}
                />
              )}
            />
            <Route
              path={"/cardpost/:cardId"}
              render={params => (
                <CardPost
                  {...params}
                  isSideMenuOpen={props.isSideMenuOpen}
                  card={props.cards[params.location.index]}
                  setHideFilters={props.setHideFilters}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </StyledContent>
    </ContentParent>
  );
}

export default Content;
