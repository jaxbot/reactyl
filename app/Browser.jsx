var App = require("./App.jsx");
var React = require("react");
var Store = require("./Store");

window.onload = function() {
  var e = document.getElementById("butts");
  React.render(App({ post: document.getElementById("butts").innerHTML }), document);
  console.log("sold");
  setTimeout(function() { console.log(e); }, 1000);
  Store.setCurrentPage(document.getElementById("butts").innerHTML);
};
