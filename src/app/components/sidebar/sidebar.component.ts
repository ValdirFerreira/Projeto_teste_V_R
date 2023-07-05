import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadArquivoService } from 'src/app/services/download-arquivo.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { MenuService } from 'src/app/services/menu.service';
import { saveAs } from "file-saver";
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() home: boolean = false;

  constructor(public router: Router, public menuService: MenuService, private downloadArquivoService: DownloadArquivoService, private authService: AuthService,
    private translate: TranslateService
  ) {
    // this.router.events.subscribe((event) => {
    //   translate.setDefaultLang('por');
    //   this.translate.use('por');
    // });
  }

  filtroMobileAtivo: boolean = false;

  ngOnInit(): void {
  }

  selecionaMenu(menu: number) {
    this.menuService.activeMenu = menu;
    this.menuService.menuSelecao = menu.toString();

    // if (menu == 1) {
    //   this.menuService.nomePage = this.translate.instant('navbar.dashboard-one');
    //   this.router.navigate(['/dashboard-one']);
    // }

    if (menu == 2) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-two');
      this.router.navigate(['/dashboard-awareness']);
    }

    if (menu == 3) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-three');
      this.router.navigate(['/dashboard-funil']);
    }

    if (menu == 4) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-four');
      this.router.navigate(['/dashboard-imagem-pura']);
    }

    if (menu == 5) 
    {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-five');
      this.router.navigate(['/dashboard-posicionamento-marca']);
    }

    if (menu == 6) 
    {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-six');
      this.router.navigate(['/dashboard-brand-creator']);
    }

    if (menu == 7) 
    {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-seven');
      this.router.navigate(['/dashboard-comunicacao']);
    }



  }


  closeMenu() {
    var el = document.getElementById("menu-mobile");
    if(el)
    el.classList.remove("active");
  }

  abrirMenuMobile(e: Event) {
    var el = document.getElementById('menu-mobile')
    if (el) {
      el.classList.add('active')
      el.classList.add('clicouabrirmenu')
    }


    if (this.filtroMobileAtivo) {
      this.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }

  }




  sairPortal() {
    this.authService.limparDadosUsuario();
    this.router.navigate(['/login']);
  }


}
