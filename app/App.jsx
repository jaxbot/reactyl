var React = require('react');
var Link = require('./Link.jsx');

var App = React.createClass({
  _click: function(e) {
    console.log("clicked");
    e.preventDefault();
  },
  render: function() {
    return (
      <html>
        <head>
          <script src="public/app.js"></script>
        </head>
        <body>
          <div>butts</div>
          <Link href="test2.html">Test2</Link>
        </body>
      </html>
    );
  }
});

module.exports = function() {
  return React.createElement(App, this.arguments);
}

