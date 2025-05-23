import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { ListarUsuarioComponent } from "../features/usuarios/components/listar-usuario/listar-usuario.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [IonicModule, FooterComponent, HeaderComponent, ListarUsuarioComponent],
})


export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
