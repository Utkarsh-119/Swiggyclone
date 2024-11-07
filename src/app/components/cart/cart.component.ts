import { Component,inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService=inject(CartService);
  productsInCart: any[] = [];

  constructor(private productService: CartService) {
    this.productsInCart = this.productService.getProducts();
  }
  deleteFromCart(item:any[]){
    this.cartService.delete(item);
    
  }
  getProductSrcById(productId: number): string | undefined {
    const product = this.productsInCart.find(item => item.id === productId);
    return product ? product.src : undefined;
  }
}
