import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import {alarms1 } from '../../assets/alarms1.json';
import {alarms2 } from '../../assets/alarms2.json';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MatNativeDateModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatIconModule, ToolbarComponent,MatListModule, CommonModule]
})
export class HomeComponent implements OnInit {

  alarms1List: any[] = alarms1;
  alarms2List: any[] = alarms2;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
