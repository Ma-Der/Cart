import { CartItem } from './CartItem.js';
import { Validation } from './Validation.js';

export class OrderItem {
    constructor(item, amount) {
        Validation.isInstanceValid(item, CartItem);
        Validation.isNumberValid(amount);
        this.item = item;
        this.amount = amount;
    }

    changeItemAmount(cartItem, amount) {
        Validation.isInstanceValid(cartItem, CartItem);
        Validation.isNumberValid(amount);
        if((this.item.uuid === cartItem.uuid))  this.amount = amount;        
    }
}