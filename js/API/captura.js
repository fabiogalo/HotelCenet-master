// Captura

function tomarFoto(){
	navigator.device.capture.captureImage(function(img){
			for (i=0; i<=img.lenght; i++)
			{
				ruta = img[i].fullPath;
			}
			$('#regFoto').att('foto', ruta);
			$('#regImg').html('<img src="'+ruta+'" width="100%" />');
		}, function(err){
			alert("Error: "+err.code);
		}, {limit:2});
}
