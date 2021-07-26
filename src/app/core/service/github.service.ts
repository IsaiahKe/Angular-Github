import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!:User;
  public username:string;
  constructor(private http:HttpClient) {
    this.username='isaiahke'
   }


  getProfile(){
    return this.http.get(environment.path+this.username);
  }
  getRepos(){
    return this.http.get(environment.path +this.username+'/repos');
  }
  
}
