var React = require('react');

const WinnerDisplay = React.createClass({
  render: function() {

    const WinnerDisplayStyle = {
      display: "inline",
      marginLeft: 5,
      marginTop: 24,
      marginBottom: 0,
      height: 134
    }

    return (
      <div
        id="WinnerDisplay"
        style={WinnerDisplayStyle}
        >
        <h3 style={this.props.h3Display}>{this.props.winner.winningText}</h3>
        <h1 style={this.props.h1Display}>{this.props.winner.winner}</h1>
      </div>
    )
  }
})

module.exports = WinnerDisplay
