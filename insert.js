const { CSVToArray } = require("./util");
const fs = require("fs");
const log = console.log;



const insertInto = (str) => {
    const command = str.substr(0,10);
    const [ tableName, ...strByArray ] = str.substr(11).match(/([^\s(),])+/g);

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    
    const arrangedCSV = CSVToArray(CSV, ",")
    const numberOfColumns = arrangedCSV[0].length;
    const numberOfLows = arrangedCSV.length;

    if (strByArray.indexOf(`VALUES`) === -1) {
        throw new Error("INSERT statement must contain 'VALUES'")
    }

    /**
     * numberOfColumns : include 'id' column
     * numberOfColumns - 1 : exclude 'id' column
     */
    if (numberOfColumns - 1 !== strByArray.indexOf("VALUES")) {
        throw new Error("The number of columns does not match.")
    }

    const newId = numberOfLows - 1;
    const newRecord = [ newId, ...strByArray.slice(strByArray.indexOf("VALUES") + 1) ]
    const stringify = newRecord.join(",");

    fs.appendFileSync(`./${tableName}.csv`, stringify+'\n');
    
    log(`INSERTED (${newRecord})`);
}

module.exports = { insertInto }