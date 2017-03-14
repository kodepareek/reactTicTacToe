let React = require('react');
let CurrentTurn = require('./currentTurn');
const WinnerDisplay = require('./displayWinner');
const RestartButton = require('./restartButton');

// this has 3 components 
// 1) displays whose turn it is X or O
// 2) button to restart the game at any point
// 3) Decides and displays the winner

let ScoreBoard = React.createClass({

  render: function() {
    const scoreBoardStyle = {
      height: 501,
      width: 200,
      display: "flex",
      flexWrap: "wrap",
      marginLeft: 5,
      textAlign: "center",
      textJustify: "inter-word"
    }

    const h3Display = {
      color: "green",
      fontSize: 30,
      marginTop: 10,
      marginBottom: 5,
      float: "left"
    }

    const h1Display = {
      color: "black",
      fontSize: 80,
      marginTop: 5,
      marginBottom: 5,
      float: "left",
      marginLeft: 65
    }

    return (
      <div id="ScoreBoard" style={scoreBoardStyle} >
        <CurrentTurn playerChoice={this.props.playerChoice} h3Display={h3Display} h1Display={h1Display}/>
        <RestartButton restartGame={this.props.restartGame}/>
        <WinnerDisplay winner={this.props.winner} h3Display={h3Display} h1Display={h1Display}/>
      </div>
    )
  }
})

module.exports = ScoreBoard
