

 let x;
  let FN;
  let listeMedValgte = [];
  let data;
  var ID = null
  var Song = null
  

function ny() {
  x = Math.floor(Math.random()*4+1);
  genererTekst(x);
  document.getElementById('ID').innerHTML = ID;
  document.getElementById('Youtube').src = Song;
}

function myFunction() {
  document.getElementById("frm1").submit();
}

function valgte(){
  console.log(x);
  console.log(FN);
  listeMedValgte.push(ID)
  document.getElementById('valg').innerHTML = listeMedValgte;
}

function genererTekst(x){
  for (var i = 0; i < data.length; i++) {
      if (data[i]["ID"] == x) {
        ID = data[i]['ID'];
        Song = data[i]['Link'];
        break; // exit efter loop
      }
    }
}
window.onload = function() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "Sheetup.csv", true);
xhr.responseType = "text";
xhr.onload = function() {
  data = Papa.parse(xhr.responseText, {
    header: true // set this to true if the first row contains the header names
  }).data;
};
xhr.send();
}
