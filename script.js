function przewin(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}


function wizyta()
{
    var data = document.getElementById("kalendarz").value
    if(data == 0){
        alert("Proszę wybrać datę i godzinę!")
    }
    else {
        document.getElementById("umowiona_wizyta").innerHTML="Dziękujemy, Twoja wizyta została zaplanowana na: "+ data
    }
}
    
function pokaz() {
    document.getElementById("zgloszenie").style.display="none"
    document.getElementById("zakonczenie").style.display="none"
    document.getElementById("formularz").style.display="block"
}

function dalej() {
    var DaneOsobowe = document.getElementById("dane_osobowe").value
    var Email = document.getElementById("email").value
    var NrTelefonu = document.getElementById("numer_telefonu").value
    var RodzajZgloszenia = document.getElementById("rodzaj").value
    var Usterka = document.getElementById("usterka").value
    if ( DaneOsobowe == "" || Email == "" || NrTelefonu == "" || RodzajZgloszenia == "" || Usterka == "") {
        alert("Proszę wypełnić wszystkie pola formularza.")
    }
    else {
        document.getElementById("formularz").style.display="none"
        document.getElementById("potwierdzenie").style.display="block"
        document.getElementById("wynik").innerHTML="<p class='dane'><strong>Imie i Nazwisko:</strong> "+DaneOsobowe+"</p><p class='dane'><strong>Adres email:</strong> "+Email+"</p><p class='dane'><strong>Numer telefonu:</strong> "+NrTelefonu+"</p><p class='dane'><strong>Rodzaj zgłoszenia:</strong> "+RodzajZgloszenia+"</p><p class='dane'><strong>Opis usterki:</strong> "+Usterka
    }

}
function zatwierdz() {
    document.getElementById("potwierdzenie").style.display="none"
    document.getElementById("zakonczenie").style.display="block"
}

function cofnij() {
    document.getElementById("potwierdzenie").style.display="none"
    document.getElementById("formularz").style.display="block"
}