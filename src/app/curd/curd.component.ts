import { Dialog } from '@angular/cdk/dialog';
import { Component ,OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddListComponent } from '../emp-add-list/emp-add-list.component';
import { EmployeeService } from '../service/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

  displayedColumns: string[] = ['id','FirstName','LastName','Email','Gender','Date_Of_Birth','Education','Company','Experience','Package','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog,private _emp:EmployeeService,private _coreservice:CoreService){

  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
  
  addempform(){
    const dialogRef=this._dialog.open(EmpAddListComponent)
     dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployeeList()
        }
      }
     })
  
  }
  getEmployeeList(){
    this._emp.getEmployee().subscribe({
      next:(res:any)=>{
        console.log(res);
       this.dataSource= new MatTableDataSource(res)
       this.dataSource.sort=this.sort;
       this.dataSource.paginator=this.paginator;
   
      },
      error:(err)=>{
        console.log(err);
        
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this._emp.deleteEmployee(id).subscribe({
 next:(res)=>{
 // alert("employee deleted");
  this._coreservice.openSnackBar('employee deleted','done')
  this.getEmployeeList();
 },
 error:(err)=>{
  console.log(err);
  
 }
    })
  }

  editForm(data:any){
   const dialogRef= this._dialog.open(EmpAddListComponent,{
      data,
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployeeList()
        }
      }
     })
  }
}
