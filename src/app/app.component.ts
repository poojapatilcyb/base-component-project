import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { FormFieldComponent } from './material/form-field/form-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFieldComponent , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'base-component-project';
}
