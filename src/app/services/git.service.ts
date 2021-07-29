import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRepo, IUser } from '../interface/interface';
import { Repo } from '../models/repo';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  user!:User;
  repo!:Repo;
  repoData:any=[];
  userRepoData:any=[];
  newUserData:any=[];
  newSearchUserData:any=[];
  path='https://api.github.com/users/Isaiahke';
  common= 'https://api.github.com/users/'
  
  constructor(private http:HttpClient) {
    this.user= new User('','',0,0,0,'','');
    this.repo=new Repo('','','','','','','','');
   }
  getProfile(){
    let promise= new Promise<void>((resolve,reject)=>{
      this.http.get<IUser>(this.path).toPromise().then(response=>{
        this.user.bio=response.bio;
        this.user.avatar_url=response.avatar_url;
        this.user.created_at=response.created_at;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.name=response.name;
        this.user.public_repos=response.public_repos;
        resolve()
        console.log(response);
      },error=>{
        reject(error)
      })
      this.http.get<any>(this.path+'/repos').toPromise().then(response=>{
        for(let i=0;i<response.length;i++){
          this.newUserData= new Repo(this.repo.name=response[i].name,this.repo.html_url=response[i].html_url,this.repo.url=response[i].url,this.repo.language=response[i].language,this.repo.created_at=response[i].created_at,this.repo.description=response[i].description,this.repo.updated_at=response[i].updated_at,this.repo.clone_url=response[i].clone_url)
          this.repoData.push(this.newUserData)
        }
        console.log(this.repoData)
      },error=>{
        reject(error)
      })
    
    })
    return promise;
    }
    searchUser(username:string){

    let promise= new Promise<void>((resolve,reject)=>{
      this.http.get<IUser>(this.common+username).toPromise().then(response=>{
        this.user.bio=response.bio;
        this.user.avatar_url=response.avatar_url;
        this.user.created_at=response.created_at;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.name=response.name;
        this.user.public_repos=response.public_repos;
        resolve()
        console.log(response);
      },error=>{
        reject(error)
      })
      
      this.http.get<any>(this.common+username+'/repos').toPromise().then(response=>{
        this.newSearchUserData=[];
        for(let i=0;i<response.length;i++){
          this.newSearchUserData= new Repo(this.repo.name=response[i].name,this.repo.html_url=response[i].html_url,this.repo.url=response[i].url,this.repo.language=response[i].language,this.repo.created_at=response[i].created_at,this.repo.description=response[i].description,this.repo.updated_at=response[i].updated_at,this.repo.clone_url=response[i].clone_url)
          this.userRepoData.push(this.newSearchUserData)
        }
        console.log(this.userRepoData)
      },error=>{
        reject(error)
      })
    
    })
    return promise;
    }
    
  }
    