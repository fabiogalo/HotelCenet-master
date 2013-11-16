// eventos
/*jQuery(document).ready(function(){	
	var boton = document.getElementById('regEnv');
	boton.addEventListener("click", function (){
		alert();
	}, false);
});*/

$(function(){
	document.addEventListener("deviceready", function(){
		if (!estaRegistrado()){ //sino esta registardo nos manda a la pagina de registro
			window.location.href="#registro";
		}
		$('#regEnv').click (function (){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' & foto != undefined){
				enviarDatos(nom, mail, tel, foto); //Manda llamar la funcion desde eventos
			}
			else {
				navigator.notification.alert('Todos los campos seon requeridos', null, 'Error', 'ACEPTAR');
			}
		});
		
		//Tomar foto
		$('#regFoto').click(function(){
			tomarFoto();
		});
		
	}, false);
});
