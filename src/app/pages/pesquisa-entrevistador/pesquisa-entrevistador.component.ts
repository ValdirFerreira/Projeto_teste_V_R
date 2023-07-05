import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from "file-saver";
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';
import { MenuService } from 'src/app/services/menu.service';
import { DownloadArquivoService } from 'src/app/services/download-arquivo.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { TranslateService } from '@ngx-translate/core';
import { ConversorPowerpointService } from 'src/app/services/conversor-powerpoint.service';
import { LogService } from 'src/app/services/log.service';



@Component({
  selector: 'app-pesquisa-entrevistador',
  templateUrl: './pesquisa-entrevistador.component.html',
  styleUrls: ['./pesquisa-entrevistador.component.scss']
})
export class PesquisaEntrevistadorComponent implements OnInit {


  constructor(public router: Router,
    public menuService: MenuService,
    public filtroService: FiltroGlobalService, private downloadArquivoService: DownloadArquivoService,
    private translate: TranslateService, private conversorPowerpointService: ConversorPowerpointService,
    private logService: LogService,
  ) { }


  paginaAtiva :boolean = true;

  ngOnInit(): void {

    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

    this.menuService.nomePage = this.translate.instant('navbar.dashboard-one');
    this.checkDevice();

    EventEmitterService.get("emit-dashboard-one").subscribe((x) => { 
        this.checkDevice();      
        this.logService.GravaLogRota(this.router.url).subscribe(
          );
    })

    this.menuService.activeMenu = 1;
    this.menuService.menuSelecao = "1"
 
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
      return true; // está utilizando celular

    }
    else {
      return false; // não é celular
    }

  }

  ajustaScrollFinal() {
    if (document.getElementById('aqui_id_div_grafico') != null && !document.getElementById('aqui_id_div_grafico').scrollLeft) {
      document.getElementById('aqui_id_div_grafico').scrollLeft = 9999;
    }

  }


  exportToPptComparativoExperiencia() {
    this.conversorPowerpointService.captureScreenPPTAlternative(
      'comparativo-experiencia',
      "NPS comparativo por Experiencia",
    );
  }

  exportToPptEvolutivoMarcas() {
    this.conversorPowerpointService.captureScreenPPTAlternative(
      'evolutivo-marcas',
      "Evolutivo de Marcas"
    );
  }

}
