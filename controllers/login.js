const { User } = require('../../models');
const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const token = async (req, res) => {
  const { displayName, password } = req.body;

  if (!displayName || !password) return res.
}