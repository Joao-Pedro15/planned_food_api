export default {
  openapi: '3.0.1',
  info: {
    version: '0.0.0',
    title: 'API TEST',
    description: 'TEST API',
    contact: {
      name: 'João Monteiro - jjoao.monteiro15@gmail.com',
    }
  },
  servers: [{
    url: 'http://localhost:3000',
    description: 'Local server'
  }],
  tags: [
    'Rota de autenticação'
  ]
}