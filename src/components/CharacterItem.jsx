import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './characterItem.scss';
import './commons/layout.scss';

class CharacterItem extends Component {
  render() {
    const { character, isLoading } = this.props;
    return isLoading ? (
      <h1>Is Loading...</h1>
    ) : (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={character.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{character.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {character.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {character.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {character.birthday}
              </li>
              <li>
                <strong>Status:</strong> {character.status}
              </li>
            </ul>
            <Link className='btn-see-more'>See more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterItem;
