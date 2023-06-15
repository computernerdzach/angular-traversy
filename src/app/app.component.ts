import { Component } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  pokemonName: string = "";
  albert: string = "";

  constructor() {
    
  }

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }

}
