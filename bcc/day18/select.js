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
    if(!/\sFROM\s/gi.test(str)) {
        throw new Error(`UPDATE command must contain 'FROM'`);
    } else if(!/\sWHERE\s/gi.test(str)) {
        throw new Error(`UPDATE command must contain 'WHERE'`);
    }
    
    const [ tableName, condition ] = str.split(/SELECT\sFROM\s|\sWHERE\s/gi).slice(1);

    const sign = condition.match(/[>=<]/g)[0]
    const indexOfSign = condition.indexOf(sign);
    const attr = condition.substring(0,indexOfSign);
    const value = condition.substring(indexOfSign+1).replace(/["']/g, ``);

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

module.exports = { selectFrom, findEqual, findMore, findLess }