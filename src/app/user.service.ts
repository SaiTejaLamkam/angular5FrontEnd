import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface dbData{
  message:string,
  success:boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData(){
    return this.http.get<dbData>('http://localhost:1234/database.php')
  }

}
