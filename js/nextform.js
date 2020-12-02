function nextForm() {
    var x = document.getElementById("form2");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
function nextform1() {
    document.getElementById('form2').style.display = 'block';
    document.getElementById('form1').style.display = 'none';
}
function nextform2() {
    document.getElementById('form3').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
}
function nextform3() {
    document.getElementById('form4').style.display = 'block';
    document.getElementById('form3').style.display = 'none';
}
function backform2() {
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
}
function backform3() {
    document.getElementById('form2').style.display = 'block';
    document.getElementById('form3').style.display = 'none';
}
function backform4() {
    document.getElementById('form3').style.display = 'block';
    document.getElementById('form4').style.display = 'none';
}