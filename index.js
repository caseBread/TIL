const { createTable } = require("./create");
const { deleteFrom } = require("./delete");
const { insertInto } = require("./insert");

createTable(`CREATE TABLE billboard (singer String, year Numeric, song String)`);

insertInto(`INSERT INTO billboard (singer, year, song) VALUES ("BTS", 2020, "Dynamite")`);

deleteFrom(`DELETE FROM billboard WHERE id = 1`)