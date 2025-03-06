import { Component,Inject ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
// import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-list',
  templateUrl: './emp-add-list.component.html',
  styleUrls: ['./emp-add-list.component.css']
})
export class EmpAddListComponent implements OnInit{


empForm:FormGroup;

  education:string[]=[
    'B.SC',
    'BE.ECE',
    'BE.EEE',
    'BCA'
  ];

  constructor(private _fb:FormBuilder ,private _empservice:EmployeeService,private _dialogref:MatDialogRef<EmpAddListComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private _coreservice:CoreService){
    this.empForm=this._fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required],
      Date_Of_Birth:['',Validators.required],
      Gender:['',Validators.required],
      Education:['',Validators.required],
      Company:['',Validators.required],
      Experience:['',Validators.required],
      Package:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  submit(){
    console.log(this.empForm);
    
    if(this.empForm.valid){
      if(this.data){
        this._empservice.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val:any)=>{
        // alert("employee data updated");
        
        this._coreservice.openSnackBar('employee detail updated','done')
         this._dialogref.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })
      }
      else{
        this._empservice.addEmployee(this.empForm.value).subscribe({
          next: (val:any)=>{
         //alert("employee added sucessfully");
         this._coreservice.openSnackBar('employee added','done')
         this._dialogref.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          }
         })

      }
     
      
    }
  }
}
