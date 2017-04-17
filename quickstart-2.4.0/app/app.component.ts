/*@Component is a metadata that tells angular that the class defined under that is a component
*it can have 
    selector
    templateUrl
    providers - its is an array of dependency injection
it is similar to ng-controller directive in angularJs 1.x
*/

import { Component } from '@angular/core';

//a class to declare hero object
export class Hero {
    id : number;
    name : string;
}

const HEROES: Hero[] = [
    { id: 11,name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <ul>
<li class = "hero" (click) = 'onSelectHero(hero)' *ngFor = "let hero of heroes">
    <span>{{ hero.id }}</span>
    <span>{{hero.name}}</span>
    </li>
    </ul>
    <hero-details [hero] = "selectedHero"></hero-details>
    `,
    styles : [
    `
        .hero {
width : 200px;
background : #BFDCD8;
margin-bottom : 5px;
height : 30px;
list-style-type : none;
line-height : 30px;
padding-left  : 1px;
}
.hero:hover {
    background : #3FC7C7;
cursor : pointer;
}
span:nth-child(1) {
    background : #1B7E95;
    padding : 6px;
color : white;
}

`
]
})
//AppComponent is similar to controller function in angular
export class AppComponent  { 
    title = 'Tour of heroes';
    heroes = HEROES;
    selectedHero: Hero;
    onSelectHero(hero : Hero): void {
        this.selectedHero = hero;
    } 
};
