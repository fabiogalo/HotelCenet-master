// eventos
/*jQuery(document).ready(function(){	
	var boton = document.getElementById('regEnv');
	boton.addEventListener("click", function (){
		alert();
	}, false);
});*/

$(function(){
	document.addEventListener("deviceready", function(){
		alert();
		if (!estaRegistrado()){ //sino esta registardo nos manda a la pagina de registro
			window.location.href="#registro";
		}
		$('#regEnv').click(function (){
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
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		
	//eventos para tipo habitaciones sensillas, dobles, etc
	//Acciones de nueva reserva
	$('#nr1 ul:eq(0) li').tap(function(){
		if($(this).index()>0){
			$('#nr1 ul:eq(0) li').css('background', '');
			$(this).css('background','yellow');
			$('#nr1').attr('th',$(this).index());			
		}
	});
	$('#nrsig').tap(function(){
		if($('#nr1').attr('th') != undefinded && $('#nr1').attr('th') != '')
			window.location.href = '#nr2';
	});
	
	$('#resEnv').tap(function(){
		var pr = $('#resPer').val();
		var ha = $('#resHab').val();
		var di = $('#resDia').val();
		var th = $('#nr1').attr('th');
		
		//Preguntamos si esta conectado o no a internet
		if(estaConectado())
			enviarReservas(th, pr, ha, di);//Sincronizamos datos con el servidor
		else
			crearReservas(th, pr, ha, di);	//Guardamos datos localmente
	});
	}, false);
});
