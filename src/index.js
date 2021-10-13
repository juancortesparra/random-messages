const messages = [
  'Hola',
  'Querido',
  'Amigo',
  'Bienvenido',
  'A la web 3.0',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
