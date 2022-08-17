const { createTable } = require("./create");
const { deleteFrom } = require("./delete");
const { dropTable } = require("./drop");
const { exportTo } = require("./export");
const { importFrom } = require("./import");
const { insertInto } = require("./insert");
const { reportTable } = require("./report");
const { selectFrom } = require("./select");
const { update } = require("./update");

// 테스트
createTable(`CREATE TABLE billboard (singer String, year Numeric, song String)`);
insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("BTS", 2020, "Dynamite")`);
insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("prep", 2022, "the kid")`);
deleteFrom(`DELETE FROM billboard WHERE id = 2`)
update(`UPDATE billboard SET song = "Butter" WHERE id = 1`);
insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("BTS", 2020, "Dynamite")`)
selectFrom(`SELECT FROM billboard WHERE singer="BTS"`)
reportTable(`REPORT TABLE billboard`)
exportTo(`EXPORT TO y2021song FROM billboard WHERE year = 2020`)
importFrom(`IMPORT FROM y2021song TO billboard`)
dropTable(`DROP TABLE billboard`)