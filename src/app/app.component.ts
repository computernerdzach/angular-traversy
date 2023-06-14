import { Component } from '@angular/core';
import { type } from 'os';

interface Pokemon {
  id: number,
  name: string,
  type: string
  isCool: boolean
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
    isCool: false
  }, {
    id: 2,
    name: 'squirtle',
    type: 'water',
    isCool: true
  }, {
    id: 3,
    name: 'charmander',
    type: 'fire',
    isCool: true
  }];

  constructor() {
    
  }

  handleClick(value: any) {
    console.log(value);
  }

}
