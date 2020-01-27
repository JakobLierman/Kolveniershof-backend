// CAUTION: Users must be present

// Activities
db.activities.insertMany([
    { name: "Bakken", icon: "icons/icon-mixer.svg" },
    { name: "Balanske", icon: "icons/icon-sofa.svg" },
    { name: "Beleving", icon: "icons/icon-thinking-bubble.svg" },
    { name: "Bib", icon: "icons/icon-books.svg" },
    { name: "Cafetaria", icon: "icons/icon-coffee.svg" },
    { name: "Crea", icon: "icons/icon-pencil.svg" },
    { name: "Digitaal atelier", icon: "icons/icon-workstation.svg" },
    { name: "Expressie", icon: "icons/icon-dancing.svg" },
    { name: "Feest", icon: "icons/icon-party-hat.svg" },
    { name: "Houtatelier", icon: "icons/icon-saw.svg" },
    { name: "Kaarsenatelier", icon: "icons/icon-candle.svg" },
    { name: "Keuken afwas", icon: "icons/icon-dishwasher.svg" },
    { name: "Koken", icon: "icons/icon-kitchen.svg" },
    { name: "Kringgesprek", icon: "icons/icon-connected-people.svg" },
    { name: "Kunstatelier", icon: "icons/icon-art.svg" },
    { name: "Levensboeken", icon: "icons/icon-read.svg" },
    { name: "Markt", icon: "icons/icon-shop.svg" },
    { name: "Muziek", icon: "icons/icon-music.svg" },
    { name: "Paardrijden", icon: "icons/icon-horse.svg" },
    { name: "Petanque", icon: "icons/icon-petanque.svg" },
    { name: "Praatcafé", icon: "icons/icon-beer.svg" },
    { name: "Provenciaal domein", icon: "icons/icon-sheep.svg" },
    { name: "Sfeergroep", icon: "icons/icon-people.svg" },
    { name: "Snoezelen", icon: "icons/icon-sofa.svg" },
    { name: "Spik en span", icon: "icons/icon-broom.svg" },
    { name: "Sporten", icon: "icons/icon-soccer-player.svg" },
    { name: "Textiel", icon: "icons/icon-yarn.svg" },
    { name: "Verlof", icon: "icons/icon-home.svg" },
    { name: "Tievo", icon: "icons/icon-paint-palette.svg" },
    { name: "Toneel", icon: "icons/icon-theatre-mask.svg" },
    { name: "Tuin", icon: "icons/icon-watering-can.svg" },
    { name: "Uitstap", icon: "icons/icon-rucksack.svg" },
    { name: "Verhalen", icon: "icons/icon-storytelling.svg" },
    { name: "Vorming", icon: "icons/icon-teacher.svg" },
    { name: "Wandelen", icon: "icons/icon-walking.svg" },
    { name: "Weekschema", icon: "icons/icon-calendar-7.svg" },
    { name: "Werkplaats", icon: "icons/icon-factory.svg" },
    { name: "Winkelen", icon: "icons/icon-shopping-cart.svg" },
    { name: "Yoga", icon: "icons/icon-guru.svg" },
    { name: "Zwemmen", icon: "icons/icon-swimming.svg" }
])

// Busses
db.busses.insertMany([
    { name: "Beige", color: "#E2CBA9", icon: "bus" },
    { name: "Geel", color: "#000000", icon: "bus" }, // demo color
    { name: "Blauw", color: "#A5D6F7", icon: "bus" }
])

// LunchUnits
db.lunchunits.insertMany([
    {
        lunch: "Lasagne",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Vol-au-vent met frietjes",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Spaghetti bolognese",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Stoofvlees met gebakken aardappelen",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Fishsticks met purree en spinazie",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id
        ]
    },
    {
        lunch: "Worst met aardappelen en doperwten",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Kip met rijst en ananas",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Boomstammetje met aardappelen en wortels",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    },
    {
        lunch: "Kabeljauw met preipurree",
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id
        ]
    }
])

