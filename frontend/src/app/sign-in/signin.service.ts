import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SignInService {
  data: any;
  private _http: any;

  constructor(private httpClient: HttpClient ) { }



 


  saveData( data:{userName:string,password:string} ) {
    return this.httpClient.post<any[]>(`${environment.Main_API}/user/signin`,data) ;
  }
  

  
}

