import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from './signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  data: Partial<{ userName: string | null; password: string | null; }> | any;
  token:any;

  constructor( private service:SignInService , private router:Router) { }

  signInForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),

  })


  ngOnInit(): void {
  }

  signin(){

    this.data = this.signInForm.value;

    this.service.saveData(this.data).subscribe((result:any)=>{
      console.log(result.data);

      if(result.data.token){
        localStorage.setItem('token',result.data.token)
        this.router.navigate([''])
    
      }
      
    } )

  }

}
