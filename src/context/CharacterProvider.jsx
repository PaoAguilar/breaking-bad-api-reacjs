import React, { Component } from "react";
import { getBreakingBadCharacters } from "../api/breakingBadApi";

export const CharacterContext = React.createContext();

class CharacterProvider extends Component {
  state = {
    characters: [],
    isLoading: false,
    character: undefined,
  };

  componentDidMount() {
    getBreakingBadCharacters()
      .then((res) => {
        this.setState({ characters: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }
  }

  selectedCharacter = (selected) => {
    this.setState({ character: selected });
  };

  isLoading = (value) => {
    this.setState({ isLoading: value });
  };

  render() {
    const values = {
      state: this.state,
      selectedCharacter: this.selectedCharacter,
      isLoading: this.isLoading,
    };
    return (
      <CharacterContext.Provider value={values}>
        {this.props.children}
      </CharacterContext.Provider>
    );
  }
}

export default CharacterProvider;
