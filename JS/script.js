function hitungLuas() {
  var sisi = parseFloat(document.getElementById("inputField").value);
  var luas = sisi * sisi;
  document.getElementById("luasText").style.display = "block";
  document.getElementById("luas").textContent = luas;
  document.getElementById("inputSection").style.display = "none";
  document.getElementById("hitungLuasButton").style.display = "none";
}

function resetLuas() {
  document.getElementById("inputField").value = "";
  document.getElementById("luasText").style.display = "none";
  document.getElementById("inputSection").style.display = "block";
  document.getElementById("hitungLuasButton").style.display = "block";
}

function hitungKeliling() {
  var panjang = parseFloat(document.getElementById("inputField2").value);
  var keliling = 4 * panjang;
  document.getElementById("kelilingText").style.display = "block";
  document.getElementById("keliling").textContent = keliling;
  document.getElementById("inputSection2").style.display = "none";
  document.getElementById("hitungKelilingButton").style.display = "none";
}

function resetKeliling() {
  document.getElementById("inputField2").value = "";
  document.getElementById("kelilingText").style.display = "none";
  document.getElementById("inputSection2").style.display = "block";
  document.getElementById("hitungKelilingButton").style.display = "block";
}
