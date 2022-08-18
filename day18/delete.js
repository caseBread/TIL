const { log } = require("console");
const fs = require("fs");
const { CSVToArray } = require("./util");

const deleteFrom = (str) => {
    if(!/\sWHERE\s/gi.test(str)) {
        throw new Error(`DELETE command must contain 'WHERE'`);
    }

    const [ tableName, condition ] = str.split(/DELETE\sFROM\s|\sWHERE\s/gi).slice(1);
    
    const [ attr, value ] = condition.split(/\s*=\s*/g);

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",")


    /**
     * 해당 속성이 없는 경우
     */
    if (!arrangedCSV[0].includes(attr)) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

    const indexOfAttr = arrangedCSV[0].indexOf(attr)

    const deletedArray = arrangedCSV.filter((x) => {
        return x[indexOfAttr] === value;
    })

    /**
     * 해당 속성값이 없는 경우
     */
    if (deletedArray.length === 0) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

    const newArray = arrangedCSV.filter((x) => {
        return x[indexOfAttr] !== value;
    })
    
    const stringify = (newArray.length === 1)
                    ? newArray.join(",")
                    : newArray.reduce((pre, cur) => pre + "\r\n" + cur.join(","));

    fs.writeFileSync(`./${tableName}.csv`, stringify);

    log(`DELETED (${deletedArray})`);
}   

module.exports = { deleteFrom }