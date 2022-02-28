function cut_fruit_pieces(fruit) {
    return fruit * 4;
}

function fruit_processor(apples, oranges) {
    const apple_pieces = cut_fruit_pieces(apples);
    const orange_pieces = cut_fruit_pieces(oranges);
    const juice = `Juice with ${apple_pieces} pieces of apple, and ${orange_pieces} pieces \
of orange.`

    return juice
}

console.log(fruit_processor(2, 3))