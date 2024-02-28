/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ['roze', 'tulpe', 'narcizas', 'neuzmirstuole', 'kiaulpiene', 'zibute', 'gvazdikas', 'papartis', 'pakalnute', 'ragane'];
console.log(augalai);
/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
console.log(augalai);
/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

for (let index = 0; index>augalai; index--) {
    console.log(augalai[index]);
    
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let trumpesni = 0;
let ilgesni = 0;

for (let index = 0; index < augalai.length; index++) {
    if (augalai[index] > 5) {
        trumpesni >= augalai[index];
    } else {
        ilgesni <= augalai[index];
    }
    
}
console.log('augalai',augalai);
console.log('trumpesni nei 5', trumpesni);
console.log('ilgesni nei 5', ilgesni);