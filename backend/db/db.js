const mongoose = require('mongoose')

const db = async()=>{
    try{
        await mongoose.connect(process.env.mongo)
        console.log("connected")
    }
    catch(e){
        console.log(e)
    }
}

module.exports = db