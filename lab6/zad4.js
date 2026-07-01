function wypiszLosowe() {
    let losowe = [];
    for (let i = 0; i < 5; i++) {
        losowe.push(Math.floor(Math.random() * 100));
    }
    document.body.innerHTML += "<p>" + losowe.join(', ') + "</p>";
}
wypiszLosowe();