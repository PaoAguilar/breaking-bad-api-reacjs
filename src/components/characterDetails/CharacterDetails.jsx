import React, { Component } from "react";
import { CharacterContext } from "../../context/CharacterProvider";
import "./characterDetails.scss";

class CharacterDetails extends Component {
  static contextType = CharacterContext;
  state = {
    isLoading: true,
  };
  
  componentDidMount(){
    for (const elem of document.getElementsByClassName("btn-character")) {
      elem.addEventListener('mouseover', this.changeColor);
    }
  }
  
  componentWillUnmount() {
    for (const elem of document.getElementsByClassName("btn-character")) {
      elem.removeEventListener('mouseover', this.changeColor);
    }
  }

  changeColor = (event) => {
    event.target.style.backgroundColor="orange"
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500)
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
              <>
                <h3>"{character?.name}"</h3>
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
              </>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
