const express = require('express');
const mongose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouters = require('./routers/userRouters');
//const productRouters = require('./routers/productRouter2');
const authUserRouter = require('./routers/authUserRouter');
const cartRouter=require('./routers/cartRouter');
const cors=require('cors');


const app = express();
app.use(cors({
    origin:'http://127.0.0.1:5500',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Auth']
}));

app.use(bodyParser.json());
app.use('/api', userRouters);
//app.use('/api', productRouters);
app.use('/auth', authUserRouter);
app.use('/api', cartRouter);
//  conect mongose
mongose.connect('mongodb+srv://hat:hareth12hareth@cluster0.53ruq.mongodb.net/store',{
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