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
import { Entrevistador } from 'src/app/models/pesquisa-entrevistador/entrevistador';



@Component({
  selector: 'app-aprovacao-entrevistador',
  templateUrl: './aprovacao-entrevistador.component.html',
  styleUrls: ['./aprovacao-entrevistador.component.scss']
})
export class AprovacaoEntrevistadorComponent implements OnInit {


  constructor(public router: Router,
    public menuService: MenuService,
    public filtroService: FiltroGlobalService, private downloadArquivoService: DownloadArquivoService,
    private translate: TranslateService, private conversorPowerpointService: ConversorPowerpointService,
    private logService: LogService,
  ) { }


  paginaAtiva :boolean = true;
  listEntrevistador: Array<Entrevistador>;
  CPF:string;

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

    this.carregaEntrevistador();
 
  }

  carregaEntrevistador() {
    var list = [];

    var contStatus = 0;

    for (let index = 0; index < 10; index++) {
      var item = new Entrevistador();

      item.DescStatus = "Apto" + index;
      item.Nome = "Ariane da Silva" + index;
      item.Observacao = "Entrevistador apto para início do projeto" + index;
      item.Status = contStatus;

      debugger
      if (contStatus == 0) {
        item.Cor = "#429777";
      }

      if (contStatus == 1) {
        item.Cor = "#F8CA10";
      }

      if (contStatus == 2) {
        item.Cor = "#D14343";
      }

      list.push(item)

      contStatus++;
      if (contStatus == 3)
        contStatus = 0;

    

    }

    this.listEntrevistador = list;
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
