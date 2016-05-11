"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "MD-editor a2ify";
        this.author = {
            id: 1,
            name: "OBeing"
        };
        this.mh = {
            md: '# Markdown',
            html: '<h2>HTML</h2>'
        };
    }
    AppComponent.prototype.markToHtml = function (mark) { return marked(mark, { sanitized: true }); };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t<h2>{{author.id}} {{author.name}}</h2>\n\t<textarea id=\"textarea\" [(ngModel)]=\"mh.md\">{{mh.md}}</textarea>\n\t<div id=\"processed\" [innerHTML]=\"markToHtml(mh.md)\"></div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var MarkHtml = (function () {
    function MarkHtml() {
    }
    return MarkHtml;
}());
exports.MarkHtml = MarkHtml;
//# sourceMappingURL=app.component.js.map