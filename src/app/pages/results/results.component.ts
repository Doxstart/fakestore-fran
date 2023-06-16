import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{

  products: Products[] = [];

  constructor(public appComp: AppComponent, public connServ: ConnectionService){
  }

  ngOnInit(): void {
    /*
    Change results based on search
    if (/*filter value goes here ) {
      for each filter value one call to the connection service
    }

    */
  // this.connService.getProducts().subscribe({
  //     next: data => this.products = data as any as Products[],
  //     error: err => console.log(err)
  //   })
  }
}

