/* let tekstas6 = `Mano naujas tekstas"Kabutese" ir 'Kabutese'` ;



console.log(tekstas6);

let kvadratas = `
******************
******************
******************`

console.log(kvadratas);

 let masyvas = [4, 6, 3, 45, 96, 34, 2];

// prideti gale
 masyvas.push(-15);


 // prideti pradzioje
 masyvas.unshift(20);

  // prideti viduryje
  masyvas.splice(2, 0, -4);

  let masyvas2 = [0, 0, 3, 5];
  
  let sujungimas = masyvas.concat(masyvas2);

 console.log(sujungimas); */


/*let masyvas = [4, 6, 3, 45, 96, 34, 2];
let pagal_salyga = masyvas 
.filter(skaicius => skaicius > 20)
.sort()
.reverse()
.map(skaicius => `namo numeris ${skaicius}`);
console.log(pagal_salyga);*/

let data = new Date();

console.log(data.toLocaleTimeString('us'));