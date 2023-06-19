import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-results-for-test',
  templateUrl: './results-for-test.component.html',
  styleUrls: ['./results-for-test.component.scss']
})
export class ResultsForTestComponent implements OnInit{

  products: Products[] = [];

  searchCombo = {term: "", filter: ""}

  constructor(public appComp: AppComponent, public connServ: ConnectionService){
  }

  ngOnInit(): void {

  this.connServ.getProducts().subscribe({
      next: data => this.products = data as any as Products[],
      error: err => console.log(err)
    })
  }

  onSearchTerm(searchTerm: string){
    this.searchCombo.term = searchTerm;
  }

  onSearchFilter(searchFilter: string){
    this.searchCombo.filter = searchFilter;
  }

    onSearch(searchTerm: string, searchFilter: string){
      if(this.searchCombo.filter==="0"){
        console.log("search bar filter gave back ", this.searchCombo.filter)
        this.connServ.getProducts().subscribe({
          next: element => this.products = element as any as Products[],
          error: err => console.log(err)
        });
      }
      if(this.searchCombo.filter==="1"){
        console.log("A: ", this.searchCombo.filter, "B: ", this.searchCombo.term)
        this.connServ.searchWithStartsFilter(this.searchCombo.term).subscribe({
          next: element => this.products = element as any as Products[],
          error: err => console.log(err)
        });
      }
      if(this.searchCombo.filter==="2"){
        console.log("A: ", this.searchCombo.filter, "B: ", this.searchCombo.term)
        this.connServ.searchWithEndsFilter(this.searchCombo.term).subscribe({
          next: element => this.products = element as any as Products[],
          error: err => console.log(err)
        });
      }
      if(this.searchCombo.filter==="3"){
        console.log("A: ", this.searchCombo.filter, "B: ", this.searchCombo.term)
        this.connServ.searchWithEqualFilter(this.searchCombo.term).subscribe({
          next: element => this.products = element as any as Products[],
          error: err => console.log(err)
        });
      }
      if(this.searchCombo.filter==="4"){
        console.log("A: ", this.searchCombo.filter, "B: ", this.searchCombo.term)
        this.connServ.searchWithIncludeFilter(this.searchCombo.term).subscribe({
          next: element => this.products = element as any as Products[],
          error: err => console.log(err)
        });
      }
  }
}
