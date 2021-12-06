//Función descuento a jubilados.

 let descuentoJubilado = () =>{

    if(jubilado.value == 1){
        return true;
    }
    else{
        return false;
    }

}
//Evento simular prestamo.

let simular = document.getElementById("simular");

simular.addEventListener("click", function(){
    
    let monto = document.getElementById("monto");
    let cuotas = document.getElementById("cuotas");
    let jubilado = document.getElementById("jubilado");
    let mensaje = document.getElementById("mensaje");
    
    let lista = document.getElementById("lista");

    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML =  `<h2>Aqui debajo, el resumen de tu prestamo:</h2>

                          El monto a prestar es : ${monto.value}<br>
                          La opcion de cantidad de cuotas elegida es la : ${cuotas.value} `
                          ;
   
   
    lista.appendChild ( nuevoLi );

    if(jubilado.value == true){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `Usted cuenta con descuento por jubilado`;
        mensaje.appendChild(parrafo);

   }
   else{
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `Usted no cuenta con descuento por jubilado`;
    mensaje.appendChild(parrafo);
   }

})

//Evento simular devolución.

    let devolucion = document.getElementById("devolucion");

    devolucion.addEventListener("click", function(){

        let interes = () =>{

            if(cuotas.value == 1){
                return monto.value * 0.25;
            }
            else if(cuotas.value == 2){
                return monto.value * 0.45;
            }
            else if(cuotas.value == 3){
                return monto.value * 0.65;
            }
            else if(cuotas.value == 4){
                return monto.value * 0.90;
            };
    
        }
        let descuento = () =>{
        if (descuentoJubilado() == true){
            return monto.value * 0.10;
        }
        else{
            return 0;
        }
    }
       
        let div = document.getElementById("div");
    
        let nuevoh2 = document.createElement("h2");
    
            nuevoh2.innerHTML =  `<h2>Aqui debajo, el monto a devolver: </h2>
    
                              El monto a pagar una vez finalizadas las cuotas seleccionadas es de : $${(parseInt(monto.value) + interes()) - descuento()}<br>`
                              ;
       
       
        div.appendChild ( nuevoh2 );

    })

       
class usuario{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}
let usuarioRegistrado = [];

let registro = document.getElementById("registrarse");

registro.addEventListener("click", function(){

    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nuevoUsuario =new usuario(email,password);
    usuarioRegistrado.push(nuevoUsuario);
    
        ususarioJSON = JSON.stringify(usuarioRegistrado);
        localStorage.setItem("1",ususarioJSON);
    
})


 
 
