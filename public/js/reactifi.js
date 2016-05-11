'use strict';

console.log('linked : script.js');



var MDEditor = React.createClass({
	displayName: 'MDEditor',
	getInitialState: function(){
		return {"data":{markdown: '', html: {__html: ''}}};
	},
	getLocalStorage: function(){
		if(window.localStorage){
			var md = window.localStorage.getItem('md')?window.localStorage.getItem('md'):'';
			var mdField = document.getElementById('mdfield');
			mdField.innerHTML = md;
		}
	},
	componentDidMount: function(){
		this.getLocalStorage();
		this.transformMD();
	},
	setCodeMirror: function(){
		var textarea = document.getElementById('mdField');
		
		var code = CodeMirror(textarea, {
			value: '# Markdown',
			mode: 'markdown',
		});
		code.on('change', function(){
			console.log('change');
			var target = document.getElementById('html-output');
			target.innerHTML = marked(code.options.value, {sanitized: true});
		});
	},
	transformMD: function(){
		var md = document.getElementById('mdfield');
		var processed = marked(md.value, {sanitize: true});
		this.setState({"data":{html:{__html: processed}}})
	},
	save: function(){
		var save = document.getElementById('mdfield');
		console.log('save ', save.value, '?');
		window.localStorage.setItem('md', save.value);
	},
	render: function(){
		var self = this;
		return(
			React.createElement('div', {className: 'md-editor'},
				React.createElement('textarea', {id: 'mdfield', className: 'mdfield', placeholder: '# MD Style', cols: 30, rows: 10, onChange: self.transformMD}),
				React.createElement('div', {className: 'html-output', dangerouslySetInnerHTML: this.state.data.html}),
				React.createElement('button', {className: 'save', onClick: self.save}, 'SAVE')
			)
		);
	}
});

window.onload = function(){
	console.log('window loaded');
	ReactDOM.render(
		React.createElement(MDEditor),
		document.getElementById('md-field')
	);
;};