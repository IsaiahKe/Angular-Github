import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/Api/modelsInterface';
import { GithubService } from 'src/app/core/service/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;

  constructor(private profileService:GithubService) {
    this.profileService.getProfile().subscribe(response=>{console.log(response);
      this.profile=response;});
  }

  ngOnInit(): void {}
  }
