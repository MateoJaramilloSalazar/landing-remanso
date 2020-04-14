/*

El valor inicial de slideIndex es 1
showSlides está mostrando el valor actual de slideIndex, que en un principio, es 1

*/

var slideIndex = 1;
  showSlides(slideIndex);

  /* Se crea una nueva función, que es la que va incrementando el valor del slideIndex
  y es lo que sucede cada vez que dan clic en plus slide, diciendo que slideIndex será igual
  a su valor actual (al principio 1) + n
  
  El valor de n para PlusSlides se está dando desde el código html y corresponde 1 o -1
  */

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* La siguiente función define el slide que se va a mostrar de acuerdo a su valor, adicional define
que en un principio el valor de "n" es igual al valor de "slide index" */

function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* La siguiente función toma las imágenes del documento con la clase mySlides, adicional menciona
que si n (actualmente igual a slideIndex) es mayor que 9, entonces slideIndex será 1, y si n es inferior a 1,
el slideIndex será 9*/

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

/*Se crea un for, para generar un bucle de la función. Define el valor de i=0 y dice que repita la
función tantas veces pueda hasta que siga siendo inferior a 9 (número de slides), y dice que vaya modificando
el valor i sumando un valor cada vez que se reproduzca el dato */

/* Se define que el slide con el valor igual a i no se debe mostrar, mientras que el slide que tenga el valor
igual a "slideIndex.1" si se debe mostrar */

  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

console.log('valor de n:'+' '+n);
console.log('valor de i:'+' '+i);
console.log('valor de slideIndex:'+' ' +slideIndex);
    
}




