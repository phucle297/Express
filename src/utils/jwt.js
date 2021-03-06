const jwt = require("jsonwebtoken");
const config = require("../config");

const EXPIRES_IN = 60 * 60 * 24; //seconds

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const token = jwt.sign(payload, config.SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });

  return { token, expiresIn: EXPIRES_IN };
};

module.exports = generateToken;
