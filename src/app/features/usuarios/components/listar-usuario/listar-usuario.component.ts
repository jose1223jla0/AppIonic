import { Component, inject, OnInit } from '@angular/core';

import { Usuarios } from '../../interfaces/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
  imports: [IonicModule,CommonModule]
})
export class ListarUsuarioComponent implements OnInit {

  usuarioService = inject(UsuariosService);
  ngOnInit() {
    this.getUsuarios();
  }

  usuarios: Usuarios[] = [];
  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuario: Usuarios[]) => {
        this.usuarios = usuario;
        console.log('Usuarios obtenidos:', this.usuarios);
      },
      error: (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }

  updateUsuario(usuario: Usuarios): void {
    this.usuarioService.updateUsuario(usuario).subscribe({
      next: (usuarioActualizado: Usuarios) => {
        console.log('Usuario actualizado:', usuarioActualizado);
        this.getUsuarios(); 
      },
      error: (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    });
  }

}
