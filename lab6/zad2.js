let tablica = [1, 2, 3, 4, 5, 6];
let nowaLiczba = prompt("Podaj liczbę:");
let indeks = prompt("Podaj indeks:");

tablica.splice(indeks, 0, nowaLiczba);
console.log(tablica);