import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
    private api: ApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef : MatDialogRef<DialogComponent>) { }
  newsform !: FormGroup
  actionBtn : string ="Save"
  ngOnInit(): void {
    this.newsform = this.formBuilder.group(
      {
        text : ['', Validators.required],
        senData: ['', Validators.required]
      }
    )
    console.log(this.editData)
    if(this.editData){
      this.actionBtn = "Update"
      this.newsform.controls['text'].setValue(this.editData.text)
      this.newsform.controls['senData'].setValue(this.editData.senData)
    }
  }
  addNews(){
    // console.log(this.newsform.value)
  if(!this.editData){
    if(this.newsform.valid){
      this.api.postNews(this.newsform.value)
      .subscribe({
        next:(res) =>{
          alert("News added successfully")
          this.newsform.reset()
          this.dialogRef.close('save')

        },
        error:()=>{
          alert("Error")
        }
      })
    }
  }else{
    this.updateNews()
  }
  }
  updateNews(){
    this.api.putNews(this.newsform.value, this.editData._id)
    .subscribe({
      next:(res) =>{
        alert("News updated successfully")
        this.newsform.reset()
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error")
      }
    })

  }

}
