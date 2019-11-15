// CAUTION: Users must be present

// Activities
db.activities.insertMany([
    { name: "Bakken", icon: "mixer" },
    { name: "Balanske", icon: "sofa" },
    { name: "Beleving", icon: "thinking-bubble" },
    { name: "Bib", icon: "books" },
    { name: "Cafetaria", icon: "coffee" },
    { name: "Crea", icon: "pencil" },
    { name: "Digitaal atelier", icon: "workstation" },
    { name: "Expressie", icon: "dancing" },
    { name: "Feest", icon: "party-hat" },
    { name: "Houtatelier", icon: "saw" },
    { name: "Kaarsenatelier", icon: "candle" },
    { name: "Keuken afwas", icon: "dishwasher" },
    { name: "Koken", icon: "kitchen" },
    { name: "Kringgesprek", icon: "connected-people" },
    { name: "Kunstatelier", icon: "art" },
    { name: "Levensboeken", icon: "read" },
    { name: "Markt", icon: "shop" },
    { name: "Muziek", icon: "music" },
    { name: "Paardrijden", icon: "horse" },
    { name: "Petanque", icon: "petanque" },
    { name: "Praatcafé", icon: "beer" },
    { name: "Provenciaal domein", icon: "sheep" },
    { name: "Sfeergroep", icon: "people" },
    { name: "Snoezelen", icon: "sofa" },
    { name: "Spik en span", icon: "broom" },
    { name: "Sporten", icon: "soccer-player" },
    { name: "Textiel", icon: "yarn" },
    { name: "Verlof", icon: "home" },
    { name: "Tievo", icon: "paint-palette" },
    { name: "Toneel", icon: "theater-mask" },
    { name: "Tuin", icon: "watering-can" },
    { name: "Uitstap", icon: "rucksack" },
    { name: "Verhalen", icon: "storytelling" },
    { name: "Vorming", icon: "teacher" },
    { name: "Wandelen", icon: "walking" },
    { name: "Weekschema", icon: "calendar-7" },
    { name: "Werkplaats", icon: "factory" },
    { name: "Winkelen", icon: "shopping-cart" },
    { name: "Yoga", icon: "guru" },
    { name: "Zwemmen", icon: "swimming" }
])

// Busses
db.busses.insertMany([
    { name: "Beige", color: "#E2CBA9", icon: "bus" },
	{ name: "Geel", color: "#FDFD96", icon: "bus" },
	{ name: "Blauw", color: "#A5D6F7", icon: "bus" }
])

// Groups
db.groups.insertMany([ // TODO - Add users
	{ name: "Sfeergroep 1" },
	{ name: "Sfeergroep 2" },
	{ name: "Sfeergroep 3" }
])

// LunchUnits
db.lunchunits.insertMany([
    { lunch: "Lasagne", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            
        ] },
    { lunch: "Vol-au-vent met frietjes", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Spaghetti bolognese", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Stoofvlees met gebakken aardappelen", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Fishsticks met purree en spinazie", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id,
            db.users.findOne({ email: "client14@gmail.com" })._id
        ] },
    { lunch: "Worst met aardappelen en doperwten", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Kip met rijst en ananas", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Boomstammetje met aardappelen en wortels", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client7@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] },
    { lunch: "Kabeljauw met preipurree", 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id,
            db.users.findOne({ email: "client15@gmail.com" })._id
        ] }
])

