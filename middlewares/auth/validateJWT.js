const jwt = require('jsonwebtoken');
const { User } = require('../../models');

// Mesma chave privada que usamos para criptografar o token.
const SEGREDO = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  // ou
  // const { authorization } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, SEGREDO);

    const user = await User.findOne({ email: decoded.data.email });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    
    // req.email = decoded.data;
    // ou se não tivesse o decode.data.email la no findOne
    req.user = user;

    // console.log('req', req);
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};