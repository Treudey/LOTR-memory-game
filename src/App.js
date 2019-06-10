import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';


class App extends React.Component {

  state = {
    message: 'Click an image to begin',
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Header />
      </div>
    );
  }
}

export default App;
