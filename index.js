require('node-jsx').install({ extension: '.jsx' });
var fs = require('fs');
var React = require('react');
var App = require('./app/App.jsx');


var text = "This is a blog post";
fs.writeFileSync("test.html", React.renderToString(App({ post: text })));

