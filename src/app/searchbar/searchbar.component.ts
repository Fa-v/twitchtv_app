import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchPipe } from '../search.pipe';
import { ChannelsService } from '../channels.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.update.emit('');
  }

}
