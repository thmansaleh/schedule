const { createServer } = require("http");
const { Server } =  require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
 cors:{
    origin:'*',
    methods:['GET','POST']
 }
});

io.on("connection", async (socket) => {
// console.log(socket.id)

socket.on('message',(data)=>{
console.log('recive rq')
socket.emit('customEvent', { response: 'This is a custom event', originalMessage: message });

socket.broadcast.emit('getLocationFromUser')
})
socket.on('sendLocation',  (data)=>{
    console.log('data is ',    data)
    socket.broadcast.emit('reciveLocation',data)
    })
});

httpServer.listen(8080,()=>{
    console.log('lisining 80')

});