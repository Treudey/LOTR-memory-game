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
      if (score === 12) {
        return this.setState({
          message:'You guessed correctly!', 
          score: 1,
          topScore: 12,
          guessedChars: [id]
        });
      }
      const newScore = score + 1;
      const newTopScore = score >= topScore ? newScore : topScore;
      if (newScore === 12) {
        return this.setState({
          message:'You win! Good Job!', 
          score: newScore,
          topScore: newTopScore,
          guessedChars: []
        });
      }
      const addedToArray = guessedChars.concat(id);
      this.setState({
        message:'You guessed correctly!', 
        score: newScore,
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
