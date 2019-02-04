const util = require('../src/index').mArray

const arr = [1, {a:1}, {b:2}]

let isExist = util.isExist(arr, 1)
console.log(isExist)
