import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, LayoutComponent],
})
export class AppComponent {
  constructor() { }
}
