/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
//const individualCustomer = new IndividualCustomer('Luiz', 'Miranda', '111.111.111-11');
const enterpriselCustomer = new EnterpriseCustomer('Empresa win', '222222222222222222');
const order = new Order(shoppingCart, messaging, persistency, enterpriselCustomer);

shoppingCart.addItem(new Product('Camiseta', 10));
shoppingCart.addItem(new Product('Caderno', 10));
shoppingCart.addItem(new Product('Lápis', 10));

// shoppingCart.removeItem(2);
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
