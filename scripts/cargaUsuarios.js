db = db.getSiblingDB('sample_tp2');
db.usuarios.drop(),
db.usuarios.insertMany([
    {
     "nombre": "Jim",
     "apellido": "Morrison",
     "fecha_nacimiento": "15-04-1944",
     "mail": "jmorrison@gmail.com"
    },
    {
     "nombre": "Jimi",
     "apellido": "Hendrix",
     "fecha_nacimiento": "19-07-1943",
     "mail": "jhendrix@gmail.com"
    },
    {
     "nombre": "John",
     "apellido": "Densmore",
     "fecha_nacimiento": "27-01-1944",
     "mail": "jdensmore@gmail.com"
    },
    {
     "nombre": "Robert",
     "apellido": "Plant",
     "fecha_nacimiento": "20-08-1948",
     "mail": "jplant@gmail.com"
    },
    {
     "nombre": "Carlos",
     "apellido": "Santana",
     "fecha_nacimiento": "20-07-1947",
     "mail": "csantana@gmail.com"
    }
   ]

)