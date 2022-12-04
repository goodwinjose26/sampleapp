import { Component } from '@angular/core';
import { Router,Routes } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=""
  password=""

constructor(private route:Router){}
  readValue =()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    if (this.email =="admin@gmail.com" && this.password == "admin") {
    this.route.navigate(["/add"])   
 } else {
     alert("invalid credentials") 
    }
  }

}
