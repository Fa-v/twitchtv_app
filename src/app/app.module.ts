import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChannelsService } from './channels.service';
import { SearchPipe } from './search.pipe';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SearchbarComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: ChannelsService, useClass: ChannelsService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
