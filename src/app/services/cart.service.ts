import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[]=[];
  private products = [
    { name: 'Product 1', price: 100, id: 1, src: 'https://static.uengage.in/uploads/5/image-183435-1715686808.png' },
    { name: 'Product 2', price: 200, id: 2, src: 'https://static.uengage.in/uploads/5/image-318947-1715686807.png' },
    { name: 'Product 3', price: 300, id: 3, src: 'https://static.uengage.in/uploads/5/image-123528-1726728787.jpeg' },
    { name: 'Product 4', price: 350, id: 4, src: 'https://static.uengage.in/uploads/5/image-537552-1726728787.jpeg' },
    { name: 'Product 5', price: 400, id: 5, src: 'https://static.uengage.in/uploads/5/image-556334-1726728786.jpeg' },
    { name: 'Product 6', price: 350, id: 6, src: 'https://static.uengage.in/uploads/5/image-462226-1715686799.png' },
  ];

  getProducts() {
    return this.products;
  }
  constructor() { }
  addToCart(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }
  getItems(){
    return this.items;
  }
  delete(item:any)
  {
    this.items=this.items.filter((i)=>i.id!==item.id);
    
  }
  incrementQuantity(id:number,product:any){
    let item=this.items.find((i)=>i.id===id)
    if(item){
      item.quantity++;
    }
    else {
      
      this.items.push({ ...product, quantity: 1 });
    }
  }
  decrementQuantity(id:number){
    let item=this.items.find((i)=>i.id===id)
    if(item){
      item.quantity--;
    }
    if (item.quantity === 0) {
      this.items = this.items.filter((i) => i.id !== id);
    }
  }
  getTotal(){
    return this.items.reduce((acc,item)=>{return acc+item.price*item.quantity;},0);
  }
  isInCart(id: number): boolean {
    return this.items.some((item) => item.id === id);
  }
  getQuantity(id: number): number {
    const item = this.items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }
  clearCart() {
    this.items = [];
  }
}
