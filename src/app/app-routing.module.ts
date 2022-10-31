import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"login/:data",component:LoginComponent},
  {path:"head",component:HeadComponent},
  {path:"head/:data",component:HeadComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
