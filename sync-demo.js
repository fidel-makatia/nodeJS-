fs= require('fs');

data = fs.readdirSync('/Users/macbook/Public');
console.log('data:', data);

console.log("This comes after");