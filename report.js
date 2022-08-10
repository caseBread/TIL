const fs = require("fs");
const { log, CSVToArray } = require("./util");

const reportTable = (str) => {
    const tableName = str.split(" ")[2];

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",");

    log(`============== REPORT RESULT ==============`)
    log(`KIND OF COLUMN : ${arrangedCSV[0]}`);
    log(`THE NUMBER OF RECORDS : ${arrangedCSV.length-1}`);
    log(`FIRST RECORD : ${arrangedCSV[1]}`);
    log(`LAST RECORD : ${arrangedCSV[arrangedCSV.length-1]}`);
    log(`===========================================`)
}

module.exports = { reportTable }