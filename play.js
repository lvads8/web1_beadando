const db = [
    {
        "name": "Tesla Model S Plaid+",
        "hp": 1115,
        "img": "tesla_model_s_plaid+.jpg"
    },
    {
        "name": "Porsche 911 Turbo S 992",
        "hp": 650,
        "img": "porsche_911_turbo_s_992.jpg"
    },
    {
        "name": "Lamborghini Aventador SVJ",
        "hp": 770,
        "img": "lamborghini_aventador_svj.jpg"
    },
    {
        "name": "Lamborghini Huracan EVO STO",
        "hp": 639,
        "img": "lamborghini_huracan_evo_sto.jpg"
    },
    {
        "name": "McLaren 765LT",
        "hp": 765,
        "img": "mclaren_765lt.jpg"
    },
    {
        "name": "McLaren Senna",
        "hp": 800,
        "img": "mclaren_senna.jpg"
    },
    {
        "name": "McLaren Speedtail",
        "hp": 1070,
        "img": "mclaren_speedtail.jpg"
    },
    {
        "name": "McLaren MP4-12C",
        "hp": 600,
        "img": "mclaren_mp4-12c.jpg"
    },
    {
        "name": "Lexus LFA",
        "hp": 560,
        "img": "lexus_lfa.jpg"
    },
    {
        "name": "Toyota Supra IV",
        "hp": 330,
        "img": "toyota_supra_iv.jpg"
    },
    {
        "name": "Toyota Supra J29 GR 3.0",
        "hp": 340,
        "img": "toyota_supra_j29_gr_3.0.jpg"
    },
    {
        "name": "Toyota GT86 2017",
        "hp": 200,
        "img": "toyota_gt86_2017.jpg"
    },
    {
        "name": "Toyota Yaris XP21 GR",
        "hp": 261,
        "img": "toyota_yaris_xp21_gr.jpg"
    },
    {
        "name": "Toyota AE86",
        "hp": 130,
        "img": "toyota_ae86.jpg"
    },
    {
        "name": "Ferrari SF90 Stradale",
        "hp": 1000,
        "img": "ferrari_sf90_stradale.jpg"
    },
    {
        "name":"Ferrari 812 Superfast",
        "hp": 800,
        "img": "ferrari_812_superfast.jpg"
    },
    {
        "name":"Ferrari F8 Tributo",
        "hp": 720,
        "img": "ferrari_f8_tributo.jpg"
    },
    {
        "name": "Ferrari 488",
        "hp": 670,
        "img": "ferrari_488.jpg" 
    },
    {
        "name": "Ferrari 458 Italia",
        "hp": 570,
        "img": "ferrari_458_italia.jpg"
    },
    {
        "name": "Ferrari LaFerrari",
        "hp": 963,
        "img": "ferrari_laferrari.jpg"
    },
    {
        "name": "Honda S2000",
        "hp": 240,
        "img": "honda_s2000.jpg"
    },
    {
        "name":"Alfa Romeo 159 3.2 V6 JTS Q4",
        "hp": 260,
        "img": "alfa_romeo_159_3.2_v6_jts_q4.jpg"
    },
    {
        "name": "Alfa Romeo Giulia Quadrifoglio",
        "hp": 510,
        "img": "alfa_romeo_giulia_quadrifoglio.jpg"
    },
    {
        "name": "Alfa Romeo GTV6 3.0",
        "hp": 240,
        "img": "alfa_romeo_gtv6_3.0.jpg"
    },
    {
        "name": "Audi R8 V10 Plus",
        "hp": 610,
        "img": "audi_r8_v10_plus.jpg"
    },
    {
        "name": "Audi TT RS",
        "hp": 400,
        "img": "audi_tt_rs.jpg"
    },
    {
        "name": "Aston Martin DBS Superleggera",
        "hp": 725,
        "img": "aston_martin_dbs_superleggera.jpg"
    },
    {
        "name": "Aston Martin Vantage AMR",
        "hp": 510,
        "img": "aston_martin_vantage_amr.jpg"
    },
    {
        "name": "Aston Martin DB11 V12 AMR",
        "hp": 639,
        "img": "aston_martin_db11_v12_amr.jpg"
    },
    {
        "name": "Bentley Continental GT V8",
        "hp": 550,
        "img": "bentley_continental_gt_v8.jpg"
    },
    {
        "name": "Bentley Flying Spur",
        "hp": 635,
        "img": "bentley_flying_spur.jpg"
    },
    {
        "name": "BMW G20 M3 Competition",
        "hp": 510,
        "img": "bmw_g20_m3_competition.jpg"
    },
    {
        "name": "BMW G30 M5 CS",
        "hp": 635,
        "img": "bmw_g30_m5_cs.jpg"
    },
    {
        "name": "Bugatti Veyron",
        "hp": 1001,
        "img": "bugatti_veyron.jpg"
    },
    {
        "name": "Bugatti Chiron Super Sport 300+",
        "hp": 1599,
        "img": "bugatti_chiron_super_sport_300+.jpg"
    },
    {
        "name": "Bugatti Divo",
        "hp": 1500,
        "img": "bugatti_divo.jpg"
    },
    {
        "name": "Chevrolet Corvette C8 Z06",
        "hp": 670,
        "img": "chevrolet_corvette_c8_z06.jpg"
    },
    {
        "name": "Dodge Charger SRT Hellcat Redeye",
        "hp": 808,
        "img": "dodge_charger_srt_hellcat_redeye.jpg"
    },
    {
        "name": "Ford Mustang Shelby GT500",
        "hp": 770,
        "img": "ford_mustang_shelby_gt500.jpg"
    },
    {
        "name": "Ford Fiesta ST-3",
        "hp": 200,
        "img": "ford_fiesta_st-3.jpg"
    },
    {
        "name": "Ford Focus ST",
        "hp": 280,
        "img": "ford_focus_st.jpg"
    },
    {
        "name": "Mercedes-AMG E63 S 4MATIC+",
        "hp": 612,
        "img": "mercedes-amg_e63_s_4matic+.jpg"
    },
    {
        "name": "Mercedes-AMG A35 4MATIC",
        "hp": 306,
        "img": "mercedes-amg_a35_4matic.jpg"
    }
];

