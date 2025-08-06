const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

// Obtener foto de perfil de las cookies si está disponible
function getProfileImage() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = decodeURIComponent(value);
    });
    
    // Si tiene foto de Google, usarla, sino usar la imagen por defecto
    return cookies.userPhoto || '/img/perfil.jpg';
}

send.addEventListener("click", () => {
  const message = document.querySelector("#message");
  if (message.value.trim() !== "") {
    socket.emit("message", message.value);
    message.value = "";
  }
});

// Permitir enviar mensaje con Enter
document.querySelector("#message").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    send.click();
  }
});

socket.on("message", ({ user, message }) => {
  const profileImage = getProfileImage();
  
  const msg = document.createRange().createContextualFragment(`
        <div class="message">
                <div class="image-container">
                    <img src="${profileImage}" alt="Perfil" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                </div>
                <div class="message-body">
                    <div class="user-info">
                        <span class="username">${user}</span>
                        <span class="time">Ahora</span>
                    </div>
                    <p>${message}</p>
                </div>
            </div>
        `);
  allMessages.append(msg);
  
  // Scroll automático hacia abajo
  allMessages.scrollTop = allMessages.scrollHeight;
});