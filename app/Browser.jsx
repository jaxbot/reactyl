var App = require("./App.jsx");
var React = require("react");
var Store = require("./Store");

window.onload = function() {
  var post = document.getElementById("butts").innerHTML;
  React.render(App({ post: post }), document);
  Store.setCurrentPage(post);
  history.replaceState({ post: post }, null, location.href);
};
