const log = console.log;
const fs = require("fs");
const { CSVToArray } = require("./util");

const deleteFrom = (str) => {
    const command = str.substr(0,10);
    const [ tableName, ...strByArray ] = str.substr(11).match(/([^\s(),])+/g);
    if(!/WHERE/gi.test(strByArray.join(''))) {
        throw new Error(`DELETE command must contain 'WHERE'`);
    } 

    const indexOfEqual = strByArray.indexOf("=")
    const [ attr, value ] = [ strByArray[indexOfEqual-1], strByArray[indexOfEqual+1] ]

    const CSV = fs.readFileSync(`./${tableName}.csv`, `utf8`);
    const arrangedCSV = CSVToArray(CSV, ",")

    if (!arrangedCSV[0].includes(attr)) {
        throw new Error(`조건에 맞는 데이터가 존재하지 않습니다.`);
    }

    const indexOfAttr = arrangedCSV[0].indexOf(attr)
    const newArray = arrangedCSV.filter((x) => {
        return x[indexOfAttr] !== value;
    })

    const deletedArray = arrangedCSV.filter((x) => {
        return x[indexOfAttr] === value;
    })

    // let stringify = ''
    // newArray.forEach((x,i) => {
    //     stringify += x.join(",") + "\n";
    // })
    
    const stringify = (newArray.length === 1)
                    ? newArray.join(",")
                    : newArray.reduce((pre, cur) => pre + "\r\n" + cur.join(","));

    fs.writeFileSync(`./${tableName}.csv`, stringify);

    log(`DELETED (${deletedArray})`);
}   

module.exports = { deleteFrom }