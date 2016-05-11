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
		console.log(this.input, this.output);
		this.mirroring();
	},
	mirroring: function(){
		self = this;
		var code = CodeMirror(this.input, {
			value: '# Test',
			mode: 'markdown',
		});
		code.on('change', function(cm){
			var lines = cm.doc.children[0].lines;
			var out = '';
			if(lines.length){
				for (var i = 0; i < lines.length; i++) {
					console.log('lines :', lines[i].text);
					out += lines[i].text + '\n';
				}
			}
			var processed = marked(out, {sanitized: true});
			console.log(processed);
			self.output.innerHTML = processed;
		});
	}
}

window.onload = function(){
	mdEditor.init();
}