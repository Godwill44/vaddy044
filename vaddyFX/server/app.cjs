const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const multer=require('multer')

const app=express();
app.use(express.json)
app.use(cors({
    origin:["http://localhost:3000","http://localhost:5173"],
    methods:['POST','GET','PUT','DELETE'],
    allowedHeaders:['Context-type','Authorization'],
    Credentials:true,
}))




const connection=mysql.createConnection(
    host:'localhost',
    db: 'vaddyFX',
    user:'root''
    password:'',
)   





app.listen('3000', ()=>{console.log('my name is godwill');} )
