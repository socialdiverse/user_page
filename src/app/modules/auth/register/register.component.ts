import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { RegisterUseCase } from 'src/app/usecases/auth/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerUseCase;
  constructor(private apiService: ApiService) {
    this.registerUseCase = new RegisterUseCase(this.apiService);
  }
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  ngOnInit(): void {}
  register = () => {
    this.registerUseCase.execute(this.user).then((res) => {});
  };
}
