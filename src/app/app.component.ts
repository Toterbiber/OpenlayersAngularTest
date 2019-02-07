import { Component } from '@angular/core';

import Map from 'ol/map';
import View from 'ol/src/View';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OlTestC';

  constructor() {
    const map = new Map({});
    const view = new View();
    console.log(map);
    console.log(view);
  }
}
