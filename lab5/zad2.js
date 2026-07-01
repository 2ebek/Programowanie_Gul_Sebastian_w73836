function obliczSilnie(n) {
    if (n === 0 || n === 1) return 1;
    let wynik = 1;
    for (let i = 2; i <= n; i++) {
        wynik *= i;
    }
    return wynik;
}