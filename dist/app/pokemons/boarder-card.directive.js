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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BorderCardDirective = /** @class */ (function () {
    function BorderCardDirective(el) {
        this.el = el;
        this.setBorder('#f5f5f5', '');
        this.setHeight(180);
    }
    BorderCardDirective.prototype.onMouseEnter = function () {
        this.setBorder(this.borderColor, this.typeBordure);
    };
    BorderCardDirective.prototype.onmouseleave = function () {
        this.setBorder('#f5f5f5', '');
    };
    BorderCardDirective.prototype.setBorder = function (color, typebordure) {
        var border = 'solid 4px ' + color;
        if (typebordure !== '')
            border = typebordure + ' 4px ' + color;
        this.el.nativeElement.style.border = border;
    };
    BorderCardDirective.prototype.setHeight = function (height) {
        this.el.nativeElement.style.height = height + 'px';
    };
    __decorate([
        core_1.Input('pkmnBorderCard'),
        __metadata("design:type", String)
    ], BorderCardDirective.prototype, "borderColor", void 0);
    __decorate([
        core_1.Input('typeBordure'),
        __metadata("design:type", String)
    ], BorderCardDirective.prototype, "typeBordure", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onmouseleave", null);
    BorderCardDirective = __decorate([
        core_1.Directive({
            selector: '[pkmnBorderCard]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], BorderCardDirective);
    return BorderCardDirective;
}());
exports.BorderCardDirective = BorderCardDirective;
//# sourceMappingURL=boarder-card.directive.js.map