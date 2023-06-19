import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
            CommonModule,
            MatInputModule,
            MatSelectModule,
            MatIconModule,
            MatButtonModule,
            FormsModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  searchTerm: string = "";
  searchFilter: string = "";

  @Output()
  searchTermEvent : EventEmitter<string> = new EventEmitter<string>();

  @Output()
  searchFilterEvent : EventEmitter<string> = new EventEmitter<string>();

  @Output()
  searchOnClickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public connServ: ConnectionService){}

  onSearchTerm(){
    this.searchTermEvent.emit(this.searchTerm);
  }

  onSearchFilter(){
    this.searchFilterEvent.emit(this.searchFilter);
  }

  onSearchClick(){
    this.searchTermEvent.emit(this.searchTerm);
    this.searchFilterEvent.emit(this.searchFilter);
    this.searchOnClickEvent.emit();
  }

  onSearch() {
    this.onSearchClick()
  }
}
