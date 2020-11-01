import { CartItem } from'./CartItem';

export class Validation {
    constructor() {}
    static validateCartItem(item) {
        if(!(item instanceof CartItem)) throw new Error("Argument must be a CartItem object.");
    }
    static validateAmount(amount) {
        if(!(typeof amount === 'number')) throw new Error("Argument must be a number.");
        if(isNaN(amount)) throw new Error("Argument must be a number.");
        if(amount < 0) throw new Error("Argument must be greater or equal to zero.");
    }
    static validateString(str) {
        if(!(typeof str === 'string')) throw new Error("Argument must be a string.");
        if(str.length === 0) throw new Error("Empty string.")
    }
    static validateNumber(num) {
        if(!(typeof num === 'number' && !isNaN(num))) throw new Error("Argument should be a number.");
        if(!(num >= 0)) throw new Error("Argument should be more than zero.");
    }
};
