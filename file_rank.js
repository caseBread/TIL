const file = {
    "A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,
    1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",
}; Object.freeze(file);

const rank = {
    "1":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
}; Object.freeze(rank);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

export { file, rank, getKeyByValue }