import { Component,Input } from '@angular/core';

export class Hero {
    id : number;
    name : string;
}

@Component({
    selector : 'hero-details',
    template : `
    <label>Hi {{hero}}</label>
    `
})

export class HeroDetailComponent {
    @Input()
    hero : Hero;
}
