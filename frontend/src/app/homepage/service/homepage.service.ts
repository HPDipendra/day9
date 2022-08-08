import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  data: any;
  private _http: any;
  token: any;

  constructor(private httpClient: HttpClient ) { }



  getAll() {

    // this.data = this.httpClient.get(environment.Main_API)

    // console.log(this.data);
   

      this.token = localStorage.getItem("token")
      const headers = {'token':this.token}
      console.log(`thr totto id ${this.token}`);
      console.log(headers);
      
      
      return this.httpClient.get<any[]>(`${environment.Main_API}/book/getAll`,{headers});
 
  }



  
  
}

function resolve(response: any) {
  throw new Error('Function not implemented.');
}
