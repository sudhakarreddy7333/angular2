import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './hero.service';

@Component({
    selector : 'dashboard',
    templateUrl : './app/app-dashboard.component.html',
    styleUrls : ['./app/app.dashboard.component.css']
    })

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService:HeroService){}
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
    }
}