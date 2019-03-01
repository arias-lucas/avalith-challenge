import React, { Component } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: undefined,
      isSideMenuOpen: true
    };
  }

  baseUrl = "http://localhost:5000/";

  componentDidMount() {
    fetch(this.baseUrl + "cards")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ cards: data, originalCards: data, hideFilters: false });
      });
  }

  sideMenuHandler = () => {
    this.setState(prevState => ({ isSideMenuOpen: !prevState.isSideMenuOpen }));
  };

  filterCards = (value, filterCriterion, cards) => {
    return cards.filter(function(card) {
      return filterCriterion(value, card);
    });
  };

  setFilteredCards = updatedCards => {
    this.setState({ cards: updatedCards });
  };

  setHideFilters = (value) => {
    this.setState({ hideFilters: value });
  }

  render() {
    return (
      <div>
        <Header sideMenuHandler={this.sideMenuHandler} />
        <SideMenu
          isSideMenuOpen={this.state.isSideMenuOpen}
          filterCards={this.filterCards}
          originalCards={this.state.originalCards}
          setFilteredCards={this.setFilteredCards}
          hideFilters={this.state.hideFilters}
        />
        <Content
          isSideMenuOpen={this.state.isSideMenuOpen}
          cards={this.state.cards}
          setHideFilters={this.setHideFilters}
        />
      </div>
    );
  }
}

export default App;
