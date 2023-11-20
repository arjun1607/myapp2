import { NgModule } from '@angular/core';                     // to use ngModel directive
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                 // to use ngModel directive
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NumlistService } from './numlist.service';

@NgModule({
  declarations: [                  // pipe gets declared here automatically as we made it from terminal 
    AppComponent,
    ChildComponent,
    MypipePipe,
    StudentComponent,
    StudentdetailsComponent,
    PageNotFoundComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[],
 // providers: [NumlistService],        // singleton object is made for this service
  bootstrap: [AppComponent]
})
export class AppModule { }
