const express = require('express');
const passport = require('passport');
const router = express.Router();

// Ruta para iniciar autenticación con Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback de Google
router.get('/google/callback',
    passport.authenticate('google', { 
        failureRedirect: '/register?error=auth_failed' 
    }),
    (req, res) => {
        // Autenticación exitosa
        // Guardamos los datos del usuario en cookies para mantener compatibilidad
        res.cookie('username', req.user.displayName);
        res.cookie('userEmail', req.user.email);
        res.cookie('userPhoto', req.user.photo);
        res.cookie('googleId', req.user.googleId);
        
        // Redirigir al chat
        res.redirect('/');
    }
);

// Ruta para logout
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error en logout:', err);
        }
    });
    // Limpiar cookies
    res.clearCookie('username');
    res.clearCookie('userEmail');
    res.clearCookie('userPhoto');
    res.clearCookie('googleId');
    res.redirect('/register');
});

module.exports = router;