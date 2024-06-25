const _ = require('lodash')
const arr = [1 , [2 , [3, [4,5]]]]
const arr2 = _.flattenDeep(arr)
console.log(arr2)