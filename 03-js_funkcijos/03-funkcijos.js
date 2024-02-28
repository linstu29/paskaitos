// console.log('Kontrolinis spausdinimas');

// let rezultatas = testineFunkcija();
// console.log(rezultatas)
// console.log(testineFunkcija());



/** Si funkcija isveda kontrolini spausdinima i konsole ir grazina reiksme
 *  param1 - pirminis argumentas
 */


/* function testineFunkcija() { 
    console.log("spausdinimas is funkcijos vidaus");
    return 888888;

} */


/* function pasisveikinti() {
    console.log('labas krabas');
}

pasisveikinti(); */

/* console.log("-----1 uzduotis -----");


function apieMane() {
    console.log('Mano vardas Lina. Pragramavima pasirinkau del darbo.');
    
}

apieMane();
apieMane();
apieMane();


console.log("-----2 uzduotis -----");

function eilerastis() {
    console.log('Du gaideliai, du gaideliai');
    console.log('Baltu zirnius kule');
    console.log('Dvi visteles, dvi visteles');
    console.log('i maluna veze');
    console.log('ir taip toliau');
    
}

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();


console.log("-----3 uzduotis -----");


function pirma() {
    console.log('Miegancioji grazuole');
}

function antra() {
    console.log('Pelene');
}

function trecia() {
    console.log('Snieguole');
}


pirma();
antra();
trecia(); */


/* function skaicius() {
    let skaicius1 = 6;
    let skaicius2 = 7;
    console.log(skaicius1 + skaicius2)

}

skaicius();
skaicius();
skaicius();
skaicius();


function policininkas() {
    let informacija  = {
        vardas: 'Tomas',
        pavarde: 'Tomaitis',
        amzius: 28,
        alga: 1200,
        etatas: 1,
    specializacija: kriminalistas,
    }
    console.log('Informacija:', informacija[vardas], informacija[pavarde], informacija[amzius], informacija[alga], informacija[etatas], informacija[specializacija]);
}

policininkas(); */


/* function pasisveikinti(vard, pavard) {
    console.log('labas,', vard, pavard);
}


let vardas = 'Tomas';
let pavarde = 'Tomauskas';

pasisveikinti(vardas, pavarde);
pasisveikinti(vardas, 'Abromas');
pasisveikinti('Gintare', pavarde);
pasisveikinti('Jonas', 'Jonauskas'); */


/* function skaiciu_suma(a,b) {
    let suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}

skaiciu_suma(6, 5);
skaiciu_suma(4, 9);

let atsitikt1 = Math.floor(Math.random() * 10) + 1;
let atsitikt2 = Math.floor(Math.random() * 10) + 1;


skaiciu_suma(atsitikt1,atsitikt2); */

/* function suma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

function skirtumas(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

let sk1 = Math.floor(Math.random() * 10) + 1;
let sk2 = Math.floor(Math.random() * 10) + 1;


suma(sk1, sk2);
skirtumas(sk1, sk2); */

/* function pasisveikinimas(vard) {
    console.log('labas', vardas);
}

function pasisveikinimas1(vardas) {
    console.log('Viso gero', vardas);
}
let vardas = 'Tomas'; 


pasisveikinimas(vardas);
pasisveikinimas1(vardas); 


function number(number1, number2) {
    if(number1 > number2) {
        console.log(`${number1} didesnis uz ${number2}`);
    } else if (number1 === number2) {
        console.log(`${number1} lygus skaiciui ${number2}`);
    } else {
        console.log(`${number1} maziauz skaiciu ${number2}`)
    }
}

number(3, 8);
number(5, 4);
number(8, 9); */


/* function automobilis(marke, modelis, metai) {
   console.log(`${marke},${modelis},${metai},`)
}

automobilis('nissan', 'juke', 2023);
automobilis('audi', 'A3', 2022);
automobilis('toyota', 'yaris', 1996);



function suma(nr1, nr2) {
   let suma = nr1 + nr2;
   console.log(`${nr1} + ${nr2} = ${suma}`);

}

function suma1(nr1, nr2) {
   let suma1 = nr1 * nr2;
   console.log(`${nr1} * ${nr2} = ${suma1}`);

}

function suma2(nr1, nr2) {
   let suma2 = nr1 / nr2;
   console.log(`${nr1} / ${nr2} = ${suma2}`);

}
suma(25, 5);
suma1(8, 2);
suma2(9, 3);

function neaiskumas() {
   let sk1 = Math.floor(Math.random() * 10) +1;
   let sk2 = Math.floor(Math.random() * 10) +1;
   suma(sk1, sk2);
   suma1(sk1, sk2);
   suma2(sk1, sk2);

}
for (let i = 0; i <3; i++) {
   neaiskumas();
} */

/*
Funkcija, kuri sugeneruoja atsitiktini skaiciu nurodytuose reziuose 
*/
/* function atsitiktinisReziuose(virsutinis, apatinis) {
   return Math.floor(Math.random() * (virsutinis - apatinis +1) +apatinis);
}

let atsitiktinis = atsitiktinisReziuose(1000, 9999);
console.log(atsitiktinis); */

