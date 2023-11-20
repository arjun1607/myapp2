import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

// @Injectable({
//   providedIn: 'root'           // came after V5 -> we need not write service name in providers:[]
// })


// @Injectable()     // working even if it is commented and we have written service name in providers:[] which is behavious like normal class. 
// It is not for making a service but needed when we inject some dependency (like custom service) inside another service.

@Injectable()
export class MessageService {
  othersms:string='';

  // on this line it will give error => add @Injectable decorator to MessageService if it is not there
  constructor(private _othermessageService:OthermessageService) {}

  getmessage():string{
    return "Hello Arjun mehnat krte reh";
  }

  getmsgfromotherservice(){
    this.othersms = this._othermessageService.getmessage();
    return this.othersms;
  }
}
