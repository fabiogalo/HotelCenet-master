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
//WEB SQL (SQLite)
function accesoBD(){
	var bd = window.openDatabase("Hotel", "1.0", "Hotel Cenet", 200000);
	return bd;
}
function crearReservas(th, pr, ha, di){
	db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, pr, ha, di)');
        tx.executeSql('INSERT INTO reservas (th, pr, ha, di) VALUES ("'+th+'", "'+pr+'", "'+ha+'", "'+di+'")');
	},
	function(err) {
        alert("Error processing SQL: "+err.code);
    },
    function() {
        navigator.notification.alert("Esperando a conexion para sincronizar", null, "Reserva Guardada", "De acuerdo");
    });

}