'use strict';

console.log('linked : script.js');

var mdEditor = React.createClass({
	getInitialState: function(){
		return {"data":{markdown: 'MD'}};
	},
	componentDidMount: function(){
		var mdField = document.getElementById('md');
		var Markdown = CodeMirror.fromTextArea(mdField, {
			value: "Markdown",
			mode: "markdown"
		});
		var htmlField = document.getElementById('html-processed');
		htmlField.innerHTML = 'Transformed to HTML "here"'

	},
	rawmarkup: function(){
		return {__html: this.state.markdown}
	},
	render: function(){
		var self = this;
		return(
			React.createElement('div', {className: 'md-editor'},
				React.createElement('textarea', {className: 'md-field', placeholder: '# MD Style', cols: 30, rows: 10}),
				React.createElement('div', {className: 'html-output', dangerouslySetInnerHTML: self.rawmarkup()})
			)
		);
	}
});


window.onload = function(){
	ReactDOM.render(
		React.createElement(mdEditor),
		document.getElementById('md-field')
	);
;};