// ActivityUnits
db.activityunits.insertMany([
    { activity: db.activities.findOne({ name: "Weekschema" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id,
            db.users.findOne({ email: "client14@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Sfeergroep" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor2@gmail.com" })._id,
            db.users.findOne({ email: "mentor4@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id,
            db.users.findOne({ email: "client14@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Markt" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor3@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id,
            db.users.findOne({ email: "client14@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kaarsenatelier" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client6@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id,
            db.users.findOne({ email: "client14@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Beleving" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor2@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client7@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Bib" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor4@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client6@gmail.com" })._id,
            db.users.findOne({ email: "client7@gmail.com" })._id,
            db.users.findOne({ email: "client11@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Praatcafé" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor2@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Spik en span" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor3@gmail.com" })._id,
            db.users.findOne({ email: "mentor4@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client3@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Werkplaats" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor4@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Feest" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor2@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client8@gmail.com" })._id,
            db.users.findOne({ email: "client9@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id,
            db.users.findOne({ email: "client12@gmail.com" })._id,
            db.users.findOne({ email: "client13@gmail.com" })._id
        ] }
])

// BusUnits
db.busunits.insertMany([
    { bus: db.busses.findOne({ name: "Geel" })._id, 
        mentors: [
            db.users.findOne({ email: "mentor4@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client1@gmail.com" })._id,
            db.users.findOne({ email: "client2@gmail.com" })._id,
            db.users.findOne({ email: "client5@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id
        ] },
    { bus: db.busses.findOne({ name: "Beige" })._id,
        mentors: [
            db.users.findOne({ email: "mentor2@gmail.com" })._id,
            db.users.findOne({ email: "mentor3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client7@gmail.com" })._id,
            db.users.findOne({ email: "client10@gmail.com" })._id
        ] },
    { bus: db.busses.findOne({ name: "Blauw" })._id,
        mentors: [
            db.users.findOne({ email: "mentor1@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "client3@gmail.com" })._id,
            db.users.findOne({ email: "client4@gmail.com" })._id,
            db.users.findOne({ email: "client7@gmail.com" })._id
        ] }
])

// WorkdayTemplates
db.workdaytemplates.insertMany([
    { weekNumber: 1, dayNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 1, dayNumber: 2, 
        daycareMentors: [
            db.users.findOne({ email: "mentor4@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
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
        ] },
    { weekNumber: 1, dayNumber: 3, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 1, dayNumber: 4, 
        daycareMentors: [db.users.findOne({ email: "mentor3@gmail.com" })._id], 
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
        ] },
    { weekNumber: 1, dayNumber: 5, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 2, dayNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 2, dayNumber: 2, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 2, dayNumber: 3, 
        daycareMentors: [db.users.findOne({ email: "mentor2@gmail.com" })._id], 
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
        ] },
    { weekNumber: 2, dayNumber: 4, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 2, dayNumber: 5, 
        daycareMentors: [db.users.findOne({ email: "mentor1@gmail.com" })._id], 
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
        ] },
    { weekNumber: 3, dayNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 3, dayNumber: 2, 
        daycareMentors: [db.users.findOne({ email: "mentor3@gmail.com" })._id], 
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
        ] },
    { weekNumber: 3, dayNumber: 3, 
        daycareMentors: [db.users.findOne({ email: "mentor2@gmail.com" })._id], 
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
        ] },
    { weekNumber: 3, dayNumber: 4, 
        daycareMentors: [db.users.findOne({ email: "mentor4@gmail.com" })._id], 
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
        ] },
    { weekNumber: 3, dayNumber: 5, 
        daycareMentors: [db.users.findOne({ email: "mentor1@gmail.com" })._id], 
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
        ] },
    { weekNumber: 4, dayNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 4, dayNumber: 2, 
        daycareMentors: [db.users.findOne({ email: "mentor3@gmail.com" })._id], 
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
        ] },
    { weekNumber: 4, dayNumber: 3, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { weekNumber: 4, dayNumber: 4, 
        daycareMentors: [db.users.findOne({ email: "mentor1@gmail.com" })._id], 
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
        ] },
    { weekNumber: 4, dayNumber: 5, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] }
])

// Workdays
db.workdays.insertMany([
    { date: new Date("2019-10-28"), originalWeekNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { date: new Date("2019-10-29"), originalWeekNumber: 1, 
        daycareMentors: [
            db.users.findOne({ email: "mentor4@gmail.com" })._id,
            db.users.findOne({ email: "mentor5@gmail.com" })._id
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
        ] },
    { date: new Date("2019-10-30"), originalWeekNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { date: new Date("2019-10-31"), originalWeekNumber: 1, 
        daycareMentors: [db.users.findOne({ email: "mentor3@gmail.com" })._id], 
        morningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ], 
        amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Sfeergroep" })._id })._id
        ],
        lunch: db.lunchunits.findOne({ lunch: "Vol-au-vent met frietjes" })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({ name: "Werkplaats" })._id })._id
        ],
        eveningBusses: [
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Beige" })._id })._id,
            db.busunits.findOne({ bus: db.busses.findOne({ name: "Blauw" })._id })._id
        ] },
    { date: new Date("2019-11-01"), originalWeekNumber: 1, 
        holiday: true
    },
    { date: new Date("2019-11-02"), originalWeekNumber: 1 },
    { date: new Date("2019-11-03"), originalWeekNumber: 1 },
    { date: new Date("2019-11-04"), originalWeekNumber: 2, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] },
    { date: new Date("2019-11-05"), originalWeekNumber: 2, 
        daycareMentors: [db.users.findOne({ email: "mentor5@gmail.com" })._id], 
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
        ] }
])


// DEMO DATA
db.activities.insertMany([
    { name: "Clb", icon:""},
    { name: "Rozenberg", icon:""},
    { name: "Teamdag", icon:""},
    { name: "Gezelschapsspelen", icon:""},
    { name: "Vilten", icon:""}
    ]
)
// LunchUnits
db.lunchunits.insertMany([
    { lunch: "Spaghetti bolognese", 
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin6@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin10@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient33@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] },
     { lunch: "Fishsticks met purree en spinazie",
         mentors: [
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin12@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id
         ],
         clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id, 
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id
         ] },
     { lunch: "Vol-au-vent met frietjes",
         mentors: [
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin15@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin12@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin19@gmail.com" })._id
         ],
         clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id
         ] },
     { lunch: "Kip met rijst en ananas",
         mentors: [
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin21@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin23@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id
         ],
         clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient40@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id
         ] }
    ])

