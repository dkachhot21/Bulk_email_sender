const XLSX = require('xlsx');
const { saveToDatabase } = require('../controller/dbController');

function parseXLSX(file) {
    return new Promise((resolve, reject) => {
        const workbook = XLSX.readFile(file.path);
        const sheet_name_list = workbook.SheetNames;
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        saveToDatabase(data)
            .then(() => resolve())
            .catch((err) => reject(err));
    });
}

module.exports = parseXLSX;
