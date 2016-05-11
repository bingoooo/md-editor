import { Component } from '@angular/core';

declare var marked: any;

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
	<h2>{{author.id}} {{author.name}}</h2>
	<textarea id="textarea" [(ngModel)]="mh.md">{{mh.md}}</textarea>
	<div id="processed" [innerHTML]="markToHtml(mh.md)"></div>
	`
})
export class AppComponent { 
	title = "MD-editor a2ify";
	author: User = {
		id: 1,
		name: "OBeing"
	};
	mh: MarkHtml = {
		md: '# Markdown',
		html: '<h2>HTML</h2>'
	};

	markToHtml(mark) { return marked(mark, {sanitized: true});}
}

export class User {
	id: number;
	name: string;
}

export class MarkHtml {
	md: string;
	html: string;
}