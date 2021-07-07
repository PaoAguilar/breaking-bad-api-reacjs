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
            <h3>"{character?.name}"</h3>
            {character ? (
              <ul className="char-info">
                <li>
                  <strong>
                    <span>Actor Name: </span> {character?.portrayed}
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>Nickname: </span>
                    {character?.nickname}
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>Birthday: </span>
                    {character?.birthday}
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>Occupation: </span>
                    {character?.occupation}
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>Status:</span>
                    {character?.status}
                  </strong>
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
