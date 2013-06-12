$(function(){
	PREURL="http://sig.infonavit.org.mx/operacionhipotecaria/fichatecnica/FichaTecnicaJuridicaAction.do?numeroCredito="
	POSTURL="&nombreVendedor=&salarioReferencia=0&gastoCobranza=0&estatusVivienda=&perfilAcreditado=&telefonoGarantia=&telefonoAcreditado=&observaciones="
	$(".form-search").submit(function(){
		credito = parseInt($(".search-query").val())
		if(isNaN(credito)){
			alert("El numero de credito contiene caracteres invalidos");
		}else{
			num = String(credito);
			credito = num;
			URL = PREURL + credito + POSTURL;
			window.open(URL, '_blank');
			win.focus();
		}
	})
});