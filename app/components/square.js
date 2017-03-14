var React = require('react');
const XorO = require('./xOrO');
const green = '#39D1B4';
const yellow = '#FFD712';

var Square = React.createClass({

  decideXorO: function() {
    if (this.props.boardState[this.props.id] === '' && this.props.continueGame) {
      let newChoice = this.props.playerChoice === 'X' ? 'O' : 'X'
      this.props.handleClick({
        newChoice: newChoice,
        selectedId: this.props.id,
        playerChoice: this.props.playerChoice
      })
    }
  },

  render: function() {
    const squareSize = 501/3 - 2; //501 is size of outer square
    const squareStyle = {
      width: squareSize,
      height: squareSize,
      border: "1px solid black",
      background: yellow
    }
    return (
      <div style={squareStyle}
           onClick={this.decideXorO}>
        <XorO character={this.props.boardState[this.props.id]} />
      </div>
    )
  }
})

module.exports = Square;
