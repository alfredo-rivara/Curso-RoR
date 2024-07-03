
//Ingresa notas de HTML mediante prompt()

var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var html4 = document.getElementById("html4");

var notaHTML1 = +prompt("Ingrese la nota de HTML 1");
var notaHTML2 = +prompt("Ingrese la nota de HTML 2");
var notaHTML3 = +prompt("Ingrese la nota de HTML 3");

html1.innerHTML = Math.round(parseFloat(notaHTML1));
html2.innerHTML = Math.round(parseFloat(notaHTML2));
html3.innerHTML = Math.round(parseFloat(notaHTML3));
html4.innerHTML = ((notaHTML1 + notaHTML2 + notaHTML3)/3);

//Ingresa notas de CSS mediante prompt()

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var css4 = document.getElementById("css4");

var notaCSS1 = +prompt("Ingrese la nota de CSS 1");
var notaCSS2 = +prompt("Ingrese la nota de CSS 2");
var notaCSS3 = +prompt("Ingrese la nota de CSS 3");

css1.innerHTML = Math.round(parseFloat(notaCSS1));
css2.innerHTML = Math.round(parseFloat(notaCSS2));
css3.innerHTML = Math.round(parseFloat(notaCSS3));
css4.innerHTML = ((notaCSS1 + notaCSS2 + notaCSS3)/3);

//Ingresa notas de Javascript mediante prompt()

var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");
var js4 = document.getElementById("js4");

var notajs1 = +prompt("Ingrese la nota de Javascript 1");
var notajs2 = +prompt("Ingrese la nota de Javascript 2");
var notajs3 = +prompt("Ingrese la nota de Javascript 3");

js1.innerHTML = Math.round(parseFloat(notajs1));
js2.innerHTML = Math.round(parseFloat(notajs2));
js3.innerHTML = Math.round(parseFloat(notajs3));
js4.innerHTML = ((notajs1 + notajs2 + notajs3)/3);