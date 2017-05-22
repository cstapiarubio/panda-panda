var foto1=document.getElementById('img_1');
var contenedor=document.createElement("div");
var imagenes=document.createElement("div");
imagenes.appendChild(img_1);
contenedor.appendChild(imagenes);



foto1.addEventListener("click", function(){
	contenedor.removeChild(imagenes);
});

/*document.addEventListener("click", function(){
    document.getElementById("img_1").innerHTML ="hola";
});



img_1.addEventListener("click", function(){
contenedor.removeChild(img_1);
})*/
