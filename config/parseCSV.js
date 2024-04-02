const fs = require('fs');
const csv = require('csv-parser');
const { saveToDatabase } = require('../controller/dbController');

function parseCSV(file) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (row) => {
                results.push(row);
            })
            .on('end', () => {
                saveToDatabase(results)
                    .then(() => resolve())
                    .catch((err) => reject(err));
            });
    });
}

module.exports = parseCSV;
