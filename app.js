const express = require('express');
const app = express();
const router = express.Router();
const mongoose  = require('mongoose');
const bodyParser = require ('body-parser');

// app.use('/userstest',userTestRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('useFindAndModify', false);

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
});
const userRoutes = require('./api/routes/users');
// const userTestRoutes = require('./api/routes/userstest');

app.use('/users',userRoutes);


mongoose.connect('mongodb://localhost:27017/ReactTest',{ useNewUrlParser: true })

// app.use((req, res , next )=> {
//     res.status(200).json({
//         message:'Test'
//     })
// })



module.exports = app;