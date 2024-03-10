import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, ToolbarComponent]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
