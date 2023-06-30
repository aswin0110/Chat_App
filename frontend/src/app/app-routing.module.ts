import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SidemenuuserComponent } from './chathome/sidemenuuser/sidemenuuser.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'chat', component:SidemenuuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
