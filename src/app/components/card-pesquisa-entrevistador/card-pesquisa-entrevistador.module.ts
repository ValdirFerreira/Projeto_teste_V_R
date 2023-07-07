import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPesquisaEntrevistadorComponent } from './card-pesquisa-entrevistador.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CardPesquisaEntrevistadorComponent,
    
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatCheckboxModule,

  ],
  exports: [
    CardPesquisaEntrevistadorComponent
  ]
})
export class CardPesquisaEntrevistadorModule { }
