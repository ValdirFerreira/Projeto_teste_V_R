import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaEntrevistadorComponent } from './pesquisa-entrevistador.component';


const routes: Routes = [{
  path: '',
  component: PesquisaEntrevistadorComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisaEntrevistadorRoutingModule { }
