/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
// import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriselCustomer = new EnterpriseCustomer('Empresa win', '222222222222222222');
//const individualCustomer = new IndividualCustomer('Luiz', 'Miranda', '111.111.111-11');

/* class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messaginMock = new MessagingMock(); */

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
