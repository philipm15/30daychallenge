import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch:'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'app', loadChildren: './modules/layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}