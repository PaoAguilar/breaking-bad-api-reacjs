import React, { Component } from 'react';
import { getBreackingBadCharacters } from '../api/breakingBadApi';
import CharacterItem from '../components/CharacterItem';
class CharacterList extends Component {
  state = {
    characters: [],
    isLoading: true,
  };

  componentDidMount() {
    getBreackingBadCharacters()
      .then((res) => {
        console.log(res);
        this.setState({ characters: res.data });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { characters, isLoading } = this.state;
    return (
      <div>
        <h1 className='title'>BREAKING BAD CHARACTERS</h1>
        <div className='cards'>
          {characters.map((character) => {
            return (
              <div key={character.char_id}>
                <CharacterItem character={character} isLoading={isLoading} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CharacterList;
