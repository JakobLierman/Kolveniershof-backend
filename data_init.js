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
    { date: new Date("2019-11-04"), originalWeekNumber: 1, 
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
    { date: new Date("2019-11-05"), originalWeekNumber: 1, 
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
    { date: new Date("2019-11-06"), originalWeekNumber: 1, 
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
    { date: new Date("2019-11-07"), originalWeekNumber: 1, 
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
    { date: new Date("2019-11-08"), originalWeekNumber: 1, 
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
    { date: new Date("2019-11-09"), originalWeekNumber: 1 },
    { date: new Date("2019-11-1O"), originalWeekNumber: 1 },
    { date: new Date("2019-11-11"), originalWeekNumber: 2, 
        holiday: true },
    { date: new Date("2019-11-12"), originalWeekNumber: 2, 
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
