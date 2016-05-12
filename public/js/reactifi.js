'use strict';

console.log('linked : script.js');



var MDEditor = React.createClass({
	displayName: 'MDEditor',
	getInitialState: function(){
		return {"data":{markdown: '', html: {__html: ''}, files: []}};
	},
	getLocalStorage: function(){
		if(window.localStorage){
			var md = window.localStorage.getItem('md')?window.localStorage.getItem('md'):'';
			var mdField = document.getElementById('mdfield');
			mdField.innerHTML = md;
		}
	},
	getFileNames: function(){
		console.log('getting files...');
	},
	componentDidMount: function(){
		// this.getFileNames();
		// this.getLocalStorage();
		// this.transformMD();
	},
	// partie buggée à résoudre
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
		document.getElementById('save-button').classList.add('red');
		var md = document.getElementById('mdfield');
		var processed = marked(md.value, {sanitize: true});
		this.setState({"data":{html:{__html: processed}}})
	},
	save: function(event){
		event.preventDefault();
		var save = document.getElementById('mdfield');
		var filename = document.getElementById('filename').value;
		console.log('save :', filename, save.value, '?');
		document.getElementById('save-button').classList.remove('red');
		// window.localStorage.setItem('md', save.value);
		window.alert(filename + ' have been saved');
	},
	send: function(event){
		event.preventDefault();
		console.log('saving to server...');
		var name = document.getElementById('filename').value;
		console.log('File :', name);
		var md =  document.getElementById('mdfield').value;
		var data = new FormData();
		data.append('title', name);
		data.append('markdown', md);
		console.log('Content :', md);
		fetch('/api/send-file',{
			method: 'POST',
			body: data
		})
		.then(function(response){
			if(response.headers.get('Existing-file')) alert('File already exists and overwrited !!!');
			response.json().then(function(json){console.log('Json', json);});
		})
		.catch(function(err){
			console.log('Error', err);
		})
		.then(function(){console.log('done');});
	},
	render: function(){
		var self = this;
		return(
			React.createElement('div', {className: 'md-editor'},
				React.createElement('form', {id: 'form', name: 'form',className: 'ui form'},
					React.createElement('input', {id: 'filename', name: 'title', className: 'ui input', placeholder: 'File Name', required: true}),
					React.createElement('button', {id: 'save-button', className: 'ui button save', onClick: self.send}, 'SAVE'),
					React.createElement('textarea', {id: 'mdfield', name: 'markdown', className: 'mdfield', placeholder: '# MD Style', cols: 30, rows: 10, required: true, onChange: self.transformMD})
				),
				React.createElement('div', {className: 'html-output', dangerouslySetInnerHTML: this.state.data.html})
			)
		);
	}
});

window.onload = function(){
	console.log('window loaded');
	ReactDOM.render(
		React.createElement(GetFiles),
		document.getElementById('files-field')
	);
	ReactDOM.render(
		React.createElement(MDEditor),
		document.getElementById('md-field')
	);
;};