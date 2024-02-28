/* for (let index = 0; index < 14; index++) {
    console.log('Labas vakaras, noriu miego');
} */

/* let skaicius = 5;
let faktorialas = 0;
for (let index = 1; index < skaicius; index++) {
    faktorialas += index;
} */

/* for (let index = 0; index < 100; index+=25) {
    console.log(index);
} */

/* for (let x = 0; true; x++) {
    // for (let y = 0; y < 2; y++) {
    // console.log(x,y);
    // }
    if (x <= 100) {
        console.log("pasiekem reikiama skale", x);
        continue;
    }
} 
    else if (x > 100 && x < 200) {
    console.log("Kita isvestis", x);
}
{
    console.log("Pasiekem riba!");
    break;
} */

/* for (let test=1; test <= 10; test++) {
    console.log(test);
}
 
console.log('\nTask 2');

for (let a = 2; a <= 15; a+=2) {
        console.log(a);
    }


console.log('\nTask 3');
for (let b = 1; b <=20; b += 3) {
    console.log("[" + index + "]");
    console.log(`[${b}]`);
} */

/* console.log('Task 5');

let start = 5;
let end = 10;

for (let a = start; a <= end; a++) {
    console.log(a ** 2);
}

console.log('\nTask 6');

let pradzia = 15;
let pabaiga = 4;

for (let b = pradzia; b < pabaiga + 1; b++) {
    console.log(b % 8 == 0);
    console.log(b % 2 == 0);
    console.log(c);
}

console.log('\nTask 7');

for (let c = 2; c <= 2; c += 2) {
    console.log(c);
}

let d = 2;
let e = 10;
let sandauga = 0;
for (let x = 1; x <= d; x++) {
    sandauga++;
}

console.log(sandauga);
let sandauga1 = 0;
for (let index = 1; index <= d; index++) {
    sandauga1 += e;
}
console.log(sandauga1); */


/* let a = 1;
let b = 100;
let suma = 0;
for (let a =  0; a < 100 ; a++) {
    suma =+ a;
}

console.log('gauta suma', suma);


let c = 20;
let d = 50;
let suma1 = 0;

for (let c = 1; c = 20) {

} */
/* console.log('Task 12');

for (let num1 = 1; num1 <=100; num1++) {
   if (num1 % 3 === 0 && num1 % 5 === 0) {
       console.log('FizzBuzz');
   }  else if (num1 % 3 == 0) {
       console.log('Fizz');
   } else if (num1 % 5 == 0) {
       console.log('Buzz');
   } else { 
       console.log(num1);
   }
} */


/* let num1 = 1;
let num2 = 1;
let num3;
console.log(num1);
console.log(num2);

for (let index = 2; index < 20; index++) {
   num3 = num1 + num2;
   console.log(num3);
   num1 = num2;
   num2 = num3;
} */


/*let skaicius = 0;
while (skaicius < 5) {
    console.log(skaicius++);
    
} */


/* let skaicius = 0;
while (skaicius < 5) {
    console.log(++skaicius);
    
} */

/* let prekiu_kiekis = 24;

while (prekiu_kiekis > 0)  {
    console.log('turimas prekiu kiekis:', prekiu_kiekis);
    let kiek_nupirko = Math.floor(Math.random() * 5) + 1;
    if (kiek_nupirko > prekiu_kiekis) {
        kiek_nupirko = prekiu_kiekis;
    }
}

console.log('nupirko:', kiek_nupirko, '\n');
prekiu_kiekis -= kiek_nupirko; */


/* while (true) {
    let skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);

    if (skaicius % 7 == 0 && % 2 == 0) {
        console.log('skaicius', skaicius, 'dalinasi is 7 ir is 2');
    }
} */

/*let skaicius = 1;

while (skaicius % 7 != 0 || skaicius % 2 != 2 != 0) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    con sole.log(skaicius);
} */

/* console.log('1 uzduotis');

let skaicius = 1;
while (skaicius <= 20) {
    console.log(skaicius);
    skaicius++;
}

console.log('2 uzduotis');

let num1 = 1;
while (num1 <= 50) {
    if (num1 % 2 == 0) console.log("Lyginis", num1);
    else
        console.log("Nelyginis", num1);
}

console.log('3 uzduotis');

let num2 = 25;
while (num2 <= 50) {
    if (num2 % 3 == 0)
        console.log(`skaicius ${num2} dalinasi is 3`);
    else {
        console.log(num2);
    }
    num2++;
} */

/* console.log('4 uzduotis');

let num3 = 1;
while (num3 % 3 != 0 || num3 % 5 != 0) {
    console.log(num3);
    num3++;
} */

/*console.log('5 uzduotis');

let skaicius = 1;
let suma = 0;
while (1 <= skaicius && skaicius <= 100) {
    if (skaicius % 2 == 0)
    suma += skaicius;
skaicius++;
}
console.log(suma);*/

let skaicius = 1;
while (skaicius < 5 ) {
    console.log(skaicius, skaicius ** 2 )

    skaicius++;
}

let num = 1;

let atsitiktinis = Math.floor(Math.random() * 10) ;
console.log("kiek", random);
while (num < atsitiktinis) {
    console.log(Math.floor(Math.random()* 10));
    num++;
}

let num1 = 1;
let suma = 0;
let random = Math.floor(Math.random() * 10) ;
console.log("kiek", random);
while (num1 < random) {
    let laikinas = Math.floor(Math.random() * 10);
    console.log(laikinas);
    suma += laikinas;
    num1++;
}

console.log(suma);

