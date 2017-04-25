import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './app.hero';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';


@Component({
    selector : 'hero-details',
    templateUrl : './app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    hero:Hero[];  
    ngOnInit(): void {
        this.route
            .params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero=>this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
    @Input() hero: Hero[];
}
