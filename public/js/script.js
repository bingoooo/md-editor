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
	ReactDOM.render(
		React.createElement(MDEditor),
		document.getElementById('md-field')
	);
;};