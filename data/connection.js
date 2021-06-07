const mongoCLient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Santiago:BETP2-2021@cluster0.jg64a.mongodb.net/sample_tp2?retryWrites=true&w=majority';

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