// msid de um valor
const x = 10;
const y = "Algum texto";
const z = [1, 2];

console.log(x, y, z);

//contagem de impressoes
console.count(`X: ${x} contagem`);
console.count(`X: ${x} contagem`);
console.count(`X: ${x} contagem`);

//variavel entre strings
console.log("X = %s, Z = %s, Y = %s", x, z, y);

//limpa o console
setTimeout(() => {
  console.clear();
}, 2000);
