const fs = require('fs');
const csv = require('csv-parser');
const { uploadToDatabase } = require('../controller/dbController');

function parseCSV(filePath, res) {
    return new Promise((resolve, reject) => {
        const emails = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                const column1 = Object.keys(row)[0].replace(/['"]+/g, '').trim();
                row[column1] = row[`${Object.keys(row)[0]}`];
                delete  row[`${Object.keys(row)[0]}`];
                const email = row.email;
                const name = row.name || email.split('@')[0];
                const data = row.data || 'Data';
                
                if (!email) {
                    return;
                }

                emails.push({ email, name, data });
            })
            .on('end', async () => {
                await uploadToDatabase(emails, res);
            });
    });
}

module.exports = parseCSV;