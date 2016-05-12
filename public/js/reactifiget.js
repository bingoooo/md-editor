'use strict';

console.log('sourced : reactifiget.js');

var GetFiles = React.createClass({
	displayName: 'GetFiles',
	getInitialState: function(){
		return {data: 'datas'};
	},
	componentDidMount: function(){
		console.log('Mounting GetFiles...');
		this.getFiles();
	},
	getFiles: function(){
		self = this;
		console.log('Getting files');
		fetch('/api/get-files')
		.then(function(response){
			console.log(response);
			response.text().then(function(data){
				var json = JSON.parse(data);
				console.log('parsed', json.length,'files : ', typeof json, json);
				var files = [];
				for (var i = 0; i < json.length; i++){
					files.push(json[i]);
				}
				console.log('Files :', typeof files, files);
				self.setState({data: {files: files}});
				console.log(self.state.data.files);
			});
		})
		.catch(function(err){
			console.log('erreur :', err);
		});
	},
	displayFiles: function(files){
		console.log(typeof files, files);

		return 'Files';
	},
	render: function(){
		var self = this;
		var files = self.state.data.files;
		return React.createElement('div', {id: 'files'}, self.displayFiles(files));
	}
});