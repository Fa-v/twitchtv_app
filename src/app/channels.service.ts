import { Injectable, OpaqueToken } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChannelsService {

 private channels_twitchtvApi = 'https://api.twitch.tv/kraken/channels/';
 private streams_twitchtvApi = 'https://api.twitch.tv/kraken/streams/';
 private users_twitchtvApi = 'https://api.twitch.tv/kraken/users/';
 private callback = '?callback=?&client_id=t00dgq4dkyvhnc1utvclcr0w8xxi0t5';

  constructor(private http: Http) { }

  getUserChannel(channelName): Observable<any>  {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Client-ID': 't00dgq4dkyvhnc1utvclcr0w8xxi0t5'
      })
    });
    
    return this.http.get(this.channels_twitchtvApi + channelName, options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Observable
          .throw(error.json() || 'Error de servidor');
      });
  }

  getUserStream(streamName): Observable<any>  {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Client-ID': 't00dgq4dkyvhnc1utvclcr0w8xxi0t5'
      })
    });
    
    return this.http.get(this.streams_twitchtvApi + streamName, options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Observable
          .throw(error.json() || 'Error de servidor');
      });
  }

  getUserInfo(userName): Observable<any>  {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Client-ID': 't00dgq4dkyvhnc1utvclcr0w8xxi0t5'
      })
    });

    return this.http.get(this.users_twitchtvApi + userName, options)
      .map((response: Response) => {
          return response.json();        
      })
      .catch((error: any) => {
        return Observable
          .throw(error.json() || 'Error de servidor');
      });
  }
  
}
