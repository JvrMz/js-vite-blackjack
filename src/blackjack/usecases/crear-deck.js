// Aqui quiero tener la función de crear deck. Así separamos el código por funcionalidades.

// Gracias a vite puede funcionar como módulos.
// *********Cómo hago referencia a los tipos especiales que necesita?
// ** lo envio como argumento y  también import de shuffle
import _ from 'underscore';

/**
 * 
 * @param {array<string>} tiposDeCarta 
 * @param {array<string>} tiposEspeciales 
 * @returns {array<string>} retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    // condicionales de los parámetros:
    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligaotorio como un array de string'); // tiene que ser mayor que cero 
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligaotorio como un array de string'); // tiene que ser mayor que cero 

    let deck         = []; // lo creo aqui porque sino no estaba en el scope.

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck; // Al importarlo puedo llamarle como quiera, al ser por defecto lo recibe siempre
