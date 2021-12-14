const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',
    title: 'Dziennik snów API',
    description: 'Dokumentacja endpointów dziennika snów'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Analysis',
      description: 'Endpoints'
    },
    {
      name: 'Auth',
      description: 'Endpoints'
    },
    {
      name: 'Categories',
      description: 'Endpoints'
    },
    {
      name: 'Consciousness',
      description: 'Endpoints'
    },
    {
      name: 'Dream',
      description: 'Endpoints'
    },
    {
      name: 'Emotions',
      description: 'Endpoints'
    },
    {
      name: 'Profile',
      description: 'Endpoints'
    },
    {
      name: 'Shared Dreams',
      description: 'Endpoints'
    },
    {
      name: 'Users',
      description: 'Endpoints'
    }
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'JWT',
      in: 'header', // can be "header", "query" or "cookie"
      name: 'X-API-KEY' // name of the header, query parameter or cookie
    }
  },
  definitions: {
    register: {
      name: 'andrzejek12',
      email: 'andrzejek1232@wp.pl',
      password: 'haslo123',
      verification: 'token'
    }
  }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js')
})
