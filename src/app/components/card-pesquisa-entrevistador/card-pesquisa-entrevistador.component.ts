import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Entrevistador } from 'src/app/models/pesquisa-entrevistador/entrevistador';

import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';
import { Session } from 'src/app/pages/home/guards/session';

import { AuthService } from 'src/app/services/auth.service';
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';
import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'card-pesquisa-entrevistador',
  templateUrl: './card-pesquisa-entrevistador.component.html',
  styleUrls: ['./card-pesquisa-entrevistador.component.scss'],
})
export class CardPesquisaEntrevistadorComponent implements OnInit {
 

  @Input() listEntrevistador: Array<Entrevistador>;

  constructor(public router: Router,
    private authService: AuthService, public filtroService: FiltroGlobalService,
    public menuService: MenuService, private loginService: LoginService, private session: Session,
  ) { }



  ngOnInit(): void {



  }


 

  // carregaEntrevistador() {
  //   var list = [];

  //   var contStatus = 0;

  //   for (let index = 0; index < 10; index++) {
  //     var item = new Entrevistador();

  //     item.DescStatus = "Apto" + index;
  //     item.Nome = "Ariane da Silva" + index;
  //     item.Observacao = "Entrevistador apto para início do projeto" + index;
  //     item.Status = contStatus;

  //     debugger
  //     if (contStatus == 0) {
  //       item.Cor = "#429777";
  //     }

  //     if (contStatus == 1) {
  //       item.Cor = "#F8CA10";
  //     }

  //     if (contStatus == 2) {
  //       item.Cor = "#D14343";
  //     }

  //     list.push(item)

  //     contStatus++;
  //     if (contStatus == 3)
  //       contStatus = 0;

    

  //   }

  //   this.listEntrevistador = list;
  // }
 


}

