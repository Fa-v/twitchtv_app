import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ChannelsService } from '../channels.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() term;

  userData = [];
  online = [];
  offline = [];
  errors = [];

  users: Array<any> = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "comster404", "habathcx", "RobotCaleb", "noobs2ninjas", "storbeck", "terakilobyte", "brunofin", "twitchtv", "medrybw"];

  constructor(private channelsService: ChannelsService, private http: Http) {
  }

  createUserData(user) {
    let usersChannel$ = this.channelsService.getUserChannel(user);
    let usersStreams$ = this.channelsService.getUserStream(user);
    let usersInfo$ = this.channelsService.getUserInfo(user);
    Observable.forkJoin([usersChannel$, usersStreams$, usersInfo$]).subscribe((results) => {
      let userChannelResponse = results[0];
      let userStreamsResponse = results[1];
      let userInfoResponse = results[2];

      userInfoResponse.channel = userChannelResponse;
      userInfoResponse.stream = userStreamsResponse;

      if (!this.hasLogo(userInfoResponse)) {
        this.insertDefaultImage(userInfoResponse)
      }

      this.userData.push(userInfoResponse);
      this.online = this.userData.filter(function (user) {
        return user.stream.stream !== null;
      });
      this.offline = this.userData.filter(function (user) {
        return user.stream.stream === null;
      });
    }, error => this.errors.push(error));
  }

  hasLogo(userInfoResponse) {
    return Boolean(userInfoResponse.logo);
  }

  insertDefaultImage(user) {
    user.logo = "./assets/images/default-avatar.jpg";
  }

  ngOnInit() {
    this.errors;
    this.users.forEach(this.createUserData.bind(this));
  }

}
