function unikalneTytuly(ksiazki) {
    let unikalne = new Set(ksiazki);
    return {
        tytuly: unikalne,
        ilosc: unikalne.size
    };
}