function przewin(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
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
    // document.getElementById("dane_osobowe").value
    // document.getElementById("numer_telefonu").value
    // document.getElementById("rodzaj").value
    // document.getElementById("usterka").value
function pokaz() {
    document.getElementById("zakonczenie").style.display="none"
    document.getElementById("imienazwisko").style.display="block"
}

function nastepny1() {
    if(document.getElementById("dane_osobowe").value == null) {
        alert("Uzupełnij dane")
    }
    else {
        document.getElementById("imienazwisko").style.display="none"
        document.getElementById("telefon").style.display="block"
    }
    
}

function nastepny2() {
    document.getElementById("telefon").style.display="none"
    document.getElementById("zgloszenie").style.display="block"
}

function nastepny3() {
    document.getElementById("zgloszenie").style.display="none"
    document.getElementById("problem").style.display="block"
}

function nastepny4() {
    document.getElementById("problem").style.display="none"
    document.getElementById("potwierdzenie").style.display="block"
}

function nastepny5() {
    document.getElementById("potwierdzenie").style.display="none"
    document.getElementById("zakonczenie").style.display="block"
}