const products = [
    {name: 'laptop', price : 3200 , brand: 'lenova', color: 'silver'},
    {name: 'phone ', price : 2000 , brand: 'iphone', color: 'golden'},
    {name: 'watch', price : 4400 , brand: 'casio', color: 'yellow'},
    {name: 'SUnglaass', price : 200 , brand: 'raybon   ', color: 'black'},
    {name: 'camera', price : 8000 , brand: 'canon', color: 'gray'},
    {name: 'laptop', price : 3200 , brand: 'laptop', color: 'silver'}
];

const brands = products.map(abc => abc.brand)

// console.log(brands)

const prices = products.map(product => product.price)
// console.log(prices)

const cheap = products.filter(product => product.price <=5000);
console.log(cheap)

