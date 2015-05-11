var React = require('react');
var Link = React.createClass({
  _click: function(e) {
    console.log("clicked " + this.props.href);
    e.preventDefault();
    this.setState({});
  },
  render: function() {
    console.log("renderme");
    return (
      <a href={this.props.href} onClick={this._click}>{this.props.children}</a>
    );
  }
});

module.exports = Link;

