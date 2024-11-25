
let electro = ['microondas','cocina','lavarropas','estufa','batidor','smartv'] 


// ejercicio 4 parte a
let randomElectro = electro[(Math.floor(Math.random() * (electro.length)))];
console.log("el objeto random es :",randomElectro);


//ejercicio 4 parte b

let electroEliminado = electro.shift ();

console.log(electro);
console.log("el objeto eliminado es:",electroEliminado);
electro.push(electroEliminado);
console.log("el elemento eliminado paso al final del array...",electro)

//ejercicio 4 parte c
electro.push ('celulares','congelador');
 console.log("los elementos agregdos son:",electro);

//ejercicio 4 parte d
//let electro = ['microondas','cocina','lavarropas','estufa','batidor','smartv'] 
console.log("mostramos los elementos que contiene la array",electro);

//ejercicio 4 parte e

function buscadorElectro (array) { 
    let electrodomesticos = electro.indexOf(array);
    if(electrodomesticos >= 0){
        console.log("producto encontrado\n");
    }
    else{ console.log("\nel producto buscado no existe.\n");
    }
}

buscadorElectro("casa");
buscadorElectro("microondas");


//ejercicio 4 parte f
let espacios = electro.join(' ') ;
console.log("Podemos ver los arrays como un strings con espacios:",espacios)

//ejercico 4 parte g

console.log("la cantidad de elementos que contiene la cadena de texto obtenida de strings es:",electro.length);


//ejercicio 4 parte h
electro.splice (1,1, "motorolaG54");
console.log(electro);

//ejercicio 4 parte i
let teHagoString = electro.join(', ');
teHagoString = teHagoString.split(" ")
console.log(teHagoString)
