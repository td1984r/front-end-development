    var pPrecnikValjka = prompt("Molim Vas unesite poluprecnik valjka:");
    var visinaValjka = prompt("Molim Vas unesite visinu valjka:");
    var pPrecnikValjkaNaKvadrat = pPrecnikValjka**2;
    const PI = "3.14";

    var zapValjka = parseInt(pPrecnikValjkaNaKvadrat) * PI * parseInt(visinaValjka);
    alert("Zapremina valjka je: " + zapValjka);
