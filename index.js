const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


var usuarios = [];


app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket)=>{
  
    socket.on('chat message',(obj)=>{
      io.emit('chat message',obj);
    })


  socket.on('disconnect',()=>{
    console.log('desconectado!');
  })
})

http.listen(3000,function(){
  console.log('Servidor Funcionando!');
})