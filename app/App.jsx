var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <script src="public/routing.js"></script>
        </head>
        <body>
          <div>butts</div>
          <a href="test2.html">Test2</a>
        </body>
      </html>
    );
  }
});

module.exports = function() {
  return React.createElement(App, this.arguments);
}

