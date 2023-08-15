import auth from './auth'

export default {
  components: {
    schemas: {
      ...auth,
      Error: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          statusCode: { type: 'number' },
        }
      }
    }
  }
}