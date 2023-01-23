import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AulayoutComponent } from './aulayout/aulayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
    {path:" ", redirectTo:'login', pathMatch:'full' },
    {path:"login", component:LoginComponent },
    {path:"signup", component: SignupComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
