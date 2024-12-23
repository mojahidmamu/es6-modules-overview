const products = [
  {name: 'mojahid', price: 100, color: 'red'},
  {name: 'asad',    price: 150, color: 'yellow'},
  {name: 'samim',   price: 300, color: 'black'},
  {name: 'mahi',    price: 200, color: 'gray'},
  {name: 'sifat',   price: 500, color: 'green'},
];

const prices = products.map(a => a.price);
// console.log(prices);
const names = products.map(b => b.name);
// console.log(names);
const colors = products.map(c => c.color);
// console.log(colors);

// 3.filter:

const cheaps = products.filter(a => a.price < 120);
// console.log(cheaps);
const cheap= products.filter(a => a.name.includes('m') );
// console.log(cheap);

// 4.find
const cheapes = products.find(p =>p.name.includes('m'));
console.log( cheapes);
