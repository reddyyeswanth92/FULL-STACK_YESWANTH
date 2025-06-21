import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ParseSourceFile } from '@angular/compiler';


@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm:FormGroup=new FormGroup({})
  data:any;
  constructor(private fb:FormBuilder,private router:Router,private service:LoginService){
    this.signupForm=this.fb.group({
      username:['',Validators.required],
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    })
}

signup(){
  this.service.signupnow(this.signupForm.value).subscribe((res)=>{
    this.data=res;
    console.log(this.data);
    alert(this.data.status);
    
  })
}

}
