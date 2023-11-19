import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp2';

  Cdata : any;
  getdata(val:any){
    this.Cdata=val;
  }

  isValid:boolean=true;
  changeValue(val: boolean){
    this.isValid=val;
  }

  name="Mohan"
}
