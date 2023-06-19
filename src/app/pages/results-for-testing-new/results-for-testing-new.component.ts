import { Component, OnInit } from '@angular/core';

import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-results-for-testing-new',
  templateUrl: './results-for-testing-new.component.html',
  styleUrls: ['./results-for-testing-new.component.scss']
})

export class ResultsForTestingNewComponent implements OnInit{

  products: Products[] = [];

  searchCombo = {term: "", filter: ""}

  constructor(public connServ: ConnectionService){}

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
    console.log(this.searchCombo);
    if(this.searchCombo.filter==="0"){
      this.connServ.getProducts().subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if(this.searchCombo.filter==="1"){
      this.connServ.searchWithStartsFilter(this.searchCombo.term).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if(this.searchCombo.filter==="2"){
      this.connServ.searchWithEndsFilter(this.searchCombo.term).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if(this.searchCombo.filter==="3"){
      this.connServ.searchWithEqualFilter(this.searchCombo.term).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if(this.searchCombo.filter==="4"){
      this.connServ.searchWithIncludeFilter(this.searchCombo.term).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
  }
}

