import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginnow(userobj:any){
   return  this.http.post('http://localhost:4444/users/login',userobj)
  }
  signupnow(userobj:any){
    return this.http.post('http://localhost:4444/users/adduser',userobj)
  }
}
