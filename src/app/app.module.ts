import { NgModule } from '@angular/core';                     // to use ngModel directive
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                 // to use ngModel directive
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MypipePipe           // pipe gets declared here automatically as we made it from terminal 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
