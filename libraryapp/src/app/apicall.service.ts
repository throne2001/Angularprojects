import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  token:any;
  header:any;
  getbooks()
  {
    this.token=localStorage.getItem('token')??"";//Retrives token from localstorage
    this.header=new HttpHeaders({"Authorization":this.token})//creates authorization header using token

    return this.http.get<any>("http://127.0.0.1:8000/books",{"headers":this.header})//sending api get request with authorization header
  }
  postbooks(data:any)
  {
    this.token=localStorage.getItem('token')??"";//Retrives token from localstorage
    this.header=new HttpHeaders({"Authorization":this.token})//creates authorization header using token
    return this.http.post<any>("http://127.0.0.1:8000/books/",data,{"headers":this.header})
    
  }
  getbooksbyid(id:any)
  {
    console.log(id)
    return this.http.get<any>(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})
  }
  deletebookbyid(id:any)
  {
    return this.http.delete(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})
  }
  editbookbyid(id:any,data:any)
  {
    return this.http.put<any>(`http://127.0.0.1:8000/books/${id}/`,data,{"headers":this.header})
  }

  register(data:any)
  {
    
    return this.http.post<any>("http://127.0.0.1:8000/signin/",data)
      
  }
  login(data:any)
  {
    return this.http.post<any>("http://127.0.0.1:8000/api-token-auth/",data)
  }
  
}
