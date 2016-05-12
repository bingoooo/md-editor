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
				var files = JSON.parse(data);
				console.log('parsed', files.length,'files : ', files);
				self.setState({data: {files: files}});
				console.log(self.state.data.files);
			});
		})
		.catch(function(err){
			console.log('erreur :', err);
		}).then(function(){
			self.state.data.files.map(function(file){
				console.log(file.id);
			})
		});
	},
	displayFiles: function(datas){
		console.log(datas.id);
	},
	render: function(){
		var self = this;
		var files = self.state.data.files;
		return React.createElement('div', {id: 'files'}, 'files');
	}
});