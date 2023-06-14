import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemonName: string = "";

  constructor() {
    
  }

  handleClick(value: any) {
    console.log(value);
  }

}
