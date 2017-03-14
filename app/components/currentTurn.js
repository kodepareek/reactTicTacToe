
let React = require('react');

//Displays the player that is currently playing

let CurrentTurn = React.createClass({
	render: function() {
    const style = {
      display: "inline-block"
    }
		return (
			<div id="currentTurn" style={style}>
				<h3 style={this.props.h3Display}>Currently Playing</h3>
				<h1 style= {this.props.h1Display}>{this.props.playerChoice}</h1>
			</div>
		)
	}
})

module.exports = CurrentTurn
