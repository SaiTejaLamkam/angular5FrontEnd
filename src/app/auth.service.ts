import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface authResponse{
  success: boolean,
  message: any,
  secret: any
}

interface regResponse{
  success: boolean,
  message: string
}
@Injectable()
export class AuthService {
  private loggedInStatus = false;
  constructor(private http:HttpClient) { }

  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  getUserDetails(email, password){
    return this.http.post<authResponse>('/api/auth/login',{
      email,
      password
    })
  }


  registerDetails(email, password){
    return this.http.post<regResponse>('/api/auth/register',{
      email,
      password
    })
  }
}
