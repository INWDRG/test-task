import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup

  breeds: Array<string> = ['Abyssinian', 'American Shorthair', 'American Wirehair', 'Bengal', 'Birman', 'Bombay', 'Chausie', 'Korat', 'Manx', 'Nebelung', 'Ocicat', 'Oriental', 'Persian', 'Radgol', 'Savannah', 'Somali', 'Toyger']
  shows: Array<number> = [1,2,3,4,5,6,7,8,9,10]
  allData: any = []
  displayData: any = []
 
  constructor(private api: ApiService){
 
   this.form = new FormGroup({
    breed: new FormControl(this.breeds[0]),
    show: new FormControl(this.shows[9])
   })
 
   this.makeRequest()
  }
 
  makeRequest(){
   const breed = this.form.controls['breed'].value
   const show = this.form.controls['show'].value
 
   this.api.getData(breed).subscribe(result => {
    this.allData = JSON.parse(JSON.stringify(result))
    this.display()
   })
 
  }
 
  display(){
   const show = this.form.controls['show'].value
   let total = 0
   this.displayData = []
   for(let i=0;i<this.allData.length;i++){
    this.displayData.push(this.allData[i])
    total=total+1
    if(total==show){
     break
    }
   }
  }
 
 
 
}
