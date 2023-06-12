import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  email:string= "";
  password:string= "";

  constructor(private userService: UserservicesService){}


  login(){

this.userService.login(this.email,this.password);
console.log(this.email, this.password)
}

}
