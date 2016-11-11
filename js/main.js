function enviarMensaje(){

		var inputMensaje = document.getElementById('mensajes').value;
		var Chatcontenedor = document.getElementById('chat');

//CREANDO ELEMENTOS

		//div contenedor
		 var contenedorMensajes= document.createElement("div");
		//div contenedor
		 var nuevoMensaje= document.createElement("div");
		 //parrafo para mensaje
 		 var unMensaje = document.createElement("p");
 		 //div contenddor de hora
 		 var horaConexion = document.createElement("div");

 		 var nodohora = document.createTextNode("10:30");
 		 var nodoP = document.createTextNode(inputMensaje);


//DANDO CLASES Y ATRIBUTOS A LOS ELEMENTOS

		contenedorMensajes.setAttribute('class','w-message w-message-out');
		nuevoMensaje.setAttribute('class','w-message-text');
		horaConexion.setAttribute('class','time');



 horaConexion.appendChild(nodohora);
  unMensaje.appendChild(nodoP);
  nuevoMensaje.appendChild(unMensaje);
  nuevoMensaje.appendChild(horaConexion);
  contenedorMensajes.appendChild(nuevoMensaje);
  Chatcontenedor.appendChild(contenedorMensajes);


  	// para volver a dejar vacio el input
  	inputMensaje = document.getElementById('mensajes');
		inputMensaje.value="";

}


//cambiar header

function cambiarUsuario(){
	var perfileUno = document.getElementById('uno');
	var listaUL = document.getElementById('lista');
	var usuarioNuevo = document.getElementById('usuario-nuevo');


	//CREANDO ELEMENTOS

		//div contenedor avatar
		 var contenedorAvatar= document.createElement("div");
		//div imagen
		 var imagen= document.createElement("img");
		 //nombre persona
 		 var nombreAvatar = document.createElement("h4");
 		 //nombre persona 2
 		 var liAvatar = document.createElement("li");
 		 //

 		 //nodo textposs

 		 var nodoH4 = document.createTextNode("Raymi Saldomando");
 		 var liNodo = document.createTextNode(" NO ME FUNCIONO :(");
 		 



//DANDO CLASES Y ATRIBUTOS A LOS ELEMENTOS

		contenedorAvatar.setAttribute('class','col-xs-9 w-chat-profile');
		imagen.setAttribute('src','image/raymi.jpg');

		imagen.setAttribute('class','wh-44');
		nombreAvatar.setAttribute('class','w-contact-name');


		 nombreAvatar.appendChild(nodoH4);
		listaUL.appendChild(liNodo);
		listaUL.appendChild(liNodo);
contenedorAvatar.appendChild(imagen);
contenedorAvatar.appendChild(nombreAvatar);
contenedorAvatar.appendChild(liAvatari);
usuarioNuevo.appendChild(contenedorAvatar)






}

