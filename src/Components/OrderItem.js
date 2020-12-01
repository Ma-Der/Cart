import { CartItem } from './CartItem.js';
import { Validation } from './Validation.js';

export class OrderItem {
    constructor(item, amount) {
        Validation.isInstanceValid(item, CartItem);
        Validation.isNumberValid(amount);
        this.item = item;
        this.amount = amount;
    }

    changeQuantity(amount) {

        Validation.isNumberValid(amount);
        this.amount = amount;        

    }
}