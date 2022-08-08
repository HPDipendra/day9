import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddDataService } from './add.data.service';
import { addData } from './add.model';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent implements OnInit {
  
  

  data:any;
  booksDetails:FormGroup | any;

 
  


  constructor(private service:AddDataService , private _formBuilder: FormBuilder,) { }
 
  
 

  ngOnInit(): void {
      this.booksDetails =  this._formBuilder.group({
      name: new FormControl(''),
      author:new FormControl(''),
      genre: new FormControl(''),
      description : new FormControl('')
  
    })


  }

  add(){
    this.data= this.booksDetails.value;

    console.log(this.data);
    

  this.service.saveData(this.data).subscribe(data=>  {
    console.log(data);
     
    this.booksDetails.resetForm();
  },error=>console.log(error) )
    
  }

}