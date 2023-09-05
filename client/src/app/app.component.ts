import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SkiNet';
  products: Product[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Pagination<Product>[]>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: (response: any) => {
        // console.log(response);
        this.products = response.data
      },
      error: error => console.log(error),
      complete: () => console.log('request completed')
    })
  }
}