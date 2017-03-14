var React = require('react');

var XorO = React.createClass({
	render: function() {
		xStyle = {
			font: 'sansSerif',
			fontSize: 60,
			color: "black",
			margin: 0,
			position: "relative",
      top:55,
      bottom: 0,
      left: 55,
      right: 0,
      margin: "auto"
	}
	return (
      <p style={xStyle}>{this.props.character}</p>
    )
  }
}) 

module.exports = XorO;
