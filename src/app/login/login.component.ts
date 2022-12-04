import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=""
  password=""


  readValue =()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    if (this.email =="admin@gmail.com" && this.password == "admin") {
     alert("login successfull") 
    } else {
     alert("invalid credentials") 
    }
  }

}
