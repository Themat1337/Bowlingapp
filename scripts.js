
let runde = 10      //Rundenanzahl

let punkte = JSON.parse(localStorage.getItem('Savegame'))
var g, ergebnis_div
for (g=1; g<=10; g++) {
    document.getElementById(g+"_1").value = punkte["Runde"+g+"_1"]
    var ergebnis_div = document.getElementById(g+"_1")
    ergebnis_div.innerHTML = document.getElementById(g+"_1").value
    document.getElementById(g+"_2").value = punkte["Runde"+g+"_2"]
    var ergebnis_div = document.getElementById(g+"_2")
    ergebnis_div.innerHTML = document.getElementById(g+"_2").value
    document.getElementById(runde+"_3").value = punkte["Runde"+runde+"_3"]
    var ergebnis_div = document.getElementById(runde+"_3")
    ergebnis_div.innerHTML = document.getElementById(runde+"_3").value
    if (document.getElementById(g+"_1").value != ""){
        addition()
    } else if
        (document.getElementById(g+"_2").value != ""){
        addition()
    }
}
            
function addition() {
    var d
    for (d=1; d<=10; d++) {

        if (runde == d){
            document.getElementById("ergebnis"+d).value = parseInt(document.getElementById(d+"_1").value) + parseInt(document.getElementById(d+"_2").value) + parseInt(document.getElementById(runde+"_3").value)
            var ergebnis_div = document.getElementById("ergebnis"+d)
            ergebnis_div.innerHTML = document.getElementById("ergebnis"+d).value
        } else if(document.getElementById(d+"_1").value != '' && document.getElementById(d+"_2").value != '') {
            document.getElementById("ergebnis"+d).value = parseInt(document.getElementById(d+"_1").value) + parseInt(document.getElementById(d+"_2").value)
            var ergebnis_div = document.getElementById("ergebnis"+d)
            ergebnis_div.innerHTML = document.getElementById("ergebnis"+d).value  
            }
        }
    }

function update(){
    var i
    for (i=1; i<=10; i++) {

         let punkte = {}
        punkte.pnkt = {}
        key = 'R_1'
        punkte.pnkt = document.getElementById(i+'_1').value + document.getElementById(i+'_1').value
        punkte[key] = document.getElementById(i+'_1').value
        console.log(punkte[key])

    for (i=1;i<=10;i++) {
        punkte["Runde" + i + "_1"] = document.getElementById(i + '_1').value
        punkte["Runde" + i + "_2"] = document.getElementById(i + '_2').value
        if(i == runde) {
               punkte["Runde" + i + "_3"] = document.getElementById(i + '_3').value
            }
        }
    key = 'R_2'
    punkte;
    localStorage.setItem('Savegame', JSON.stringify(punkte))



    }
}