import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ACTION_LOGIN } from '../store/actions/appActions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,
              private router:Router,
              private user: UserService) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username,password).subscribe(data => {
     console.log(data);
      if(data.success){
        this.router.navigate(['dashboard'])
        this.Auth.setLoggedIn(true)
        this.user.updateState({action: ACTION_LOGIN, payload:username})
      }else{
        window.alert(data.message);
      }
    })
  }
}
