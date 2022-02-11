const jwt = require('jsonwebtoken');

// Mesma chave privada que usamos para criptografar o token.
const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, segredo);
    
    req.email = decoded.data;

    console.log('req', req);
    
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};