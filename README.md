
💬 Web Chat con OAuth 2.0
Una aplicación de chat en tiempo real desarrollada con Node.js, Express y Socket.IO, que incluye autenticación tradicional y OAuth 2.0 con Google.
🚀 Características

Chat en tiempo real con Socket.IO
Autenticación dual:

Login manual con username
OAuth 2.0 con Google


Interfaz moderna con botones de Google OAuth
Gestión de sesiones con Passport.js
Imágenes de perfil dinámicas desde Google
Compatible con ambos métodos de autenticación

🛠️ Tecnologías Utilizadas

Backend: Node.js, Express
Tiempo real: Socket.IO
Autenticación: Passport.js, Google OAuth 2.0
Frontend: HTML5, CSS3, JavaScript vanilla
Gestión de estado: Cookies y sesiones

📋 Prerrequisitos

Node.js (v14 o superior)
npm o yarn
Cuenta de Google Cloud Platform
Cliente OAuth 2.0 configurado en Google Console

⚙️ Instalación

Clonar el repositorio

bashgit clone <tu-repositorio>
cd web-chat-oauth

Instalar dependencias

bashnpm install
npm install passport passport-google-oauth20 dotenv express-session

🏃‍♂️ Uso

Iniciar el servidor

bashnode index.js

Abrir navegador

Ir a http://localhost:3000
Se redirigirá a /register si no estás autenticado


Autenticarse

Opción 1: Click en "Continuar con Google"
Opción 2: Ingresar username manualmente


Chatear

Escribir mensajes en tiempo real
Ver imagen de perfil de Google (si usaste OAuth)



📁 Estructura del Proyecto
├── config/
│   └── passport-setup.js      # Configuración de Passport
├── middlewares/
│   └── isLoggedIn.js          # Middleware de autenticación
├── routes/
│   ├── index.js               # Rutas principales
│   └── auth.js                # Rutas de OAuth
├── public/
│   ├── css/                   # Estilos
│   └── js/
│       ├── script.js          # Cliente del chat
│       └── register.js        # Lógica de registro
├── views/
│   ├── index.html             # Página principal del chat
│   └── register.html          # Página de autenticación
├── .env                       # Variables de entorno
├── index.js                   # Servidor principal
└── realTimeServer.js          # Configuración de Socket.IO
🔐 Flujo de Autenticación OAuth 2.0

Usuario hace click en "Continuar con Google"
Redirección a Google para autorización
Google redirige a /auth/google/callback
Passport procesa la respuesta
Se crean cookies con datos del usuario
Redirección al chat principal

🛡️ Seguridad

Variables de entorno para credenciales sensibles
Sesiones seguras con express-session
Middleware de autenticación en rutas protegidas
Limpieza de cookies en logout

📱 Rutas Disponibles

GET / - Chat principal (requiere autenticación)
GET /register - Página de login/registro
GET /auth/google - Iniciar OAuth con Google
GET /auth/google/callback - Callback de Google
GET /auth/logout - Cerrar sesión



#CAPTURAS#


<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/dd75cb76-a565-4c6b-bbaf-253d7a852771" />



<img width="811" height="711" alt="image" src="https://github.com/user-attachments/assets/94af56aa-0a0a-4927-acf4-b69e3c862a7f" />



<img width="828" height="388" alt="image" src="https://github.com/user-attachments/assets/12d61be9-fbee-499a-bda1-a22e07e11568" />


<img width="749" height="318" alt="image" src="https://github.com/user-attachments/assets/6eaa3e6e-43b0-4733-8a2c-2cf0c89fd252" />



<img width="519" height="617" alt="image" src="https://github.com/user-attachments/assets/cf9c79c8-f520-42ba-ada4-82e2d77ea349" />




<img width="1073" height="808" alt="image" src="https://github.com/user-attachments/assets/6a2968d9-9468-4edc-89b4-68958c401ad9" />


<img width="1091" height="399" alt="image" src="https://github.com/user-attachments/assets/d4d5883f-1df9-45f6-81b8-cbd4e1c19f33" />



👨‍💻 Autor
Nicole Jamilex Diaz Valdez - Estudiante de Tecnologías de la Información
