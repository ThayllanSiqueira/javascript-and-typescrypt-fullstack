import { MyDatabaseClassic } from './db/my-database-classic';

const my_database_classic = MyDatabaseClassic.getInstance();
my_database_classic.add({ name: 'Luiz', age: 30 });
my_database_classic.add({ name: 'Thay', age: 29 });
my_database_classic.add({ name: 'Gustavo', age: 45 });

export { my_database_classic };
