import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  data: any;
  private _http: any;

  constructor(private httpClient: HttpClient ) { }



  getAll() {

    // this.data = this.httpClient.get(environment.Main_API)

    // console.log(this.data);
    console.log('hello');

   
      return this.httpClient.get<any[]>(`${environment.Main_API}/getAll`);
          
    
     
    

  }


  saveData( data:{name:string,author:string,genre:string,description:string} ) {
    return this.httpClient.post<any[]>(`${environment.Main_API}/books/add/`,data) ;
  }
  



  
  
}

function resolve(response: any) {
  throw new Error('Function not implemented.');
}
