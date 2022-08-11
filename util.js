const { group } = require("./serverData");

const stringToArray = (message) => {
  return message.split(" ");
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const getGroupIndexById = (id) => {
  let result = null;
  group.forEach((x, i) => {
    if (x.includes(id)) result = i;
  });
  return result;
};

const prefix = (sender) => {
  return `>> ${sender} :`;
};

module.exports = { stringToArray, getKeyByValue, getGroupIndexById, prefix };
