var html1 = document.getElementById("nota-html-1");
var html2 = document.getElementById("nota-html-2");
var html3 = document.getElementById("nota-html-3");
var htmlpromedio = document.getElementById("html-promedio");

var notaHTML1 = +prompt("Ingrese la nota de HTML 1");
var notaHTML2 = +prompt("Ingrese la nota de HTML 2");
var notaHTML3 = +prompt("Ingrese la nota de HTML 3");

html1.innerHTML = parseFloat(notaHTML1);
html2.innerHTML = parseFloat(notaHTML2);
html3.innerHTML = parseFloat(notaHTML3);
htmlpromedio.innerHTML = ((notaHTML1 + notaHTML2 + notaHTML3)/3);



