
// Como se define una funcion (statement)
// se define con la palabra function <nombre> (...)

// Defino una funcion que calcule la potencia de X elevado a la y
function calculePotencias(pX, pY = 2) {
    // Ejemplo si pNumero es 8, entonces el resultado seria
    // 2 ** 8 = 256
    let resultado = 1;

    for (let index = 0; index < pY; index++) {
        resultado = resultado * pX;
    }

    return resultado;
}


// Defino una funcion que calcule la potencia de 2
function calculePotenciasde2(pNumero ) {
    // Ejemplo si pNumero es 8, entonces el resultado seria
    // 2 ** 8 = 64
    let resultado = calculePotencias(2, pNumero);

    return resultado;
}

// Defino una funcion que calcule la potencia de 2
function calculeElevadoal2(pNumero) {
    // Ejemplo si pNumero es 8, entonces el resultado seria
    // 8 ** 2 = 64
    let resultado = calculePotencias(pNumero); // Si no le paso el segundo parametro , uso el definido por defecto

    return resultado;
}


// Funciones sin nombre... son anonimas
// Funciones expression porque se asignan a una expresion, variable, constante, etc.
// Como diferencia, hasta que no se asigno la expresion, la funcion no existe.
if ( true ) { // pueden probar cambiarlo a false
    var calculadoraPotencias2 =  function (pNumero) {
        // Ejemplo si pNumero es 8, entonces el resultado seria
        // 2 ** 8 = 64
        let resultado = 1;
    
        for (let index = 0; index < pNumero; index++) {
            resultado = resultado * 2;
        }
    
        return resultado;
    }
}

// las funciones anonimas pueden ser llamadas sin asignar a una expresion?

var saludo = (function () {
    console.log("Hola, soy una funcion anonima");
}); 
saludo();

// Equivalente
(function () {
    // Esta variable tiene alcance dentro de la funcion anonima
    let unaVariable = 0;

    console.log("Hola, soy una funcion anonima sin definir expresion");
})();

// funcion del iva con anonimas..
const ivafAnonima = function (x) {
    return x * 0.21;
}

// Funcion anonima con arrow function
const ivaFArrow = (x) => { return x * 0.21};

// Aun mas simplificada
const ivaFArrow2 = x =>  x * 0.21;

