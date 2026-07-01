let ksiazkaAdresowa = new Map();

ksiazkaAdresowa.set("Jan", "111222333");
ksiazkaAdresowa.set("Anna", "444555666");

for (let [imie, numer] of ksiazkaAdresowa) {
    console.log(imie + ": " + numer);
}