import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string;
  constructor(private http:HttpClient) {
    this.username= "IsaiahKe";
   }
 /* getData():Observable<IUser>{
    return this.http.get<IUser>(environment.path);
  }
  getUser(username:string):Observable<any>{
    return this.http.get('');
  }*/
  getProfile(){
    return this.http.get(environment.path+this.username);
  }
  getRepos(){
    return this.http.get(environment.path +this.username+'/repos');
  }
}
