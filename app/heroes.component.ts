/*@Component is a metadata that tells angular that the class defined under that is a component
*it can have 
    selector
    templateUrl
    providers - its is an array of dependency injection
it is similar to ng-controller directive in angularJs 1.x
*/

import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes.component.html',
    styleUrls : ['./app/heroes.component.css']
})
//AppComponent is similar to controller function in angular
export class HeroesComponent implements OnInit {
    constructor(
    private heroService: HeroService, 
    private router: Router
    ){}
    title = 'Tour of heroes';
    heroes: Hero[];
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    ngOnInit(): void {
        this.getHeroes();
    };
    selectedHero: Hero;
    onSelectHero(hero: Hero): void {
        this.selectedHero = hero;
    };
    goToDetail(): void {
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
};
