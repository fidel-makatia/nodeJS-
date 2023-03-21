var express = require('express');
var bodyParser= require('body-parser');
var app= express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

var dbUrl = 'mongodb+srv://fidelmakatia:Makatia001@cluster0.52kr2nw.mongodb.net/?retryWrites=true&w=majority';


app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var Message = mongoose.model('Message',{
    name: String,
    messege : String
})




app.get('/messeges', async (req,res)=>{
   try{
    const messeges=  await Message.find({});
    res.send(messeges);
    console.log(messeges);
   }catch(err){
    console,log(err);
   }

    
});

app.post('/messeges', (req,res)=>{
    var message=new Message(req.body)

    message.save().catch((error)=>{
        if(err){
            sendStatus(500);
        }
       
    });
   
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket)=>{
    console.log("A user connected")
})

var db=  mongoose.connect(dbUrl).
catch(error => console.log('connecting error', error));
console.log(db)
var server=http.listen(3000 , ()=>{
    console.log('server is listening on port', server.address().port )
});
