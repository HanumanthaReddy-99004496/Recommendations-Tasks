
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './emp';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) {}
    fetchData(){
      return this.http.get("http://localhost:3000/employees");
    }
    updateData(id:any,updatedbody:any){
      console.log(id,updatedbody);
      return this.http.put("http://localhost:3000/employees/"+id,updatedbody);
    }
   }

