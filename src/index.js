const io = require("socket.io")();

io.on("connection", (socket) => {
	console.log(`User connected ${socket.id}`);

	socket.on("disconnect", (reason) => {
		console.log(`User ${socket.id} disconnected. Reason: ${reason}`);
	});

  socket.on("client_msg", (stream) => {
    console.log(`${socket.id} sent: ${stream}`);
    io.emit("server_msg", stream);
  });
});

io.listen(8000, { cors: { origin: "*" } });
console.log("Server listening on port 8000");
