import { v4 as uuidv4 } from 'uuid';
import { Validation } from './Validation.js';
import { CartItem } from './CartItem.js';
import { OrderItem } from './OrderItem.js';

export class Cart {
    constructor() {
      this.uuid = uuidv4();
      this.discount = 0;
      this.discountCode = this.discounts();
      this.cartList = [];
    }

    discounts(discountCode = 'noDiscount') {
      Validation.isStringValid(discountCode);
      const discountCodes = {
        bestreader: 30,
        midbestreader: 25,
        midreader: 20,
        newreader: 5,
        noDiscount: 0
      }
      if(Object.keys(discountCodes).find(key => discountCode === key)) {
        Object.keys(discountCodes).some(key => {
          if(discountCode === key) {
            this.discount = discountCodes[key];
            this.discountCode = key;
          }
        });
      }else { 
        this.discount = 0;
        this.discountCode = discountCode;
      }
    }

    addItem(item, amount) {
      Validation.isInstanceValid(item, CartItem);
      Validation.isNumberValid(amount);
      Validation.isInstanceExistsInList(item, this.cartList);
      const order = new OrderItem(item, amount);
      this.cartList.push(order);
    }

    changeAmount(item, amount) {
      Validation.isInstanceValid(item, CartItem);
      Validation.isNumberValid(amount);
      if(amount === 0) this.deleteItem(item);
      this.cartList.find(element => {
        element.changeItemAmount(item, amount);
  
      });
    }

    deleteItem(cartItem) {
      Validation.isInstanceValid(cartItem, CartItem);
      Validation.isInstanceExistsInList(cartItem, this.cartList);
      const index = this.cartList.findIndex(element => element.item.uuid === cartItem.uuid);
      this.cartList.splice(index, 1);
    }
   
    cartSummary() {
      const result = this.cartList.map(el => ((el.item.price * el.amount) - (el.item.price * el.amount * (this.discount/100))));
      if(result.length === 0) return console.log('Cart empty.');
      const resolution = result.reduce((acc, el) => acc += el);
      console.log(`Your cart is worth ${resolution.toFixed(2)} PLN.`);
    }
    
    showCart() {
        console.log(`
        Cart:
            ${this.cartList.map((el, index) => `
            
            Product ${index + 1}

            id: ${el.item.uuid}
            name: ${el.item.name}
            category: ${el.item.category}
            price: ${el.item.price}
            discount: ${el.item.discount}
            amount: ${el.amount}
            `)}
        `);
        this.cartSummary();    
    }
  }