import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  data: any;
  private _http: any;

  constructor(private httpClient: HttpClient ) { }



 


  saveData( data:any ) {
    return this.httpClient.post<any[]>(`${environment.Main_API}/user/signup`,data) ;
  }

  sign(){
   return this.httpClient.get<any[]>(`${environment.Main_API}/auth/google`);
  }
  

  
}

