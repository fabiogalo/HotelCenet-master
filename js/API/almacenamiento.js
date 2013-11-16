// Almacenamiento

function crearUsuario(nombre, id){
	window.localStorage.setItem("nombre", nombre);
	window.localStorage.setItem("id", id);
}

function estaRegistrado(){
	alert();
	var id = window.localStorage.getItem("id");
	if (id == undefined)
		return false;
	else
		return true;
}