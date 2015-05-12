var React = require('react');
var Link = require('./Link.jsx');
var Store = require('./Store');

var App = React.createClass({
  getInitialState: function() {
    return {
      post: this.props.post
    };
  },
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  _click: function(e) {
    console.log("clicked");
    e.preventDefault();
  },
  _onChange: function() {
    this.setState({ post: Store.getCurrentPage() });
  },
  render: function() {
    return (
      <html>
        <head>
          <script src="public/app.js"></script>
        </head>
        <body>
          <div id="butts">{this.state.post}</div>
          <Link href="test2.html">Test2</Link>
        </body>
      </html>
    );
  }
});

module.exports = function(props) {
  return React.createElement(App, props);
}

