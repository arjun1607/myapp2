import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  // providers: [NumlistService]
})
export class Comp1Component {
  list1:number[]=[];
  constructor(private _numlistService:NumlistService){}

  ngOnInit():void{
    // In JavaScript/TypeScript, when you assign an object (like an array) to a variable, you're actually assigning a reference to that object in memory rather than making a copy of the entire object. 
    this.list1 = this._numlistService.getNumber();
  }

  addnumber1(val:string){
    this._numlistService.addNumber(parseInt(val));
  }
}
