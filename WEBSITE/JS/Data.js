

 let x;
  let FN;
  let listeMedValgte = [];
  let data;
  var overskrift = null
  var beskrivelse = null

function ny() {
  var pic;
  x = Math.floor(Math.random()*4+1);
  genererTekst(x);
  pic = "https://github.com/mpsteenstrup/GCP4/blob/master/FN_maal/FN"+x+".jpg?raw=true"  
  document.getElementById('billedtekst').innerHTML = overskrift;
  document.getElementById('beskrivelse').innerHTML = beskrivelse;
  document.getElementById('myImage').src = pic;
}

function myFunction() {
  document.getElementById("frm1").submit();
}
 
function valgte(){
  console.log(x);
  console.log(FN);
  listeMedValgte.push(overskrift)
  document.getElementById('valg').innerHTML = listeMedValgte;
}

function genererTekst(x){
  for (var i = 0; i < data.length; i++) {
      if (data[i]["ID"] == x) {
        overskrift = data[i]['overskrift']; 
        beskrivelse = data[i]['beskrivelse']
        break; // exit efter loop
      }
    }
}
window.onload = function() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "FN.csv", true);
xhr.responseType = "text";
xhr.onload = function() {
  data = Papa.parse(xhr.responseText, {
    header: true // set this to true if the first row contains the header names
  }).data;
};
xhr.send();
}
