import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @ViewChild('drawer') drawer : MatDrawer | undefined;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.drawer?.toggle();
  }

  navigateToDetails(nombre: string): void {
    this.router.navigate(['/detallecomunidad', nombre]);
    this.drawer?.toggle();
  }
}
