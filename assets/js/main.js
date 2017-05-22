//para borrar imagenes de pandas
var fotos=document.getElementById("img_1");

fotos.addEventListener("click", function(){
	fotos.remove("img_1");
});

var fotos2=document.getElementById("img_2");

fotos2.addEventListener("click", function(){
	fotos2.remove("img_2");
});

var fotos3=document.getElementById("img_3");

fotos3.addEventListener("click", function(){
	fotos3.remove("img_3");
});

var fotos4=document.getElementById("img_4");

fotos4.addEventListener("click", function(){
	fotos4.remove("img_4");
});


//para borrar texto derecho(parrafo-1)

var enlaceParrafo1=document.getElementById("parrafoUno");
var parrafo1 =document.getElementById("parrafo-1");

enlaceParrafo1.addEventListener("click", function(){
	parrafo1.remove("parrafo-1");
});

//para borrar texto izquierdo (parrafo-2)

var enlaceParrafo2=document.getElementById("parrafoDos");
var parrafo2 =document.getElementById("parrafo-2");

enlaceParrafo2.addEventListener("click", function(){
	parrafo2.remove("parrafo-2");
});

/*function  Imagenes(img, borrar){
	this.img = img;
	this.borrar=function(){
		var fotos=document.getElementById("img");

fotos.addEventListener("click", function(){
	fotos.remove("img");
});
	}
}
Imagenes();

new Imagenes

document.addEventListener("click", function(){
    document.getElementById("img_1").innerHTML ="hola";
});
imagenes.appendChild(foto1);
var imagenes=document.createElement("div");
var photos=fotos.classList("imagenes");
contenedor.appendChild(imagenes);
var contenedor=document.createElement("div");
img_1.addEventListener("click", function(){
contenedor.removeChild(img_1);
})*/
