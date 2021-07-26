import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/service/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:GithubService) { }

  ngOnInit(): void {
  }

}