const currentCar = document.querySelector('#current-car');
const nextCar = document.querySelector('#next-car');
const scoreDom = document.querySelector('.score');

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(db);

let state = Math.floor(Math.random() * 63);
const start = state;

function rand(max) {
    let bit = (state ^ (state >>> 1)) & 1;
    state = ((state >>> 1) | (bit << 5)) & 63;
    
    if (state === start)
        shuffleArray(db);
    
    return state % max;
}

let cc, nc;

const getNextCar = () => {
    const nextIndex = rand(db.length);
    const cand = db[nextIndex];
    if (cand === cc || cand === nc)
        return getNextCar();

    return cand;
};

let score = 0;
cc = db[rand(db.length)];
nc = getNextCar();

const update = () => {
    const ci = currentCar.querySelector('.car-image');
    ci.src = `img/${cc.img}`;
    ci.alt = cc.name;

    const ni = nextCar.querySelector('.car-image');
    ni.src = `img/${nc.img}`;
    ni.alt = nc.name;
    
    currentCar.querySelector('.car-title')
        .innerText = cc.name;
    nextCar.querySelector('.car-title')
        .innerText = nc.name;
    
    currentCar.querySelector('.car-hp')
        .innerText = cc.hp;
    nextCar.querySelector('.car-hp')
        .innerText = nc.hp;
    
    scoreDom.innerText = score;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const setVisibility = (elem, vis) => {
    if (vis) {
        elem.dataset.visible = 'visible';
    } else {
        delete elem.dataset.visible;
    }
};

const showHiddenHp = () => {
    const hp = nextCar.querySelector('.car-hp');
    setVisibility(hp, true);
    
    return sleep(1500);
};

const hideHp = () => {
    const hp = nextCar.querySelector('.car-hp');
    setVisibility(hp, false);
}

const setButtonStates = state => {
    const buttons = nextCar.querySelectorAll('.btn');
    buttons.forEach(btn => btn.disabled = !state);
}; 

const next = async () => {
    const candidate = getNextCar();
    const pnext = nextCar.querySelector('.primary');
    const scurrent = currentCar.querySelector('.secondary');
    const snext = nextCar.querySelector('.secondary');
    
    scurrent.src = pnext.src;
    snext.src = `img/${candidate.img}`;
    setVisibility(scurrent, true);
    setVisibility(snext, true);
    cc = nc;
    nc = candidate;
    await sleep(1200);
    score++;
    update();
    
    setVisibility(scurrent, false);
    setVisibility(snext, false);
};

const fail = () => {
    window.location = 'score.html?score=' + score;
};

const higher = async () => {
    setButtonStates(false);
    await showHiddenHp();

    if (cc.hp > nc.hp) {
        fail();
        return;
    }
    
    hideHp();
    await next();
    setButtonStates(true);
};
    
const lower = async () => {
    setButtonStates(false);
    await showHiddenHp();

    if (cc.hp < nc.hp) {
        fail();
        return;
    }
    
    hideHp();
    await next();
    setButtonStates(true);
};

update();