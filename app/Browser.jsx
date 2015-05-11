var App = require("./App.jsx");
var React = require("react");
window.onload = function() {
  React.render(App(), document);
  console.log("sold");
};
