const connection = require('./connection');
let objectId = require('mongodb').ObjectId;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dbName = 'sample_tp2';

async function getUsuarios() {
    const clienteMongo = await connection.getConnection();

    const Usuarios = await clienteMongo.db(dbName).collection('usuarios').find()
        .toArray();
    return Usuarios;
}

async function getUsuario(id) {
    const clienteMongo = await connection.getConnection();
    const usuario = await clienteMongo.db(dbName).collection('usuarios')
        .findOne({_id: new objectId(id)});
    return usuario;
}

async function addUsuario(usuario) {
    const clienteMongo = await connection.getConnection();
    usuario.password = bcrypt.hashSync(usuario.password, 8);
    
    const agregar = await clienteMongo.db(dbName).collection('usuarios')
        .insertOne(usuario);
    return agregar;
}

async function findByCredentials(email, password){
    const clienteMongo = await connection.getConnection();

    const user = await clienteMongo.db(dbName)
        .collection('users')
        .findOne({email:email});

        if (!user){
            throw new Error('Usuario inexistente');
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch){
            throw new Error('Password invalida');
        }

        return user;
}

async function generateJWT(user) {
    const token = jwt.sign({_id: user._id, email: user.email}, process.env.SECRET, {expiresIn: '1h'});
    return token;
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
    const actualizar = await clienteMongo.db(dbName).collection('usuarios')
        .updateOne(query,newvalues);
    return actualizar;
}

async function deleteUsuario(id) {
    const clienteMongo = await connection.getConnection();
    const borrar = await clienteMongo.db(dbName).collection('usuarios').deleteOne({_id: new objectId(id)}); 
    return borrar;
}


module.exports = { getUsuarios, getUsuario, addUsuario, updateUsuario, deleteUsuario, findByCredentials, generateJWT };