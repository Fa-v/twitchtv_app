import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { SearchbarComponent } from './searchbar/searchbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChannelsService } from './channels.service';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Input() term;
  
  constructor() { }


}  