// ActivityUnits
db.activityunits.insertMany([
    { activity: db.activities.findOne({ name: "Koken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Digitaal atelier" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin6@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Crea" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient33@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Winkelen" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Spik en span" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Beleving" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin10@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient33@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Sporten" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin6@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kaarsenatelier" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] },
        //DAY 2
    { activity: db.activities.findOne({ name: "Koken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Clb" })._id,  
        mentors: [
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Provenciaal domein" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin12@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kaarsenatelier" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Keuken afwas" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Wandelen" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin13@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Crea" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Rozenberg" })._id,  
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id     
        ], 
        clients: [
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] },
        //DAY3
    { activity: db.activities.findOne({ name: "Teamdag" })._id,  
        mentors: [
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin2@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin4@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin6@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin10@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin12@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin13@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin15@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin18@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin19@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient13@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] },
        //DAY 4
    { activity: db.activities.findOne({ name: "Koken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Bakken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin15@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
            
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Markt" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin12@gmail.com" })._id
            
        ], 
        clients: [
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Snoezelen" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id
            
        ], 
        clients: [
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Vilten" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin19@gmail.com" })._id
            
        ], 
        clients: [
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Keuken afwas" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin1@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Digitaal atelier" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Vorming" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin7@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Gezelschapsspelen" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin8@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin13@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin19@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] },
        //DAY 5
    { activity: db.activities.findOne({ name: "Koken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Zwemmen" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Bakken" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin21@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin23@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient40@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Crea" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Keuken afwas" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin11@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kringgesprek" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin9@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin14@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kringgesprek" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin5@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin16@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id
        ] },
    { activity: db.activities.findOne({ name: "Kringgesprek" })._id, 
        mentors: [
            db.users.findOne({ email: "demoadmin17@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin21@gmail.com" })._id,
            db.users.findOne({ email: "demoadmin3@gmail.com" })._id
        ], 
        clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] }
])

// AbsentDates
db.users.updateMany( {}, { $set: { absentDates: []} } )
db.users.updateMany(
    { email: {$in : [
    "democlient2@gmail.com", "democlient3@gmail.com", "democlient5@gmail.com",
    "democlient6@gmail.com", "democlient7@gmail.com", "democlient9@gmail.com",
    "democlient10@gmail.com", "democlient11@gmail.com", "democlient12@gmail.com",
    "democlient13@gmail.com", "demoadmin4@gmail.com"]}},
    { $push: { absentDates: new Date("2019-11-12") } }
)

db.users.updateMany(
    { email: {$in : [
    "democlient2@gmail.com", "democlient4@gmail.com", "democlient11@gmail.com",
    "democlient17@gmail.com", "democlient39@gmail.com", "democlient5@gmail.com",
    "democlient31@gmail.com", "democlient6@gmail.com", "democlient33@gmail.com",
    "democlient9@gmail.com", "democlient1@gmail.com", "democlient10@gmail.com",
    "democlient12@gmail.com", "democlient19@gmail.com", "democlient13@gmail.com",
    "demoadmin15@gmail.com"]}},
    { $push: { absentDates: new Date("2019-11-13") } }
)

