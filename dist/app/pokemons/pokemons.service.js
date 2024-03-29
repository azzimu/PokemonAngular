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
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http) {
        this.http = http;
        this.pokemonsUrl = 'api/pokemons';
    }
    PokemonsService.prototype.log = function (log) {
        console.info(log);
    };
    //operation nonm methode qui a cause l erreur
    //result donnée factulative
    //return permet a l application a continuer meme si erreur lever: chaque observable a un type d observable different <T>
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        return this.http.get(this.pokemonsUrl).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemons"); }), operators_1.catchError(this.handleError("getPokemons", [])));
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemon id"); }), operators_1.catchError(this.handleError("getPokemon id =" + id)));
    };
    //update Pokemon
    PokemonsService.prototype.updatePokemon = function (pokemon) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("updated pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError('updatePokemon')));
    };
    PokemonsService.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + pokemon.id;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("delete pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError('deletePokemon')));
    };
    //Rechercher un pokemon
    PokemonsService.prototype.searchPokemons = function (term) {
        var _this = this;
        //Test si terme vide , tableau vide sous forme d observable
        if (!term.trim()) {
            return rxjs_1.of([]);
        }
        //Url specifique dans la propriété nom contient le terme
        return this.http.get(this.pokemonsUrl + "/?name=" + term)
            .pipe(operators_1.tap(function (_) { return _this.log("found pokemons matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchPokemons', [])));
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
    };
    PokemonsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map