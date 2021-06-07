const connection = require('./connection');
let objectId = require('mongodb').ObjectId;

async function getUsuarios() {
    const clienteMongo = await connection.getConnection();

    const Usuarios = await clienteMongo.db('sample_tp2').collection('usuarios').find()
        .toArray();
    return Usuarios;
}

async function getUsuario(id) {
    const clienteMongo = await connection.getConnection();
    const usuario = await clienteMongo.db('sample_tp2').collection('usuarios')
        .findOne({_id: new objectId(id)});
    return usuario;
}

async function addUsuario(usuario) {
    const clienteMongo = await connection.getConnection();
    const agregar = await clienteMongo.db('sample_tp2').collection('usuarios')
        .insertOne(usuario);
    return agregar;
}

async function updateUsuario(usuario) {
    const clienteMongo = await connection.getConnection();
    const query = {_id: new objectId(usuario._id)};
    const newvalues = {
        $set: {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            fecha_nacimiento: usuario.fecha_nacimiento,
            mail: usuario.mail
        }
    };
    const actualizar = await clienteMongo.db('sample_tp2').collection('usuarios')
        .updateOne(query,newvalues);
    return actualizar;
}

async function deleteUsuario(usuario) {
    const clienteMongo = await connection.getConnection();
    const borrar = await clienteMongo.db('sample_tp2').collection('usuarios').deleteOne({_id: new objectId(id)}); 
    return borrar;
}


module.exports = { getUsuarios, getUsuario, addUsuario, updateUsuario, deleteUsuario };