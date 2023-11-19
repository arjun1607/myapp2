import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],

  // inputs:['Pdata']          //step A

  outputs:['childevent']            // step 3
})
export class ChildComponent {
  // Pdata : any      // step B

  // creating custom event
  childevent = new EventEmitter();       // step 1

  onChange(val:any){
    // console.log(val)
    this.childevent.emit(val)      // step 2
  }
}
