import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view',component:ViewbookComponent},
  {path:'add',component:AddbookComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path: 'detail/:id',component:DetailComponent},
  {path: 'edit/:id',component:AddbookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
