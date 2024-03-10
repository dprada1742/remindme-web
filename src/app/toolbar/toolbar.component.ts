import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  toggleSideMenu(): void {
//    this.drawer.toggle();
  }
}
