const fs = require('fs').promises;
const path = './data/vuelos.json';


async function getVuelos(){
    const vuelos = await fs.readFile(path, 'utf-8')
    return JSON.parse(vuelos);
}

async function getVuelo(id){
    const vuelos = await getVuelos();
    return vuelos.find( vuelo => vuelo.id == id);
}

async function addVuelo(vuelo){
    const vuelos = await getVuelos();
    vuelos.sort((a,b)=> a.id - b.id)
    const lastId = vuelos[vuelos.length -1].id;
    vuelo.id = lastId + 1;
    vuelos.push(vuelo);
    await fs.writeFile(path,JSON.stringify(vuelos, null, " "));
    return vuelo;
}

async function deleteVuelo(id){
    const vuelos = getVuelos();
    vuelos.splice(
        vuelos.findIndex( vuelo => vuelo.id == id),1
    );
    fs.writeFile(path, JSON.stringify(vuelos,null," "));
}

async function updateVuelo(vuelo){
    const vuelos = await getVuelos();
    const index = vuelos.findIndex(v => v.id == vuelo.id);
    if(vuelo.origen){
        vuelos[index].origen = vuelo.origen;
    }
    if(vuelo.destino){
        vuelos[index].destino = vuelo.destino;
    }
    if(vuelo.duracion){
        vuelos[index].duracion = vuelo.duracion;
    }
    if(vuelo.precio){
        vuelos[index].precio = vuelo.precio;
    }
    await fs.writeFile(path, JSON.stringify(vuelos,null," "));
    return vuelos[index];
}


module.exports = {getVuelos, getVuelo, addVuelo, deleteVuelo, updateVuelo};
