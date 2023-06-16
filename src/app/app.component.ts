import { Component } from '@angular/core';
import { type } from 'os';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: true,
    isStylish: true
  }, {
    id: 2,
    name: 'squirtle',
    type: 'water',
    isCool: true,
    isStylish: false
  }, {
    id: 3,
    name: 'charmander',
    type: 'fire',
    isCool: false,
    isStylish: false
  }]



  constructor() {
    
  }

}
