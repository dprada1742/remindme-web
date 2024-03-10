import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comunidades } from '../../assets/Comunidades.json';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
    selector: 'app-detalle-comunidad',
    standalone: true,
    templateUrl: './detalle-comunidad.component.html',
    styleUrl: './detalle-comunidad.component.css',
    imports: [MatToolbarModule, MatIconModule, MatTableModule, ToolbarComponent]
})
export class DetalleComunidadComponent implements OnInit{

  comunidadDetalle: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const comunidadNombre = params['nombre'];
      this.comunidadDetalle = comunidades.find(comunidad => comunidad.nombre === comunidadNombre);

      if (!this.comunidadDetalle) {
        // Handle the case where the community is not found
        console.error('Community no se encuetra:', comunidadNombre);
      }

    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  crearEvento(nombre: string): void {  
    this.router.navigate(['/crearevento', nombre]);
  }
}
