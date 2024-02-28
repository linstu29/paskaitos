/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/


for (let index = 0; index < 10; index++) {
    console.log('labas');
    
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
 
/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for (let index = 10; index <= 50; index++) {
    if (index % 2 ==0) {
        console.log(index);
    }
      
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log('----- task 04 --------')
for (let index = 10; index <= 50; index++) {
    if (index % 10 ==0) {
       continue;
    }
    console.log(index);
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');
console.log('* * * * * * * * * *');