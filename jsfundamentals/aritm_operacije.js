document.write("Dobro dosli u program za racunanje osnovnih aritmetickih operacija 2 broja!");
aritOperacije ();    

function aritOperacije () {

    var prviBroj = prompt("Molim Vas unesite prvi broj:");
    var drugiBroj = prompt("Molim Vas unesite drugi broj:");
    var aritOperacija = prompt("Molim Vas izaberite aritmeticku operaciju \n Za sabiranje unesite \+ \n Za oduzimanje \- \n Za mnozenje \* \n Za delenje \/: ");
    
    var rezultat = 0;
    var value = 0; //promenjiva koja sluzi za proveru da li je uneta operacija validna, 2 jeste, 1 nije
    if (aritOperacija == "+") { 
    rezultat = parseInt(prviBroj) + parseInt(drugiBroj);
    alert("Zbir brojeva je: " + rezultat );
    value = 2;

    } else if (aritOperacija == "-") { 
    rezultat = parseInt(prviBroj) - parseInt(drugiBroj);
    alert("Razlika brojeva je: " + rezultat );
    value = 2;

    } else if (aritOperacija == "*") { 
    rezultat = parseInt(prviBroj) * parseInt(drugiBroj);
    alert("Mnozenje 2 broja iznosi: " + rezultat );
    value = 2;

    } else if (aritOperacija == "/") { 
    rezultat = parseInt(prviBroj) / parseInt(drugiBroj);
    alert("Delenje 2 broja iznosi: " + rezultat );
    value = 2;

    } else { 
    alert("Niste uneli dobru vrednost, pocnite ponovo!");
    value = 1;
    }

    if (value == 2) { 
    var odgovor = prompt("Da li zelite ponovo da pokrenete aplikaciju? \n (Da ili Ne)");
    	if(odgovor == "Da" || odgovor == "da"){
	aritOperacije ();
	} else if (odgovor == "Ne" || odgovor == "ne") {
	die("Izlaz iz programa");
	} else {
        die("Izlaz iz programa");
        }
    } else if (value == 1) {
      aritOperacije ();
    } else {
      die("Izlaz iz programa"); 
    }

}
    
	


