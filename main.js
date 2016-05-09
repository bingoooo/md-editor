'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

console.log('linked : script.js');


window.onload = function(){
	var mdField = document.getElementById('md');
	var Markdown = CodeMirror.fromTextArea(mdField, {
		value: "#Markdown",
		mode: "markdown"
	});
	var htmlField = document.getElementById('html-processed');
	htmlField.innerHTML = 'Transformed to HTML "here"';

};