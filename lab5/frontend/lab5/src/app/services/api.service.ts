import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  postNews(data: any){
    return this.http.post<any>("http://localhost:3000/db", data);
  }
  getNews(){
    return this.http.get<any>("http://localhost:3000/db");
  }
  putNews(data:any, id: string){
    return this.http.put<any>("http://localhost:3000/db/"+id, data);
  }
  deleteNews(id:string){
    return this.http.delete<any>("http://localhost:3000/db/"+id);
  }
}
