
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { HomepageService } from './service/homepage.service';
// import {SignInComponent} from '../sign-in/sign-in.component'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
 
})
export class HomepageComponent implements OnInit {

  constructor( private service : HomepageService , private router :Router) { }
  data:any;

  ngOnInit(): void {

    
    this.service.getAll().subscribe((value: any) => {

     

      console.log('hellos');
      console.log('fdv');
      

      this.data = value
      

      console.log(this.data);
      
      
    
    })
    
  }

  logout(){
    console.log('hello');
    localStorage.removeItem('token');
    this.router.navigate(['signin'])
   
    
  }

}
