import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _HEROESSERVICE: HeroesService,
               private _ROUTERE: Router
    ) { }

  ngOnInit() {
    this.heroes = this._HEROESSERVICE.getHeroes();
  }

  verHeroe(idx: number) {
    this._ROUTERE.navigate (['/heroe', idx]);
  }
}

