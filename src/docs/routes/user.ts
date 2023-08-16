export default {
  post: {
    tags: ['Rota de autenticação'],
    description: 'Rotas post de user',
    operationId: 'createAuth',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id do usuário',
        required: true
      }
    ],
    responses: {
      200: {
        description: 'generate token successfully!',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/AuthResponse'
            }
          }
        }
      }
    }
  } 
}