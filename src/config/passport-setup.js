const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('Perfil de Google recibido:', profile);
        
        // Aquí normalmente buscarías/crearías el usuario en la BD
        // Por ahora simulamos con los datos del perfil
        const user = {
            id: profile.id,
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value
        };
        
        return done(null, user);
    } catch (error) {
        console.error('Error en estrategia de Google:', error);
        return done(error, false);
    }
}));

// Serializar usuario para la sesión
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserializar usuario de la sesión
passport.deserializeUser((id, done) => {
    // En una app real, buscarías al usuario por ID en la BD
    const mockUser = { id: id };
    done(null, mockUser);
});