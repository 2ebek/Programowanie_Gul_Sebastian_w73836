function sumaDwochNajwiekszych(tablica) {
    tablica.sort((a, b) => b - a);
    return tablica[0] + tablica[1];
}