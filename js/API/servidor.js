// Setvidor

function enviarDatos(nom, mail, tel, foto){
	$.ajax({
		type: "POST",
		url: "http://10.175.11.51.php",
		data: "nom="+nom + "&mail="+mail + "&tel="+tel
	}).done(function( msg ) {
		if (msg==1){
			//Respuesta satisfactoria del servidor
			$('.title div').text('subiendo Foto');
			subirFoto(foto)
		}
		else{
			navigator.notification.alert ("Hubo un error en el servidor", null, "Error", "Aceptar");
		}
	});
}

function enviarReservas(th, pr, ha, di){
	$.ajax({
		type: "POST",
		url: "http://10.175.11.51.php",
		data: "t="+th + "&p="+pr + "&h="+ha + "&d="+di
	}).done(function( msg ) {
		if (msg==1){
			//Respuesta satisfactoria del servidor
			navigator.notification.alert("Datos Enviados Correctamente",
								function(){
									var x = 0;
									//Guardar en historial
								},
								"Reservas Realizadas", "Aceptar");
		}
		else{
			navigator.notification.alert ("Hubo un error en el Registro", null, "Error", "Aceptar");
		}
	});
}