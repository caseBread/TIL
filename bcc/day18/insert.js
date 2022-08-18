const { CSVToArray, log } = require("./util");
const fs = require("fs");

const insertInto = (str) => {

    if (!/\sVALUES\s/gi.test(str)) {
        throw new Error("INSERT command must contain 'VALUES'")
    }

    //정규표현식 수정 필요 
    const [ tableName, columns, values ] = str.split(/INSERT\sINTO\s|\s\(|\sVALUES\s/gi).slice(1);

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",");

    if (columns.match(/\w+/g).filter((x) => !arrangedCSV[0].includes(x)).length !== 0) {
        log(`${tableName}에 포함되지 않는 attribute를 입력받았습니다.`)
    }


    const newId = arrangedCSV.length;
    const newRecord = [ newId, ...values.match(/\w+\s?\w*/g) ]
    const stringify = '\r\n'+newRecord.join(",");

    fs.appendFileSync(`./${tableName}.csv`,stringify);
    
    log(`INSERTED (${newRecord})`);
}

module.exports = { insertInto }