const { CSVToArray, log } = require("./util");
const fs = require("fs");

const importFrom = (str) => {
    const [fromTableName, toTableName ] = str.split(/IMPORT\sFROM\s|\sTO\s/gi).slice(1)

    const CSV = fs.readFileSync(`./${fromTableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",");

    const stringify = (arrangedCSV.length === 1)
                        ? arrangedCSV.join(",")
                        : arrangedCSV.reduce((pre, cur) => pre + "\r\n" + cur.join(","));
    
    fs.appendFileSync(`./${toTableName}.csv`, stringify);

    log(`============= IMPORTED RESULT =============`);
    log(`EXPORT COUNT = ${arrangedCSV.length}`);
    arrangedCSV.forEach((x,i) => {
        log(`(${x})`)
    })
    log(`===========================================`);
}

module.exports = { importFrom }