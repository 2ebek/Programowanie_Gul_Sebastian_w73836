alert("It's muffin time!");

let a = 10;
let b = 20;
let c = 23.2;

let suma = a + b + c;
let roznica = a - b - c;
let iloczyn = a * b * c;
let iloraz = a / b;

console.log("Suma: " + suma + ", Różnica: " + roznica + ", Iloczyn: " + iloczyn + ", Iloraz: " + iloraz);
alert("Wynik dodawania: " + suma);

if (document.getElementById("wynik")) {
    document.getElementById("wynik").innerHTML = "Wyniki: " + suma + ", " + roznica + ", " + iloczyn + ", " + iloraz;
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let elementHtml = document.createElement("div");
for (let i = 0; i <= 100; i += 5) {
    elementHtml.innerHTML += i + " ";
}
document.body.appendChild(elementHtml);

for (let i = 1; i <= 100; i++) {
    if (i % 13 === 0) {
        alert("Liczba podzielna przez 13: " + i);
    }
}

let bokA = 5, bokB = 6, bokC = 7;
let p = (bokA + bokB + bokC) / 2;
let poleTrojkata = Math.sqrt(p * (p - bokA) * (p - bokB) * (p - bokC));
console.log("Pole trójkąta: " + poleTrojkata);

let imieUzytkownika = prompt("Podaj swoje imię:");
alert("Witaj " + imieUzytkownika + "!");

let liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
document.write(liczba1 + " + " + liczba2 + " = " + (liczba1 + liczba2));

let l1 = parseFloat(prompt("Podaj liczbę 1:"));
let l2 = parseFloat(prompt("Podaj liczbę 2:"));
let l3 = parseFloat(prompt("Podaj liczbę 3:"));
console.log("Największa liczba: " + Math.max(l1, l2, l3));

let nwdA = Math.abs(parseInt(prompt("NWD - Podaj pierwszą liczbę:")));
let nwdB = Math.abs(parseInt(prompt("NWD - Podaj drugą liczbę:")));
while (nwdB) {
    nwdA %= nwdB;
    [nwdA, nwdB] = [nwdB, nwdA];
}
console.log("Największy Wspólny Dzielnik: " + nwdA);

let wylosowana = Math.floor(Math.random() * 101);
let proby = 0;

(function wyswietlajCzas() {
    let teraz = new Date();
    if (document.getElementById("zegar")) {
        document.getElementById("zegar").innerHTML = teraz.toLocaleTimeString();
    }
    setTimeout(wyswietlajCzas, 1000);
})();

let wylosowanaGUI = Math.floor(Math.random() * 101);
let probyGUI = 0;
function sprawdzLiczbeGUI() {
    let input = document.getElementById("userGuess");
    if (!input) return;
    let strzal = parseInt(input.value);
    probyGUI++;
    if (strzal === wylosowanaGUI) {
        alert("Gratulacje! Zgadłeś w " + probyGUI + " próbach.");
        location.reload();
    } else {
        alert(strzal > wylosowanaGUI ? "Za dużo!" : "Za mało!");
    }
}