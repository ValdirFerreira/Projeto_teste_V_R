import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogAcessoComponent } from './logAcesso.component';


const routes: Routes = [{
  path: '',
  component: LogAcessoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogAcessoRoutingModule { }
