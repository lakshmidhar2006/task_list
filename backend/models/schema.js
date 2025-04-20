const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title :{type:String},
    description:{type:String},
    dueDate:{type:Date}
})
module.exports = mongoose.model('tasko',taskSchema)