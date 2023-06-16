import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly BASE_URL = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data)
    )
  }

  searchProducts(term: string): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.filter((element: any) => element.title.toLowerCase().includes(term.toLowerCase())))
    )
  }

  searchWithStartsFilter(term: string): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.filter((element: any) => element.title.toLowerCase().startsWith(term.toLowerCase())))// el.title.toLowerCase().startsWith(term)))
      )
  }

  searchWithEqualFilter(term: string): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.filter((element: any) => element.title === term)
      ))
  }

  searchWithEndsFilter(term: string): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.filter((element: any) => element.title.toLowerCase().endsWith(term.toLowerCase())))// el.title.toLowerCase().startsWith(term)))
      )
  }

  searchWithIncludeFilter(term: string){
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.filter((element: any) => element.title.toLowerCase().includes(term.toLowerCase())))
    )
  }
}
