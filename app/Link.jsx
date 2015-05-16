var React = require('react');
var Store = require('./Store');
if (typeof window != "undefined") {
  window.onpopstate = function(state) {
    Store.setCurrentPage(state.state.post);
    Store.emitChange();
  };
}

var Link = React.createClass({
  _click: function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.props.href + ".raw");
    var href = this.props.href;
    xhr.onload = function() {
      Store.setCurrentPage(xhr.responseText);
      Store.emitChange();
      history.replaceState({ post: xhr.responseText }, null, href);
    };
    xhr.send();
    history.pushState(null, null, this.props.href);
  },
  render: function() {
    return (
      <a href={this.props.href} onClick={this._click}>{this.props.children}</a>
    );
  }
});

module.exports = Link;

