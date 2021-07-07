import React, { Component } from "react";
import { CharacterContext } from "../../context/CharacterProvider";
import "./characterDetails.scss";

class CharacterDetails extends Component {
  static contextType = CharacterContext;
  state = {
    isLoading: true,
  };

  render() {
    const { isLoading, character } = this.context.state;
    return (
      <div className="details-container">
        {isLoading && character ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <h2 className="title">DETAILS</h2>
            {character ? (
              <ul className="char-info">
                <li>
                  <strong>Actor Name: {character?.name}</strong>
                </li>
                <li>
                  <strong>Nickname: {character?.nickname}</strong>
                </li>
                <li>
                  <strong>Birthday: {character?.birthday}</strong>
                </li>
                <li>
                  <strong>Status: {character?.status}</strong>
                </li>
              </ul>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
