import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Repo } from 'src/app/models/repo';
import { User } from 'src/app/models/user';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gitService: GitService;
  user!: User;
 repoData:Repo[]=[];
  constructor(gitService: GitService) {
    this.gitService = gitService;
    this.user = this.gitService.user;



  }
  ngOnInit(): void {
    
   }
getUser(val:any){
  console.log(val.name);
  this.gitService.searchUser(val.name);
  this.repoData=this.gitService.userRepoData
}

  ngOnDestroy(): void {
    this.gitService.userRepoData = [];
    this.user=new User('','',0,0,0,'','');
  }

}