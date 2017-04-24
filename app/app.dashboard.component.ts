import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './hero.service';

    @Component({
        selector : 'dashboard',
        templateUrl : './app/app-dashboard.component.html',
        styles : [`
            .grid a {
                display : inline-block;
                padding : 5px;
                margin : 10px;
                width : 100px;
                text-align : center;
                background : #BFDCD8;
                text-decoration : none;
                cursor : pointer;
            }
            .grid a:hover {
                background : #3FC7C7;
                cursor : pointer;
            }
        `]
        })
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService:HeroService){}
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
    }
}