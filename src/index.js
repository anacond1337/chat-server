const io = require("socket.io")();

io.on("connection", (socket) => {
	console.log(`User connected ${socket.id}`);

	socket.on("disconnect", (reason) => {
		console.log(`User ${socket.id} disconnected. Reason: ${reason}`);
	});
});

io.listen(8000, { cors: { origin: "*" } });
console.log("Server listening on port 8000");
