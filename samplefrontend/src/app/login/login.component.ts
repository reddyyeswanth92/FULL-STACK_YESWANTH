import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup=new FormGroup({})
data:any;
  constructor( private fb:FormBuilder,private router:Router,private service:LoginService){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.service.loginnow(this.loginForm.value).subscribe((res)=>{
      this.data=res;
      console.log(this.data);
      if(this.data.status=="login successfull"){
        sessionStorage.setItem('loggedin',JSON.stringify(this.data));
        Swal.fire({
  title: "login in !",
  icon: "success",
  draggable: true
});
alert(this.data.status)
this.router.navigateByUrl("/home")  
      }
      else{
         Swal.fire({
  title: "login failed !",
  icon: "success",
  draggable: true});
  alert(this.data.status)
        this.router.navigateByUrl("/login")
      }
      
    });
    
  }
}
