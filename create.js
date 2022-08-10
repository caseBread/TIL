const log = console.log;
const fs = require("fs");


const create = (str) => {
    const command = str.substr(0,12);
    const strByArray = (str.substr(13)).replace(/[\n(),]+/g,'').split(" ");

    if (10 <= strByArray.length) {
        throw new Error("too much number of columns (must 1~9)")
    }

    const tableName = strByArray[0];
    const columns = ["id"]
    for (let i = 1; i < strByArray.length; i+=2) {
        columns.push(strByArray[i]);
        
        
    }
    const stringify = columns.join(",");
    fs.writeFileSync("./"+tableName+".csv",stringify);
    
}

module.exports = { create }