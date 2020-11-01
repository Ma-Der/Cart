import { CartItem }from './Components/CartItem';
import { Cart }  from './Components/Cart';
import { v4 as uuidv4 } from 'uuid';

const item1 = new CartItem('True', 'Thriller', 35, 5);
const item2 = new CartItem('Vaery', 'Comedy', 50);
const cart1 = new Cart('midreader');

cart1.addItem(item1, 5);
cart1.addItem(item2, 15);
//cart1.addItem({id: 3}, 6);
//cart1.deleteItem(item1);
cart1.changeItemAmount(item2 ,20);
cart1.showCart();