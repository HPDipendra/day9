import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data: Partial<{ name: string | null; password: string | null; address: string | null; phone: string | null; }> | any;

  constructor(private service : SignUpService, private router:Router) { }

   signUpForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    phoneNo: new FormControl(''),



  })


  ngOnInit(): void {

  }

  saveData(){
    this.data = this.signUpForm.value;
    this.service.saveData(this.data).subscribe((result:any)=>{

    this.router.navigate(['signin'])

      console.log(result);
      
    })

  }

  signGoogle(){
    this.service.sign().subscribe(()=>{

    })
  }

}
