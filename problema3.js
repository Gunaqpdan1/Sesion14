let general = +prompt("Ingresar entradas generales vendidas");
let mayor = +prompt("Ingresar entradas para mayores de 65 vendidas");
let menor = +prompt("Ingresar entradas de menores de edad vendidas");

precioG = 150
precioM = 50
precioMe = 80

alert(`La ganancia en entradas generales es ${general*precioG} soles, la ganancia en mayores de 65 es ${mayor*precioM} soles, la ganancia en menores de edad es ${menor*precioMe} y el total recaudado es ${(general*precioG)+(mayor*precioM)+(menor*precioMe)} soles.`);
