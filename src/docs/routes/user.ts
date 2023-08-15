export default {
  post: {
    tags: ['Rotas post de user'],
    description: 'Rotas post de user',
    operationId: 'createAuth',
    parameters: ["id"],
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