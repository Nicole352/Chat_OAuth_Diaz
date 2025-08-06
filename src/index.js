const express = require('express');
const { createServer } = require('http');
const realTimeServer = require('./realTimeServer');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// Cargar variables de entorno
require('dotenv').config();

// Configurar Passport
require('./config/passport-setup');

const app = express();
const httpServer = createServer(app);

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(cookieParser());

// Configurar sesión para Passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'mi_session_secreta_123456',
    resave: false,
    saveUninitialized: false
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

// Rutas de autenticación OAuth
app.use('/auth', require('./routes/auth'));

// Rutas principales
app.use(require('./routes'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
httpServer.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

// Llamo al servidor en tiempo real
realTimeServer(httpServer);