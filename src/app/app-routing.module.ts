import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/home/guards/auth-guard.service';
import { LoginComponent } from './pages/home/login/login.component';
import { RecuperarSenhaComponent } from './pages/home/recuperar-senha/recuperar-senha.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/login'
  },
  {
    path: 'recuperar-senha/:token',
    component: RecuperarSenhaComponent
  },

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'index',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  }
  , {
    path: 'home',
    loadChildren: () => import('./pages/menu-home/menu-home.module').then(m => m.MenuHomeModule),
    canActivate: [AuthGuard],
  }
  , {
    path: 'dashboard-one',
    loadChildren: () => import('./pages/dashboard-one/dashboard-one.module').then(m => m.DashboardOneModule),
    canActivate: [AuthGuard],
  }
  , {
    path: 'pesquisa',
    loadChildren: () => import('./pages/pesquisa-entrevistador/pesquisa-entrevistador.module').then(m => m.PesquisaEntrevistadorModule),
    canActivate: [AuthGuard],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
