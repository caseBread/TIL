const log = console.log;
const fs = require("fs");
const { CSVToArray } = require("./util");
const update = (str) => {
    const command = str.substr(0,6);
    const [ tableName, ...strByArray ] = str.substr(7).match(/([^\s(),])+/g);

    if(!/WHERE/gi.test(strByArray.join(''))) {
        throw new Error(`UPDATE command must contain 'WHERE'`);
    } else if(!/SET/gi.test(strByArray.join(''))) {
        throw new Error(`UPDATE command must contain 'SET'`);
    }

    const [ setAttr, setValue ] = [ strByArray[1], strByArray[3] ]
    const [ whereAttr, whereValue ] = [ strByArray[5], strByArray[7] ]

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",")

    /**
     * 해당 속성이 없는 경우
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
     * 해당 속성값이 없는 경우
     */
    if (updatedArray.length === 0) {
        log(`조건에 맞는 데이터가 존재하지 않습니다.`);
        return;
    }

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