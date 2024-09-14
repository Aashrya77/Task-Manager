const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
   name: {
    type: String,
    required: ['Name of the task is required']
   },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Product', productSchema)