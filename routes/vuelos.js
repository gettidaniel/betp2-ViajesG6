var express = require('express');
var router = express.Router();
const dataVuelo = require('../data/vuelo')

/* GET vuelos listing. */
router.get('/', async function(req, res, next) {
    const vuelos = await dataVuelo.getVuelos();
    res.json(vuelos);
});

router.get('/:id' , async (req, res) => {
    const vuelo = await dataVuelo.getVuelo(req.params.id);
    res.json(vuelo);
})

router.post('/', async (req,res)=>{
    //TODO Validacion
    let vuelo = req.body;
    vuelo = await dataVuelo.addVuelo(vuelo);
    res.json(vuelo);
})


router.put('/:id', async (req,res)=>{
    //TODO Validacion
    let id = req.params.id;
    let vuelo = req.body;
    vuelo.id = id;
    vuelo = await dataVuelo.updateVuelo(vuelo);
    res.json(vuelo);
})

module.exports = router;