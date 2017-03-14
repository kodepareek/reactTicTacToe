let React = require('react');

var RefreshButton = React.createClass({
  getInitialState: function() {
    return {backgroundColor: "#4CAF50"}
  },

  handleClick: function() {
    this.setState({
      backgroundColor: "red"
    })
    this.props.restartGame()
  },
  resetButton: function() {
    this.setState({
      backgroundColor: "#4CAF50"
    })
  },

  render: function() {
    refreshButtonStyle = {
      backgroundColor: this.state.backgroundColor, /* Green */
      border: "none",
      color: "white",
      padding: 15,
      marginLeft: 5,
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: 16,
      height: 50,
      width: 200
    }
    return <button style={refreshButtonStyle}
                   onMouseDown={this.handleClick}
                   onMouseUp={this.resetButton}>Restart</button>
  }
})

module.exports = RefreshButton;
