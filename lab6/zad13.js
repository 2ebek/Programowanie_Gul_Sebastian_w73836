function czyZbalansowane(nawiasy) {
    let stos = [];
    for (let znak of nawiasy) {
        if (znak === '(') {
            stos.push(znak);
        } else if (znak === ')') {
            if (stos.length === 0) return false;
            stos.pop();
        }
    }
    return stos.length === 0;
}