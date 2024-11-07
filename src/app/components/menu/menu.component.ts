import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { HeaderComponent } from '../header/header.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CartComponent, HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartService = inject(CartService);
  restaurantDetails: any;
  products: any[] = [];

  constructor(private productService: CartService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    // Access the restaurant details passed via the router state
    this.restaurantDetails = history.state;
    console.log(this.restaurantDetails); // This will log the restaurant data
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
