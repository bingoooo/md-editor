'use strict';

console.log('sourced : mymirror.js');

var user;
var users;

var mdEditor = {
	input: '',
	output: '',
	init: function(){
		this.input = document.getElementById('code');
		this.output = document.getElementById('mirror');
		this.mirroring();
	},
	mirroring: function(){
		self = this;
		var code = CodeMirror(this.input, {
			value: '# Test',
			mode: 'markdown',
		});
		code.on('change', function(cm){
			var saveButton = document.getElementById('save-button');
			saveButton.classList.add('red');
			saveButton.addEventListener('click', function(event){
				event.preventDefault();
			});
			var lines = cm.doc.children[0].lines;
			var out = '';
			if(lines.length){
				for (var i = 0; i < lines.length; i++) {
					out += lines[i].text + '\n';
				}
			}
			var processed = marked(out, {sanitized: true});
			self.output.innerHTML = processed;
		});
	},
	save: function(event){
		event.preventdefault();
	}
}

window.onload = function(){
	mdEditor.init();
}