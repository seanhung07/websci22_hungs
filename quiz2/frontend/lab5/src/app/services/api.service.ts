import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  postNews(data: any){
    return this.http.post<any>("http://localhost:3000/mongo", data);
  }
  getNews(){
    return this.http.get<any>("http://localhost:3000/mongo");
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/mongo");
  }
  putNews(data:any, id: string){
    return this.http.put<any>("http://localhost:3000/mongo/"+id, data);
  }
  deleteNews(id:string){
    return this.http.delete<any>("http://localhost:3000/mongo/"+id);
  }
  clearNews(){
    return this.http.delete<any>("http://localhost:3000/mongo/");
  }
  addNews(){
    return this.http.get<any>("http://localhost:3000/news");
  }
}
