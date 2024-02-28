/* console.log('Objektu teorija');


let masyvas = []; //tuscias masyvas
masyvas = [1, 5, 6, 7, 23];


let Objektas = {}; //tuscias objektas
//raktas: reiksme
Objektas = {
    spalva: "Ruda",
    modelis: "Nerf",
    kaina: 17.54,
    ispardavimas: true,
    priedai: {
        taikiklis: true,
        apkaba: false,
    },
    parduotuves: ['Vilniaus', 'Kauno'],
    savybe: false,

};

console.log(Objektas.modelis); // objekto individualios savybes pagal pavadinima vedimas
console.log(Objektas['parduotuves']); //Objekto individualios savybes pagal pavadinima vedimas
console.log(masyvas[2]);  // masyvo elemento pagal indeksa vedimas
console.log(Objektas['kaina']);

masyvas.push(1); //masyvo papildymas

Objektas.naujiena = 'Naujiena'; //objekto pildymas naujais raktais
Objektas['naujiena2'] = "Naujiena2"; //objekto pildymas naujais raktais
console.log(Objektas);


//console.log(Objektas.priedai.apkaba); */

/* let stundentas = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    amzius: 20,
    ugis: 182,
    kursas: 2,
    mokslai: {
        studiju_programa: 'Ekonomika',
        atsiskaitytu_kreditu_skaicius: 120,
        mokykla: 'VGTU',
    }
};

console.log(stundentas);

console.log('vardas', vardas);
console.log('pavarde', pavarde);
console.log('studiju programa', studiju_programa); */



/* console.log('===== Task 2 ====');

let filmas = {
    pavadinimas: 'Šindlerio sąrašas',
    režisierius: 'Steven Spielberg',
    biudžetas: 22000000,
    uždirbo: 322000000,
    žanras: 'Drama',
    trukmė: 1.95,
    išleidimo_metai: new Date('1993').getFullYear(),


    aktoriai: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes', 'Caroline Goodall', 'Embeth Davidtz'],

} */

/*console.log('===== Task 3 ====');


let knyga1 = {
    pavadinimas: 'Aušvico tatuiruotojas',
    autorius: 'Heather Morris',
    žanras: 'romanas',
    Kaina: 13.40,
    puslapiai: 256,
    knygynuose: true,

    skyrių_sąrašas: ['Atvykimas į Aušvicą', 'Gyvenimas Aušvice', 'Išsigelbėjimas'],
};
   let knyga_2 = {
    pavadinimas: 'Baltoji paukštė',
    autorius: 'R. J. Palacio, Erica S. Perl',
    žanras: 'romanas',
    Kaina: 13.44,
    puslapiai: 272,
    knygynuose: true,

    skyrių_sąrašas: ['Atvykimas į Aušvicą', 'Gyvenimas Aušvice', 'Išsigelbėjimas']
};

console.log('pirma knyga',knyga1);
console.log('antra knyga', knyga_2);

if (knyga1.puslapiai > knyga_2.puslapiai) {
    console.log (knyga1.puslapiai)
    
}*/

/*console.log('===== Task 4 ====');

let preke1 = {
    pavadinimas: 'Kava',
    kaina: 12.40,
    savikaina: 10,
    kodas: 546287,
    turimas_kiekis: 500,
    dezes_matmenys: [20, 25, 20],
}

let preke2 = {
    pavadinimas: 'Medus',
    kaina: 5.50,
    savikaina: 4.50,
    kodas: 345287,
    turimas_kiekis: 100,
    dezes_matmenys: [20, 30, 20],
}

let preke3 = {
    pavadinimas: 'Indu_ploviklis',
    kaina: 3.99,
    savikaina: 2,
    kodas: 234287,
    turimas_kiekis: 50,
    dezes_matmenys: [15, 20, 15],
}


console.log(preke1, preke2, preke3);


console.log('pirma preke kainuoja', preke1.kaina, 'antra preke kainuoja', preke2.kaina, 'trecia preke kainuoja', preke3.kaina);

if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
    console.log('Brangiausia preke:', preke1.pavadinimas);
} else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
    console.log('Brangiausia preke:', preke2.pavadinimas);
} else  {
    console.log('Brangiausia preke:', preke3.pavadinimas);
}

console.log('pelningumas', preke1)*/


/* console.log('===== Task 5 ====');

let automobilis = {
marke: 'Nissan',
modelis: 'Juke',
rida: 3500,
metai: 2023,
spalva: silver,
darbinis_turis: 999,
dauzta: true,
parduodama: false,
}
console.log(automobilis);

console.log() */




