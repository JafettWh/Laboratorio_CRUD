const jwt = require('jsonwebtoken');
const env = require('../config/env');

function createToken(user) {
    return jwt.sign(
        {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol 
        },
        env.jwtSecret,
        { expiresIn: env.jwtexpiresIn }
    );
}

module.exports = { createToken };
