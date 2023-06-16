import { Component } from '@angular/core';

import { ConnectionService } from './services/connection.service';
import { Products } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fake-db';

  products : Products[] = []

  searchCombo = {term: "", filter: ""}

  constructor(public connServ: ConnectionService){}

  // onSearch(searchTerm: string, searchFilter: string){
  //   console.log("A: ", searchFilter, "B: ", searchTerm)
  //   if(searchFilter==="0"){
  //     this.connServ.getProducts().subscribe({
  //       next: element => this.products = element as any as Products[],
  //       error: err => console.log(err)
  //     });
  //   }
  //   if(searchFilter==="1"){
  //     this.connServ.searchWithStartsFilter(searchTerm).subscribe({
  //       next: element => this.products = element as any as Products[],
  //       error: err => console.log(err)
  //     });
  //   }
  //   if(searchFilter==="2"){
  //     this.connServ.searchWithEndsFilter(searchTerm).subscribe({
  //       next: element => this.products = element as any as Products[],
  //       error: err => console.log(err)
  //     });
  //   }
  //   if(searchFilter==="3"){
  //     this.connServ.searchWithEqualFilter(searchTerm).subscribe({
  //       next: element => this.products = element as any as Products[],
  //       error: err => console.log(err)
  //     });
  //   }
  //   if(searchFilter==="4"){
  //     this.connServ.searchProducts(searchTerm).subscribe({
  //       next: element => this.products = element as any as Products[],
  //       error: err => console.log(err)
  //     });
  //   }
  // }

  onSearchTerm(searchTerm: string){
    this.searchCombo.term = searchTerm
  }

  onSearchFilter(searchFilter: string){
    this.searchCombo.filter = searchFilter
  }

  onSearch(){
    if(this.searchCombo.filter==="0"){
      this.connServ.getProducts().subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
  }
}
