module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  
  io.on("connection", (socket) => {
    const cookie = socket.handshake.headers.cookie;
    let user = "Usuario";
    
    if (cookie) {
      // Parsear cookies para obtener el nombre de usuario
      const cookies = {};
      cookie.split(';').forEach(c => {
        const [name, value] = c.trim().split('=');
        cookies[name] = decodeURIComponent(value);
      });
      
      // Usar el nombre de usuario de la cookie
      user = cookies.username || "Usuario";
    }

    socket.on("message", (message) => {
      io.emit("message", {
        user,
        message,
      });
    });
    
    socket.on("disconnect", () => {
      console.log(`Usuario ${user} desconectado`);
    });
  });
};