db.users.updateMany(
    { email: {$in : [
    "democlient2@gmail.com", "democlient35@gmail.com", "democlient27@gmail.com",
    "democlient20@gmail.com", "democlient21@gmail.com", "democlient33@gmail.com"]}},
    { $push: { absentDates: new Date("2019-11-14") } }
)

db.users.updateMany(
    { email: {$in : [
    "democlient35@gmail.com", "democlient27@gmail.com", "democlient39@gmail.com",
    "democlient20@gmail.com", "democlient21@gmail.com", "democlient33@gmail.com",
    "democlient9@gmail.com", "democlient1@gmail.com", "democlient10@gmail.com",
    "democlient28@gmail.com", "democlient23@gmail.com", "democlient11@gmail.com",
    "democlient12@gmail.com", "democlient19@gmail.com", "democlient13@gmail.com",
    "demoadmin4@gmail.com", "demoadmin21@gmail.com", "demoadmin22@gmail.com"]}},
    { $push: { absentDates: new Date("2019-11-15") } }
)

db.users.updateMany(
    { email: {$in : [
    "democlient35@gmail.com", "democlient20@gmail.com", "democlient33@gmail.com",
    "democlient23@gmail.com", "democlient4@gmail.com", "democlient39@gmail.com",
    "democlient2@gmail.com", "democlient13@gmail.com", "demoadmin4@gmail.com",
    "demoadmin6@gmail.com"]}},
    { $push: { absentDates: new Date("2019-11-18") } }
)




