function clck(sayi) {
    var girilenSayi = $("#goruntuEkran").val();
    $("#goruntuEkran").val(girilenSayi + sayi);
}
function clearScreen() {
    $("#goruntuEkran").val("");
}
function hesapla() {
    var sonuc = eval($("#goruntuEkran").val());
    
    if (sonuc == "Infinity") {
        window.alert("Hata: Payda 0 Olamaz.")
        clearScreen()
    }
    else if (isNaN(sonuc)) {
        window.alert("Hata: Pay ve Payda 0 Olamaz.")
        clearScreen()
    }
    else {
         $("#goruntuEkran").val(sonuc);
    }
}
function deleteChar() {
    var mevcutSayi = $("#goruntuEkran").val();
    if (mevcutSayi != '') {
        $("#goruntuEkran").val((mevcutSayi).slice(0, -1));
    }
}
