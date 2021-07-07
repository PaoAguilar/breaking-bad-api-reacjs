import React, { Component } from "react";
import "./characterItem.scss";
import "../commons/layout.scss";
import { CharacterContext } from "../../context/CharacterProvider";

class CharacterItem extends Component {
  static contextType = CharacterContext;
  render() {
    const { character } = this.props;
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={character.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{character.name}</h1>
            <button
              onClick={() => {
                this.context.selectedCharacter(character);
                this.context.isLoading(true);
              }}
              className="btn-see-more"
            >
              See details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterItem;
