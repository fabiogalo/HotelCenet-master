// Setvidor

function enviarDatos(nom, mail, tel, foto){
	$.ajax({
		type: "POST",
		url: "http://igitsoft.com/pgtest.php",
		data: "nom="+nom + "&mail="+mail + "&tel="+tel
	}).done(function( msg ) {
		if (msg==1){
			//Respuesta satisfactoria del servidor
			subirFoto(foto)
		}
		else{
			navigator.notification.alert ("Hubo un error en el servidor", null, "Error", "Aceptar");
		}
	});
}