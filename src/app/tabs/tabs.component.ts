import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {
  tab1Root: any = HomeComponent;

  constructor() { }
}
