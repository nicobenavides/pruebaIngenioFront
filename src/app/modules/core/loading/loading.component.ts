import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoadingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(resp:any){
    this.dialogRef.close(resp);
  }
}