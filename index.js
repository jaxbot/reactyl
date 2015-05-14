require('node-jsx').install({ extension: '.jsx' });
var fs = require('fs');
var React = require('react');
var App = require('./app/App.jsx');

var config = {};

if (process.argv[2] == "devel")
  config.base = config.baseDevel;

var marked = require("marked");
var YAML = require("yamljs");
var fs = require("fs");

var sitemapdata = "";
var rssdata = "";

fs.readdir('input/', function(err, files){
  for (var i=0; i < files.length; i++) {
    var filename = files[i].substring(0, files[i].length - 3);
    var insides = fs.readFileSync('input/' + files[i]).toString();

    var scope = Object.create(config);

    scope.insides = marked(insides.replace(/---([\s\S]+)---/g, ""));

    if (filename !== "index") {
      var frontMatter = YAML.parse(/---([\s\S]+)---/g.exec(insides)[1]);
      scope.title = frontMatter.title;
      scope.description = frontMatter.description || scope.description;
      scope.date = frontMatter.date;
    }
    scope.post = scope.insides;

    scope.contents = React.renderToString(App(scope));

    fs.writeFileSync('public/' + filename + ".html", scope.contents);
    fs.writeFileSync('public/' + filename + ".html.raw", scope.post);

});

