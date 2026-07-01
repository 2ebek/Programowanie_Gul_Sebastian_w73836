function zliczSlowa(tablicaSlow) {
    let mapa = new Map();
    for (let slowo of tablicaSlow) {
        let obecnaIlosc = mapa.get(slowo) || 0;
        mapa.set(slowo, obecnaIlosc + 1);
    }
    return mapa;
}