require('node-jsx').install({ extension: '.jsx' });
var fs = require('fs');
var React = require('react');
var App = require('./app/App.jsx');


var text = "This is a blog post";
var text2 = "This is a differnet blog post";

fs.writeFileSync("test.html", React.renderToString(App({ post: text })));
fs.writeFileSync("test2.html", React.renderToString(App({ post: text2 })));
fs.writeFileSync("test.html.raw", text);
fs.writeFileSync("test2.html.raw", text2);

