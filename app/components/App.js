var React = require('react');
let Square = require('./square');
let ScoreBoard = require('./scoreBoard');
let WinnerSelector = require('./winnerSelector');

var exampleComponent = React.createClass({
  getInitialState: function () {
    return {
      initialChoice: 'X',
      playerChoice: '',
      continueGame: true,
      winner: {},
      boardState: this.initGrid(),
      playerChoices: {
        'X': [],
        'O': []
      }
    };
  },

  initGrid: function() {
    let initGrid = {}
    for (let i=1; i <10; i++) {
      initGrid[i.toString()] = ''
    }
    return initGrid
  },

  handleClick: function(gameTracker) {
    //the id of the square chosen by player is being passed from square.js. And updated into the
    //state array containing all player choices till now
    let playerChoices = this.state.playerChoices
    playerChoices[gameTracker.playerChoice].push(gameTracker.selectedId)
    let winner = WinnerSelector(playerChoices[gameTracker.playerChoice])
    //Updating boardState from info received from square
    let boardState = this.state.boardState    
    boardState[gameTracker.selectedId] = gameTracker.playerChoice
    if (winner) {
      this.setState({
        playerChoices: playerChoices,
        continueGame: false,
        winner: {
                winner: gameTracker.playerChoice,
                winningText: 'And The Winner Is'
              },
        boardState: boardState
      })
    } else {
      this.setState({
        playerChoices: playerChoices,
        playerChoice: gameTracker.newChoice,
        boardState: boardState
      });
    }
  },

  restartGame: function() {
    this.setState({
      continueGame: true,
      winner: {},
      playerChoice: '',
      playerChoices: {
        'X': [],
        'O': []
        },
      boardState: this.initGrid()
    })
  },

  render: function() {
    const gameContainerStyle = {
      width: 701,
      height: 501,
      position: "absolute",
      top:0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto"
    }

  	const squareContainerStyle = {
      width: 501,
      height: 501,
      position: "relative",
      margin: "auto",
      display: "flex",
      flexWrap: "wrap",
      float: "left"
  	}
    let choice = ''
    if (this.state.playerChoice === '' ) {
      choice = this.state.initialChoice
    } else {
      choice = this.state.playerChoice
    }
    let squares = [];
    for (let i=1; i <10; i++) {
      let littleSquare = <Square 
        key={i.toString()}
        id={i.toString()} //key is a reserved term in React https://facebook.github.io/react/warnings/special-props.html
        boardState={this.state.boardState}
        playerChoice={choice}
        handleClick={this.handleClick}
        continueGame={this.state.continueGame}
      />
      squares.push(littleSquare);
    }
    return (
      <div id="gameContainer" style={gameContainerStyle}>
        <div id="squareContainer" style={squareContainerStyle}>
        {squares}
    	</div>
      <ScoreBoard playerChoice={choice} winner={this.state.winner} restartGame={this.restartGame}/>
    </div>)
  }
})

module.exports = exampleComponent;
