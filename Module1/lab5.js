let shoes = ['Jordans, Nike, Adidas, Pumas, Underarmor'];
let lastshoes = shoes.pop();
console.log(lastshoes); // Underarmor
console.log(shoes[0]); // 'Jordans'
console.log(shoes[1]); // 'Nike'
console.log(shoes[2]); // 'Adidas'
console.log(shoes[3]); // 'Pumas'
console.log(shoes[4]); // 'Underarmor'
shoes.unshift('Converse');
console.log(shoes); // [ 'Jordans', 'Nike', 'Adidas', 'Pumas', 'Underarmor' ]