/*console.log('===== Task 6 ====');

let kelione1 = {
    salis: "Pietu Koreja",
    keliones_budas: "Skrydis",
    keliones_trukme: 17,
    kaina: 5935,

}

let kelione2 = {
    salis: "Japonija",
    keliones_budas: "Skrydis",
    keliones_trukme: 15,
    kaina: 2929,
}

let kelione3 = {
    salis: "Kinija",
    keliones_budas: "Skrydis",
    keliones_trukme: 15,
    kaina: 3175,
}

console.log(kelione1, kelione2, kelione3);

if (kelione1.kaina > kelione2.kaina && kelione1.kaina > kelione3.kaina) {
    console.log('Brangiausia kelione:', kelione1.salis);
} else if (kelione2.kaina > kelione1.kaina && kelione2.kaina > kelione3.kaina) {
    console.log('Brangiausia kelione:', kelione2.salis);
} else  {
    console.log('Brangiausia kelione:', kelione3.salis);
} */


/*let automobiliai = [
    { marke: "Audi", modelis: "A6", variklis: "V6", kw: 228 },
    { marke: "BMW", modelis: "520i", variklis: "I4", kw: 140 },
    { marke: "Ford", modelis: "Fusion", variklis: "V4", kw: 100 },
    { marke: "Kia", modelis: "Sorento", variklis: "H4", kw: 110 },
    { marke: "Mazda", modelis: "CX-5", variklis: "I4", kw: 96 },
];

/*let index = 1;
for (const value of automobiliai) {
    console.log(index + "-asis automobilis sarase:");
   // console.log("Automobilio marke:", value.marke); //spausdinant zinomus duomenis
    index++;
}*/



/* let index = 1;
for (const item of automobiliai) {
    console.log(index + "-asis automobilis sarase:");
    for (const keyOfItem in item) {
        if (keyOfItem == 'marke' || keyOfItem == 'kw') {
            console.log(keyOfItem + ":" + item[keyOfItem]);
        }
        console.log("-----------------");
        if (typeof item[keyOfItem] == 'string') {
            console.log(keyOfItem + ": " + item[keyOfItem]);
        }
    }
    index++;
} */

/* let knygynas =  { 
    pavadinimas: "Vaga",
    adresas: "Vilniaus g. 6, Vilnius", 
    plotas: 228, 
    knygu_kiekis: 100000, 
     darbo_valandos: '8-18', 
     atidarytas: false,
    }

for (const raktas in knygynas) {
    console.log(raktas, ': ', knygynas[raktas]);
}

for (const raktas in knygynas) {
    if (typeof knygynas[raktas] != 'string') {
    console.log(raktas, ': ', knygynas[raktas]);
}
} */


/*let knygos= [
 {pavadinimas: 'Ausvico tatuiruotojas', autorius: 'Heather Morri',puslapiai: 256 },
 {pavadinimas: 'Baltoji paukste', autorius: 'R. J. Palacio, Erica S. Perl',puslapiai: 272 },
 {pavadinimas: 'Dievu miskas', autorius: 'Balys Sruoga',puslapiai: 448 },
]


for (const raktas in knygos) {
    console.log(raktas, ': ', knygos[raktas]);
}*/

/* let imones= [
    {pavadinimas: 'Zuikiu vila', darbuotojai: 24, pelnas: 200000},
    {pavadinimas: 'Vilko irstva', darbuotojai: 45, pelnas: 150000},
    {pavadinimas: 'Lapes salonas', darbuotojai: 15, pelnas: 100000},
   ]

   console.log(imones); */

   //Date klases panaudojimas

    //let siandien = new Date(Date.now()).getDay();
  /*let speciali_data = new Date('2000-08-03').getFullYear();

   console.log(speciali_data);*/
   //let precision = 100; // 2 po kablekio
  // let random = Math.floor(Math.random() * (100* precision -1 * precision) +1 * precision) / (1*precision); 
  // console.log(random);

   //kitas variantas
   /*let apvalintas = (Math.random() * 100).toFixed(2); // 2 po kablekio
   let random = Math.floor(Math.random() * 10**3) +1; 
   console.log(random);

   let ribose = (Math.random() * (3000 - 5 +1) +5).toFixed(4); */
    
   //let atsitiktinis = Math.floor(Math.random() * 10**2) +1; 
 //  console.log(atsitiktinis);



 let random1 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);
 let random2 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);
 let random3 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);
 let random4 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);
 let random5 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);
 let random6 = Math.floor(Math.random() * (9999 - 1000 +1)+1000);

let atsakymas = "";

let didziausias = random1;
let liko1, liko2, liko3, liko4, liko5;

if (didziausias < random2) didziausias = random2; 
if (didziausias < random3) didziausias = random3;
if (didziausias < random4) didziausias = random4;
if (didziausias < random5) didziausias = random5;
if (didziausias < random6) didziausias = random6;


atsakymas += didziausias;
atsakymas +="";

/* if (random1 >= random2 && random1 >= random3 && random4 && random1 >= random5 && random1 >= random6) {
    atsakymas += random1;
if () {

}

} else if (random2 >= random1 && random2 >= random3 && random2 && random4 >= random2 >=random5 && random2 >= random6)
*/


console.log(atsakymas); 