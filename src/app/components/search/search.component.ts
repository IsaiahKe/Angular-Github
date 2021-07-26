import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { GithubService } from 'src/app/core/service/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:User[]=[];
  constructor(private service:GithubService) { }
// getUser(){
//   this.service.getProfile().subscribe((data)=>{(console.log(data));})
//   //console.log(this.users);
// }
  ngOnInit(): void {
  }

}
