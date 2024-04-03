const fs = require('fs');
const csv = require('csv-parser');
const { uploadToDatabase } = require('../controller/dbController');

function parseCSV(file, res) {
    return new Promise((resolve, reject) => {
        const emails = [];
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (row) => {
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