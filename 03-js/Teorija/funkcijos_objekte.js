console.log('funkcijos objektuose');

/* let studentas = {
    vardas: "Tadas",
    mokykla: "VCS",
    kursas: "JS",
    pazymiai: [10, 8, 5, 9, 8],
    skaiciuoti_vidurki: function () {
        let pazymiu_masyvas = this.pazymiai;
        for (const reiksme of this.pazymiai) {
            bendra_suma += reiksme;
        }
        let vidurkis = bendra_suma / this.pazymiai.length;
        console.log(`Studento ${this.vardas} vidurkis: ${vidurkis}`);
        return vidurkis.toFixed(2);
    },
    isvesti_studento_informacija: function () {
        console.log('--------------------');
        console.log('Studento informacija');
        console.log('Vardas:', this.vardas);
        console.log('Mokykla:', this.mokykla);
        console.log('Kursas:', this.kursas);
        console.log('Turimi pazymiai:', this.pazymiai.join(','));
        console.log('Apskaiciuotas vidurkis:', this.skaiciuoti_vidurki.join(','));
        console.log('--------------------');
    },
    gavo_pazymi: function(pazymys) {
        this.pazymiai.push(pazymys);
        console.log("Irasytas pazymys, pazymys");
    },
}

studentas.isvesti_studento_informacija(); */


/* let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    dabartinis_atlygininimas: 1200,
    etatas: 1,
    skaiciuotiPreliminaruAtlyginima: function (proc) {
      console.log(`Pakelus atlyginima ${proc}% darbuotojo alga bus ${this.dabartinis_atlygininimas * (proc/100 + 1)}`);
    },
    skaiciuotiEtatoKeitima: function (naujas_etatas) {
        console.log(`Pakeitu etata i ${naujas_etatas}, darbuotojo alga bus ${this.dabartinis_atlygininimas * naujas_etatas}`)
    },

    duomenys: function () {
        console.log('--------------------------');
        console.log('Darbuotojas:', this.vardas, this.pavarde);
        console.log('Dabartinis atlyginimas:', this.dabartinis_atlygininimas);
        console.log('Dabartinis etatas:', this.etatas);
        console.log('--------------------------');
    }
};  

darbuotojas.duomenys();
darbuotojas.skaiciuotiPreliminaruAtlyginima(20);
darbuotojas.skaiciuotiEtatoKeitima(0.75); */


/* function darbuotojoInformacija(v_vardas, v_pavarde, v_dabartinis_atlygininimas, v_etatas) {
    return {
        vardas: v_vardas,
        pavarde: v_pavarde,
        dabartinis_atlygininimas: v_dabartinis_atlygininimas,
        etatas: v_etatas,
        skaiciuotiPreliminaruAtlyginima: function (proc) {
            console.log(`Pakelus atlyginima ${proc}% darbuotojo alga bus ${this.dabartinis_atlygininimas * (proc / 100 + 1)}`);
        },
        skaiciuotiEtatoKeitima: function (naujas_etatas) {
            console.log(`Pakeitu etata i ${naujas_etatas}, darbuotojo alga bus ${this.dabartinis_atlygininimas * naujas_etatas}`)
        },

        duomenys: function () {
            console.log('--------------------------');
            console.log('Darbuotojas:', this.vardas, this.pavarde);
            console.log('Dabartinis atlyginimas:', this.dabartinis_atlygininimas);
            console.log('Dabartinis etatas:', this.etatas);
            console.log('--------------------------');
        }
    }
};

let darbuotojai = [
    darbuotojoInformacija('Benas', 'Didysis', 1200, 0.75),
    darbuotojoInformacija('Jonas', 'Mazasis', 1700, 1),
    darbuotojoInformacija('Gabija', 'Aukstuolyte', 1000, 0.5),
];

darbuotojai[0].skaiciuotiPreliminaruAtlyginima();
darbuotojai[1].skaiciuotiPreliminaruAtlyginima();
darbuotojai[2].skaiciuotiPreliminaruAtlyginima();


for (const darbuotojas of darbuotojai) {
    darbuotojas.duomenys();
    darbuotojas.skaiciuotiPreliminaruAtlyginima(20);
    darbuotojas.skaiciuotiEtatoKeitima(0.75);
} */


function preke(v_tipas, v_gamintojas, v_dydis, v_savikaina, v_kiekis) {
    return {
        tipas: v_tipas,
        gamintojas: v_gamintojas,
        dydis: v_dydis,
        savikaina: v_savikaina,
        kiekis: v_kiekis,
        kaina: 0,
        nuolaidine: 0,
        galutine_kaina: function (antkainis) {
            this.kaina = this.savikaina * (antkainis / 100 + 1);
            console.log(`Galutine kaina ${this.kaina}`);
        },
        nuolaidos_kaina: function (nuolaida) {
            this.nuolaidine = (this.kaina / (nuolaida / 100 + 1)).toFixed(2);
            console.log(`Kaina su nuolaida ${this.nuolaidine}`);
        },


        duomenys: function () {
            console.log('--------------------------');
            console.log('Megztinis:', this.tipas, this.gamintojas, this.dydis, this.kiekis, this.savikaina);
            console.log('Palaidine:', this.tipas, this.gamintojas, this.dydis, this.kiekis, this.savikaina);
            console.log('Kardiganas:', this.tipas, this.gamintojas, this.dydis, this.kiekis, this.savikaina);
            console.log('--------------------------');
        }
    }
}

let rubai = [
    preke('Megztinis', 'Stradivarius', 'XS', 45.55, 50, 56.90),
    preke('Palaidine', 'ASOS', 'S', 32.20, 70, 45.50),
    preke('Kardiganas', 'Zara', 'M', 65.30, 35, 75.50),

];

for (const preke of rubai) {
    preke.duomenys();
    preke.galutine_kaina(100);
    preke.nuolaidos_kaina(10);
}

let pelnas = 0;
let pelnas_nuolaida = 0;
for (const preke of rubai) {
    pelnas += (preke['kaina'] - preke['savikaina']) * preke['kiekis'];
    pelnas_nuolaida += (preke['nuolaidine'] - preke['savikaina']) * preke['kiekis'];
    }
    
    console.log(pelnas, pelnas_nuolaida.toFixed(2));
    console.log((pelnas - pelnas_nuolaida).toFixed(2));
    
    