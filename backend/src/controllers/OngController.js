const generateUniqueId = require('../utils/generateUniqueId')

const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        
        return response.json(ongs);
      },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; // Operador destructuring

  const id = generateUniqueId();

  await connection('ongs').insert({ // Insere no banco de dados
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
  })

  return response.json({ id }); 
    }
};