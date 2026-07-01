let liczby = [];
for (let i = 0; i < 10; i++) {
    liczby.push(prompt("Podaj liczbę:"));
}
console.log(liczby);

let szukana = prompt("Jakiej liczby szukasz?");
let ilosc = liczby.filter(liczba => liczba === szukana).length;
console.log(ilosc);