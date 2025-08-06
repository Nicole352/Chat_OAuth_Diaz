module.exports = (req, res, next) => {
    // Verificar si el usuario tiene sesión con Passport (OAuth)
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }
    
    // Verificar si tiene cookie de username (método manual)
    if (req.cookies.username) {
        return next();
    }
    
    // Si no está autenticado de ninguna forma, redirigir a registro
    res.redirect('/register');
};