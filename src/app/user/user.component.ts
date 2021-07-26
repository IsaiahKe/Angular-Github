import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  repos:any;
  constructor(private userService: ServiceService ) {}

  ngOnInit(): void {
  }

}
