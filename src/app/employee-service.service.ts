
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './emp';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) {}
    fetchData(){
      return this.http.get<Emp[]>("http://localhost:4200/assets/json/api.json");
    }
   }

