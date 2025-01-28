const express = require('express');
const mongose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouters = require('./routers/userRouters');
const authRouters = require('./routers/authUserRouter');

const app = express();
app.use(bodyParser.json());
app.use('/api', userRouters);
app.use('/auth', authRouters);
//  conect mongose
mongose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Database connected');
}).catch((error)=>{
    console.log(error);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})