// Workdays
db.workdays.insertMany([
    { date: new Date("2019-11-12"), originalWeekNumber: 3, 
            amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Koken"})._id,
                clients: [
                    db.users.findOne({ email: "democlient14@gmail.com" })._id,
                    db.users.findOne({ email: "democlient15@gmail.com" })._id,
                    db.users.findOne({ email: "democlient16@gmail.com" })._id,
                    db.users.findOne({ email: "democlient17@gmail.com" })._id,
                    db.users.findOne({ email: "democlient18@gmail.com" })._id,
                    db.users.findOne({ email: "democlient19@gmail.com" })._id,
                    db.users.findOne({ email: "democlient20@gmail.com" })._id,
                    db.users.findOne({ email: "democlient21@gmail.com" })._id
                ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Digitaal atelier"})._id,
                clients: [
                    db.users.findOne({ email: "democlient4@gmail.com" })._id,
                    db.users.findOne({ email: "democlient23@gmail.com" })._id,
                    db.users.findOne({ email: "democlient24@gmail.com" })._id,
                    db.users.findOne({ email: "democlient25@gmail.com" })._id,
                    db.users.findOne({ email: "democlient26@gmail.com" })._id,
                    db.users.findOne({ email: "democlient27@gmail.com" })._id
                ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Crea"})._id,
                clients: [
                    db.users.findOne({ email: "democlient28@gmail.com" })._id,
                    db.users.findOne({ email: "democlient29@gmail.com" })._id,
                    db.users.findOne({ email: "democlient30@gmail.com" })._id,
                    db.users.findOne({ email: "democlient31@gmail.com" })._id,
                    db.users.findOne({ email: "democlient8@gmail.com" })._id,
                    db.users.findOne({ email: "democlient32@gmail.com" })._id,
                    db.users.findOne({ email: "democlient33@gmail.com" })._id
                ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Winkelen"})._id,
                clients: [
                    db.users.findOne({ email: "democlient34@gmail.com" })._id,
                    db.users.findOne({ email: "democlient35@gmail.com" })._id,
                    db.users.findOne({ email: "democlient36@gmail.com" })._id,
                    db.users.findOne({ email: "democlient37@gmail.com" })._id,
                    db.users.findOne({ email: "democlient38@gmail.com" })._id,
                    db.users.findOne({ email: "democlient39@gmail.com" })._id
                ]
            })._id,
        ],
        lunch: db.lunchunits.findOne({ 
            lunch: "Spaghetti bolognese", 
            clients: [
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient33@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
            ]
        })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                 name: "Spik en span"})._id, 
                 clients: [
                    db.users.findOne({ email: "democlient34@gmail.com" })._id,
                    db.users.findOne({ email: "democlient24@gmail.com" })._id,
                    db.users.findOne({ email: "democlient27@gmail.com" })._id
                ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Beleving"})._id,
                clients: [
                    db.users.findOne({ email: "democlient14@gmail.com" })._id,
                    db.users.findOne({ email: "democlient36@gmail.com" })._id,
                    db.users.findOne({ email: "democlient30@gmail.com" })._id,
                    db.users.findOne({ email: "democlient33@gmail.com" })._id
                ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Sporten"})._id, 
                clients: [
                    db.users.findOne({ email: "democlient28@gmail.com" })._id,
                    db.users.findOne({ email: "democlient16@gmail.com" })._id,
                    db.users.findOne({ email: "democlient23@gmail.com" })._id,
                    db.users.findOne({ email: "democlient17@gmail.com" })._id,
                    db.users.findOne({ email: "democlient29@gmail.com" })._id,
                    db.users.findOne({ email: "democlient18@gmail.com" })._id,
                    db.users.findOne({ email: "democlient19@gmail.com" })._id,
                    db.users.findOne({ email: "democlient31@gmail.com" })._id,
                    db.users.findOne({ email: "democlient21@gmail.com" })._id,
                    db.users.findOne({ email: "democlient25@gmail.com" })._id,
                    db.users.findOne({ email: "democlient37@gmail.com" })._id,
                    db.users.findOne({ email: "democlient38@gmail.com" })._id,
                    db.users.findOne({ email: "democlient20@gmail.com" })._id
                ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Kaarsenatelier"})._id, 
                clients: [
                    db.users.findOne({ email: "democlient15@gmail.com" })._id,
                    db.users.findOne({ email: "democlient35@gmail.com" })._id,
                    db.users.findOne({ email: "democlient22@gmail.com" })._id,
                    db.users.findOne({ email: "democlient26@gmail.com" })._id,
                    db.users.findOne({ email: "democlient32@gmail.com" })._id,
                    db.users.findOne({ email: "democlient39@gmail.com" })._id
                ]
            })._id,
        ] },
     { date: new Date("2019-11-13"), originalWeekNumber: 3, 
            amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Koken"})._id,
                clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Clb"})._id,
                clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Provenciaal domein"})._id,
                clients: [
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Kaarsenatelier"})._id,
                clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id
        ]
            })._id,
        ],
        lunch: db.lunchunits.findOne({ 
            lunch: "Fishsticks met purree en spinazie", 
            clients: [
                db.users.findOne({ email: "democlient28@gmail.com" })._id,
                db.users.findOne({ email: "democlient3@gmail.com" })._id,
                db.users.findOne({ email: "democlient16@gmail.com" })._id,
                db.users.findOne({ email: "democlient29@gmail.com" })._id,
                db.users.findOne({ email: "democlient30@gmail.com" })._id,
                db.users.findOne({ email: "democlient32@gmail.com" })._id,
                db.users.findOne({ email: "democlient14@gmail.com" })._id,
                db.users.findOne({ email: "democlient36@gmail.com" })._id,
                db.users.findOne({ email: "democlient22@gmail.com" })._id,
                db.users.findOne({ email: "democlient26@gmail.com" })._id,
                db.users.findOne({ email: "democlient38@gmail.com" })._id,
                db.users.findOne({ email: "democlient27@gmail.com" })._id,
                db.users.findOne({ email: "democlient23@gmail.com" })._id,
                db.users.findOne({ email: "democlient18@gmail.com" })._id,
                db.users.findOne({ email: "democlient21@gmail.com" })._id,
                db.users.findOne({ email: "democlient7@gmail.com" })._id,
                db.users.findOne({ email: "democlient8@gmail.com" })._id,
                db.users.findOne({ email: "democlient34@gmail.com" })._id,
                db.users.findOne({ email: "democlient15@gmail.com" })._id,
                db.users.findOne({ email: "democlient35@gmail.com" })._id,
                db.users.findOne({ email: "democlient24@gmail.com" })._id,
                db.users.findOne({ email: "democlient30@gmail.com" })._id,
                db.users.findOne({ email: "democlient25@gmail.com" })._id
             ]
        })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                 name: "Keuken afwas"})._id, 
                 clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Wandelen"})._id,
                clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient35@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient20@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Crea"})._id, 
                clients: [
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Rozenberg"})._id, 
                clients: [
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ]
            })._id,
        ] },
     { date: new Date("2019-11-14"), originalWeekNumber: 3, 
            amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Teamdag"})._id,
                clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient13@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient23@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ]
            })._id
        ] },
     { date: new Date("2019-11-15"), originalWeekNumber: 3, 
            amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Koken"})._id,
                clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Bakken"})._id,
                clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id
        ]
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Markt"})._id,
                clients: [
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ]  
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Snoezelen"})._id,
                clients: [
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Vilten"})._id,
                clients: [
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id
        ] 
            })._id
        ],
        lunch: db.lunchunits.findOne({ 
            lunch: "Vol-au-vent met frietjes", 
            clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient4@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id
         ] 
        })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                 name: "Keuken afwas"})._id, 
                 clients: [
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Digitaal atelier"})._id,
                clients: [
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient39@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Vorming"})._id, 
                clients: [
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Gezelschapsspelen"})._id, 
                clients: [
            db.users.findOne({ email: "democlient2@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ]
            })._id
        ] }])
     { date: new Date("2019-11-18"), originalWeekNumber: 4, 
            amActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Koken"})._id,
                clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Zwemmen"})._id,
                clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Bakken"})._id,
                clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient40@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Crea"})._id,
                clients: [
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id
        ] 
            })._id
        ],
        lunch: db.lunchunits.findOne({ 
            lunch: "Kip met rijst en ananas", 
            clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id,
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient8@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id,
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient40@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id
         ] 
        })._id,
        pmActivities: [
            db.activityunits.findOne({ activity: db.activities.findOne({
                 name: "Keuken afwas"})._id, 
                 clients: [
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Kringgesprek"})._id,
                clients: [
            db.users.findOne({ email: "democlient28@gmail.com" })._id,
            db.users.findOne({ email: "democlient27@gmail.com" })._id,
            db.users.findOne({ email: "democlient36@gmail.com" })._id,
            db.users.findOne({ email: "democlient24@gmail.com" })._id,
            db.users.findOne({ email: "democlient29@gmail.com" })._id,
            db.users.findOne({ email: "democlient30@gmail.com" })._id,
            db.users.findOne({ email: "democlient21@gmail.com" })._id,
            db.users.findOne({ email: "democlient22@gmail.com" })._id,
            db.users.findOne({ email: "democlient37@gmail.com" })._id,
            db.users.findOne({ email: "democlient32@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({
                name: "Kringgesprek"})._id, 
                clients: [
            db.users.findOne({ email: "democlient1@gmail.com" })._id,
            db.users.findOne({ email: "democlient14@gmail.com" })._id,
            db.users.findOne({ email: "democlient15@gmail.com" })._id,
            db.users.findOne({ email: "democlient17@gmail.com" })._id,
            db.users.findOne({ email: "democlient18@gmail.com" })._id,
            db.users.findOne({ email: "democlient10@gmail.com" })._id,
            db.users.findOne({ email: "democlient31@gmail.com" })._id,
            db.users.findOne({ email: "democlient25@gmail.com" })._id,
            db.users.findOne({ email: "democlient7@gmail.com" })._id,
            db.users.findOne({ email: "democlient26@gmail.com" })._id
        ] 
            })._id,
            db.activityunits.findOne({ activity: db.activities.findOne({ 
                name: "Kringgesprek"})._id, 
                clients: [
            db.users.findOne({ email: "democlient34@gmail.com" })._id,
            db.users.findOne({ email: "democlient12@gmail.com" })._id,
            db.users.findOne({ email: "democlient3@gmail.com" })._id,
            db.users.findOne({ email: "democlient9@gmail.com" })._id,
            db.users.findOne({ email: "democlient16@gmail.com" })._id,
            db.users.findOne({ email: "democlient11@gmail.com" })._id,
            db.users.findOne({ email: "democlient5@gmail.com" })._id,
            db.users.findOne({ email: "democlient19@gmail.com" })._id,
            db.users.findOne({ email: "democlient6@gmail.com" })._id,
            db.users.findOne({ email: "democlient38@gmail.com" })._id
        ] 
            })._id
        ] }
    ])
    


