const fs = require("fs");
const { CSVToArray, log } = require("./util");
const update = (str) => {
    
    if(!/\sWHERE\s/gi.test(str)) {
        throw new Error(`UPDATE command must contain 'WHERE'`);
    } else if(!/\sSET\s/gi.test(str)) {
        throw new Error(`UPDATE command must contain 'SET'`);
    }

    const [ tableName, change, condition ] = str.split(/UPDATE\s|\sSET\s|\sWHERE\s/gi).slice(1);

    const [ setAttr, setValue ] = change.split(/\s*=\s*/g);
    const [ whereAttr, whereValue ] = condition.split(/\s*=\s*/g);

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",")

    /**
     * WHERE절의 해당 속성이 없는 경우
     */
     if (!arrangedCSV[0].includes(whereAttr)) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

    const indexOfWhereAttr = arrangedCSV[0].indexOf(whereAttr)

    const updatedArray = arrangedCSV.filter((x) => {
        return x[indexOfWhereAttr] === whereValue;
    })

    /**
     * WHERE절의 해당 속성값이 없는 경우
     */
    if (updatedArray.length === 0) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

    /**
     * SET절의 해당 속성이 없는 경우
     */
    const indexOfSetAttr = arrangedCSV[0].indexOf(setAttr);
    if (indexOfSetAttr === -1) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

    const newArray = arrangedCSV.map((x) => {
        if (x[indexOfWhereAttr] === whereValue) {
            x[indexOfSetAttr] = setValue;
        }
        return x;
    });

    const stringify = (newArray.length === 1)
                    ? newArray.join(",")
                    : newArray.reduce((pre, cur) => pre + "\r\n" + cur.join(","));

    fs.writeFileSync(`./${tableName}.csv`, stringify);

    log(`UPDATED (${updatedArray})`);
}

module.exports = { update }