// ActivityUnits
db.activityunits.insertMany([
    {
        activity: db.activities.findOne({ name: "Weekschema" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Sfeergroep" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Markt" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Kaarsenatelier" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Beleving" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Bib" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Praatcafé" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Spik en span" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Werkplaats" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id
        ]
    },
    {
        activity: db.activities.findOne({ name: "Feest" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient13@gmail.com" })._id
        ]
    }
])

// BusUnits
db.busunits.insertMany([
    {
        bus: db.busses.findOne({ name: "Geel" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id
        ]
    },
    {
        bus: db.busses.findOne({ name: "Beige" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id
        ]
    },
    {
        bus: db.busses.findOne({ name: "Blauw" })._id,
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id
        ]
    }
])

// WorkdayTemplates
db.workdaytemplates.insertMany([
    {
        templateName: "Winter 2020", weekNumber: 1, dayNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Weekschema" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Lasagne" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Markt" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 1, dayNumber: 2,
        daycareMentors: [
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Spaghetti bolognese" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 1, dayNumber: 3,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Fishsticks met purree en spinazie" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 1, dayNumber: 4,
        daycareMentors: [db.users.findOne({ email: "demoadmin3@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Vol-au-vent met frietjes" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 1, dayNumber: 5,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Worst met aardappelen en doperwten" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 2, dayNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Weekschema" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Kip met rijst en ananas" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 2, dayNumber: 2,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Markt" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Boomstammetje met aardappelen en wortels" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 2, dayNumber: 3,
        daycareMentors: [db.users.findOne({ email: "demoadmin2@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Kabeljauw met preipurree" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 2, dayNumber: 4,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Lasagne" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 2, dayNumber: 5,
        daycareMentors: [db.users.findOne({ email: "demoadmin1@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Vol-au-vent met frietjes" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 3, dayNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Weekschema" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Spaghetti bolognese" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 3, dayNumber: 2,
        daycareMentors: [db.users.findOne({ email: "demoadmin3@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Stoofvlees met gebakken aardappelen" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 3, dayNumber: 3,
        daycareMentors: [db.users.findOne({ email: "demoadmin2@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Kaarsenatelier" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Fishsticks met purree en spinazie" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Markt" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 3, dayNumber: 4,
        daycareMentors: [db.users.findOne({ email: "demoadmin4@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Worst met aardappelen en doperwten" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 3, dayNumber: 5,
        daycareMentors: [db.users.findOne({ email: "demoadmin1@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Kip met rijst en ananas" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 4, dayNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Weekschema" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Boomstammetje met aardappelen en wortels" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 4, dayNumber: 2,
        daycareMentors: [db.users.findOne({ email: "demoadmin3@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Kaarsenatelier" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Kabeljauw met preipurree" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 4, dayNumber: 3,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Spaghetti bolognese" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 4, dayNumber: 4,
        daycareMentors: [db.users.findOne({ email: "demoadmin1@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Stoofvlees met gebakken aardappelen" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Markt" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        templateName: "Winter 2020", weekNumber: 4, dayNumber: 5,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Lasagne" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    }
])

// Workdays
db.workdays.insertMany([
    {
        date: new Date("2020-01-27"), originalTemplateName: "Winter 2020", originalWeekNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Weekschema" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Lasagne" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Markt" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        date: new Date("2020-01-28"), originalTemplateName: "Winter 2020", originalWeekNumber: 1,
        daycareMentors: [
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Spaghetti bolognese" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Feest" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Geel" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        date: new Date("2020-01-29"), originalTemplateName: "Winter 2020", originalWeekNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Fishsticks met purree en spinazie" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Spik en span" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        date: new Date("2020-01-30"), originalTemplateName: "Winter 2020", originalWeekNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin3@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Beleving" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Vol-au-vent met frietjes" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    {
        date: new Date("2020-01-31"), originalTemplateName: "Winter 2020", originalWeekNumber: 1,
        daycareMentors: [db.users.findOne({ email: "demoadmin5@gmail.com" })._id],
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ],
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Praatcafé" })._id })._id,
        ],
        lunch: db.lunchunits.findOne({ lunch: "Worst met aardappelen en doperwten" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Bib" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ]
    },
    { date: new Date("2020-02-01"), originalTemplateName: "Winter 2020", originalWeekNumber: 1 },
    { date: new Date("2020-02-02"), originalTemplateName: "Winter 2020", originalWeekNumber: 1 }
])

// AbsentDates
db.users.updateMany({}, { $set: { absentDates: [] } })
db.users.updateMany(
    {
        email: {$in: ["democlient3@gmail.com", "democlient6@gmail.com", "democlient12@gmail.com"]}
    },
    { $push: { absentDates: new Date("2020-01-27") } }
)

db.users.updateMany(
    {
        email: { $in: ["democlient3@gmail.com", "democlient6@gmail.com", "democlient12@gmail.com"] }
    },
    { $push: { absentDates: new Date("2020-01-28") } }
)

db.users.updateMany(
    {
        email: { $in: ["democlient3@gmail.com", "democlient6@gmail.com", "democlient12@gmail.com"] }
    },
    { $push: { absentDates: new Date("2020-01-29") } }
)

db.users.updateMany(
    {
        email: { $in: ["democlient3@gmail.com", "democlient6@gmail.com", "democlient12@gmail.com"] }
    },
    { $push: { absentDates: new Date("2020-01-30") } }
)

db.users.updateMany(
    {
        email: { $in: ["democlient3@gmail.com", "democlient6@gmail.com", "democlient12@gmail.com"] }
    },
    { $push: { absentDates: new Date("2020-01-31") } }
)