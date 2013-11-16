// Archivos

function subirFoto(foto){
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	options.mimeType="image/jpeg";
	
	var params = {};
	params.value1 = "test";
	params.value2 = "param";
	
	options.params = params;
	
	var ft = new FileTransfer();
	ft.upload(foto,"http://igitsoft.com/pgtest.php", function(r){
		navigator.notification.confirm("Registro Satisfactorio\nRespuesta: "+r.responseCode+'\nNombre del Dispositivo: '+disp()['nombre'],
				function(btn){
					switch(btn){
						case 1:
							navigator.notification.beep(2);
							break;

						case 2:
							navigator.notification.vibrate(2000);
							break;
					}
					window.location.href="#page";
					//Confirmar registro localmente
					crearUsuario(disp()['nombre'], disp()['id'])
				}, 'Gracias', 'Beep, Vibrar, Cancelar');
		}, function(err){
			alert('Error: '+err.code);
		},options);
}

