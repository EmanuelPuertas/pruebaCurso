// ejercici perfil : Administrador, asistente o invitado
//switch

/*let perfil = "administrador";

switch (perfil){
    case " ":
        console.log("Debe especificar el  perfil del usuario");
        break;
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;    
    case "asistente":
    case "ASISTENTE":
    case "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break; 
    case "invitado":
    case "INVITADO":
    case "Invitado":
        console.log("Usted sólo tiene permisos para consultar datos");
        break; 
    default: 
        console.log("Debe especificiar un perfil valido");
}
*/
//con if y else
let perfil = "asistente";

if(perfil == " "){
    console.log("Debe especificar el  perfil del usuario");
}else if(perfil == "administrador" || perfil == "ADMINISTRADOR" ||perfil == "Administrador"){
    console.log("Usted tiene todos los privilegios de uso del sistema");
}else if(perfil == "asistente" || perfil == "Asistente" ||perfil == "Asistente"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}else if(perfil == "invitado" || perfil == "INVITADO" ||perfil == "Invitado"){
    console.log("Usted sólo tiene permisos para consultar datos");
}else{
    console.log("Debe especificiar un perfil valido");
}