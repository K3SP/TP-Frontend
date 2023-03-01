'use strict'

const grande = document.querySelector(".grande")
const puntito = document.querySelectorAll(".puntito")

puntito.forEach( ( cadaPuntito , i)=> {
    puntito[i].addEventListener('click', ()=>{

    let posicion = i
    let operacion = posicion * -26.5

    grande.style.transform = `translateX(${ operacion }%)`

    
    })
})

document.getElementById("pimg1").onclick = function () {
    document.getElementById("txt-nombres").innerHTML = "Jorge y Clotilda";
    document.getElementById("txt-historia").innerHTML = "Clotilda ya no daba leche, estaba triste, pero gracias al Dr. Suárez logramos ayudarla a salir adelante y recuperar sus buenos animos";
}
    
document.getElementById("pimg2").onclick = function () {
    document.getElementById("txt-nombres").innerHTML = "Lucrecia, Moro y Lupita";
    document.getElementById("txt-historia").innerHTML = "Moro y Lupita no se podían ni ver, se odiaban, pero la intervención del maravilloso Dr. Suárez llegó justo a tiempo. Ahora son amiguitos";
}


document.getElementById("pimg3").onclick = function () {
    document.getElementById("txt-nombres").innerHTML = "Sebastián y Rodolfo";
    document.getElementById("txt-historia").innerHTML = "Crié a Rodolfo desde que era un cachorro, pero siempre supe que su hogar estaba en la naturaleza, el Dr. Suárez nos ayudó a dar ese paso";
}

document.getElementById("pimg4").onclick = function () {
    document.getElementById("txt-nombres").innerHTML = "Maira, Lucas y Carlitos";
    document.getElementById("txt-historia").innerHTML = "Mi perro y mi pareja no compatibilizaban, yo ya pensaba en separarme, pero el Dr. Suárez arregló la relación entre mis dos amores";
}

document.getElementById("citas").onclick = function () {
    alert("Lo sentimos! Nuestra agenda está completa hasta agosto de 2024. Si requiere una cita urgente comuniquese por teléfono o acerquese a nuestras instalaciones para brindarle un mejor asesoramiento.");
}

