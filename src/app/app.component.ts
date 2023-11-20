import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp2';
  firstname='Arjun'; lastname='Pahadia';      // used to show interpolation
  a:number=10; b:number=20;

  cols:number = 3;        // used to show attribute binding
  bdr:number = 5;


  showdata(){
    console.log("event binding example");
  }


  data:string = "Ram Ram ji";       // used to show two way binding


  data1:string = "Arjun";         // used to show two way binding using NGMODEL



  employees:any[]=[                        // used to show builin pipes
    {
      code:'emp001', name:'Arjun', salary:85000, dob:'16/07/2001'
    },
    {
      code:'emp002', name:'Aakash', salary:84000, dob:'16/08/2001'
    },
    {
      code:'emp003', name:'Ishan', salary:83000, dob:'16/09/2001'
    },
    {
      code:'emp004', name:'Vaibhav', salary:95000, dob:'16/02/2001'
    },
  ];
  dob = new Date(1986,8,2);     // on UI month is shown 09, basically it picks from 0 index
  salary:number = 65000;
  Name:string = "Arjun";
  position:string = "software developer";
  work:string = "software development";
  mynumber:number=0.12345678;
  empyes:any[]=[                          // used for json pipe
    {
      'id':1, 'name':'Arjun Pahadia'
    },
    {
      'id':2, 'name':'Ishan Rawat'
    },
    {
      'id':3, 'name':'Aakash Kumar'
    },
    {
      'id':4, 'name':'Vaibhav Kukreti'
    },
  ];
  empos:any[]=[                         // used for custom pipe
    {
      code:'001', name:'Arjun', gender:'male', salary:100000 
    },
    {
      code:'002', name:'Arun', gender:'male', salary:90000
    },
    {
      code:'003', name:'Anjali', gender:'female', salary:80000 
    },
    {
      code:'004', name:'Reeta', gender:'female', salary:70000 
    },
  ];



  Cdata : any;              // used for child to parent communication
  getdata(val:any){
    this.Cdata=val;
  }


  isValid:boolean=true;               // used for *ngIf
  changeValue(val: boolean){
    this.isValid=val;
  }


  name="Mohan"          // used for ngSwitch


  Students:any[]=[               // used for *ngFor
    {
      'name':'Arjun'
    },
    {
      'name':'Ishan'
    },
    {
      'name':'Aakash'
    }
  ]


  Employees:any[];                   // used for TrackBy
  constructor(){
    this.Employees=[
      {
        studentid:1,
        name:'Arjun',
        age:22,
        course:'Btech'
      },
      {
        studentid:2,
        name:'Ajit',
        age:23,
        course:'Bcom'
      },
      {
        studentid:3,
        name:'Akash',
        age:24,
        course:'BCA'
      }
    ];
  }
  getmorestudents():void{    
    this.Employees=[
      {
        studentid:1,
        name:'Arjun',
        age:22,
        course:'Btech'
      },
      {
        studentid:2,
        name:'Ajit',
        age:23,
        course:'Bcom'
      },
      {
        studentid:3,
        name:'Akash',
        age:24,
        course:'BCA'
      },
      {
        studentid:4,
        name:'Akash',
        age:24,
        course:'BCA'
      }
    ];
  }
  trackbystudentid(index:number, student:any){
    return student.studentid;                          // return unique identifier
  }


  Countrydetails:any[]=[                    // used for grouping with ngFor
    {
      'country':'India',
      'people':[
        {
          'name':'abc'
        },
        {
          'name':'def'
        },
        {
          'name':'ghi'
        }
      ]
    },
    {
      'country':'UK',
      'people':[
        {
          'name':'xyz'
        },
        {
          'name':'mno'
        },
        {
          'name':'pqr'
        }
      ]
    }
  ];


  people:any[]=[                         // used for ngStyle
    {
      'name':'Arjun',
      'country':'India'
    },
    {
      'name':'Chandan',
      'country':'India'
    },
    {
      'name':'Anjel',
      'country':'UK'
    },
    {
      'name':'John',
      'country':'USA'
    },
    {
      'name':'Tyson',
      'country':'UK'
    },
    {
      'name':'Rahul',
      'country':'India'
    },
  ];
  getcolor(country:string){
    switch(country){
      case 'India': return 'green';
      case 'UK': return 'red';
      case 'USA': return 'blue';
    }
    return 'black';
  }


  users=['Arjun', 'Chandan', 'Ishan', 'Aakash'];         // used for ngClass
  getCssClass(flag:string){
    let cssClass;
    if(flag=='mode'){
      cssClass={'one':true, 'two':false}
    }
    else{
      cssClass={'one':false, 'two':true}
    }
    return cssClass;
  }
}
