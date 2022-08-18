const { CSVToArray, log } = require("./util");
const fs = require("fs");

const isMatched = (toArrangedCSV, values) => {
    toArrangedCSV.forEach((x,i) => {
        if (x.slice(1) == values) return true;
    });
    return false;
}

const importFrom = (str) => {
    const [fromTableName, toTableName ] = str.split(/IMPORT\sFROM\s|\sTO\s/gi).slice(1)

    const fromCSV = fs.readFileSync(`./${fromTableName}.csv`, `utf8`);
    const fromArrangedCSV = CSVToArray(fromCSV, ",");

    const toCSV = fs.readFileSync(`./${toTableName}.csv`, `utf8`);
    const toArrangedCSV = CSVToArray(toCSV, ",");

    if (fromArrangedCSV[0].length !== toArrangedCSV[0].length) {
        log(`컬럼의 개수가 일치하지 않습니다.`);
        return;
    }

    const oldId = toArrangedCSV.length;
    let newId = toArrangedCSV.length;
    const appendArray = [];
    fromArrangedCSV.slice(1).forEach((x,i) => {
        const values = x.slice(1);
        if (!isMatched(toArrangedCSV, values)) {
            const newRecord = [ newId++, ...values ]
            appendArray.push(newRecord);
            const stringify = '\r\n'+newRecord.join(",");
            fs.appendFileSync(`./${toTableName}.csv`,stringify);
        }
    })

    log(`============= IMPORTED RESULT =============`);
    log(`IMPORT COUNT = ${newId - oldId}`);
    appendArray.forEach((x,i) => {
        log(`(${x})`)
    })
    log(`===========================================`);
}

module.exports = { importFrom }