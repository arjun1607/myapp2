import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [            // we set path inside this array
  // basically doing configurations
  {
    // when the URL is empty (http://localhost:4200/), the router will redirect to the 'student' route
    path:'', redirectTo:'student', pathMatch:'full'
  },
  {
    // when 'student' route is accessed (http://localhost:4200/student), the 'StudentComponent' is rendered
    path:'student', component:StudentComponent            
  },
  {
    path:'studentdetails', component:StudentdetailsComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];         

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
