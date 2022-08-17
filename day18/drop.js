const { log } = require("console");
const fs = require("fs");

const dropTable = (str) => {
    const [ tableName ] = str.split(/DROP\sTABLE\s/gi).slice(1);
    try {
        fs.unlinkSync(`./${tableName}.csv`);
    } catch (error) {
        log("해당하는 파일이 존재하지 않습니다.");
    }

    log(`DROPPED ${tableName} TABLE`);
}

module.exports = { dropTable }