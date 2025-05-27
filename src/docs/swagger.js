const swaggerJSDoc = require('swagger-jsdoc')

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Sizning Loyihangiz API',
			version: '1.0.0',
			description: 'API hujjatlari Swagger orqali',
		},
		servers: [
			{
				url: 'https://api.kitob-faxr.uz/api',
				description: 'Local server',
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'https',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	apis: ['../routes/*.js', '../controller/*.js', '../models/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
