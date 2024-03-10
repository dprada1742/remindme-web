import { Component } from '@angular/core';
import { comunidades } from '../../assets/Comunidades.json';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatToolbarModule, MatIconModule, MatDatepickerModule, MatMomentDateModule, NgxMaterialTimepickerModule, ToolbarComponent],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})
export class CrearEventoComponent {

  comunidadDetalle: any;
  inputField: string = '';
  horaField: string = '';
  ubicacionField: string = '';
  fechaField: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  createEvent() {

    this.route.params.subscribe(params => {
      const comunidadNombre = params['nombre'];
      this.comunidadDetalle = comunidades.find(comunidad => comunidad.nombre === comunidadNombre);

      const newFecha = this.formatDate(this.fechaField);

      const newEvento = {
        nombre: this.inputField,
        hora: this.horaField,
        fecha: newFecha,
        lugar: this.ubicacionField,
      };

      this.comunidadDetalle.eventos.push(newEvento);

      this.inputField = '';
      this.horaField = '';
      this.ubicacionField = '';
      this.fechaField = '';

      this.router.navigate(['/detallecomunidad', comunidadNombre]);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

}
