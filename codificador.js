    var textarea1=document.getElementById("entrada");
    textarea1.focus();
//validar
    function validarTexto(string){
        var salida = '';
        //añadiendo las letras validas
        var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
        for (var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            salida += string.charAt(i);
        return salida;
    }
//Encriptar
    function encriptar() {

        var frase = textarea1.value;

        if ((textarea1.value).length==0) {
            document.getElementById("ad").style.color="red";
            //mensaje cuando no se ingresa nada de texto
            document.getElementById("ad").innerHTML="inserte un valor valido";
            textarea1.focus();
        }
        else{
            //aqui se reemplaza los valores insertados en el textarea inicial
            var cambiar = frase.replace(/e/igm,"enter");
                cambiar = cambiar.replace(/i/igm,"imes");
                cambiar = cambiar.replace(/a/igm,"ai");
                cambiar = cambiar.replace(/o/igm,"ober");
                cambiar = cambiar.replace(/u/igm,"ufat");
            document.getElementById("result").innerHTML=cambiar;
            //advertencia de caracteres
            document.getElementById("ad").style.color="#E9ECF8";
            document.getElementById("ad").innerHTML="Solo se admiten palabras en minusculas y sin caracteres especiales";

        }
        //ocultar las alertas despues de copiar o que hubiera un error
        document.getElementById("exito2").style.display="none";
        document.getElementById("exito").style.display="none";
        document.getElementById("exito3").style.display="none";
        //intercambio de cards
        document.getElementById("resultado_main").style.display="flex";
        document.getElementById("sinTexto").style.display="none";
        //repitiendo condicion para regresar la card de sinTexto
        if ((textarea1.value).length==0){
            document.getElementById("resultado_main").style.display="none";
            document.getElementById("sinTexto").style.display="flex";
        }
    }
//Desencriptar el texto
    function desEncriptar() {

        var frase = textarea1.value;

        if ((textarea1.value).length==0) {

            document.getElementById("ad").style.color="red";
            document.getElementById("ad").innerHTML="inserte un valor valido";
            textarea1.focus();
        }
        else{
            var cambiar1 = frase.replace(/enter/igm,"e");
                cambiar1 = cambiar1.replace(/imes/igm,"i");
                cambiar1 = cambiar1.replace(/ai/igm,"a");
                cambiar1 = cambiar1.replace(/ober/igm,"o");
                cambiar1 = cambiar1.replace(/ufat/igm,"u");
            document.getElementById("result").innerHTML=cambiar1;
            //advertencia de caracteres
            document.getElementById("ad").style.color="#E9ECF8";
            document.getElementById("ad").innerHTML="Solo se admiten palabras en minusculas y sin caracteres especiales";
        }
        //ocultar las alertas despues de copiar o que hubiera un error
        document.getElementById("exito2").style.display="none";
        document.getElementById("exito").style.display="none";
        document.getElementById("exito3").style.display="none";
         //intercambio de cards
        document.getElementById("resultado_main").style.display="flex";
        document.getElementById("sinTexto").style.display="none";
         //repitiendo condicion para regresar la card de sinTexto
        if ((textarea1.value).length==0){
            document.getElementById("resultado_main").style.display="none";
            document.getElementById("sinTexto").style.display="flex";
    }


//funcion para copiar texto al portapapeles
    function copiar() {

        const copiarText = document.getElementById("result");
        if ((copiarText.value).length==0) {
            //mostrando el mensaje: no hay texto para copiar
            document.getElementById("exito2").style.display="flex";
        }
        else{
            navigator.clipboard.writeText(copiarText.value)
            .then(() => {
                //mostrando un mensaje de copiado exitoso
                document.getElementById("exito").style.display="flex";
            })
            .catch(() => {
                //mostrando un mensaje de que algo salio mal
                document.getElementById("exito3").style.display="flex";
            });
        }
    }
//llamado a los botones de encriptar desencriptar y copiar
    var btnEnc=document.getElementById("encriptar");
    btnEnc.onclick=encriptar;

    var btnDesEnc=document.getElementById("desEncriptar");
    btnDesEnc.onclick=desEncriptar;

    var btnCopy=document.getElementById("copiar");
    btnCopy.onclick=copiar;
//saludos! :)
