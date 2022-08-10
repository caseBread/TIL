const fs = require("fs");
const { findEqual, findMore, findLess } = require("./select");
const { CSVToArray, log } = require("./util");

const exportTo = (str) => {
    const [newTableName, oldTableName, condition ] = str.split(/EXPORT\sTO\s|\sFROM\s|\sWHERE\s/g).slice(1)
    const [ attr, value ] = condition.split(/\s*=\s*/g);
    const sign = condition.match(/[>=<]/g)[0]

    const CSV = fs.readFileSync(`./${oldTableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",")
    
    let resultArray;
    if (sign === "=") {
        resultArray = findEqual(arrangedCSV, attr, value);
    } else if (sign === "<") {
        resultArray = findMore(arrangedCSV, attr, value);
    } else {
        resultArray = findLess(arrangedCSV, attr, value);
    }



    if (resultArray.length === 0) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    } else {
        const stringify = (resultArray.length === 1)
                    ? resultArray.join(",")
                    : resultArray.reduce((pre, cur) => pre + "\r\n" + cur.join(","));

        fs.writeFileSync(`./${newTableName}.csv`,stringify);
        log(`============= EXPORTED RESULT =============`);
        log(`EXPORT COUNT = ${resultArray.length}`);
        resultArray.forEach((x,i) => {
            log(`(${x})`);
        });
        log(`===========================================`);
    }
}

module.exports = { exportTo }