import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  registerUser(event){
    event.preventDefault()
    const errors = [];
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const cpassword = target.querySelector('#cpassword').value;
    if(password !== cpassword){
      errors.push("Passwords are not same");
    }
    if(errors.length == 0){
      this.Auth.registerDetails(username,password).subscribe(data => {
        console.log(data);
         if(data.success){
           this.router.navigate(['dashboard'])
           this.Auth.setLoggedIn(true)
         }else{
           window.alert(data.message);
         }
       })
    }
    
  }
}
