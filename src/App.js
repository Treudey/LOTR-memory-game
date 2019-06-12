import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import CharacterTile from './components/CharacterTile';
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  state = {
    message: 'Click an image to begin!',
    score: 0,
    topScore: 0,
    guessedChars: []
  };

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  handleGuess = (id) => {
    const { guessedChars, score, topScore } = this.state;
    if (!guessedChars.includes(id)) {
      const newTopScore = score >= topScore ? score + 1 : topScore;
      const addedToArray = guessedChars.concat(id);
      this.setState({
        message:'You guessed correctly!', 
        score: score + 1,
        topScore: newTopScore,
        guessedChars: addedToArray
      });
    } else {
      this.setState({
        message: 'Incorrect! Try again!',
        score: 0,
        guessedChars: []
      });
    }
  };

  render() {
    const shuffledCharacters = this.shuffle(characters);

    const characterTilesArr = shuffledCharacters.map(character =>
      <CharacterTile
        id={character.id}
        name={character.name}
        url={character.image}
        handleGuess={this.handleGuess}
      />
    );

    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main>
          {characterTilesArr}
        </Main>
      </div>
    );
  }
}

export default App;
