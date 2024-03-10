import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RemindMe';
}
