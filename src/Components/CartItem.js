import { v4 as uuidv4 } from 'uuid';
import { Validation } from'./Validation.js';

export class CartItem {
    constructor(name, category, price, discount = 0) {
      Validation.isStringValid(name);
      Validation.isStringValid(category);
      Validation.isNumberValid(price);
      Validation.isNumberValid(discount);
      this.uuid = uuidv4();
      this.name = name;
      this.category = category;
      this.price = price - (price * discount / 100);
      this.discount = discount;
    }
   
    modifyPrice(price) {
      Validation.isNumberValid(price);
      this.price = price;
    }
   
    modifyName(name) {
      Validation.isStringValid(name);
      this.name = name;
    }
   
    modifyDiscount(discount) {
      Validation.isNumberValid(price);
      this.discount = discount;
    }
   
    addCategory(category) {
      Validation.isStringValid(category);
      this.category = category;
    }
  };
