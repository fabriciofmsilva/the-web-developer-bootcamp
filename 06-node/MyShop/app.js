const faker = require('faker');

console.log('==================');
console.log('Welcome to MyShop!');
console.log('==================');

for (let i = 0; i < 10; i++) {
  console.log(faker.fake('{{commerce.productName}} - ${{commerce.price}}'))
}
