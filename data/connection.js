const mongoCLient = require('mongodb').MongoClient;
const uri = process.env.CONNECTION_MONGO;

const client = new mongoCLient(uri);

let instance = null;

async function getConnection() {
    if(instance==null){
        try{
            instance = await client.connect();
        }catch(err){
            console.log(err.message);
        }
    }
    return instance;
}


module.exports = {getConnection}