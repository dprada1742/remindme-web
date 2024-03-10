import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { comunidades } from '../../assets/Comunidades.json';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
    selector: 'app-comunidades',
    standalone: true,
    templateUrl: './comunidades.component.html',
    styleUrls: ['./comunidades.component.css'],
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, ToolbarComponent]
})
export class ComunidadesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'suscriptores', 'acciones'];

  comunidadesData = new MatTableDataSource(comunidades);

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  suscribir(route: string): void {
  }

  crearEvento(nombre: string): void {
    this.router.navigate(['/crearevento', nombre]);
  }

  navigateToDetails(nombre: string): void {
    this.router.navigate(['/detallecomunidad', nombre]);
  }
}
