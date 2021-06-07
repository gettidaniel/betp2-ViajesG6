db = db.getSiblingDB('sample_tp2');
db.vuelos.drop(),
db.vuelos.insertMany([
    {
     "origen": "Buenos Aires",
     "destino": "Cordoba",
     "duracion": 1,
     "precio": 17500
    },
    {
     "origen": "Buenos Aires",
     "destino": "Mendoza",
     "duracion": 1.5,
     "precio": 22500
    },
    {
     "origen": "Buenos Aires",
     "destino": "Ushuaia",
     "duracion": 3,
     "precio": 25500
    },
    {
     "origen": "Buenos Aires",
     "destino": "Posadas",
     "duracion": 2,
     "precio": 24500
    },
    {
     "origen": "Buenos Aires",
     "destino": "Florianopolis",
     "duracion": 4,
     "precio": 29000
    },
    {
     "origen": "Cordoba",
     "destino": "Mendoza",
     "duracion": 1,
     "precio": 12500,
    }
   ]

)