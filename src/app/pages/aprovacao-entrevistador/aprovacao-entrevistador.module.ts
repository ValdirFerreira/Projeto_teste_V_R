import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { AvisoSemDadosModule } from 'src/app/components/aviso-sem-dados/aviso-sem-dados.module';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as solidgauge from 'highcharts/modules/solid-gauge.src';
import * as wordcloud from 'highcharts/modules/wordcloud.src';
import * as treemap from 'highcharts/modules/treemap.src';
import * as data from 'highcharts/modules/data.src';

import { FooterBottomModule } from 'src/app/components/footer-bottom/footer-bottom.module';
import { AprovacaoEntrevistadorComponent } from './aprovacao-entrevistador.component';
import { AprovacaoEntrevistadorRoutingModule } from './aprovacao-entrevistador-routing.module';
import { CardPesquisaEntrevistadorModule } from 'src/app/components/card-pesquisa-entrevistador/card-pesquisa-entrevistador.module';
import { PesquisaEntrevistadorComponent } from '../pesquisa-entrevistador/pesquisa-entrevistador.component';


@NgModule({
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting, solidgauge, wordcloud, treemap] } // add as factory to your providers
  ],
  declarations: [
    AprovacaoEntrevistadorComponent

  ],
  imports: [
    CommonModule,
    AprovacaoEntrevistadorRoutingModule,
    SidebarModule,
    NavbarModule,
    AvisoSemDadosModule,
    ChartModule,
    FooterBottomModule,
    CardPesquisaEntrevistadorModule,
  ]
})
export class AprovacaoEntrevistadorModule { }
