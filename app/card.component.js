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
var core_1 = require("@angular/core");
var Card = (function () {
    function Card() {
        this.onSubmit = new core_1.EventEmitter();
    }
    Card.prototype.send = function (model) {
        this.onSubmit.emit(model);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Card.prototype, "onSubmit", void 0);
    Card = __decorate([
        core_1.Component({
            selector: "card",
            template: "\n    <input [(ngModel)] = text (ngModelChange) = \"send($event)\">\n    ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=card.component.js.map