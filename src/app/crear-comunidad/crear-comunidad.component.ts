import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { comunidades } from '../../assets/Comunidades.json';

@Component({
  selector: 'app-crear-comunidad',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './crear-comunidad.component.html',
  styleUrl: './crear-comunidad.component.css'
})
export class CrearComunidadComponent {
  selectedFileName: string = '';
  inputField: string = '';
  descripcionField: string= '';
  ubicacionField: string= '';
  categoriaField: string= '';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  createComunity() {

    const newCommunity = {
      nombre: this.inputField,
      descripcion: this.descripcionField,
      ubicacion: this.ubicacionField,
      categoria: this.categoriaField,
      suscriptores: 100, // Assuming you want to start with 0 subscribers for the new community.
      eventos: [] // Assuming there are no initial events for the new community.
    };

    comunidades.push(newCommunity);

    this.inputField = '';
    this.descripcionField = '';
    this.ubicacionField = '';
    this.categoriaField = '';
    this.selectedFileName = '';

    this.router.navigate(['comunidades']);
  }

  handleFileInput(event: any): void {
    const selectedFile = event.target.files[0];
    this.selectedFileName = selectedFile?.name || '';
  }
}
