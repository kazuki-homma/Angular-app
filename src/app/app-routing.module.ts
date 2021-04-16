import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path:'', redirectTo: 'products', pathMatch: 'full'},
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
