import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { comunidades } from '../../assets/Comunidades.json';

@Component({
  selector: 'app-comunidades',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule],
  templateUrl: './comunidades.component.html',
  styleUrls: ['./comunidades.component.css']
})
export class ComunidadesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'suscriptores', 'acciones'];

  comunidadesData = new MatTableDataSource(comunidades);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  suscribir(route: string): void {  
  }

  crearEvento(route: string): void {  
  }

  navigateToDetails(nombre: string): void {
    this.router.navigate(['/detallecomunidad', nombre]);
  }
}
