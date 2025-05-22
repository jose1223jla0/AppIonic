import { Component, Input } from '@angular/core';
import { LoginComponent } from "../features/auth/login/login.component";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [ LoginComponent],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
