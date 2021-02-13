//algo
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {  
    try{
        let salida, consola = '';
        if(listar){
            console.log("===============".green);
            console.log('Tabla del ', colors.blue( base ) );
            console.log("===============".underline.green);

            for( let indice = 0 ; indice<=hasta; indice++ ){

                salida+= `Valor de ${base} X ${indice} = ${ base * indice } \n` ;
                consola+= `Valor de ${base} ${ 'X'.random } ${indice} = ${ base * indice } \n` ;
   
            }

            console.log(consola.italic.green);
        }
        
        fs.writeFileSync( `./salida/tabla-${base  }.txt`, salida);

        return `tabla-${base  }.txt`;
    }catch ( error ) {
        throw error;
    }
    

}

module.exports = {
    crearArchivo
}