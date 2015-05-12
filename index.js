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
            scope.post = scope.insides;//postfile;//varFill(postfile, scope);
		}

		scope.contents = React.renderToString(App(scope));

		fs.writeFileSync('public/' + filename + ".html", scope.contents);
		fs.writeFileSync('public/' + filename + ".html.raw", scope.post);

		var img = "";
	}
});