/* function masyvoPapildymas(reiksme, masyvas) {
    masyvas.push(reiksme);
}


function masyvoSpausdinimas(masyvas) {
    for (const reiksme of masyvas) {
        console.log(reiksme);
    }
}

let skaicius = [];
masyvoPapildymas(1234, skaicius);
masyvoPapildymas(1234, skaicius);
masyvoPapildymas(1234, skaicius);
masyvoPapildymas(1234, skaicius);
masyvoSpausdinimas(skaicius); */

/* console.log('-----uzduotis 13 ----');

function zodziuMasyvas(masyvas) {
    for (const value of masyvas) {
        console.log(value, value.lenght);       
        }
    }

let transportas = ['automobilis', 'lektuvas', 'taukinys'];
zodziuMasyvas(transportas); */



/* console.log('-----uzduotis 14 ----');

function skaiciuIsvestis(skaiciai) {
    for (const value of skaiciai) {
        console.log(value);
    }
}

let skaiciai1 = [2, 4, 8];
skaiciuIsvestis(skaiciai1); */


/* console.log('-----uzduotis 15 ----');


function studentoMasyvas(vp, paz) {
    console.log('Studentas', vp + '; Pazymiai', paz.join(','));
    let suma = 0;
    for (const pazimys of paz) {
        suma += pazimys;
    }
  let vidurkis = suma / pazimys.length;
  console.log('Vidurkis:', vidurkis);
}

let studentai = [
    {vard_pavard: "Vardenis Pavardenis", pazymiai: [10, 9, 8, 10, 7]},
    {vard_pavard: "Tomas Tomaitis", pazymiai: [6, 9, 8, 10, 7]},
    {vard_pavard: "Gabija Gabijyte", pazymiai: [7, 7, 6, 10, 7]},
];

for (const studentas of studentai) {
    studentoMasyvas(studentas['vard_pavard'], studentas['pazymiai']);
} */




/* console.log('-----uzduotis 17 ----');


function sakinys() {
    return 'I am dead inside. Please let me go.';
}

console.log(sakinys());


console.log('-----uzduotis 18 ----');


function random(skaicius) {
    console.log(skaicius);
}


let skaicius = Math.floor(Math.random() * 10) + 1;

random(skaicius);


console.log('-----uzduotis 19 ----');


function studentas(vardas, vidurkis) {
    return `Studentas ${vardas} turi vidurki ${vidurkis}.`;
}


console.log(studentas('Tomas', 8.7));
console.log(studentas('Asta', 9.8));
console.log(studentas('Benas', 7.7));


console.log('-----uzduotis 20 ----');

function number(sk) {
    for (let index = 2; true; index++) {
        if (skaicius % index == 0) {
            console.log(`Skaiciaus ${skaicius} maziausias daliklis yra ${index}`);
            break;
        }
    }
}

for (let index = 10; index <= 30; index++) {
    number(index);

}

console.log('-----uzduotis 20 ----');

function pirminis(num) {
    if (num < 2) {
        return false;
    }

    for (let index = 2; index < num; index++) {
        if (num % i === 0);
        return false;
    }
    return true;
}

for (let index = 2; index <= 15; index++) {
    console.log(`Skaicius ${index} , yra pirminis: ${pirminis(index)}`);

} */



/* console.log('-----uzduotis 21 ----');

function suma(a, b) {
    return a + b;
}

function sumos_isvedimas(a, b) {
    console.log(`${a} + ${b} = ${suma(a, b)}`);
}

function suma1(a, b) {
    return a * b;
}

function sumos_isvedimas1(a, b) {
    console.log(`${a} * ${b} = ${suma1(a, b)}`);

}

function suma2(a, b) {
    return a / b;
}
function sumos_isvedimas2(a, b) {
    console.log(`${a} / ${b} = ${suma2(a, b)}`);
}


sumos_isvedimas(8, 7);
sumos_isvedimas1(9, 6);
sumos_isvedimas2(12, 6); */

/* console.log('-----uzduotis 23 ----');

function skaiciu_masyvas(masyvas) {
    let suma = 0;

    for (const sk of masyvas) {
        suma += sk;
    }
    return suma;
}

let skaiciai = [3, 5, 2, 9, 10];
let skaiciai1 = [7, 9, 2, 4, 1];

let suma = skaiciu_masyvas(skaiciai);
let suma1 = skaiciu_masyvas(skaiciai1);

console.log('skaiciai:', suma);
console.log('skaiciai', suma1);


if (suma > suma1 || suma === 0) {
    console.log('Suma yra didesne uz suma1');
 } else { 
    console.log('Suma1 yra didesne uz suma');
 }

 console.log('-----uzduotis 24 ----');

 function zodziuMasyvas(zodis) {
    for (const zod of zodis) {
        if (Nu)       
        }
    }
    let zodis = ['automobilis', 'lektuvas', 'taukinys'];
    console.log(); */