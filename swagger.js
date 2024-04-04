const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for Bulk email Sender',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Change this to your server URL
                description: 'Local server',
            },
            {
                url: 'https://bulk-email-sender-5pem.onrender.com',
                description: 'Production Server',
            }
        ],
    },
    apis: ['./routes/*.js'], // Path to the routes folder or specific route files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
