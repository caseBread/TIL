const { log } = require("console");
const fs = require("fs");

const dropTable = (str) => {
    const tableName = str.split(" ")[2];
    try {
        fs.unlinkSync(`./${tableName}.csv`);
    } catch (error) {
        log("해당하는 파일이 존재하지 않습니다.");
    }

    log(`DROPPED ${tableName}`);
}

module.exports = { dropTable }