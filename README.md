# JSUtil

JavaScript 公共方法库

## 数组 Array

### 1. isExist

判断数组中是否存在某个值

- 参数  
  arr: {array} - 判断的数组  
  value: {any} - 筛选的值
- 返回值  
  true 或 false
- Demo

```
const jsUtil = require('jsUtil').mArray
const arr = [1, {a:1}, {b:2}]

jsUtil.isExist(arr, 1) // true
jsUtil.isExist(arr, {a:1}) // true
jsUtil.isExist(arr, {b:1}) // false
```

### 2. dealValue

数组中是否存在某个值, 存在则删除，不存在则添加

- 参数  
  arr: {array} - 判断的数组  
  value: {any} - 筛选的值
- 返回值  
  无返回值
- Demo
```
const jsUtil = require('jsUtil').mArray
var arr = [1, {a:1}, {b:2, c:3}]

jsUtil.dealValue(arr, 1) // [{a:1}, {b:2, c:3}]
jsUtil.dealValue(arr, 2) // [1, {a:1}, {b:2, c:3}, 2]
jsUtil.dealValue(arr, {a: 1}) // [1, {b:2, c:3}]
jsUtil.dealValue(arr, {a: 2}) // [1, {a: 1}, {b:2, c:3}, {a: 2}]
```