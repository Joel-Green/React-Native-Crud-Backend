const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username:String
},
{
    collection:'ReactTestCRUD'
})

module.exports = mongoose.model('User',userSchema);
