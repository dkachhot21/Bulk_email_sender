const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Infrastructure of a Bulk Email sender',
            version: '1.0.0',
            description: '***This API allows you to perform various operations such as saving, retrieving, and deleting email records, as well as sending emails to recipients. To use this API, follow the instructions below:***\n\n **1.)Saving the data:** \n\n \t You can save the emails using two methods:\n\t\t a.) By giving the required data in the request header\n\t\t b.) By uploading the .csv or .xlsx file which contains the data under the column names "name,email,data"\n\n **2.) Retrieving Emails:**\n\n\t You can retrieve the data by just sending the get request.\n **3.) Deleting Emails:**\n\n\t You can delete the desired email by giving the mail in the request body.\n**4.) Sending the Emails:**\n\n\tJust send the get request on sendEmail Route.',
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
