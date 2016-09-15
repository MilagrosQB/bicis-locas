function validateForm(){
//Campos obligatorios	
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var contrasena = document.getElementById('input-password').value;


	if(name == null || name.length == 0 || /^\s+$/.test(name)){
		alert('El campo nombre es obligatorio');
		return false;
		}
	if(lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)){
		alert('El campo apellido es obligatorio');
		return false;
	}
	if(contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena)){
		alert('El campo apellido es obligatorio');
		return false;
	}

//Mayusculas y Letras
	var condicion = /^[a-zA-Z]*$/;
    if(!valor.search(condicion))
          console.log ("letra");
     else
         alert ("Ingrese datos válidos (A-Z)");

//Contraseña

  if(document.getElementById('input-password').value.length < 6){
    alert("Inserte una contraseña con mínimo 6 caracteres")
  }

  if (contrasena == "123456" || contrasena == "password" || contrasena == "0987654"){
    alert ("Ingrese una contraseña válida");
  }

//Selector
  if(document.getElementsByTagName('select')[0].value == 0){
    alert("Selecciona un tipo de bici");
    }

}

