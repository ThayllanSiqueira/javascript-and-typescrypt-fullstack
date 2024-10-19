import { MyDatabaseClassic } from './db/my-database-classic';
import { my_database_classic as myDatabaseClassicFromModuleA } from './module_a';

const my_database_classic = MyDatabaseClassic.instance;
my_database_classic.add({ name: 'Luizão', age: 30 });
my_database_classic.add({ name: 'Thayzão', age: 29 });
my_database_classic.add({ name: 'Gustavão', age: 45 });
my_database_classic.show();

console.log(my_database_classic === myDatabaseClassicFromModuleA);
