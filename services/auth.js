const fb = (request, response) => {
  response.status(200).send('Trying to register with FB');
};

module.exports = {
  fb,
};
