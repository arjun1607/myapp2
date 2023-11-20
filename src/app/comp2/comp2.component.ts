import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  // providers: [NumlistService]
})
export class Comp2Component {
  list2:number[]=[];
  constructor(private _numlistService:NumlistService){}

  ngOnInit():void{
    this.list2 = this._numlistService.getNumber();
  }

  addnumber2(val:string){
    this._numlistService.addNumber(parseInt(val));
  }
}
