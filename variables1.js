//TRABAJO DE VIDELA ORDOÑEZ JUAN 

// VARIABLES OBJETOS LITERALES
let silo1 = {
    cereal: "maiz",
    capacidad: 20000,
    stock: 3000,
};

let silo2 = {
    cereal: "soja",
    capacidad: 10000,
    stock: 0,
};



let nombreUsuario = prompt("INGRESE SU NOMBRE POR FAVOR");

//FUNCION MOSTRAR MSJ
function mostrarMensaje(mensaje){
    console.log(mensaje);
    alert(mensaje);
}

//INGRESAR MAIZ

function ingresarMaiz() {
    let cantidadIngresada = null;
  
    while (cantidadIngresada === null) {
      const kg = parseInt(prompt("INGRESE CANTIDAD A INGRESAR"));
  
      if (isNaN(kg) || kg <= 0) {
        mostrarMensaje("LA CANTIDAD DEBE SER UN NUMERO POSITIVO");
      } else if (kg > silo1.capacidad) {
        mostrarMensaje("LA CANTIDAD INGRESADA SUPERA LA CAPACIDAD");
      } else if (kg > (silo1.capacidad - silo1.stock)) {
        mostrarMensaje("LA CANTIDAD INGRESADA SUPERA EL ESPACIO DISPONIBLE");
      } else {
        silo1.stock += kg;
        mostrarMensaje(`EL MAIZ HA INGRESADO CORRECTAMENTE, EL NUEVO STOCK ES: ${silo1.stock} KG`);
        mostrarMensaje("OPERACION FINALIZADA, MUCHAS GRACIAS");
        cantidadIngresada = kg;
      }
    }
  }

  //INGRESAR SOJA

function ingresarSoja() {
    let cantidadIngresada = null;
  
    while (cantidadIngresada === null) {
      const kg = parseInt(prompt("INGRESE CANTIDAD A INGRESAR"));
  
      if (isNaN(kg) || kg <= 0) {
        mostrarMensaje("LA CANTIDAD DEBE SER UN NUMERO POSITIVO");
      } else if (kg > silo2.capacidad) {
        mostrarMensaje("LA CANTIDAD INGRESADA SUPERA LA CAPACIDAD");
      } else if (kg > (silo2.capacidad - silo2.stock)) {
        mostrarMensaje("LA CANTIDAD INGRESADA SUPERA EL ESPACIO DISPONIBLE");
      } else {
        silo2.stock += kg;
        mostrarMensaje(`EL MAIZ HA INGRESADO CORRECTAMENTE, EL NUEVO STOCK ES: ${silo2.stock} KG`);
        mostrarMensaje("OPERACION FINALIZADA, MUCHAS GRACIAS");
        cantidadIngresada = kg;
      }
    }
  }
  

// INGRESAR CEREAL
function ingresoCereal(){
    
    do{
        cereal = parseInt(prompt(`
            INGRESE EL CEREAL A INGRESAR:
            1- MAIZ
            2- SOJA
            3- SALIR
            `));
        

        switch(cereal){
            case 1:
                
                ingresarMaiz();
                break;
            case 2:
                
                ingresarSoja();                
                break;
            case 3:
                mostrarMensaje("OPERACION FINALIZADA, MUCHAS GRACIAS");
                break;
            default:
                mostrarMensaje("OPCION INCORRECTA. INTENTE NUEVMENTE");
            }
        


    } while(opcion != 3);
    
}

// FUNCION ESTADO
function stock(){
    

    // Silo 1
    mostrarMensaje(`Estado de los silos:
    Silo 1:
    Cereal: ${silo1.cereal}
    Stock: ${silo1.stock} toneladas
    Disponible: ${silo1.capacidad - silo1.stock}
    
    Silo 2:
    Cereal: ${silo2.cereal}
    Stock: ${silo2.stock} toneladas
    Disponible: ${silo2.capacidad - silo2.stock}
   
    `)

}





//FUNCION PRINCIPAL

function iniciarGestionStock(){
    let opcion;
    
    mostrarMensaje(`BIENVENIDO ${nombreUsuario} AL SISTEMA DE GESTION DE STOCK`)
    do{
        opcion = parseInt(
            prompt(
            `**BIENVENIDO ${nombreUsuario} AL SISTEMA DE GESTION DE STOCK**
            1- CONSULTAR STOCK
            2- INGRESO CEREAL
            3- SALIR`
            )       
        )
        switch(opcion){
            case 1:
                stock();
                break;
            case 2:
                ingresoCereal();
               
                break;
            case 3:
                mostrarMensaje("OPERACION FINALIZADA, MUCHAS GRACIAS");
                break;
            default:
                mostrarMensaje("OPCION INCORRECTA. INTENTE NUEVMENTE");
            }
        


    } while(opcion != 3);
}
iniciarGestionStock();


