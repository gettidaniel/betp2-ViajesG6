const connection = require('./connection');
let objectId = require('mongodb').ObjectId;

const dbName = 'sample_tp2';

async function getVuelos() {
    const clienteMongo = await connection.getConnection();

    const vuelos = await clienteMongo.db(dbName).collection('vuelos').find()
        .toArray();
    return vuelos;
}

async function getVuelo(id) {
    const clienteMongo = await connection.getConnection();
    const vuelo = await clienteMongo.db(dbName).collection('vuelos')
        .findOne({_id: new objectId(id)});
    return vuelo;
}

async function addVuelo(vuelo) {
    const clienteMongo = await connection.getConnection();
    const agregar = await clienteMongo.db(dbName).collection('vuelos')
        .insertOne(vuelo);
    return agregar;
}

async function updateVuelo(vuelo) {
    const clienteMongo = await connection.getConnection();
    const query = {_id: new objectId(vuelo._id)};
    const newvalues = {
        $set: {
            origen: vuelo.origen,
            destino: vuelo.destino,
            duracion: vuelo.duracion,
            precio: vuelo.precio
        }
    };
    const actualizar = await clienteMongo.db(dbName).collection('vuelos')
        .updateOne(query,newvalues);
    return actualizar;
}

async function deleteVuelo(vuelo) {
    const clienteMongo = await connection.getConnection();
    const borrar = await clienteMongo.db(dbName).collection('vuelos').deleteOne({_id: new objectId(id)}); 
    return borrar;
}


module.exports = { getVuelos, getVuelo, addVuelo, updateVuelo, deleteVuelo };
