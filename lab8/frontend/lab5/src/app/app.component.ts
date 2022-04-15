import { Component, ViewChild ,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isButtonVisible = true;
  title = 'lab5';
  displayedColumns: string[] = ['text', 'senData','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService){

  }
  ngOnInit(): void {
      this.getAllNews();
  }
  openDialog() {
    this.dialog.open(DialogComponent , {
        width: '30%'
    }).afterClosed().subscribe(val =>{
      if(val === 'save'){
        this.getAllNews()
      }
    });
  }
  addNewNews(){
    this.api.addNews().subscribe({
      next: (res)=>{
        console.log(res)
      }
    })
    alert("New data added")
    window.location.reload();
  }
  getAllNews(){
    this.api.getNews()
    .subscribe(
      {
        next:(res)=>{
        // console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        console.log(this.dataSource)
        },
        error:(err)=>{
          alert("error get data")
        }
      }
    )
  }
  editNews(row :any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val ==='update'){
        this.getAllNews()
      }
    })
  }
  deleteNews(id: string){
    this.api.deleteNews(id).subscribe({
      next:(res) =>{
        alert("deleted Successfully")
        this.getAllNews()
      },
      error:(err)=>{
        alert("error deleted")
      }

    })

  }
  clearNews(){
    this.api.clearNews().subscribe({
      next: (res)=>{
        console.log(res)
      }
    })
    alert("Data Cleared")
    window.location.reload();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isShown: boolean = false ; // hidden by default


  toggleShow() {

  this.isShown = ! this.isShown;

  }
}
