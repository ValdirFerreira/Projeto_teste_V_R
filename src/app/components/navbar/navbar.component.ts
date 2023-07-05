import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';
import { Session } from 'src/app/pages/home/guards/session';

import { AuthService } from 'src/app/services/auth.service';
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';
import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('titulo') tituloPagina: string;
  @Input() pageAtual: string;
  @Input() home: boolean = false;
  filtro: boolean = false;


  alertaAtivo: boolean = false;
  checkedtourChecked = false;
  mensagem: string = "";

  constructor(public router: Router,
    private authService: AuthService, public filtroService: FiltroGlobalService,
    public menuService: MenuService, private loginService: LoginService, private session: Session,
  ) { }

  mesAnoAtualizado: string;

  filtroMobile: boolean = false;

  ngOnInit(): void {

    var arrayMes = new Array(12);
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";
    var data = new Date();
    this.mesAnoAtualizado = arrayMes[data.getMonth()] + " / " + data.getFullYear().toString();

    this.checkDevice();


  }

  ngOnChanges() {
  
    
  }

  checkDevice() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.filtroMobile = true; // está utilizando celular
    }
    else {
      this.filtroMobile = false; // não é celular
    }

  }


 

  closeFilter() {

    this.closeMenu();

    if (this.filtroService.filtroMobileAtivo) {
      this.filtroService.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }
    else {
      this.filtroService.filtroMobileAtivo = true;
      var el = document.getElementById('global-filter')
      if (el != undefined)
        el.classList.remove('filter-close')
    }

  }

 



  goBackHome() {
    this.router.navigate(['/dashboard-one']);
  }

  redirect(codPage: number) {

    switch (codPage) {
      case 1:
        this.router.navigate(['/pesquisa']);    
        break;
    
      default:
        break;
    }
    
  }

  closeMenu() {
    var el = document.getElementById("menu-mobile");
    if (el)
      el.classList.remove("active");
  }

  abrirMenuMobile(e: Event) {
    var el = document.getElementById('menu-mobile')
    if (el) {
      el.classList.add('active')
      el.classList.add('clicouabrirmenu')
    }


    if (this.filtroService.filtroMobileAtivo) {
      this.filtroService.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }

  }


  sairPortal() {
    this.authService.UsuarioAutenticado(false);
    this.router.navigate(['/loginIpsos']);
  }


}

