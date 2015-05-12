var React = require('react');
var Store = require('./Store');
var Link = React.createClass({
  _click: function(e) {
    console.log("clicked " + this.props.href);
    e.preventDefault();
    Store.setCurrentPage("This is a different blog post");
    Store.emitChange();
  },
  render: function() {
    console.log("renderme");
    return (
      <a href={this.props.href} onClick={this._click}>{this.props.children}</a>
    );
  }
});

module.exports = Link;

