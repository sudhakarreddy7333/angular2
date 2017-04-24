/*
* This is the root module
* All modules in the application will be defined here
* Root module will be bootstraped 
* It is similar to app.module.js in AngularJs 1.x
*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './app.dashboard.component';
import { HeroService } from './hero.service';

import {AppRoutingModule} from './app-routing.module';

/* NgModules are used to define modules in the application, imports them and glues it to the rootmodule.
* It can import modules so the imported modules are available in AppModule class.
* It can export modules so the exported modules will be used by another module
* It can be used to declare providers, so all the components under this module will have access to the declared providers
*/
@NgModule({
imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
    ],
providers : [
    HeroService //Declaring providers here have an advantage of accessing declared services through out the application 
    ],
bootstrap:    [ AppComponent ]
    })
export class AppModule { }
