import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) { }
    openSnackBar(message:string,action:string ='ok') {
      this._snackBar.open(message, action,{
        duration:1000,
        verticalPosition:'top'
      });
    
   }
}

// ng container==>allows us to create a division or section in a template without introducing a new HTML element
