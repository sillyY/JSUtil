/*
 * @Author: sillyy
 * @Date: 2019-02-03 01:26:05
 * @LastEditors: sillyy
 * @LastEditTime: 2019-02-04 23:29:23
 * @Description: 数组API
 */
const UArray = require('../utils/array')

class MArray extends UArray {
  /**
   * 判断数组中是否存在某个值
   * @param {array} arr  数组
   * @param {any} value 筛选的值
   * @return {boolean} true 或 false
   */
  isExist(arr, value) {
    let isObj = value instanceof Object
    return isObj
      ? this.isExistOfComplex(arr, value)
      : this.isExistOfBase(arr, value)
  }
  /**
   * 数组中是否存在某个值
   * 存在则删除，不存在则添加
   * @param {array} arr 数组
   * @param {any} value 筛选的值
   */
  dealValue(arr, value) {
    let isObj = value instanceof Object,
      idx = isObj
        ? this.getIndexOfComplex(arr, value)
        : this.getIndexOfBase(arr, value)
    idx >= 0 ? arr.splice(idx, 1) : arr.push(value)
  }
}
module.exports = new MArray()