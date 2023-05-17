// Esta función me permite tomar una carta

/**
 * 
 * @param {array<string>} deck 
 * @returns {String}  una carta
 */
export const pedirCarta = (deck) => {

    if(!deck) throw new Error ('El deck es obligaotorio');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}