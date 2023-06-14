import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "basket of baby beavers";
  imgSrc: string = "https://i.imgur.com/uWtpmEQ.jpg";
  hiText: string = "hi cadee"

  constructor() {
    
  }

}
