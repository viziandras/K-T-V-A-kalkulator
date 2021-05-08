function negyzet() {
  var a = parseInt(document.getElementById("input1").value);

  var kerulet = 4 * a;
  document.getElementById("output1").value = kerulet;

  var terulet = a * a;
  document.getElementById("output2").value = terulet;
}

function teglalap() {
  var a = parseInt(document.getElementById("input1").value);
  var b = parseInt(document.getElementById("input2").value);

  var kerulet = (a + b) * 2;
  document.getElementById("output1").value = kerulet;

  var terulet = a * b;
  document.getElementById("output2").value = terulet;
}

function kocka() {
  var a = parseInt(document.getElementById("input1").value);

  var terfogat = a * a * a;
  document.getElementById("output1").value = terfogat;

  var felszin = 6 * a * a;
  document.getElementById("output2").value = felszin;
}

function teglatest() {
  var a = parseInt(document.getElementById("input1").value);
  var b = parseInt(document.getElementById("input2").value);
  var c = parseInt(document.getElementById("input3").value);

  var terfogat = a * b * c;
  document.getElementById("output1").value = terfogat;

  var felszin = 2 * (a * b + a * c + b * c);
  document.getElementById("output2").value = felszin;
}
