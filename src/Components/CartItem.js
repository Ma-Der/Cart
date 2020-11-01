const { v4: uuidv4 } = require('uuid');
import { Validation } from'./Validation';

export class CartItem {
    constructor(name, category, price, discount = 0) {
      this.id = uuidv4();
      this.name = name;
      this.category = category;
      this.price = price - (price * discount / 100);
      this.discount = discount;
    }
   
    modifyPrice(price) {
      Validation.validateNumber(price);
      this.price = price;
    }
   
    modifyName(name) {
      Validation.validateString(name);
      this.name = name;
    }
   
    modifyDiscount(discount) {
      Validation.validateNumber(price);
      this.discount = discount;
    }
   
    addCategory(category) {
      Validation.validateString(category);
      this.category = category;
    }
  };
