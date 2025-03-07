import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }
  addEmployee(data:any){
   return this._http.post('   http://localhost:3000/emp',data);
  }
  getEmployee(){
    return this._http.get('   http://localhost:3000/emp');
   }
   deleteEmployee(id:number){
     return this._http.delete(`   http://localhost:3000/emp/${id}`)
   }

   updateEmployee(id:number,data:any){
    return this._http.put(`   http://localhost:3000/emp/${id}`,data)
   }
}
