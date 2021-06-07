var express = require('express');
var router = express.Router();
const dataUser = require('../data/userdb');

/* GET usuarios listing. */
router.get('/', async (req, res) => {
    const usuarios = await dataUser.getUsuarios();
    res.json(usuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await dataUser.getUsuario(req.params.id);
    res.json(usuario);
    /* if (usuario == null) {
        res.status(404);
    } else {
        res.json(usuario);
    } */
    //si no lo encuentra que mande un 404 recurso no encontrado. Al ser Json devuelve vacio.
});

router.post('/', async (req, res) => {
    //TODO Validacion
    let usuario = req.body;
    usuario = await dataUser.addUsuario(usuario);
    res.json(usuario);
});


router.put('/:id', async (req, res) => {
    //TODO Validacion
    let id = req.params.id;
    let usuario = req.body;
    usuario._id = id;
    usuario = await dataUser.updateUsuario(usuario);
    res.json(usuario);
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await dataUser.deleteUsuario(id)
    res.send('Eliminado');
});

module.exports = router