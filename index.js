const { createTable } = require("./create");
const { deleteFrom } = require("./delete");
const { dropTable } = require("./drop");
const { exportTo } = require("./export");
const { importFrom } = require("./import");
const { insertInto } = require("./insert");
const { reportTable } = require("./report");
const { selectFrom } = require("./select");
const { update } = require("./update");
const readlineSync = require("readline-sync");
const { log } = require("./util");

// drop 제외 테스트
// createTable(`CREATE TABLE billboard (singer String, year Numeric, song String)`);
// insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("BTS", 2020, "Dynamite")`);
// deleteFrom(`DELETE FROM billboard WHERE id = 1`)
// update(`UPDATE billboard SET song = "Butter" WHERE id = 1`);
// insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("BTS", 2020, "Dynamite")`)
// selectFrom(`SELECT FROM billboard WHERE singer="BTS"`)
// reportTable(`REPORT TABLE billboard`)
// exportTo(`EXPORT TO y2021song FROM billboard WHERE year = 2020`)
// importFrom(`IMPORT FROM y2021song TO billboard`)


// dropTable(`DROP TABLE billboard`)
const main = () => {
    log(`SQL 실행을 시작합니다.`)
    log(`종료를 원하시면 "quit"을 입력해주세요.`)
    while (true) {
        const str = readlineSync.question("> ");

        if (/^CREATE\sTABLE/gi.test(str)) createTable(str);
        else if (/^INSERT\sINTO/gi.test(str)) insertInto(str);
        else if (/^DELETE\sFROM/gi.test(str)) deleteFrom(str);
        else if (/^UPDATE/gi.test(str)) update(str);
        else if (/^SELECT\sFROM/gi.test(str)) selectFrom(str);
        else if (/^DROP\sTABLE/gi.test(str)) dropTable(str);
        else if (/^REPORT\sTABLE/gi.test(str)) reportTable(str);
        else if (/^EXPORT\sTO/gi.test(str)) exportTo(str);
        else if (/^IMPORT\sFROM/gi.test(str)) importFrom(str);
        else if (str === "quit") break;
        else {
            log(`잘못된 명령어 입니다. 다시 입력해주세요.`);
        }
    }
    log(`SQL을 종료합니다.`);
}

main();