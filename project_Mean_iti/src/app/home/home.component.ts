import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allProducts:any[] = []; 
  allProdData:any[] = [];
constructor(private productService:ProductService){}
ngOnInit(): void {
  
}
}
