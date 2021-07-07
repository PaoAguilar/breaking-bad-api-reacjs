import React, { Component } from "react";
import CharacterItem from "../components/CharacterItem";
import CharacterDetails from "../components/details/CharacterDetails";
import { CharacterContext } from "../context/CharacterProvider";
import "./characterList.scss";
class CharacterList extends Component {
  static contextType = CharacterContext;
  render() {
    return (
      <div>
        <div className="character-container">
          <div className="character-cards">
            <h1 className="title">BREAKING BAD CHARACTERS</h1>
            <div className="cards">
              {this.context.state.characters.map((character) => {
                return (
                  <div key={character.char_id}>
                    <CharacterItem character={character} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="character-details">
            <CharacterDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterList;
