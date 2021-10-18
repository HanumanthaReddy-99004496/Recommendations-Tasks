import { HttpClient } from '@angular/common/http';

import {Component,OnInit} from '@angular/core';


import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  expanded=false;
  selectedrow:number | undefined;
  res:any;
  constructor(private service:EmployeeServiceService, private http:HttpClient){}
  ngOnInit(){
  this.service.fetchData().subscribe(result=>this.res=result);

  } 

row(rowdata:any){  //selected row
  this.selectedrow=rowdata.id;
  this.expanded=!this.expanded;
}
re:string=" ";
changeVal(emp:any, e:any){
  //get valiue from changed value user
this.re=e.target.value;
  this.update(emp)  // update in server
  this.saveremarks(emp)   // save and refresh
}

update(emp:any){
const newData={id:emp.id,name:emp.name,eid:emp.eid,grade:emp.grade,phone:emp.phone,address:emp.address,remarks:this.re};
this.service.updateData(emp.id,newData).subscribe(data=>console.log("updated Successfully",data));
}

display:string="none";
saveremarks(obj:any){
 this.display="block";
 setTimeout(()=>this.display="none",5000);
}

}
