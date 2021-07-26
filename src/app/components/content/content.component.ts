import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { GithubService } from 'src/app/core/service/github.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
repos:any;
  constructor(private repoService:GithubService) {
    this.repoService.getRepos().subscribe(response=>{console.log(response);
      this.repos=response;});
   }

  ngOnInit(): void {
  }

}
