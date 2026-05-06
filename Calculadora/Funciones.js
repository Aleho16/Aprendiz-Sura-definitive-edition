/* let visitas = 0
function contador(NumeroVisitas) {
    return visitas + NumeroVisitas
}
console.log(visitas)
console.log(contador(5))


function sumar(uno, dos) {
    return uno + dos;
}
let SumarDosNumeros = sumar(5, 3);
console.log(SumarDosNumeros) */

/* for (let numero = 0; contador < 5; numero++) {
    console.log (numero);
    
    
} */
/* let i=0



while (i<6) {
    console.log (i)
    i++

    
} */

/*Calculadora (if / else if / else) (switch)
tipo operación */
const boton = document.getElementById('Calculadora')
boton.addEventListener('click', function () {
    for (let index = 0; index < 11; index++) {
        let menu = prompt("Calculadora\n________________________\n________________________\n 1.suma\n 2.resta\n 3.multiplicacion\n 4.division\n 5.salir")
        if (menu == 1) {
            let num1 = parseFloat(prompt("Ingresa el primer numero"))
            let num2 = parseFloat(prompt("Ingresa el segundo numero"))
            let resultado = num1 + num2
            alert("tu resultado es : " + resultado)

        } else if (menu == 2) {
            let num1 = parseFloat(prompt("Ingresa el primer numero"))
            let num2 = parseFloat(prompt("Ingresa el segundo numero"))
            let resultado = num1 - num2
            alert("tu resultado es : " + resultado)

        } else if (menu == 3) {
            let num1 = parseFloat(prompt("Ingresa el primer numero"))
            let num2 = parseFloat(prompt("Ingresa el segundo numero"))
            let resultado = num1 * num2
            alert("tu resultado es : " + resultado)
        } else if (menu == 4) {
            let num1 = parseFloat(prompt("Ingresa el primer numero"))
            let num2 = parseFloat(prompt("Ingresa el segundo numero"))
            let resultado = num1 / num2
            alert("tu resultado es : " + resultado)
        } else if (menu == 5) {
            break
        } else {
            alert("Error, dato incorrecto, ingresa una de las opciones")
        }
    }
})

const botonto = document.getElementById('Tabla')
botonto.addEventListener('click', function () {
    for (let ind = 0; ind < 6; ind++) {
        let menu = prompt("Tablas de multiplicar\n________________________\n________________________\n 1.Tabla del 1\n 2.Tabla del 2\n 3.Tabla del 3\n 4.Tabla del 4\n 5.Tabla del 5\n 6.Tabla del 6\n 7.Tabla del 7\n 8.Tabla del 8\n 9.Tabla del 9\n 10.Tabla del 10\n 11.Salir")
        if (menu == 1) {
            let i = 1
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 2) {
            let i = 2
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 3) {
            let i = 3
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 4) {
            let i = 4
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 5) {
            let i = 5
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 6) {
            let i = 6
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 7) {
            let i = 7
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 8) {
            let i = 8
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 9) {
            let i = 9
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 10) {
            let i = 10
            let ito = 1
            for (let index = 0; index < 10; index++) {

                let iresult = i * ito
                alert("Tabla del 5\n" + i + "x" + ito + "=" + iresult)
                ito++

            }

        } else if (menu == 11) {
            break
        } else {
            alert("Error, ingresa un valor valido")
        }


    }

    alert("Gracias por utilizarme")

})

function tablamulti() {
    multip = []
    for (let i = 1; i < 11; i++) {
        multip[i]= []
        for (let io = 1; io < 11; io++) {
            /* multip[i].push((i * io)) */
            multip[i][io]=i * io
        }

    }
    console.table(multip)

}

const arrayt = document.getElementById('Tablafull')
arrayt.addEventListener('click', tablamulti)




/* let nombre = "Ana"
let cambio = nombre.split('')
let reverse = cambio.split("").reverse().join("")
console.log(reverse) */


const palindromo = document.getElementById('Palin')
palindromo.addEventListener('click', function () {
    for (let index = 0; index < 1; index++) {
        let usuario = prompt("ingresa una palabra")
        let usuariosinespacios = usuario.replaceAll(' ','');
        let reversa = usuariosinespacios.split('').reverse().join('')
        console.log(reversa)

        if (usuariosinespacios == reversa) {

            alert(usuario + " es un palindromo")

        } else {
            alert(usuario + " no es un palindromo")
        }

    }
}
)

let usuario = "anita lava la tina"
let oo = usuario.split(" ").join("")
console.log(oo)