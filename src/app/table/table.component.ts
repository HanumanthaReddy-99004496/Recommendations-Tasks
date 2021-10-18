import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  

  expanded=false;
  selectedrow:number | undefined;
  res:Array<any>=[];
  constructor(private service:EmployeeServiceService){}
  ngOnInit(){
  this.service.fetchData().subscribe(result=>this.res=result);
  } 

row(rowdata:any){
  this.selectedrow=rowdata.id;
  this.expanded=!this.expanded;
}

display:string="none";
saveremarks(obj:any){
 this.display="block";
 setTimeout(()=>this.display="none",5000);

console.log(obj.remarks);
}

}
