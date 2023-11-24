import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { AuthRouting } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRouting,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class AuthModule { }
