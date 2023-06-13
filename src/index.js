const express= require('express') ;
const app=express();
const port=3000;
const bookrouter=require('./routes/book');
const productrouter=require('./routes/product')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/v1/',bookrouter);
app.use('/v1/',productrouter);
// app.get('/message/:msg',(req,res)=>{
//     let msg=req.params.msg;
//     console.log("Message:",msg);
//     res.send('Message is sent...')
// })
// // app.get('/',(req,res) => {res.send('Hello')});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});