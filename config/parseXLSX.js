const XLSX = require('xlsx');
const { uploadToDatabase } = require('../controller/dbController');

function parseXLSX(file, res) {
    return new Promise(async (resolve, reject) => {
        const emails = [];
        const workbook = XLSX.readFile(file.path);
        const sheet_name_list = workbook.SheetNames;
        const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], { header: 1 });
        rows.forEach((row, index) => {
            if (index === 0) {
                return; // Skip header row
            }

            const email = row[1];
            const name = row[0] || email.split('@')[0];
            const data = row[2] || 'Data';

            if (!email) {
                return;
            }

            emails.push({ email, name, data });
        });

        await uploadToDatabase(emails, res);
    });
}

module.exports = parseXLSX;