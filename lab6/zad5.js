let wartosci = [2, 4, 7, 10, 15];

let suma = wartosci.reduce((a, b) => a + b, 0);
console.log(suma);

let parzyste = wartosci.filter(l => l % 2 === 0);
console.log(parzyste);

let pomnozone = wartosci.map(l => l * 3);
console.log(pomnozone);

let numerAlbumu = 123456;
wartosci.push(numerAlbumu);
let indeksAlbumu = wartosci.indexOf(numerAlbumu);
console.log(indeksAlbumu);

let srednia = wartosci.reduce((a, b) => a + b, 0) / wartosci.length;
console.log(srednia);

let najwieksza = Math.max(...wartosci);
console.log(najwieksza);

let wybranaLiczba = 4;
let wystapienia = wartosci.filter(l => l === wybranaLiczba).length;
console.log(wystapienia);