const fs = require("fs");
const { log } = require("./util");


const createTable = (str) => {

    const [ tableName, strToArray ] = str.split(/CREATE\sTABLE\s|\s\(/gi).slice(1);

    const getAttrAndType = strToArray.match(/\w+/g)

    if (getAttrAndType.length === 0) {
        log(`column을 입력받지 못했습니다.`);
        return;
    }

    if (18 < getAttrAndType.length) {
        log(`너무 많은 column을 입력하였습니다 (최대 9개까지)`);
        return;
    }

    const columns = ["id"]
    for (let i = 0; i < getAttrAndType.length; i+=2) {
        columns.push(getAttrAndType[i]);
        
        
    }
    const stringify = columns.join(",");
    fs.writeFileSync("./"+tableName+".csv",stringify);
    
    log(`CREATED ${tableName} TABLE (${columns})`);
}

module.exports = { createTable }