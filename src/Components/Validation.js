import { CartItem } from'./CartItem.js';


export class Validation {
    constructor() {}
    static isInstanceValid(item, Class) {
        if(!(item instanceof Class)) throw new Error("Argument must be a " + Class + " object.");
    }
    static isStringValid(str) {
        if(!(typeof str === 'string')) throw new Error("Argument must be a string.");
        if(str.length === 0) throw new Error("Empty string.")
    }
    static isNumberValid(num) {
        if(!(typeof num === 'number' && !isNaN(num))) throw new Error("Argument should be a number.");
        if(!(num >= 0)) throw new Error("Argument should be more or equal to zero.");
    }
    static isInstanceExistsInList(instance, list) {
        return list.some(item => instance.id === item.id);
      }
};
