import { v4 as uuidv4 } from 'uuid';
import { Validation } from './Validation';


export class Cart {
    constructor(discountCode = 'noDiscount') {
      Validation.validateString(discountCode);
      const discountCodes = {
        bestreader: 30,
        midbestreader: 25,
        midreader: 20,
        newreader: 5,
        noDiscount: 0
      }

      this.uuid = uuidv4();
      this.discountCode = discountCode;

      if(Object.keys(discountCodes).find(key => discountCode === key)) {
        Object.keys(discountCodes).some(key => {
          if(discountCode === key) {
            this.discount = discountCodes[key];
          }
        });
      } else this.discount = 0;
      
      this.cartList = [];
    }
   
    addItem(cartItem, amount) {
      Validation.validateCartItem(cartItem);
      Validation.validateAmount(amount);
      this.cartList.push({...cartItem, amount});
    }
   
    deleteItem(cartItem) {
      Validation.validateCartItem(cartItem);
      const result = this.cartList.filter(item => item.uuid !== cartItem.uuid ? item : null);
      this.cartList = result;
    }
   
    changeItemAmount(cartItem, amount) {
      Validation.validateCartItem(cartItem);
      Validation.validateAmount(amount);
      const result = this.cartList.filter(item => item.uuid === cartItem.uuid);
      const [ item ] = result;
      item.amount = amount;
    }
   
    cartSummary() {
      const result = this.cartList.map(item => ((item.price * item.amount) - (item.price * item.amount * (this.discount/100)))).reduce((acc, el) => acc += el);
      console.log(`Your cart is worth ${result.toFixed(2)} PLN.`);
    }
    
    showCart() {
        console.log(`
        Cart:
            ${this.cartList.map((item, index) => `
            
            Product ${index + 1}

            id: ${item.id}
            name: ${item.name}
            category: ${item.category}
            price: ${item.price}
            discount: ${item.discount}
            amount: ${item.amount}
            `)}
        `);
        this.cartSummary();    
    }
  };