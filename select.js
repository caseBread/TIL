const { log, CSVToArray } = require("./util")
const fs = require("fs");


const findEqual = (arrangedCSV, attr, value) => {
    const indexOfAttr = arrangedCSV[0].indexOf(attr);
    if (indexOfAttr === -1) return [];
    else return arrangedCSV.filter((x) => x[indexOfAttr] === value)
}

const findMore = (arrangedCSV, attr, value) => {

}

const findLess = (arrangedCSV, attr, value) => {

}

const selectFrom = (str) => {
    const command = str.substr(0,11);
    const [ tableName, WHERE, ...condition ] = str.substr(12).split(" ");

    const conditionToString = condition.join("").replace(/["']/g,'')
    const sign = conditionToString.match(/[>=<]/g)[0]
    const indexOfSign = conditionToString.indexOf(sign);
    const attr = conditionToString.substring(0,indexOfSign);
    const value = conditionToString.substring(indexOfSign+1);

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
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
        log(`============= SELECTED RESULT =============`);
        log(`SELECTED COUNT = ${resultArray.length}`);
        resultArray.forEach((x,i) => {
            log(`(${x})`);
        });
        log(`===========================================`);
    }
}

module.exports = { selectFrom }