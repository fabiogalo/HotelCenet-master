// eventos
/*jQuery(document).ready(function(){	
	var boton = document.getElementById('regEnv');
	boton.addEventListener("click", function (){
		alert();
	}, false);
});*/

$(function(){
	document.addEventListener("deviceready", function(){
		window.location.href="#registro";
		$('#regEnv').click (function (){
			var nom = $('#regNom').val();
			var mail = $('#regEma').val();
			var tel = $('#regTel').val();
			
			if(nom != '' && mail != '' && tel != ''){
				enviar datos(nom, mail, tel);//Manda llamar la funcion desde eventos.js
			}
			else {
				navigator.notification.alert('Todos los campos seon requeridos', null, 'Error', 'ACEPTAR');
			}
		});
	}, false);
});
