const mongoose = require('mongoose');
const dbConnected = async ()=>{
    try {
        await mongoose.connect("mongodb://Iman:iman213213@127.0.0.1:27017/MangemeBot");
        console.log('Db is connected');

    }catch(error){
        console.log('Db connection error');

    }
};

dbConnected()


module.exports = dbConnected
