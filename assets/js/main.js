//para borrar fotos
var foto1=document.getElementById('img_1');
foto1.addEventListener("click", function(){
	foto1.remove("img_1");
	
})

var foto2=document.getElementById('img_2');
foto2.addEventListener("click", function(){
	foto2.remove("img_2");
	
})

var foto3=document.getElementById('img_3');
foto3.addEventListener("click", function(){
	foto3.remove("img_3");
	
})

var foto4=document.getElementById('img_4');
foto4.addEventListener("click", function(){
	foto4.remove("img_4");
	
})

//para borrar parrafo derecho

var enlaceParrafo1=document.getElementById('parrafoUno');
var parrafo1=document.getElementById("parrafo-1")
enlaceParrafo1.addEventListener("click", function(){
	parrafo1.remove("parrafo-1");
	
})

var enlaceParrafo2=document.getElementById('parrafoDos');
var parrafo2=document.getElementById("parrafo-2")
enlaceParrafo2.addEventListener("click", function(){
	parrafo2.remove("parrafo-2");
	
})


/*document.addEventListener("click", function(){
    document.getElementById("img_1").innerHTML ="hola";
});
*/