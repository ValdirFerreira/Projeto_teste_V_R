import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovacaoEntrevistadorComponent } from './aprovacao-entrevistador.component';


const routes: Routes = [{
  path: '',
  component: AprovacaoEntrevistadorComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprovacaoEntrevistadorRoutingModule { }
