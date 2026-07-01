const ksiazka = {
    tytul: "Wiedźmin",
    autor: "Andrzej Sapkowski",
    rokWydania: 1990
};

function sformatujKsiazke(obiekt) {
    return obiekt.tytul + " - " + obiekt.autor + " (" + obiekt.rokWydania + ")";
}


const student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    numerAlbumu: 12345,
    oceny: [4, 5, 3],
    obliczSrednia: function() {
        let suma = this.oceny.reduce((a, b) => a + b, 0);
        console.log(suma / this.oceny.length);
    }
};


class Trojkat {
    constructor(wysokosc, podstawa, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa = podstawa;
        this.nazwa = nazwa;
    }
    obliczPole() {
        return (this.podstawa * this.wysokosc) / 2;
    }
    porownaj(innyTrojkat) {
        return this.obliczPole() > innyTrojkat.obliczPole() ? this : innyTrojkat;
    }
}

const trojkat1 = new Trojkat(10, 5, "Pierwszy");
const trojkat2 = new Trojkat(8, 6, "Drugi");
const trojkat3 = new Trojkat(4, 12, "Trzeci");


class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
    obliczPole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
    }
}

const trapez1 = new Trapez(5, 4, 6, "Trapez Pierwszy");
const trapez2 = new Trapez(10, 2, 8, "Trapez Drugi");
const trapez3 = new Trapez(3, 10, 10, "Trapez Trzeci");

function porownajFigury(trojkat, trapez) {
    let poleTrojkata = trojkat.obliczPole();
    let poleTrapezu = trapez.obliczPole();
    
    if (poleTrojkata > poleTrapezu) {
        console.log(trojkat.nazwa + " ma większe pole: " + poleTrojkata);
    } else {
        console.log(trapez.nazwa + " ma większe pole: " + poleTrapezu);
    }
}


function obiektNaJson(obiekt) {
    return JSON.stringify(obiekt); 
}


const imiona = ["Jan", "Anna", "Piotr", "Katarzyna", "Tomasz"];
const nazwiska = ["Kowalski", "Nowak", "Wiśniewski", "Wójcik", "Kowalczyk"];

function generujUzytkownikow(ilosc = 20) {
    let uzytkownicy = [];
    let limit = Math.min(ilosc, 20);
    
    for (let i = 0; i < limit; i++) {
        let imie = imiona[Math.floor(Math.random() * imiona.length)];
        let nazwisko = nazwiska[Math.floor(Math.random() * nazwiska.length)];
        let wiek = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        let telefon = Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000;
        
        uzytkownicy.push({ imie: imie, nazwisko: nazwisko, wiek: wiek, telefon: telefon });
    }
    
    return uzytkownicy;
}

const wygenerowaniUzytkownicy = generujUzytkownikow();
console.log(wygenerowaniUzytkownicy);


function wypiszWHTML() {
    let poleWejsciowe = document.getElementById("ilosc");
    let ilosc = poleWejsciowe.value;
    let dane = generujUzytkownikow(ilosc);
    
    document.getElementById("wynik").innerHTML = JSON.stringify(dane);
}


function filtrujPelnoletnich(uzytkownicy) {
    return uzytkownicy.filter(u => u.wiek >= 18);
}

const pelnoletni = filtrujPelnoletnich(wygenerowaniUzytkownicy);
console.log(pelnoletni);


function pobierzSameImiona(uzytkownicy) {
    return uzytkownicy.map(u => u.imie);
}

const sameImiona = pobierzSameImiona(wygenerowaniUzytkownicy);
console.log(sameImiona);

function filtrujPelnoletnich(uzytkownicy) {
    return uzytkownicy.filter(u => u.wiek >= 18);
}

function pobierzSameImiona(uzytkownicy) {
    return uzytkownicy.map(u => u.imie);
}

function pokazPelnoletnich() {
    let poleWejsciowe = document.getElementById("ilosc");
    let ilosc = poleWejsciowe.value;
    let dane = generujUzytkownikow(ilosc);
    let pelnoletni = filtrujPelnoletnich(dane);
    
    document.getElementById("wynik8").innerHTML = JSON.stringify(pelnoletni);
}

function pokazImiona() {
    let poleWejsciowe = document.getElementById("ilosc");
    let ilosc = poleWejsciowe.value;
    let dane = generujUzytkownikow(ilosc);
    let imiona = pobierzSameImiona(dane);
    
    document.getElementById("wynik9").innerHTML = JSON.stringify(imiona);
}