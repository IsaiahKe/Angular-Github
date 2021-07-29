import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/repo';
import { User } from 'src/app/models/user';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user!: User;
repo!:Repo;
repoData:Repo[]=[];
  gitService: GitService;
  username!:string;
  getUser(){
    this.gitService.searchUser(this.username);
  }
  constructor(gitService: GitService) {
     this.gitService=gitService;
     this.user=this.gitService.user;
     
     this.repoData=this.gitService.repoData;
     console.log(this.repoData)
   
   }
 
  
  ngOnInit():void{
    
       this.gitService.getProfile();
    
  }
  ngOnDestroy(): void {
    console.log("Destroying")
   this.gitService.repoData=[];
   this.user=new User('','',0,0,0,'','');
  }

}

