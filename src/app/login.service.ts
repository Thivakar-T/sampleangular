import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private baseUrl='https://635bbf518aa87edd915021ea.mockapi.io/teacher'
  constructor(
    private http:HttpClient
  ) { }
  login(data:any){
    return this.http.post<any>(this.baseUrl, data);
  }
  getLogin(){
    return this.http.get<any>(this.baseUrl);
  }
  updateLogin(data:any,id:any) {
    return this.http.put<any>(this.baseUrl+ '/' + id, data);
  }
  public getidData(id: any) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
  deleteData(id: any) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
